from sqlalchemy.orm import Session
from database.models import Hairstyle
from database.models import User
from database.models import Settings
from database.models import SiteContent
from database.models import ScanHistory
from sqlalchemy import func
def get_all_hairstyles(db: Session):

    hairstyles = (
        db.query(Hairstyle)
        .filter(Hairstyle.active == True)
        .all()
    )

    result = []

    for item in hairstyles:

        result.append({

            "id": str(item.id),

            "name": item.name,

            "image": item.image,

            "description": item.description,

            "maintenance": item.maintenance,

            "preferred_length": item.preferred_length,

            "formality": item.formality,

            "consultant_prompt": item.consultant_prompt,

            "scores": item.scores,

            "style_tags": item.style_tags,

            "professions": item.professions,

            "personalities": item.personalities,

            "hair_types": item.hair_types,

            "reasons": item.reasons,

            "active": item.active

        })

    return result

def get_user_by_username(
    db: Session,
    username: str
):

    return (
        db.query(User)
        .filter(
            User.username == username
        )
        .first()
    )
def get_settings(db: Session):

    return (
        db.query(Settings)
        .first()
    )


def update_settings(
    db: Session,
    data
):

    settings = (
        db.query(Settings)
        .first()
    )

    settings.shop_name = data.shop_name
    settings.logo_url = data.logo_url
    settings.address = data.address
    settings.whatsapp = data.whatsapp
    settings.instagram = data.instagram
    settings.email = data.email
    settings.opening_hours = data.opening_hours

    db.commit()

    db.refresh(settings)

    return settings
def get_site_contents(
    db: Session
    ):

    return (
        db.query(SiteContent)
        .all()
    )
def update_site_content(
    db: Session,
    content_id,
    data
):

    content = (
        db.query(SiteContent)
        .filter(
            SiteContent.id == content_id
        )
        .first()
    )

    content.title = data.title
    content.content = data.content

    db.commit()

    db.refresh(content)

    return content


def get_admin_profile(
    db: Session,
    username: str
):

    return (
        db.query(User)
        .filter(
            User.username == username
        )
        .first()
    )


def update_admin_profile(
    db: Session,
    username: str,
    email: str,
    profile_image: str
):

    user = (
        db.query(User)
        .filter(
            User.username == username
        )
        .first()
    )

    user.email = email
    user.profile_image = profile_image

    db.commit()

    db.refresh(user)

    return user

    user = (
        db.query(User)
        .filter(
            User.username == username
        )
        .first()
    )

    user.email = email
    user.profile_image = profile_image

    db.commit()

    db.refresh(user)

    return user
def get_dashboard_stats(db: Session):

    total_hairstyles = db.query(Hairstyle).count()

    total_users = db.query(User).count()

    total_scans = db.query(ScanHistory).count()

    top_face = (
        db.query(
            ScanHistory.face_shape,
            func.count().label("total")
        )
        .group_by(
            ScanHistory.face_shape
        )
        .order_by(
            func.count().desc()
        )
        .first()
    )

    top_hairstyle = (
        db.query(
            ScanHistory.recommended_hairstyle,
            func.count().label("total")
        )
        .group_by(
            ScanHistory.recommended_hairstyle
        )
        .order_by(
            func.count().desc()
        )
        .first()
    )

    face_distribution_query = (
            db.query(
                ScanHistory.face_shape,
                func.count().label("total")
            )
            .group_by(
                ScanHistory.face_shape
            )
            .all()
        )

    face_distribution = {
        item.face_shape.lower(): item.total
        for item in face_distribution_query
    }

    recent_scans = (
        db.query(ScanHistory)
        .order_by(
            ScanHistory.created_at.desc()
        )
        .limit(5)
        .all()
    )

    return {

        "total_hairstyles":
        total_hairstyles,

        "total_users":
        total_users,

        "total_scans":
        total_scans,

        "top_face_shape":
        top_face.face_shape
        if top_face else "-",

        "top_hairstyle":
        top_hairstyle.recommended_hairstyle
        if top_hairstyle else "-",
        "face_distribution": [

            {
                "label": "Oval",
                "value": face_distribution.get(
                    "oval", 0
                )
            },

            {
                "label": "Round",
                "value": face_distribution.get(
                    "round", 0
                )
            },

            {
                "label": "Square",
                "value": face_distribution.get(
                    "square", 0
                )
            },

            {
                "label": "Rectangle",
                "value": face_distribution.get(
                    "rectangle", 0
                )
            }

        ],

        "recent_scans": [

            {
                "face_shape":
                item.face_shape,

                "hair_type":
                item.hair_type,

                "recommended_hairstyle":
                item.recommended_hairstyle,

                "confidence":
                float(item.confidence),

                "created_at":
                item.created_at.strftime(
                    "%d-%m-%Y %H:%M"
                )
            }

            for item in recent_scans

        ]

    }
