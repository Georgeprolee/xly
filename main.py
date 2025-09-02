import os
import sys
# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
from src.models.user import db
from src.models.story import Story, StoryCategory
from src.models.admin import Admin
from src.routes.user import user_bp
from src.routes.story import story_bp
from src.routes.category import category_bp
from src.routes.admin import admin_bp
from werkzeug.security import generate_password_hash

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = 'asdf#FGSgvasgf$5$WGT'
CORS(app)  # 允许跨域请求

app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(story_bp, url_prefix='/api')
app.register_blueprint(category_bp, url_prefix='/api')
app.register_blueprint(admin_bp, url_prefix='/api')

app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
with app.app_context():
    db.create_all()

    # 检查并创建初始管理员
    if not Admin.query.first():
        super_admin = Admin(
            username="admin",
            password=generate_password_hash("admin123"),
            is_super_admin=True
        )
        db.session.add(super_admin)
        db.session.commit()

    # 检查并创建初始分类
    if not StoryCategory.query.first():
        initial_categories = [
            StoryCategory(name='动物故事'),
            StoryCategory(name='魔法冒险'),
            StoryCategory(name='勇敢传说'),
            StoryCategory(name='友谊故事'),
            StoryCategory(name='睡前童谣'),
            StoryCategory(name='奇幻梦境'),
        ]
        db.session.add_all(initial_categories)
        db.session.commit()

    # 检查并创建初始故事
    if not Story.query.first():
        # 假设我们已经有了分类ID，这里简化处理，实际应根据分类名称查询ID
        animal_story_category = StoryCategory.query.filter_by(name='动物故事').first()
        friendship_story_category = StoryCategory.query.filter_by(name='友谊故事').first()
        brave_story_category = StoryCategory.query.filter_by(name='勇敢传说').first()
        magic_story_category = StoryCategory.query.filter_by(name='魔法冒险').first()

        initial_stories = [
            Story(
                title="小兔子与受伤的知更鸟",
                description="善良的小兔子救助了受伤的知更鸟，当小兔子遇到危险时，知更鸟召集朋友前来帮忙。",
                category_id=animal_story_category.id if animal_story_category else 1,
                read_time="6分钟",
                age_range="3-6岁",
                image_url="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=white%20rabbit%20with%20blue%20eyes%20and%20brown%20robin%20bird%20in%20a%20sunlit%20forest%20glade%20with%20soft%20light%20rays%20and%20flower%20petals%20Studio%20Ghibli%20style%20detailed%20background%20vibrant%20colors&sign=bed8a7196e3e89aa15a0d0181f29b676",
                content="在一片茂密的森林里，住着一只名叫小白的兔子。一天早晨，小白在草地上发现了一只翅膀受伤的知更鸟，它躺在那里无法飞翔。\n\n小白小心翼翼地把知更鸟带回家，为它清洗伤口，准备了柔软的干草做窝。在小白的悉心照料下，知更鸟的翅膀渐渐康复了。\n\n一个月后，知更鸟终于能重新飞翔。它向小白告别，承诺一定会报答这份恩情。\n\n几个星期后的一天，小白在森林中迷路，不小心掉进了一个猎人设下的陷阱。就在它绝望的时候，天空中传来熟悉的鸟鸣声——是那只被救的知更鸟！它不仅自己来了，还带来了一群森林里的朋友。\n\n知更鸟指挥着松鼠咬断了绳子，让乌鸦叼来了树枝，最终帮助小白爬出了陷阱。\n\n从此以后，小白和知更鸟成了最好的朋友，它们经常互相拜访，森林里的动物们也都称赞小白的善良得到了最好的回报。",
                moral="善良会得到回报，即使是看似弱小的生物也能提供巨大帮助"
            ),
            Story(
                title="小松鼠与蜜蜂女王",
                description="小松鼠帮助蜜蜂女王度过了暴风雨，当小松鼠的冬粮被偷时，蜜蜂们出手相助。",
                category_id=friendship_story_category.id if friendship_story_category else 4,
                read_time="5分钟",
                age_range="4-7岁",
                image_url="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=brown%20squirrel%20and%20golden%20bee%20queen%20in%20a%20sunlit%20oak%20tree%20hollow%20with%20honeycomb%20and%20pinecones%20Studio%20Ghibli%20style%20warm%20lighting%20detailed%20forest%20background&sign=568d4a891db3374e61bea0b9b28c206e",
                content="在一棵巨大的橡树上，住着一只勤劳的小松鼠名叫奇奇。一天，一场突如其来的暴风雨袭击了森林，奇奇看到不远处的蜂巢被风吹得摇摇欲坠。\n\n尽管雨点很大，奇奇还是冒着危险爬过去，用自己找到的藤蔓将蜂巢固定在更结实的树枝上。蜜蜂女王非常感激奇奇的帮助。\n\n秋天来了，奇奇忙着收集松果准备过冬。它把松果藏在树洞里，满心欢喜地等待冬天的到来。\n\n然而，当第一场雪落下时，奇奇发现自己储存的松果全都不见了！原来是狡猾的狐狸偷走了它的冬粮。\n\n正当奇奇绝望地坐在树洞里时，天空中出现了一大群蜜蜂。是蜜蜂女王带着她的子民来了！它们带来了许多蜂蜜和蜂蜡，还告诉奇奇它们发现了狐狸藏食物的地方。\n\n在蜜蜂们的指引下，奇奇不仅找回了自己的松果，还得到了美味的蜂蜜过冬。奇奇和蜜蜂女王的友谊也变得更加深厚了。",
                moral="帮助他人就是帮助自己，真正的友谊会在困难时刻显现"
            ),
            Story(
                title="勇敢的刺猬与小鹿",
                description="小刺猬帮助迷路的小鹿找到妈妈，后来当小刺猬被狐狸围攻时，小鹿一家前来救援。",
                category_id=brave_story_category.id if brave_story_category else 3,
                read_time="7分钟",
                age_range="6-9岁",
                image_url="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=brave%20hedgehog%20and%20fawn%20in%20a%20magical%20forest%20with%20glowing%20mushrooms%20and%20fireflies%20Studio%20Ghibli%20style%20detailed%20background%20vibrant%20colors&sign=28a7b8f7c9e0d1e2f3a4b5c6d7e8f9a0",
                content="在一个阳光明媚的早晨，小刺猬皮皮在森林里散步，突然听到一阵微弱的哭声。它循声而去，发现一只小鹿迷失了方向，正在焦急地寻找妈妈。\n\n皮皮虽然个子小，但心地善良。它决定帮助小鹿。一路上，皮皮用它敏锐的嗅觉和对森林的熟悉，带着小鹿穿过茂密的灌木丛，避开危险的沼泽。\n\n最终，在皮皮的帮助下，小鹿成功找到了它的妈妈。小鹿妈妈非常感激皮皮，并邀请它到家里做客。\n\n几天后，皮皮在采摘浆果时，不小心被一群狡猾的狐狸围住了。正当皮皮感到绝望的时候，远处传来一阵急促的蹄声。原来是小鹿带着它的家人赶来了！\n\n小鹿的爸爸妈妈用它们的鹿角赶走了狐狸，保护了皮皮。皮皮非常感动，它知道自己又多了一群好朋友。从那天起，小刺猬皮皮和小鹿一家成为了森林里最要好的朋友。",
                moral="帮助他人，最终也会得到他人的帮助"
            ),
            Story(
                title="小狐狸与萤火虫的约定",
                description="小狐狸帮助萤火虫找到了失散的同伴，萤火虫们则在小狐狸迷路时为它指引方向。",
                category_id=magic_story_category.id if magic_story_category else 2,
                read_time="5分钟",
                age_range="4-7岁",
                image_url="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=cute%20fox%20and%20fireflies%20in%20a%20twilight%20forest%20with%20glowing%20plants%20and%20stars%20Studio%20Ghibli%20style%20detailed%20background%20vibrant%20colors&sign=a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6",
                content="夜幕降临，小狐狸菲菲在森林里玩耍，突然看到一只小萤火虫焦急地飞来飞去。原来，它和它的同伴们在捉迷藏时不小心走散了。\n\n菲菲决定帮助小萤火虫。它用自己灵敏的鼻子在草丛中寻找，小萤火虫则在空中闪烁着微弱的光芒，希望能吸引到同伴。\n\n经过一番努力，菲菲终于找到了其他萤火虫。它们在草丛中闪烁着，像一颗颗小星星。小萤火虫和它的同伴们高兴地抱在一起，并向菲菲表示感谢。\n\n几天后，菲菲在追逐一只蝴蝶时不小心迷失了方向。森林里越来越黑，菲菲感到有些害怕。就在这时，一群闪烁着光芒的萤火虫飞了过来。\n\n它们是菲菲之前帮助过的萤火虫！萤火虫们排成一列，像一条发光的丝带，为菲菲指引回家的路。在萤火虫的帮助下，菲菲安全地回到了家。\n\n菲菲和小萤火虫们成为了好朋友，它们经常在夜晚相聚，分享森林里的趣事。",
                moral="帮助他人，快乐自己，友谊的光芒会照亮前行的路"
            ),
            Story(
                title="小熊与蜂蜜的秘密",
                description="小熊发现了一棵藏有秘密蜂蜜的树，它与森林里的朋友们分享，并学会了分享的快乐。",
                category_id=animal_story_category.id if animal_story_category else 1,
                read_time="7分钟",
                age_range="5-8岁",
                image_url="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=cute%20bear%20with%20honey%20pot%20in%20a%20sunny%20forest%20with%20bees%20and%20flowers%20Studio%20Ghibli%20style%20detailed%20background%20vibrant%20colors&sign=e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2",
                content="小熊胖胖最喜欢吃蜂蜜了。有一天，它在森林里散步，闻到了一股甜甜的香味。胖胖跟着香味来到一棵巨大的老树下，发现树洞里藏着一个巨大的蜂巢，里面装满了金黄色的蜂蜜。\n\n胖胖高兴极了，它小心翼翼地取了一些蜂蜜，尝了一口，真是太美味了！它想把这个秘密藏起来，每天都来这里偷吃蜂蜜。\n\n但是，当胖胖看到其他小动物们因为找不到食物而发愁时，它心里有些难过。胖胖想起了妈妈告诉它的，分享会带来更多的快乐。\n\n于是，胖胖决定把这个秘密告诉它的朋友们。它带着小兔子、小松鼠和小鸟一起来到老树下，分享了美味的蜂蜜。朋友们都非常高兴，它们一起唱歌跳舞，森林里充满了欢声笑语。\n\n从那天起，胖胖学会了分享的快乐。它发现，分享蜂蜜比独自享用更甜。而森林里的朋友们也更加喜欢胖胖了。",
                moral="分享会带来更多的快乐和友谊"
            ),
            Story(
                title="小鸟的歌声与魔法森林",
                description="一只拥有美妙歌声的小鸟，用歌声唤醒了沉睡的魔法森林，让花朵重新绽放，河流再次流淌。",
                category_id=magic_story_category.id if magic_story_category else 2,
                read_time="6分钟",
                age_range="5-8岁",
                image_url="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=singing%20bird%20in%20a%20magical%20forest%20with%20glowing%20flowers%20and%20sparkling%20river%20Studio%20Ghibli%20style%20detailed%20background%20vibrant%20colors&sign=u3v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8",
                content="在遥远的魔法森林里，住着一只名叫莉莉的小鸟。莉莉的歌声非常美妙，但魔法森林却因为一场古老的咒语而陷入了沉睡，花朵枯萎，河流干涸。\n\n莉莉很难过，它决定用自己的歌声唤醒森林。它每天都站在最高的树枝上，用尽全身力气歌唱。它的歌声充满了希望和爱。\n\n一天又一天，莉莉的歌声感动了森林里的每一个生灵。渐渐地，枯萎的花朵重新绽放，干涸的河流再次流淌，沉睡的魔法森林终于苏醒了。\n\n森林里的动物们都非常感谢莉莉，它们围绕着莉莉，为它献上最美丽的鲜花。莉莉的歌声成为了魔法森林的象征，它告诉大家，即使是最微小的力量，也能创造奇迹。",
                moral="即使是微小的力量，也能创造奇迹，歌声和爱能唤醒希望"
            )
        ]
        db.session.add_all(initial_stories)
        db.session.commit()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    static_folder_path = app.static_folder
    if static_folder_path is None:
            return "Static folder not configured", 404

    if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:
        index_path = os.path.join(static_folder_path, 'index.html')
        if os.path.exists(index_path):
            return send_from_directory(static_folder_path, 'index.html')
        else:
            return "index.html not found", 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)