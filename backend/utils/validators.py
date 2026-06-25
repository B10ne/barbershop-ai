ALLOWED_EXTENSIONS = [

    ".jpg",

    ".jpeg",

    ".png"
]


# =========================
# VALID IMAGE EXTENSION
# =========================

def validate_image_extension(
    filename
):

    filename = filename.lower()

    return any(

        filename.endswith(ext)

        for ext in ALLOWED_EXTENSIONS
    )


# =========================
# VALIDATE HAIRSTYLE
# =========================

def validate_hairstyle(
    hairstyle
):

    return bool(hairstyle)


# =========================
# VALIDATE FACE SHAPE
# =========================

def validate_face_shape(
    face_shape
):

    valid_shapes = [

        "oval",

        "rectangle",

        "round",

        "square"
    ]

    return (

        face_shape.lower()

        in

        valid_shapes
    )