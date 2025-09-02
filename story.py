from src.models.user import db

class StoryCategory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Story(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('story_category.id'), nullable=False)
    read_time = db.Column(db.String(20))
    age_range = db.Column(db.String(20))
    image_url = db.Column(db.String(255))
    content = db.Column(db.Text)
    moral = db.Column(db.Text)

    category = db.relationship('StoryCategory', backref=db.backref('stories', lazy=True))

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'categoryId': self.category_id,
            'categoryName': self.category.name if self.category else None,
            'readTime': self.read_time,
            'ageRange': self.age_range,
            'imageUrl': self.image_url,
            'content': self.content,
            'moral': self.moral
        }

