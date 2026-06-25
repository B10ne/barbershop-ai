from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import cv2

# =========================
# LOAD MODEL
# =========================

model = load_model(
    "model/final_faceshape_model.h5",
    compile=False
)

# =========================
# FACE DETECTOR
# =========================

face_cascade = cv2.CascadeClassifier(
    "model/haarcascade_frontalface_default.xml"
)

# =========================
# CLASS LABELS
# =========================

CLASS_NAMES = [
    'oval',
    'rectangle',
    'round',
    'square'
]

# =========================
# PREDICT FUNCTION
# =========================

def predict_face_shape(
    image_path
):

    image = Image.open(
        image_path
    ).convert("RGB")

    # Convert PIL to numpy
    image_np = np.array(image)

    # RGB → BGR
    image_cv = cv2.cvtColor(image_np, cv2.COLOR_RGB2BGR)

    # Grayscale
    gray = cv2.cvtColor(image_cv, cv2.COLOR_BGR2GRAY)

    # Face detection
    faces = face_cascade.detectMultiScale(
        gray,
        scaleFactor=1.1,
        minNeighbors=6,
        minSize=(100,100)
    )

    # Tidak ada wajah
    if len(faces) == 0:
        return {

    "face_shape":
        "No face detected",

    "confidence":
        0.0,

    "scores":
        {}
}

    # Ambil wajah terbesar
    faces = sorted(
        faces,
        key=lambda x: x[2] * x[3],
        reverse=True
    )

    x, y, w, h = faces[0]

    # =========================
    # SMART MARGIN
    # =========================

    margin_x = int(w * 0.25)
    margin_y = int(h * 0.35)

    x1 = max(0, x - margin_x)
    y1 = max(0, y - margin_y)

    x2 = min(image_cv.shape[1], x + w + margin_x)
    y2 = min(image_cv.shape[0], y + h + margin_y)

    # Crop wajah
    face_crop = image_cv[y1:y2, x1:x2]

    # Resize
    face_crop = cv2.resize(face_crop, (224,224))

    # =========================
    # IMAGE ENHANCEMENT
    # =========================

    face_crop = cv2.GaussianBlur(face_crop, (1,1), 0)

    # Normalize
    face_crop = face_crop / 255.0

    # Expand dimension
    face_crop = np.expand_dims(face_crop, axis=0)

    # =========================
    # PREDICT
    # =========================

    prediction = model.predict(face_crop)[0]

    predicted_index = np.argmax(prediction)

    predicted_class = CLASS_NAMES[predicted_index]

    confidence = float(prediction[predicted_index])

    # ALL SCORES
# =========================
# ALL SCORES (%)
# =========================

    all_scores = {}

    for i, class_name in enumerate(CLASS_NAMES):

        all_scores[class_name] = round(

            float(
                prediction[i]
            ) * 100,

            2
        )

    return {

        "face_shape":
            predicted_class,

        "confidence":
            round(confidence * 100, 2),

        "scores":
            all_scores
    }