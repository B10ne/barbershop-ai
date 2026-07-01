import os
import uuid
import requests
import replicate

from dotenv import load_dotenv

# =====================================
# LOAD ENV
# =====================================

load_dotenv()

REPLICATE_API_TOKEN = os.getenv("REPLICATE_API_TOKEN")

if not REPLICATE_API_TOKEN:
    raise Exception("REPLICATE_API_TOKEN tidak ditemukan.")

os.environ["REPLICATE_API_TOKEN"] = REPLICATE_API_TOKEN

# =====================================
# GENERATE AI TRYON
# =====================================

def generate_ai_tryon(
    user_image_path,
    reference_image_path,
    prompt_data
):

    try:

        generated_dir = os.path.join(
            os.path.dirname(__file__),
            "..",
            "generated"
        )

        os.makedirs(
            generated_dir,
            exist_ok=True
        )

        with open(user_image_path, "rb") as user_image, \
             open(reference_image_path, "rb") as reference_image:

            output = replicate.run(

                "google/nano-banana-pro",

                input={

                    "prompt": prompt_data["prompt"],

                    "image_input": [

                        user_image,

                        reference_image

                    ],

                    "aspect_ratio": "match_input_image",

                    "output_format": "png",

                    "allow_fallback_model": False,

                    "safety_filter_level": "block_low_and_above"

                }

            )

        # =====================================
        # DEBUG OUTPUT
        # =====================================

        print("========== REPLICATE OUTPUT ==========")
        print(output)
        print(type(output))
        print("======================================")

        # =====================================
        # AMBIL URL
        # =====================================

        if isinstance(output, list):

            image_url = output[0]

        elif isinstance(output, str):

            image_url = output

        elif isinstance(output, dict):

            image_url = (
                output.get("uri")
                or output.get("url")
            )

        else:

            image_url = getattr(output, "url", None)

        if not image_url:

            raise Exception(
                f"Gagal mengambil URL output: {output}"
            )

        # =====================================
        # DOWNLOAD
        # =====================================

        response = requests.get(image_url)

        response.raise_for_status()

        filename = f"{uuid.uuid4().hex}.png"

        save_path = os.path.join(
            generated_dir,
            filename
        )

        with open(save_path, "wb") as file:

            file.write(response.content)

        return {

            "success": True,

            "image_url": image_url,

            "local_path": save_path,

            "filename": filename

        }

    except Exception as e:

        print("REPLICATE ERROR:", e)

        return {

            "success": False,

            "error": str(e)

        }