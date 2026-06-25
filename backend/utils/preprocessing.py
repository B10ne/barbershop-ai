import cv2
import numpy as np

from PIL import Image

from utils.constants import (

    IMAGE_SIZE,

    MARGIN_X_RATIO,

    MARGIN_Y_RATIO
)


# =========================
# LOAD IMAGE
# =========================

def load_image(
    image_path
):

    image = Image.open(
        image_path
    ).convert("RGB")

    return np.array(image)


# =========================
# CONVERT RGB TO BGR
# =========================

def convert_to_bgr(
    image_np
):

    return cv2.cvtColor(

        image_np,

        cv2.COLOR_RGB2BGR
    )


# =========================
# TO GRAYSCALE
# =========================

def convert_to_gray(
    image_cv
):

    return cv2.cvtColor(

        image_cv,

        cv2.COLOR_BGR2GRAY
    )


# =========================
# SMART FACE CROP
# =========================

def crop_face(

    image_cv,

    face
):

    x, y, w, h = face

    margin_x = int(
        w * MARGIN_X_RATIO
    )

    margin_y = int(
        h * MARGIN_Y_RATIO
    )

    x1 = max(0, x - margin_x)

    y1 = max(0, y - margin_y)

    x2 = min(
        image_cv.shape[1],
        x + w + margin_x
    )

    y2 = min(
        image_cv.shape[0],
        y + h + margin_y
    )

    return image_cv[
        y1:y2,
        x1:x2
    ]


# =========================
# PREPROCESS FACE
# =========================

def preprocess_face(
    face_crop
):

    face_crop = cv2.resize(
        face_crop,
        IMAGE_SIZE
    )

    face_crop = cv2.GaussianBlur(
        face_crop,
        (1,1),
        0
    )

    face_crop = (
        face_crop / 255.0
    )

    face_crop = np.expand_dims(
        face_crop,
        axis=0
    )

    return face_crop