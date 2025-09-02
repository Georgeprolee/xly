from src.models.user import db
from datetime import datetime

class Admin(db.Model):
    __tablename__ = 'admins'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    is_super_admin = db.Column(db.Boolean, default=False)
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<Admin(id={self.id}, username='{self.username}', is_super_admin={self.is_super_admin})>"

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "is_super_admin": self.is_super_admin,
            "is_active": self.is_active,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }

