from flask import Blueprint, request, jsonify
from src.models.story import db, StoryCategory

category_bp = Blueprint("category_bp", __name__)

@category_bp.route("/categories", methods=["GET"])
def get_categories():
    categories = StoryCategory.query.all()
    return jsonify([category.to_dict() for category in categories])

@category_bp.route("/categories", methods=["POST"])
def add_category():
    data = request.get_json()
    name = data.get("name")
    if not name:
        return jsonify({"error": "Category name is required"}), 400
    
    if StoryCategory.query.filter_by(name=name).first():
        return jsonify({"error": "Category already exists"}), 409

    new_category = StoryCategory(name=name)
    db.session.add(new_category)
    db.session.commit()
    return jsonify(new_category.to_dict()), 201

@category_bp.route("/categories/<int:category_id>", methods=["PUT"])
def update_category(category_id):
    category = StoryCategory.query.get_or_404(category_id)
    data = request.get_json()
    name = data.get("name")
    if not name:
        return jsonify({"error": "Category name is required"}), 400
    
    if StoryCategory.query.filter_by(name=name).first():
        return jsonify({"error": "Category already exists"}), 409

    category.name = name
    db.session.commit()
    return jsonify(category.to_dict())

@category_bp.route("/categories/<int:category_id>", methods=["DELETE"])
def delete_category(category_id):
    category = StoryCategory.query.get_or_404(category_id)
    if category.stories: # 检查该分类下是否有故事
        return jsonify({"error": "Cannot delete category with associated stories"}), 400
    db.session.delete(category)
    db.session.commit()
    return jsonify({"message": "Category deleted"}), 204

