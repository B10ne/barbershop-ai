from fastapi import APIRouter

from pydantic import BaseModel

from services.image_handler import (
    save_base64_image
)

from services.prompt_builder import (
    build_hairstyle_prompt
)

from services.generative_tryon import (
    generate_ai_tryon
)

from services.recommender import (
    get_all_hairstyles
)

router = APIRouter()

# =====================================
# REQUEST MODEL
# =====================================

class TryOnRequest(
    BaseModel
):

    image: str

    hairstyle: str

# =====================================
# GENERATE TRYON
# =====================================

@router.post(
    "/generate-tryon"
)

async def generate_tryon(

    data: TryOnRequest
):

    try:

        # =================================
        # VALIDATION
        # =================================

        if not data.image:

            return {

                "error":
                    "Image missing"
            }

        # =================================
        # SAVE IMAGE
        # =================================

        image_path = (
            save_base64_image(
                data.image
            )
        )

        # =================================
        # GET HAIRSTYLE DATABASE
        # =================================

        hairstyles = (
            get_all_hairstyles()
        )

        selected_hairstyle = None

        # =================================
        # FIND HAIRSTYLE
        # =================================

        for hairstyle in hairstyles:

            if (
                hairstyle["name"]
                ==
                data.hairstyle
            ):

                selected_hairstyle = (
                    hairstyle
                )

                break

        # =================================
        # HAIRSTYLE NOT FOUND
        # =================================

        if not selected_hairstyle:

            return {

                "error":
                    "Hairstyle not found"
            }

        # =================================
        # BUILD AI PROMPT
        # =================================

        prompt_data = (
            build_hairstyle_prompt(
                selected_hairstyle
            )
        )

        # =================================
        # GENERATE AI IMAGE
        # =================================

        generated_image = (
            generate_ai_tryon(

                image_path,

                prompt_data
            )
        )

        # =================================
        # FAILED
        # =================================

        if not generated_image:

            return {

                "error":
                    "Failed to generate AI try-on"
            }

        # =================================
        # SUCCESS
        # =================================

        return {

            "generated_image":
                generated_image
        }

    except Exception as e:

        print(
            "TRYON ERROR:",
            e
        )

        return {

            "error":
                str(e)
        }