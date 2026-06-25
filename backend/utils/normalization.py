def normalize_face_shape(
    face_shape
):

    if not face_shape:

        return ""

    return (
        face_shape
        .strip()
        .lower()
    )


# =========================
# NORMALIZE SCORE
# =========================

def normalize_score(
    score
):

    return round(
        float(score) * 100,
        2
    )