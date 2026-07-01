from database.prompts import (
    BASE_GENERATION_PROMPT,
    NEGATIVE_PROMPT,
    HAIRSTYLE_PROMPTS
)

# =====================================
# BUILD AI PROMPT
# =====================================

def build_hairstyle_prompt(
    hairstyle,
    preference=None
):

    # =================================
    # DATABASE METADATA
    # =================================

    hairstyle_name = hairstyle.get("name", "")
    description = hairstyle.get("description", "")
    maintenance = hairstyle.get("maintenance", "")
    preferred_length = hairstyle.get("preferred_length", "")
    formality = hairstyle.get("formality", "")

    personality_prompt = ", ".join(
        hairstyle.get("personalities", [])
    )

    profession_prompt = ", ".join(
        hairstyle.get("professions", [])
    )

    style_tags_prompt = ", ".join(
        hairstyle.get("style_tags", [])
    )

    hair_type_prompt = ", ".join(
        hairstyle.get("hair_types", [])
    )

    consultant_prompt = hairstyle.get(
        "consultant_prompt",
        ""
    )

    hairstyle_prompt = HAIRSTYLE_PROMPTS.get(
        hairstyle_name,
        "modern realistic men's hairstyle"
    )

    # =================================
    # USER PREFERENCE
    # =================================

    user_hair_type = ""
    user_profession = ""
    user_personality = ""
    user_maintenance = ""
    user_formality = ""

    if preference:

        if isinstance(preference, dict):

            user_hair_type = preference.get(
                "hair_type",
                preference.get("hairType", "")
            )

            user_profession = preference.get(
                "profession",
                ""
            )

            user_personality = preference.get(
                "personality",
                ""
            )

            user_maintenance = preference.get(
                "maintenance",
                ""
            )

            user_formality = preference.get(
                "formality",
                ""
            )

        else:

            user_hair_type = getattr(
                preference,
                "hair_type",
                ""
            )

            user_profession = getattr(
                preference,
                "profession",
                ""
            )

            user_personality = getattr(
                preference,
                "personality",
                ""
            )

            user_maintenance = getattr(
                preference,
                "maintenance",
                ""
            )

            user_formality = getattr(
                preference,
                "formality",
                ""
            )

    # =================================
    # FINAL PROMPT
    # =================================

    final_prompt = f"""
{BASE_GENERATION_PROMPT}

==================================================
IDENTITY PRESERVATION
==================================================

Edit ONLY the FIRST image.

The FIRST image is the customer.

The SECOND image is ONLY a hairstyle reference.

DO NOT copy the second person's:

- face
- eyes
- eyebrows
- nose
- lips
- ears
- beard
- skin tone
- facial proportions

Keep EXACTLY the same:

- identity
- facial structure
- facial proportions
- eyes
- eyebrows
- nose
- mouth
- jawline
- ears
- beard
- skin tone
- facial expression
- pose
- clothing
- background
- lighting
- camera angle

Only replace the hairstyle.

Never replace identity.

Never blend two faces.

Never create before-after comparison.

Never create split image.

Never create collage.

Generate ONE single realistic portrait.

==================================================
CUSTOMER PROFILE
==================================================

Hair Type:
{user_hair_type}

Profession:
{user_profession}

Personality:
{user_personality}

Maintenance Preference:
{user_maintenance}

Desired Formality:
{user_formality}

==================================================
TARGET HAIRSTYLE
==================================================

Hairstyle Name:
{hairstyle_name}

Description:
{description}

Hair Texture:
{hair_type_prompt}

Preferred Length:
{preferred_length}

Maintenance:
{maintenance}

Formality:
{formality}

Suitable Profession:
{profession_prompt}

Suitable Personality:
{personality_prompt}

Style Tags:
{style_tags_prompt}

Professional Recommendation:
{consultant_prompt}

Detailed Hairstyle Style:

{hairstyle_prompt}

==================================================
HAIRSTYLE REQUIREMENTS
==================================================

Copy ONLY the hairstyle characteristics from
the second image.

Match:

- hair length
- hair direction
- fringe
- layering
- side fade
- taper
- volume
- hair texture
- density
- side profile
- back profile
- hairline shape

Blend naturally with the customer's head.

Keep realistic scalp visibility.

Generate natural hair strands.

Create realistic fade transition.

No fake wig.

No artificial hair.

==================================================
QUALITY
==================================================

Professional premium barbershop.

Ultra photorealistic.

DSLR photography.

Natural lighting.

Natural shadow.

8K quality.

Individual realistic hair strands.

Clean hairline.

Sharp focus.

Magazine quality.

Male grooming editorial.

"""

    return {

        "prompt": final_prompt,

        "negative_prompt": NEGATIVE_PROMPT

    }