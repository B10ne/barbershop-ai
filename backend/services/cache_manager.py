import hashlib

# =====================================
# SIMPLE MEMORY CACHE
# =====================================

TRYON_CACHE = {}


# =====================================
# CREATE CACHE KEY
# =====================================

def create_cache_key(

    image_path,

    hairstyle
):

    raw_key = (
        f"{image_path}-{hairstyle}"
    )

    return hashlib.md5(
        raw_key.encode()
    ).hexdigest()


# =====================================
# GET CACHE
# =====================================

def get_cached_result(

    image_path,

    hairstyle
):

    cache_key = create_cache_key(

        image_path,

        hairstyle
    )

    return TRYON_CACHE.get(
        cache_key
    )


# =====================================
# SAVE CACHE
# =====================================

def save_cached_result(

    image_path,

    hairstyle,

    generated_url
):

    cache_key = create_cache_key(

        image_path,

        hairstyle
    )

    TRYON_CACHE[cache_key] = (
        generated_url
    )