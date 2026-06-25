from fastapi import APIRouter

from pydantic import BaseModel

from services.recommender import (
    get_recommendations
)

router = APIRouter()

# =====================================
# REQUEST MODEL
# =====================================

class RecommendationRequest(
    BaseModel
):

    face_scores: dict

    hair_type: str = ""

    profession: str = ""

    personality: str = ""

    maintenance: str = ""

    formality: str = ""

# =====================================
# RECOMMENDATION API
# =====================================

@router.post(
    "/recommendation"
)

async def recommendation(

    data: RecommendationRequest
):

    result = (
        get_recommendations(
            data.dict()
        )
    )

    return result