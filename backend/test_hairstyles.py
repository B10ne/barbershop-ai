from database.database import SessionLocal
from database.crud import get_all_hairstyles

db = SessionLocal()

hairstyles = get_all_hairstyles(db)

print("TOTAL:", len(hairstyles))

print("FIRST:", hairstyles[0]["name"])

db.close()