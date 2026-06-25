from services.cache_manager import (

    get_cached_result,

    save_cached_result
)

from services.image_handler import (

    save_base64_image,

    delete_image
)

from services.prompt_builder import (
    build_tryon_prompt
)

from services.generative_tryon import (
    generate_ai_tryon
)

# =====================================
# GENERATIVE TRYON ENGINE
# =====================================

def generate_tryon(

    image_base64,

    hairstyle_data
):

    hairstyle_name = (
        hairstyle_data["name"]
    )

    # =================================
    # CHECK CACHE
    # =================================

    cached_result = (

        get_cached_result(

            image_base64,

            hairstyle_name
        )
    )

    if cached_result:

        return {

            "generated_image":
                cached_result,

            "cached":
                True
        }

    # =================================
    # SAVE IMAGE
    # =================================

    image_path = save_base64_image(
        image_base64
    )

    try:

        # =============================
        # BUILD PROMPT
        # =============================

        prompt_data = (
            build_tryon_prompt(
                hairstyle_data
            )
        )

        # =============================
        # GENERATE AI TRYON
        # =============================

        generated_image = (
            generate_ai_tryon(

                image_path,

                prompt_data
            )
        )

        # =============================
        # SAVE CACHE
        # =============================

        save_cached_result(

            image_base64,

            hairstyle_name,

            generated_image
        )

        return {

            "generated_image":
                generated_image,

            "cached":
                False
        }

    finally:

        # =============================
        # CLEANUP
        # =============================

        delete_image(image_path)