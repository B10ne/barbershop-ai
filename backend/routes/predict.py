from fastapi import (

    APIRouter,

    UploadFile,

    File,

    HTTPException
)

import shutil

import uuid

import os

from services.predictor import (
    run_prediction
)

router = APIRouter()

# =====================================
# PREDICT FACE SHAPE
# =====================================

@router.post(
    "/predict-face"
)

async def predict_face(

    file: UploadFile = File(...)

):

    filename = (
        f"{uuid.uuid4()}.jpg"
    )

    image_path = os.path.join(
        "uploads",
        filename
    )

    try:

        # =============================
        # SAVE TEMP IMAGE
        # =============================
        with open(
            image_path,
            "wb"
        ) as buffer:

            shutil.copyfileobj(

                file.file,

                buffer
            )

        # =============================
        # RUN AI PREDICTION
        # =============================

        result = run_prediction(
            image_path
        )
        result["captured_image"] = filename

        return result

    except Exception as e:

        raise HTTPException(

            status_code=500,

            detail=str(e)
        )
