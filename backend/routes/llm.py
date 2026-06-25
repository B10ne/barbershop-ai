from fastapi import APIRouter

from pydantic import BaseModel

from services.recommender import (
    get_all_hairstyles
)

from services.llm_engine import (
    generate_consultation
)

router = APIRouter()

# =====================================
# REQUEST MODEL
# =====================================

class ConsultationRequest(
    BaseModel
):

    face_shape: str

    hairstyle: str

    preferences: dict = {}

# =====================================
# GENERATE CONSULTATION
# =====================================

@router.post(
    "/consultation"
)

async def consultation(

    data: ConsultationRequest
):

    try:

        # =============================
        # GET HAIRSTYLES
        # =============================

        hairstyles = (
            get_all_hairstyles()
        )

        selected_hairstyle = None

        # =============================
        # FIND HAIRSTYLE
        # =============================

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

        # =============================
        # NOT FOUND
        # =============================

        if not selected_hairstyle:

            return {

                "error":
                    "Hairstyle not found"
            }

        # =============================
        # GENERATE LLM
        # =============================

        result = (
            generate_consultation(

                face_shape=
                    data.face_shape,

                hairstyle=
                    selected_hairstyle,

                preferences=
                    data.preferences
            )
        )

        # =============================
        # RESPONSE
        # =============================

        return result

    except Exception as e:

        print(e)

        return {

            "error":
                str(e)
        }