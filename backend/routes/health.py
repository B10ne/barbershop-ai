from fastapi import APIRouter

router = APIRouter()

# =====================================
# HEALTH CHECK
# =====================================

@router.get(
    "/health"
)

async def health():

    return {

        "status":
            "ok",

        "message":
            "AI Barbershop Backend Running"
    }