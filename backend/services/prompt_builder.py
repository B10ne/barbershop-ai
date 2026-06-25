from database.prompts import (

    BASE_GENERATION_PROMPT,

    NEGATIVE_PROMPT,

    HAIRSTYLE_PROMPTS
)

# =====================================
# BUILD AI PROMPT
# =====================================

def build_hairstyle_prompt(

    hairstyle
):

    # =================================
    # BASIC METADATA
    # =================================

    hairstyle_name = (
        hairstyle["name"]
    )

    description = (
        hairstyle["description"]
    )

    maintenance = (
        hairstyle["maintenance"]
    )

    preferred_length = (
        hairstyle["preferred_length"]
    )

    formality = (
        hairstyle["formality"]
    )

    # =================================
    # PERSONALITY
    # =================================

    personality_prompt = (
        ", ".join(
            hairstyle["personality"]
        )
    )

    # =================================
    # STYLE TAGS
    # =================================

    style_tags_prompt = (
        ", ".join(
            hairstyle["style_tags"]
        )
    )

    # =================================
    # HAIR TYPES
    # =================================

    hair_type_prompt = (
        ", ".join(
            hairstyle["hair_types"]
        )
    )

    # =================================
    # SPECIFIC HAIRSTYLE PROMPT
    # =================================

    hairstyle_prompt = (

        HAIRSTYLE_PROMPTS.get(

            hairstyle_name,

            "modern realistic hairstyle"
        )
    )

    # =================================
    # FINAL PROMPT
    # =================================

    final_prompt = f"""

    {BASE_GENERATION_PROMPT}

    Hairstyle Name:
    {hairstyle_name}

    Hairstyle Description:
    {description}

    Hair Type:
    {hair_type_prompt}

    Preferred Length:
    {preferred_length}

    Style Tags:
    {style_tags_prompt}

    Personality:
    {personality_prompt}

    Formality:
    {formality}

    Maintenance Level:
    {maintenance}

    Hairstyle Details:
    {hairstyle_prompt}

    ultra realistic hairstyle,
    professional barber haircut,
    photorealistic hair strands,
    realistic lighting,
    natural hairline,
    realistic shadows,
    clean masculine appearance,
    premium barbershop quality,
    realistic facial proportions,
    highly detailed hair texture
    """

    # =================================
    # RETURN
    # =================================

    return {

        "prompt":
            final_prompt,

        "negative_prompt":
            NEGATIVE_PROMPT
    }