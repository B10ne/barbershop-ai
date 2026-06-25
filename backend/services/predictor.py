from utils.predict import (
    predict_face_shape
)

# =====================================
# MAIN PREDICTION SERVICE
# =====================================

def run_prediction(
    image_path
):

    result = predict_face_shape(
        image_path
    )

    return result