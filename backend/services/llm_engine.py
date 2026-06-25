import os

import json

from openai import OpenAI

from dotenv import load_dotenv

from database.llm_prompts import (
    SYSTEM_PROMPT
)

# =====================================
# LOAD ENV
# =====================================

load_dotenv()

client = OpenAI(

    api_key=os.getenv(
        "OPENAI_API_KEY"
    )
)

# =====================================
# GENERATE CONSULTATION
# =====================================

def generate_consultation(

    face_shape,

    hairstyle,

    preferences={}
):

    # =================================
    # USER PREFERENCES
    # =================================

    hair_type = preferences.get(
        "Hair Type",
        "Unknown"
    )

    profession = preferences.get(
        "Profession",
        "Unknown"
    )

    personality = preferences.get(
        "Personality",
        "Unknown"
    )

    maintenance_preference = preferences.get(
        "Maintenance",
        "Unknown"
    )

    formality = preferences.get(
        "Formality",
        "Unknown"
    )

    # =================================
    # USER PROMPT
    # =================================

    prompt = f"""

Face Shape:
{face_shape}

Selected Hairstyle:
{hairstyle["name"]}

Hairstyle Description:
{hairstyle["description"]}

Style Tags:
{", ".join(hairstyle["style_tags"])}

Personality Match:
{", ".join(hairstyle["personality"])}

Maintenance Level:
{hairstyle["maintenance"]}

User Hair Type:
{hair_type}

User Profession:
{profession}

User Personality:
{personality}

User Maintenance Preference:
{maintenance_preference}

User Formality Preference:
{formality}

Generate a highly personalized hairstyle consultation.

Return ONLY valid JSON.

Required JSON structure:

{{
   "summary": "...",

   "confidence_explanation": "...",

   "styling_tips": [
      "...",
      "..."
   ],

   "haircare_advice": "...",

   "recommended_products": [
      "...",
      "..."
   ],

   "professional_advice": "...",

   "maintenance_advice": "..."
}}
"""

    # =================================
    # OPENAI
    # =================================

    response = client.chat.completions.create(

        model="gpt-4.1-mini",

        messages=[

            {
                "role": "system",

                "content":
                    SYSTEM_PROMPT
            },

            {
                "role": "user",

                "content":
                    prompt
            }
        ],

        temperature=0.7
    )

    # =================================
    # RAW RESPONSE
    # =================================

    content = (
        response
        .choices[0]
        .message.content
    )

    # =================================
    # PARSE JSON
    # =================================

    try:

        parsed = json.loads(
            content
        )

        return parsed

    except Exception as e:

        print(
            "JSON Parse Error:",
            e
        )

        return {

            "summary":
                content,

            "confidence_explanation":
                "",

            "styling_tips":
                [],

            "haircare_advice":
                "",

            "recommended_products":
                [],

            "professional_advice":
                "",

            "maintenance_advice":
                ""
        }