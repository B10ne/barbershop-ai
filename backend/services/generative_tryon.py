import os

import replicate

from dotenv import load_dotenv

# =====================================
# LOAD ENV
# =====================================

load_dotenv()

# =====================================
# TOKEN
# =====================================

os.environ["REPLICATE_API_TOKEN"] = (
    os.getenv(
        "REPLICATE_API_TOKEN"
    )
)

# =====================================
# GENERATE AI TRYON
# =====================================

def generate_ai_tryon(

    image_path,

    prompt_data
):

    try:

        # =============================
        # OPEN IMAGE
        # =============================

        with open(

            image_path,

            "rb"

        ) as image_file:

            # =========================
            # REPLICATE GENERATION
            # =========================

            output = replicate.run(

                "black-forest-labs/flux-kontext-pro",

                input={

                    "input_image":
                        image_file,

                    "prompt":
                        prompt_data["prompt"],

                    "negative_prompt":
                        prompt_data[
                            "negative_prompt"
                        ],

                    "aspect_ratio":
                        "1:1",

                    "output_format":
                        "png",

                    "safety_tolerance":
                        2,

                    "prompt_upsampling":
                        True
                }
            )

        # =============================
        # OUTPUT URL
        # =============================

        if isinstance(output, list):

            return output[0]

        return output

    # =====================================
    # FALLBACK
    # =====================================

    except Exception as e:

        print(
            "REPLICATE ERROR:",
            e
        )

        return {

            "mode":
                "preview",

            "success":
                True,

            "message":
                "AI Try-On preview mode",

            "preview_image":
                prompt_data.get(
                    "preview_image"
                )
        }

        return None