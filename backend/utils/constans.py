# =====================================
# MODEL
# =====================================

MODEL_PATH = (
    "model/final_faceshape_model.h5"
)

FACE_CASCADE_PATH = (
    "model/haarcascade_frontalface_default.xml"
)

# =====================================
# IMAGE
# =====================================

IMAGE_SIZE = (224, 224)

# =====================================
# FACE DETECTION
# =====================================

FACE_SCALE_FACTOR = 1.1

FACE_MIN_NEIGHBORS = 6

FACE_MIN_SIZE = (100, 100)

# =====================================
# FACE CROP
# =====================================

MARGIN_X_RATIO = 0.25

MARGIN_Y_RATIO = 0.35

# =====================================
# CLASS LABELS
# =====================================

CLASS_NAMES = [

    "oval",

    "rectangle",

    "round",

    "square"
]