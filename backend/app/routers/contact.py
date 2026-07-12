from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.contact import Contact
from app.schemas.contact import ContactCreate

router = APIRouter(
    prefix="/contact",
    tags=["Contact"]
)


@router.post("/")
def create_contact(contact: ContactCreate, db: Session = Depends(get_db)):

    new_contact = Contact(
        full_name=contact.full_name,
        company=contact.company,
        email=contact.email,
        phone=contact.phone,
        product=contact.product,
        message=contact.message,
    )

    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)

    return {
        "message": "Inquiry submitted successfully",
        "id": new_contact.id,
    }