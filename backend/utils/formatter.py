# =========================
# FORMAT PREDICTION RESPONSE
# =========================

def format_prediction_response(

    face_shape,

    confidence,

    scores
):

    return {

        "face_shape":
            face_shape,

        "confidence":
            confidence,

        "scores":
            scores
    }


# =========================
# FORMAT ERROR
# =========================

def format_error_response(
    message
):

    return {

        "success":
            False,

        "message":
            message
    }


# =========================
# FORMAT SUCCESS
# =========================

def format_success_response(
    data
):

    return {

        "success":
            True,

        "data":
            data
    }