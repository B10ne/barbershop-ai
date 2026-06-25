import os

import uuid

import base64


# =====================================
# CREATE TEMP FILENAME
# =====================================

def generate_temp_filename(

    extension=".png"
):

    return (
        f"{uuid.uuid4()}{extension}"
    )


# =====================================
# SAVE BASE64 IMAGE
# =====================================

def save_base64_image(

    base64_string,

    upload_dir="uploads"
):

    if not os.path.exists(upload_dir):

        os.makedirs(upload_dir)

    # Remove prefix
    if "," in base64_string:

        base64_string = (
            base64_string.split(",")[1]
        )

    image_data = base64.b64decode(
        base64_string
    )

    filename = generate_temp_filename()

    filepath = os.path.join(

        upload_dir,

        filename
    )

    with open(filepath, "wb") as f:

        f.write(image_data)

    return filepath


# =====================================
# DELETE IMAGE
# =====================================

def delete_image(

    filepath
):

    if os.path.exists(filepath):

        os.remove(filepath)