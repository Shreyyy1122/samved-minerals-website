from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.models.contact import Contact
from app.routers.contact import router as contact_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Samved Minerals API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact_router)


@app.get("/")
def home():
    return {
        "message": "Welcome to Samved Minerals API"
    }