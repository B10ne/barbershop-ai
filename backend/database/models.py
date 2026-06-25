from sqlalchemy import (
    Column,
    String,
    Boolean,
    Text,
    Integer,
    TIMESTAMP,
    text
)

from sqlalchemy.dialects.postgresql import (
    UUID,
    JSONB
)

from sqlalchemy.sql import func

from database.database import Base


# ==========================================
# HAIRSTYLE
# ==========================================

class Hairstyle(Base):

    __tablename__ = "hairstyles"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        server_default=text("uuid_generate_v4()")
    )

    name = Column(String)

    image = Column(String)

    description = Column(Text)

    maintenance = Column(String)

    preferred_length = Column(String)

    formality = Column(String)

    consultant_prompt = Column(Text)

    scores = Column(JSONB)

    style_tags = Column(JSONB)

    professions = Column(JSONB)

    personalities = Column(JSONB)

    hair_types = Column(JSONB)

    reasons = Column(JSONB)

    active = Column(
        Boolean,
        default=True
    )

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )

    updated_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )


# ==========================================
# USERS
# ==========================================

class User(Base):

    __tablename__ = "users"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        server_default=text("uuid_generate_v4()")
    )

    username = Column(
        String(100),
        unique=True,
        nullable=False
    )

    email = Column(
        String(150),
        nullable=False
    )

    password_hash = Column(
        Text,
        nullable=False
    )

    role = Column(
        String(20),
        default="admin"
    )

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )
    profile_image = Column(
    String(255),
    nullable=True
)


# ==========================================
# SETTINGS
# ==========================================

class Settings(Base):

    __tablename__ = "settings"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    shop_name = Column(String(100))

    logo_url = Column(Text)

    address = Column(Text)

    whatsapp = Column(String(30))

    instagram = Column(String(100))

    email = Column(String(100))

    opening_hours = Column(String(100))

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )
class SiteContent(Base):

    __tablename__ = "site_contents"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True
    )

    content_key = Column(
        String(100)
    )

    title = Column(
        String(255)
    )

    content = Column(
        Text
    )

    updated_at = Column(
        TIMESTAMP
    )
    # ==========================================
# SCAN HISTORY
# ==========================================

class ScanHistory(Base):

    __tablename__ = "scan_history"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        server_default=text("uuid_generate_v4()")
    )

    face_shape = Column(
        String(50)
    )

    hair_type = Column(
        String(50)
    )

    recommended_hairstyle = Column(
        String(255)
    )

    confidence = Column(
        String(20)
    )
    
    captured_image = Column(
    String(255),
    nullable=True
)

    profession = Column(
        String(100),
        nullable=True
    )

    personality = Column(
        String(100),
        nullable=True
    )

    maintenance = Column(
        String(50),
        nullable=True
    )

    formality = Column(
        String(50),
        nullable=True
    )

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )