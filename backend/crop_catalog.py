import os
import cv2
import mediapipe as mp
from PIL import Image

# ==========================
# Folder
# ==========================

INPUT_FOLDER = "images"
OUTPUT_FOLDER = "images_crop"

os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# ==========================
# Output Size (4:5)
# ==========================

OUTPUT_WIDTH = 1000
OUTPUT_HEIGHT = 1250

# ==========================
# MediaPipe
# ==========================

mp_face = mp.solutions.face_detection

detector = mp_face.FaceDetection(
    model_selection=1,
    min_detection_confidence=0.5
)

# ==========================
# Process
# ==========================

files = [
    f for f in os.listdir(INPUT_FOLDER)
    if f.lower().endswith((".png", ".jpg", ".jpeg"))
]

print(f"Total gambar : {len(files)}")

for file in files:

    path = os.path.join(INPUT_FOLDER, file)

    image = cv2.imread(path)

    if image is None:
        print("Gagal membaca :", file)
        continue

    h, w = image.shape[:2]

    rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    result = detector.process(rgb)

    if not result.detections:

        print("Wajah tidak ditemukan :", file)
        continue

    detection = result.detections[0]

    box = detection.location_data.relative_bounding_box

    x = int(box.xmin * w)
    y = int(box.ymin * h)
    bw = int(box.width * w)
    bh = int(box.height * h)

    # ==========================
    # SMART EXTREME CLOSE-UP
    # ==========================

    # Titik tengah wajah
    cx = x + bw / 2
    cy = y + bh / 2

    # Besar crop mengikuti ukuran wajah
    zoom = 1.75          # semakin kecil -> semakin zoom

    crop_width = bw * zoom
    crop_height = crop_width * 5 / 4   # rasio 4:5

    # Posisi crop
    left = int(cx - crop_width / 2)
    right = int(cx + crop_width / 2)

    # Fokus ke rambut
    top = int(y - bh * 0.90)

    bottom = int(top + crop_height)

    # ==========================
    # Koreksi jika keluar gambar
    # ==========================

    if left < 0:
        right += -left
        left = 0

    if right > w:
        left -= right - w
        right = w

    if top < 0:
        bottom += -top
        top = 0

    if bottom > h:
        top -= bottom - h
        bottom = h

    left = max(0, left)
    top = max(0, top)
    right = min(w, right)
    bottom = min(h, bottom)

    crop = image[top:bottom, left:right]

    crop = cv2.cvtColor(crop, cv2.COLOR_BGR2RGB)

    crop = Image.fromarray(crop)

    crop = crop.resize(
        (OUTPUT_WIDTH, OUTPUT_HEIGHT),
        Image.LANCZOS
    )

    save_name = os.path.splitext(file)[0] + ".png"

    crop.save(
        os.path.join(OUTPUT_FOLDER, save_name),
        optimize=True
    )

    print("✓", save_name)

print("\nSelesai.")