from database.database import (
    SessionLocal,
    get_db
)
from sqlalchemy import func
from sqlalchemy.orm import Session
from database.models import (
    Hairstyle,
    ScanHistory
)
from pydantic import BaseModel
from fastapi import APIRouter, HTTPException, Depends
from database.crud import (
    get_all_hairstyles,
    get_user_by_username,
    get_settings,
    update_settings,
    get_site_contents,
    update_site_content,
    get_admin_profile,
    update_admin_profile,
    get_dashboard_stats,
    get_hairstyle_by_id,
    create_hairstyle,
    update_hairstyle,
    delete_hairstyle,
    get_scan_history,
    get_scan_history,
    delete_scan_history,
    delete_all_scan_history,
    create_scan_history
)
from fastapi import (
    APIRouter,
    HTTPException
)


router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)

# ==========================
# REQUEST SCHEMA
# ==========================
class ProfileRequest(BaseModel):

    username: str
    email: str
    profile_image: str
class SiteContentRequest(BaseModel):

    title: str
    content: str

class LoginRequest(BaseModel):
    username: str
    password: str

class SettingsRequest(BaseModel):

    shop_name: str
    logo_url: str
    address: str
    whatsapp: str
    instagram: str
    email: str
    opening_hours: str


class HairstyleRequest(BaseModel):

    name: str
    image: str
    description: str
    maintenance: str
    preferred_length: str
    formality: str
    consultant_prompt: str
    scores: dict
    style_tags: list
    professions: list
    personalities: list
    hair_types: list
    reasons: list
    active: bool
class ScanHistoryRequest(BaseModel):

    face_shape: str

    hair_type: str

    recommended_hairstyle: str

    confidence: float

    captured_image: str

    profession: str

    personality: str

    maintenance: str

    formality: str
# ==========================
# ENDPOINT
# ==========================

@router.get("/dashboard/faceshape-chart")
def get_faceshape_chart(
    db: Session = Depends(get_db)
):

    results = (

        db.query(
            ScanHistory.face_shape,
            func.count(
                ScanHistory.id
            )
        )

        .group_by(
            ScanHistory.face_shape
        )

        .all()

    )

    return [

        {
            "face_shape": row[0],
            "total": row[1]
        }

        for row in results

    ]
@router.get("/settings")
def get_system_settings():

    db = SessionLocal()

    settings = get_settings(db)

    db.close()

    return settings


@router.put("/settings")
def save_system_settings(
    request: SettingsRequest
):

    db = SessionLocal()

    result = update_settings(
        db,
        request
    )

    db.close()

    return result
@router.get("/hairstyles")
def admin_hairstyles():

    db = SessionLocal()

    data = get_all_hairstyles(db)

    db.close()

    return data
@router.get("/hairstyles/{hairstyle_id}")
def hairstyle_detail(
    hairstyle_id: str
):

    db = SessionLocal()

    hairstyle = get_hairstyle_by_id(
        db,
        hairstyle_id
    )

    db.close()

    if not hairstyle:

        raise HTTPException(
            status_code=404,
            detail="Hairstyle not found"
        )

    return hairstyle
@router.post("/hairstyles")
def add_hairstyle(
    request: HairstyleRequest
):

    db = SessionLocal()

    result = create_hairstyle(
        db,
        request
    )

    db.close()

    return result
@router.put("/hairstyles/{hairstyle_id}")
def edit_hairstyle(
    hairstyle_id: str,
    request: HairstyleRequest
):

    db = SessionLocal()

    result = update_hairstyle(
        db,
        hairstyle_id,
        request
    )

    db.close()

    return result
@router.delete("/hairstyles/{hairstyle_id}")
def remove_hairstyle(
    hairstyle_id: str
):

    db = SessionLocal()

    result = delete_hairstyle(
        db,
        hairstyle_id
    )

    db.close()

    return {
        "success": result
    }

@router.post("/login")
def login(
    request: LoginRequest
):


    db = SessionLocal()

    user = get_user_by_username(
        db,
        request.username
    )

    if not user:

        raise HTTPException(
            status_code=401,
            detail="Username tidak ditemukan"
        )

    if user.password_hash != request.password:

        raise HTTPException(
            status_code=401,
            detail="Password salah"
        )

    return {
        "success": True,
        "username": user.username,
        "email": user.email,
        "role": user.role,
        "profile_image": user.profile_image
    }
@router.get("/profile/{username}")
def get_profile(
    username: str
):

    db = SessionLocal()

    user = get_admin_profile(
        db,
        username
    )

    db.close()

    return user


@router.put("/profile")
def update_profile(
    request: ProfileRequest
):

    db = SessionLocal()

    user = update_admin_profile(
        db,
        request.username,
        request.email,
        request.profile_image
    )

    db.close()

    return user
@router.get("/site-content")
def get_content():

    db = SessionLocal()

    data = get_site_contents(db)

    db.close()

    return data
@router.put("/site-content/{content_id}")
def save_content(
    content_id: str,
    request: SiteContentRequest
):

    db = SessionLocal()

    result = update_site_content(
        db,
        content_id,
        request
    )

    db.close()

    return result
@router.get("/dashboard")
def dashboard_stats():

    db = SessionLocal()

    result = get_dashboard_stats(db)

    db.close()

    return result
@router.get("/scan-history")
def scan_history():

    db = SessionLocal()

    data = get_scan_history(db)

    db.close()

    return data
@router.delete(
    "/scan-history/{scan_id}"
)
def remove_scan_history(
    scan_id: str
):

    db = SessionLocal()

    result = delete_scan_history(
        db,
        scan_id
    )

    db.close()

    return {
        "success": result
    }
@router.delete(
    "/scan-history"
)
def remove_all_scan_history():

    db = SessionLocal()

    delete_all_scan_history(
        db
    )

    db.close()

    return {
        "success": True
    }
@router.post("/scan-history")
def save_scan_history(
    request: ScanHistoryRequest
):

    db = SessionLocal()

    result = create_scan_history(
        db,
        request
    )

    db.close()

    return {
        "success": True,
        "id": str(result.id)
    }