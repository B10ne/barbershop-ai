from database.database import SessionLocal
from database.crud import get_all_hairstyles as get_all_hairstyles_db
# =========================================
# LOAD ALL HAIRSTYLES
# =========================================
def load_hairstyles():

    db = SessionLocal()

    try:

        return get_all_hairstyles_db(db)

    finally:

        db.close()
# =========================================
# NORMALIZE FACE SCORES
# =========================================

def normalize_scores(

    scores

):

    total = sum(

        scores.values()
    )

    if total == 0:

        return {

            key: 0

            for key in scores
        }

    return {

        key:

        (
            value / total
        ) * 100

        for key, value in scores.items()
    }

# =========================================
# CALCULATE AI COMPATIBILITY
# =========================================

def calculate_compatibility(

    hairstyle,

    user_data

):

    face_scores = normalize_scores(

        user_data.get(
            "face_scores",
            {}
        )
    )

    hair_type = (
        user_data
        .get(
            "hair_type",
            ""
        )
        .lower()
    )

    profession = (
        user_data
        .get(
            "profession",
            ""
        )
        .lower()
    )

    personality = (
        user_data
        .get(
            "personality",
            ""
        )
        .lower()
    )

    maintenance = (
        user_data
        .get(
            "maintenance",
            ""
        )
        .lower()
    )

    formality = (
        user_data
        .get(
            "formality",
            ""
        )
        .lower()
    )

    # =====================================
    # BASE FACE SHAPE SCORE
    # =====================================

    weighted_score = 0

    for shape, probability in face_scores.items():

        hairstyle_score = (

            hairstyle
            .get(
                "scores",
                {}
            )
            .get(
                shape,
                0
            )
        )

        weighted_score += (

            hairstyle_score
            *

            (
                probability / 100
            )
        )

    # =====================================
    # BONUS SCORING
    # =====================================

    bonus = 0

    # HAIR TYPE MATCH

    hairstyle_hair_types = [

        item.lower()

        for item in hairstyle.get(
            "hair_types",
            []
        )
    ]

    if hair_type in hairstyle_hair_types:

        bonus += 10

    # PROFESSION MATCH

    hairstyle_professions = [

        item.lower()

        for item in hairstyle.get(
            "professions",
            []
        )
    ]

    if profession in hairstyle_professions:

        bonus += 8

    # PERSONALITY MATCH

    hairstyle_personality = [

        item.lower()

        for item in hairstyle.get(
            "personality",
            []
        )
    ]

    if personality in hairstyle_personality:

        bonus += 8

    # MAINTENANCE MATCH

    hairstyle_maintenance = (

        hairstyle
        .get(
            "maintenance",
            ""
        )
        .lower()
    )

    if maintenance == hairstyle_maintenance:

        bonus += 6

    # FORMALITY MATCH

    hairstyle_formality = (

        hairstyle
        .get(
            "formality",
            ""
        )
        .lower()
    )

    if formality == hairstyle_formality:

        bonus += 6

    # =====================================
    # FINAL SCORE
    # =====================================
    max_bonus = 38

    final_score = round(

        (
            weighted_score + bonus
        )

        /

        (
            100 + max_bonus
        )

        * 100,

        2
    )

    return final_score

# =========================================
# MATCH LEVEL
# =========================================

def get_match_level(score):

    if score >= 90:
        return "Perfect Match"

    elif score >= 80:
        return "Excellent Match"

    elif score >= 70:
        return "Great Match"

    elif score >= 60:
        return "Good Match"

    elif score >= 50:
        return "Fair Match"

    return "Low Match"

# =========================================
# GET BEST FACE SHAPE
# =========================================

def get_best_face_shape(

    face_scores

):

    return max(

        face_scores,

        key=face_scores.get
    )
    
# =========================================
# GENERATE RECOMMENDATIONS
# =========================================

def get_recommendations(

    user_data

):

    face_scores = normalize_scores(

        user_data.get(
            "face_scores",
            {}
        )
    )

    best_face_shape = (

        get_best_face_shape(
            face_scores
        )
    )

    hair_type = (
        user_data
        .get(
            "hair_type",
            ""
        )
        .lower()
    )

    scored_hairstyles = []

    # =====================================
    # FILTER BY HAIR TYPE
    # =====================================

    hairstyles = load_hairstyles()

    filtered_hairstyles = []

    for hairstyle in hairstyles:

        hairstyle_hair_types = [

            item.lower()

            for item in hairstyle.get(
                "hair_types",
                []
            )
        ]

        # Jika user memilih hair type
        # maka hanya tampilkan
        # hairstyle yang compatible

        if hair_type:

            if hair_type in hairstyle_hair_types:

                filtered_hairstyles.append(
                    hairstyle
                )

        else:

            filtered_hairstyles.append(
                hairstyle
            )

    # =====================================
    # CALCULATE SCORES
    # =====================================

    for hairstyle in filtered_hairstyles:

        compatibility_score = (

            calculate_compatibility(

                hairstyle,

                user_data
            )
        )

        reason = (

            hairstyle
            .get(
                "reason",
                {}
            )
            .get(
                best_face_shape,

                hairstyle.get(
                    "description",
                    ""
                )
            )
        )

        scored_item = {

            **hairstyle,

            "compatibility_rank":
                compatibility_score,

            "match_level":
                get_match_level(
                    compatibility_score
                ),

            "reason":
                reason
        }

        scored_hairstyles.append(
            scored_item
        )

    # =====================================
    # SORT DESCENDING
    # =====================================

    scored_hairstyles.sort(

        key=lambda item:
        item[
            "compatibility_rank"
        ],

        reverse=True
    )

    # =====================================
    # TOP RECOMMENDATIONS
    # =====================================

    recommendations = (

        scored_hairstyles[:5]
    )

    # =====================================
    # WORST RECOMMENDATIONS
    # SAME HAIR TYPE
    # LOWEST FACE SHAPE SCORE
    # =====================================

    avoid_recommendations = sorted(
        scored_hairstyles,
        key=lambda item:
            item["scores"].get(
                best_face_shape,
                0
            )
    )[:4]

    # =====================================
    # RESPONSE
    # =====================================

    return {

        "recommendations":
            recommendations,

        "avoid_recommendations":
            avoid_recommendations,

        "all_hairstyles":
            scored_hairstyles,

        "best_face_shape":
            best_face_shape,

        "normalized_scores":
            face_scores
    }
    
# =========================================
# GET ALL HAIRSTYLES
# =========================================

def get_all_hairstyles():

    return load_hairstyles()