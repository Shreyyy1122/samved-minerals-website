from pydantic import BaseModel, EmailStr


class ContactCreate(BaseModel):
    full_name: str
    company: str
    email: EmailStr
    phone: str
    product: str
    message: str