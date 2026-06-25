from sqlalchemy import create_engine

DATABASE_URL = (
    "postgresql://postgres:postgree123"
    "@localhost:5432/barbershop_ai"
)

try:
    engine = create_engine(DATABASE_URL)

    conn = engine.connect()

    print("DATABASE CONNECTED")

    conn.close()

except Exception as e:
    print("ERROR:")
    print(e)