from fastapi import (

    APIRouter,
    HTTPException,
    Depends
)
from sqlalchemy.orm import Session

from database.database import get_db
from database.crud import get_all_hairstyles
from urllib.parse import (
    unquote
)

# =====================================
# ROUTER
# =====================================

router = APIRouter()

# =====================================
# GET ALL HAIRSTYLES
# =====================================

@router.get("/hairstyles")
async def get_hairstyles(
    db: Session = Depends(get_db)
):

    hairstyles = get_all_hairstyles(db)

    return {
        "hairstyles": hairstyles
    }

# =====================================
# GET DETAIL HAIRSTYLE
# =====================================

@router.get(
    "/hairstyles/{name}"
)
async def get_hairstyle_detail(
    name: str,
    db: Session = Depends(get_db)
):
    decoded_name = (
    unquote(name)
    )
    hairstyles = get_all_hairstyles(db)
    hairstyle = next(
        (
            item
            for item in hairstyles
            if item["name"].lower()
            == decoded_name.lower()
        ),
        None
    )

    if not hairstyle:

        raise HTTPException(

            status_code=404,

            detail="Hairstyle not found"
        )

    return hairstyle