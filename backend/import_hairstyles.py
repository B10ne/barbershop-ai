from sqlalchemy.orm import Session

from database.database import SessionLocal

from database.models import Hairstyle

from metadata.straight import straight_hairstyles
from metadata.wavy import wavy_hairstyles
from metadata.curly import curly_hairstyles
from metadata.coily import coily_hairstyles

all_hairstyles = (
    straight_hairstyles
    + wavy_hairstyles
    + curly_hairstyles
    + coily_hairstyles
)

db: Session = SessionLocal()

try:

    for item in all_hairstyles:

        existing = db.query(Hairstyle).filter(
            Hairstyle.name == item["name"]
        ).first()

        if existing:
            print(f"SKIP: {item['name']}")
            continue

        hairstyle = Hairstyle(

            name=item.get("name"),

            image=item.get("image"),

            description=item.get("description"),

            maintenance=item.get("maintenance"),

            preferred_length=item.get("preferred_length"),

            formality=item.get("formality"),

            consultant_prompt=None,

            scores=item.get("scores"),

            style_tags=item.get("style_tags"),

            professions=item.get("professions"),

            personalities=item.get("personality"),

            hair_types=item.get("hair_types"),

            reasons=item.get("reason"),

            active=True
        )

        db.add(hairstyle)

        print(f"INSERT: {item['name']}")

    db.commit()

    print("\nIMPORT SELESAI")

except Exception as e:

    db.rollback()

    print("ERROR:")
    print(e)

finally:

    db.close()