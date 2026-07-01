import os

from pydantic import BaseModel, Field, ConfigDict

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
from fastapi import APIRouter, Request


router = APIRouter()

# =====================================
# REQUEST MODEL
# =====================================
from pydantic import BaseModel, Field, ConfigDict

class UserPreference(BaseModel):

    hair_type: str = Field(alias="hairType")

    profession: str

    personality: str

    maintenance: str

    formality: str

    model_config = ConfigDict(
        populate_by_name=True
    )
class TryOnRequest(BaseModel):

    image: str

    hairstyle: str

    preference: UserPreference

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
        # REFERENCE IMAGE
        # =================================

        BASE_DIR = os.path.dirname(
            os.path.dirname(__file__)
        )

        reference_image_path = os.path.join(
            BASE_DIR,
            "images",
            selected_hairstyle["image"]
        )

        print("REFERENCE IMAGE:", reference_image_path)
        # =================================
        # BUILD AI PROMPT
        # =================================

        prompt_data = build_hairstyle_prompt(
            selected_hairstyle,
            data.preference.model_dump()
        )

        # =================================
        # GENERATE AI IMAGE
        # =================================
        if not os.path.exists(reference_image_path):
            return {
                "error":
                    f"Reference image not found: {reference_image_path}"
            }
        generated_image = generate_ai_tryon(
            image_path,
            reference_image_path,
            prompt_data
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
                generated_image["image_url"]
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