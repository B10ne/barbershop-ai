# =========================
# GET TOP SCORE
# =========================

def get_top_score(
    prediction
):

    return max(prediction)


# =========================
# BUILD SCORE MAP
# =========================

def build_score_map(

    prediction,

    class_names
):

    all_scores = {}

    for i, class_name in enumerate(class_names):

        all_scores[class_name] = round(

            float(prediction[i]) * 100,

            2
        )

    return all_scores


# =========================
# GET PREDICTED CLASS
# =========================

def get_predicted_class(

    prediction,

    class_names
):

    import numpy as np

    predicted_index = np.argmax(
        prediction
    )

    return class_names[
        predicted_index
    ]