def get_hairstyle_by_id(
    db: Session,
    hairstyle_id: str
):

    return (
        db.query(Hairstyle)
        .filter(
            Hairstyle.id == hairstyle_id
        )
        .first()
    )


def create_hairstyle(
    db: Session,
    data
):

    hairstyle = Hairstyle(

        name=data.name,
        image=data.image,
        description=data.description,
        maintenance=data.maintenance,
        preferred_length=data.preferred_length,
        formality=data.formality,
        consultant_prompt=data.consultant_prompt,
        scores=data.scores,
        style_tags=data.style_tags,
        professions=data.professions,
        personalities=data.personalities,
        hair_types=data.hair_types,
        reasons=data.reasons,
        active=data.active

    )

    db.add(hairstyle)

    db.commit()

    db.refresh(hairstyle)

    return hairstyle


def update_hairstyle(
    db: Session,
    hairstyle_id: str,
    data
):

    hairstyle = (
        db.query(Hairstyle)
        .filter(
            Hairstyle.id == hairstyle_id
        )
        .first()
    )

    if not hairstyle:

        return None

    hairstyle.name = data.name
    hairstyle.image = data.image
    hairstyle.description = data.description
    hairstyle.maintenance = data.maintenance
    hairstyle.preferred_length = data.preferred_length
    hairstyle.formality = data.formality
    hairstyle.consultant_prompt = data.consultant_prompt
    hairstyle.scores = data.scores
    hairstyle.style_tags = data.style_tags
    hairstyle.professions = data.professions
    hairstyle.personalities = data.personalities
    hairstyle.hair_types = data.hair_types
    hairstyle.reasons = data.reasons
    hairstyle.active = data.active

    db.commit()

    db.refresh(hairstyle)

    return hairstyle


def delete_hairstyle(
    db: Session,
    hairstyle_id: str
):

    hairstyle = (
        db.query(Hairstyle)
        .filter(
            Hairstyle.id == hairstyle_id
        )
        .first()
    )

    if not hairstyle:

        return False

    db.delete(hairstyle)

    db.commit()

    return True
def get_scan_history(
    db: Session
):

    scans = (

        db.query(ScanHistory)

        .order_by(
            ScanHistory.created_at.desc()
        )

        .all()

    )

    return [

        {

            "id": str(item.id),

            "face_shape":
            item.face_shape,

            "hair_type":
            item.hair_type,

            "recommended_hairstyle":
            item.recommended_hairstyle,

            "confidence":
            item.confidence,

            "created_at":
            item.created_at.strftime(
                "%d-%m-%Y %H:%M"
            )

        }

        for item in scans

    ]
def delete_scan_history(
    db: Session,
    scan_id: str
):

    scan = (
        db.query(ScanHistory)
        .filter(
            ScanHistory.id == scan_id
        )
        .first()
    )

    if not scan:

        return False

    db.delete(scan)

    db.commit()

    return True
def delete_all_scan_history(
    db: Session
):

    db.query(
        ScanHistory
    ).delete()

    db.commit()

    return True
def create_scan_history(
    db: Session,
    data
):

    scan = ScanHistory(

        face_shape=data.face_shape,

        hair_type=data.hair_type,

        recommended_hairstyle=
        data.recommended_hairstyle,

        confidence=str(
            data.confidence
        ),

        captured_image=data.captured_image,

        profession=data.profession,

        personality=data.personality,

        maintenance=data.maintenance,

        formality=data.formality

    )

    db.add(scan)

    db.commit()

    db.refresh(scan)

    return scan