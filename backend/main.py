from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from fastapi.middleware.cors import (
    CORSMiddleware
)

from fastapi.staticfiles import (
    StaticFiles
)

from routes.health import (
    router as health_router
)

from routes.hairstyle import (
    router as hairstyle_router
)

from routes.admin import (
    router as admin_router
)

# =====================================
# IMPORT ROUTERS
# =====================================

from routes.predict import (
    router as predict_router
)

from routes.recommendation import (
    router as recommendation_router
)

from routes.tryon import (
    router as tryon_router
)

# =====================================
# FASTAPI
# =====================================

app = FastAPI()

# =====================================
# CORS
# =====================================

app.include_router(
    admin_router
)
app.mount(
    "/images",
    StaticFiles(directory="images"),
    name="images"
)
app.include_router(
    hairstyle_router
)

app.include_router(
    health_router
)

app.add_middleware(

    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

# =====================================
# ROUTERS
# =====================================

app.include_router(
    predict_router
)

app.include_router(
    recommendation_router
)

app.include_router(
    tryon_router
)

# =====================================
# STATIC FILES
# =====================================

app.mount(
    "/generated",
    StaticFiles(directory="generated"),
    name="generated"
)
app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads"
)

app.mount(

    "/images",

    StaticFiles(
        directory="images"
    ),

    name="images"
)

# =====================================
# HEALTH CHECK
# =====================================

@app.get("/")
def home():

    return {

        "message":
            "AI Barbershop Backend Running"
    }
    