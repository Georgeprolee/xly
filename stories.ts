export interface Story {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryId: number;
  readTime: string;
  ageRange: string;

  moral: string;
  imageUrl: string;
}



  {
    id: 2,
    title: "小松鼠与蜜蜂女王",
    description: "小松鼠帮助蜜蜂女王度过了暴风雨，当小松鼠的冬粮被偷时，蜜蜂们出手相助。",
    category: "友谊故事",
    categoryId: 4,
    readTime: "5分钟",
    ageRange: "4-7岁",
    imageColor: "bg-yellow-100",

    moral: "帮助他人就是帮助自己，真正的友谊会在困难时刻显现",
    content: "在一棵巨大的橡树上，住着一只勤劳的小松鼠名叫奇奇。一天，一场突如其来的暴风雨袭击了森林，奇奇看到不远处的蜂巢被风吹得摇摇欲坠。\n\n尽管雨点很大，奇奇还是冒着危险爬过去，用自己找到的藤蔓将蜂巢固定在更结实的树枝上。蜜蜂女王非常感激奇奇的帮助。\n\n秋天来了，奇奇忙着收集松果准备过冬。它把松果藏在树洞里，满心欢喜地等待冬天的到来。\n\n然而，当第一场雪落下时，奇奇发现自己储存的松果全都不见了！原来是狡猾的狐狸偷走了它的冬粮。\n\n正当奇奇绝望地坐在树洞里时，天空中出现了一大群蜜蜂。是蜜蜂女王带着她的子民来了！它们带来了许多蜂蜜和蜂蜡，还告诉奇奇它们发现了狐狸藏食物的地方。\n\n在蜜蜂们的指引下，奇奇不仅找回了自己的松果，还得到了美味的蜂蜜过冬。奇奇和蜜蜂女王的友谊也变得更加深厚了。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=brown%20squirrel%20and%20golden%20bee%20queen%20in%20a%20sunlit%20oak%20tree%20hollow%20with%20honeycomb%20and%20pinecones%20Studio%20Ghibli%20style%20warm%20lighting%20detailed%20forest%20background&sign=568d4a891db3374e61bea0b9b28c206e"
  },
  {
    id: 3,
    title: "勇敢的刺猬与小鹿",
    description: "小刺猬帮助迷路的小鹿找到妈妈，后来当小刺猬被狐狸围攻时，小鹿一家前来救援。",
    category: "勇敢传说",
    categoryId: 3,
    readTime: "7分钟",
    ageRange: "5-8岁",
    imageColor: "bg-green-100",
    animals: ["刺猬", "小鹿"],
    moral: "勇敢和善良是最宝贵的品质，帮助他人会获得意想不到的友谊",
    content: "森林深处住着一只名叫刺刺的小刺猬。它不像其他刺猬那样胆小，总是乐于助人。\n\n一天，刺刺在森林里散步时，听到一阵哭泣声。原来是一只迷路的小鹿，它和妈妈走散了，害怕得瑟瑟发抖。\n\n尽管天色已晚，刺刺还是决定帮助小鹿。它用自己灵敏的鼻子，带着小鹿穿过茂密的树林，越过小溪，终于在月亮升起时找到了正在焦急寻找孩子的鹿妈妈。\n\n鹿妈妈非常感激刺刺，邀请它有空一定要来家里做客。\n\n几个月后，刺刺在寻找食物时不小心闯入了狐狸的领地，被三只狐狸围攻。刺刺虽然竖起了尖刺，但寡不敌众，眼看就要成为狐狸的美餐。\n\n就在这危急时刻，一阵急促的蹄声传来——是鹿妈妈带着她的家人赶来了！它们用强壮的鹿角赶走了狐狸，救了刺刺一命。\n\n从此以后，刺猬和小鹿家族成为了森林里最要好的朋友，它们经常互相帮助，共同守护着森林的和平。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=small%20brown%20hedgehog%20and%20young%20deer%20in%20a%20misty%20forest%20path%20with%20dappled%20sunlight%20and%20tall%20trees%20Studio%20Ghibli%20style%20soft%20colors%20detailed%20background%20vibrant%20nature%20elements&sign=fcfccec804b8dd73404ee22041b4f56d"
  },
  {
    id: 4,
    title: "猫头鹰医生与小老鼠",
    description: "聪明的猫头鹰医生帮助小老鼠治疗疾病，当猫头鹰的巢穴被暴风雨摧毁时，小老鼠家族伸出援手。",
    category: "动物故事",
    categoryId: 1,
    readTime: "6分钟",
    ageRange: "4-7岁",
    imageColor: "bg-indigo-100",
    animals: ["猫头鹰", "老鼠"],
    moral: "每个人都有自己的长处，即使体型差异很大也能互相帮助",
    content: "在森林最高的橡树上，住着一位知识渊博的猫头鹰医生。它不仅能在夜晚看清东西，还懂得许多治疗疾病的草药知识。\n\n一天，森林里的小老鼠家族爆发了奇怪的疾病，许多小老鼠病倒了，鼠妈妈焦急万分。它听说了猫头鹰医生的名声，鼓起勇气前去求助。\n\n猫头鹰医生虽然平时不太喜欢老鼠，但看到鼠妈妈焦急的样子，还是答应帮忙。它飞到森林各处采集草药，教鼠妈妈如何熬制汤药。\n\n在猫头鹰医生的帮助下，小老鼠们很快恢复了健康。鼠妈妈感激地说：\"如果有一天您需要帮助，请一定告诉我们。\"\n\n几个月后的一个夜晚，一场强烈的暴风雨摧毁了猫头鹰医生的巢穴。无家可归的猫头鹰不知该怎么办。这时，鼠妈妈带着整个家族出现了。\n\n原来小老鼠们擅长挖掘和建造，它们齐心协力，在一棵大树的树洞里为猫头鹰医生建造了一个更加舒适安全的新家。\n\n猫头鹰医生感动不已，它明白了即使是体型微小的生物，也能提供巨大的帮助。从此，它和小老鼠家族成为了森林里最特别的朋友。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=wise%20brown%20owl%20and%20small%20grey%20mouse%20in%20a%20tree%20hollow%20filled%20with%20herbs%20and%20medical%20tools%20moonlight%20streaming%20through%20branches%20Studio%20Ghibli%20style%20detailed%20forest%20night%20scene&sign=66d028abe572a6b5153f8dbfd7a45c22"
  },
  {
    id: 5,
    title: "河狸建筑师与水獭",
    description: "技艺高超的河狸帮助水獭重建家园，当河狸被湍急的河水困住时，水性极好的水獭前来救援。",
    category: "友谊故事",
    categoryId: 4,
    readTime: "6分钟",
    ageRange: "5-8岁",

    animals: ["河狸", "水獭"],
    moral: "每个人都有自己的特长，互相帮助才能克服困难",
    content: "在森林旁边的小河里，住着一位技艺高超的河狸建筑师。它能用树枝和泥土建造坚固的堤坝和家园，森林里的动物们都很佩服它。\n\n河狸的邻居是一只活泼的水獭，它游泳技术一流，但不擅长建筑。一天，一场洪水冲毁了水獭的家，它伤心地在河边哭泣。\n\n河狸看到后，主动提出帮助水獭重建家园。它教水獭如何选择合适的材料，如何建造一个既安全又舒适的住所。在河狸的指导下，水獭的新家很快就建好了，比以前更加坚固美观。\n\n水獭非常感激河狸，它说：\"如果你需要帮助，尤其是在水里，我随时愿意帮忙。\"\n\n几个月后的一天，河狸在修理堤坝时，不小心被湍急的河水冲走，它的后腿也被树枝划伤了。就在它快要被冲向下游瀑布的时候，水獭像箭一样冲了过来。\n\n水獭用它强壮的爪子抓住河狸，艰难地逆流而上，将河狸安全地带回了岸边。\n\n从此以后，河狸和水獭成为了最好的朋友，它们互相学习，互相帮助，共同守护着这条小河的和平与美丽。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=beaver%20and%20otter%20by%20a%20river%20with%20wooden%20dam%20and%20waterfall%20sunset%20reflections%20on%20water%20Studio%20Ghibli%20style%20detailed%20natural%20elements%20vibrant%20colors&sign=6431357f7c296a48688324428d32cd7b"
  },
  {
    id: 6,
    title: "小蚂蚁与鸽子",
    description: "一只小蚂蚁在河边喝水时差点淹死，被一只鸽子救了。后来当鸽子遇到危险时，小蚂蚁回报了这份恩情。",
    category: "动物故事",
    categoryId: 1,
    readTime: "5分钟",
    ageRange: "3-6岁",
    imageColor: "bg-red-100",
    animals: ["蚂蚁", "鸽子"],
    moral: "即使体型微小，也能提供巨大的帮助；善良的行为总会得到回报",
    content: "在一条清澈的小河边，住着一只勤劳的小蚂蚁。一天，小蚂蚁口渴了，到河边喝水，不小心掉进了水里。它拼命挣扎，但小小的身体还是被水流带走。\n\n就在小蚂蚁快要绝望的时候，一片树叶轻轻地落在它身边。原来是一只善良的鸽子看到了它的困境，啄下一片树叶救了它。\n\n小蚂蚁爬上树叶，安全地漂到了岸边。它向鸽子深深鞠躬：\"谢谢你救了我的命，我一定会报答你的！\"\n\n鸽子笑着说：\"你这么小，能帮我什么呢？\"说完就飞走了。\n\n几个星期后的一天，小蚂蚁正在寻找食物，突然看到一个猎人正举着弓箭瞄准树上的一只鸽子——正是救过它的那只鸽子！\n\n小蚂蚁立刻冲了过去，狠狠地咬了猎人的脚踝一口。猎人疼得叫了一声，弓箭射偏了。鸽子听到声音，立刻飞走了，安全地躲过了危险。\n\n鸽子飞回来找到小蚂蚁，感激地说：\"我错了，没想到小小的你真的救了我的命！\"\n\n从此以后，小蚂蚁和鸽子成为了特殊的朋友，它们证明了即使体型差异很大，也能互相帮助，成为最好的朋友。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=small%20ant%20and%20white%20pigeon%20by%20a%20stream%20with%20sparkling%20water%20Makoto%20Shinkai%20style%20soft%20lighting%20detailed%20background%20vibrant%20colors&sign=f17bd13aa5c60292308610cf4ba2b47a"
  },
  {
    id: 7,
    title: "狐狸与鹳的晚餐",
    description: "狐狸用扁平的盘子招待鹳，让它吃不到食物；后来鹳用长脖子瓶子回请狐狸，教会它尊重他人的道理。",
    category: "友谊故事",
    categoryId: 4,
    readTime: "6分钟",
    ageRange: "5-8岁",
    imageColor: "bg-orange-100",
    animals: ["狐狸", "鹳"],
    moral: "要尊重他人的特点，待人接物要真诚，不要嘲笑他人",
    content: "森林里住着一只聪明但有些骄傲的狐狸。一天，它邀请新朋友鹳来家里做客。\n\n狐狸准备了美味的肉汤，但故意用扁平的盘子盛着。鹳的嘴巴又长又尖，怎么也吃不到盘子里的肉汤，只能饿着肚子回家。狐狸却在一旁偷偷笑着。\n\n几天后，鹳回请狐狸到家里做客。狐狸心想：\"这次我一定要好好吃一顿。\"\n\n到了鹳家，狐狸惊讶地发现晚餐是放在细长脖子的瓶子里的。鹳用它长长的嘴巴轻松地吃到了瓶子里的食物，而狐狸却怎么也够不着，只能饿着肚子看着鹳享用美食。\n\n狐狸羞愧地低下了头，明白了鹳是在教它一个道理。鹳温和地说：\"朋友，如果你想得到别人的尊重，首先要学会尊重别人。\"\n\n狐狸诚恳地道歉了。从那以后，它学会了真诚待人，不再嘲笑别人的特点。它和鹳也成为了真正的好朋友，经常互相拜访，用适合对方的方式准备美味的食物。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=orange%20fox%20and%20white%20stork%20having%20dinner%20in%20a%20forest%20clearing%20Makoto%20Shinkai%20style%20warm%20lighting%20detailed%20background&sign=e3420ef93dc9ce1344fd696810c309f4"
  },
  {
    id: 8,
    title: "小鹿与蜜蜂的约定",
    description: "小鹿不小心踩到了蜂巢，却没有伤害蜜蜂，蜜蜂们后来在小鹿遇到危险时前来帮助。",
    category: "动物故事",
    categoryId: 1,
    readTime: "5分钟",
    ageRange: "4-7岁",
    imageColor: "bg-yellow-100",
    animals: ["小鹿", "蜜蜂"],
    moral: "善良和宽容会带来意想不到的回报",
    content: "在一片开满野花的草地上，住着一只温柔的小鹿。一天，小鹿在奔跑时不小心踩到了一个蜂巢，蜂巢掉在地上裂开了。\n\n小鹿吓坏了，它以为蜜蜂会愤怒地蛰它。但它没有逃跑，而是小心翼翼地用树叶和草把蜂巢盖起来，希望能保护里面的小蜜蜂。\n\n蜂王看到了小鹿的善意，对它说：\"谢谢你没有伤害我们，我们会记住你的善良。\"\n\n几个月后，小鹿在森林里遇到了一只凶猛的野狼。它拼命奔跑，但野狼紧追不舍。就在野狼快要追上小鹿的时候，天空中传来一阵嗡嗡声。\n\n原来是蜂王带着一大群蜜蜂赶来了！它们朝着野狼飞去，狠狠地蛰了它。野狼疼得大叫，只好放弃追逐，狼狈地逃跑了。\n\n小鹿感激地对蜂王说：\"谢谢你们救了我！\"\n\n蜂王说：\"这是我们的约定，善良的行为总会得到回报。\"\n\n从此以后，小鹿和蜜蜂家族成为了好朋友，小鹿经常到草地上帮助蜜蜂们赶走偷吃蜂蜜的熊，而蜜蜂们则时刻保护着小鹿的安全。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=young%20deer%20and%20honeybee%20in%20flower%20field%20Makoto%20Shinkai%20style%20sparkling%20light%20detailed%20nature%20background%20vibrant%20colors&sign=b7a90ee78783f0af6e866934fbeb7e5e"
  },
  {
    id: 9,
    title: "松鼠与乌龟的赛跑",
    description: "骄傲的松鼠嘲笑行动缓慢的乌龟，后来在一次意外中，乌龟却救了松鼠的命。",
    category: "勇敢传说",
    categoryId: 3,
    readTime: "6分钟",
    ageRange: "5-8岁",
    imageColor: "bg-green-100",
    animals: ["松鼠", "乌龟"],
    moral: "不要嘲笑他人的缺点，每个人都有自己的长处",
    content: "森林里住着一只跑得飞快的松鼠，它总是嘲笑行动缓慢的乌龟。\"你走得这么慢，永远也到不了任何地方，\"松鼠经常这样对乌龟说。\n\n乌龟只是微笑着说：\"每个人都有自己的节奏，快慢并不重要。\"\n\n一天早晨，松鼠在树枝间跳跃时，不小心脚下一滑，从高高的树上摔了下来，掉进了一个深深的土坑里。它拼命想爬出去，但坑壁太陡太滑，怎么也爬不上去。\n\n就在松鼠绝望的时候，它听到了缓慢的脚步声。是乌龟！它正好路过这里。\n\n松鼠不好意思地说：\"乌龟，你能帮我吗？\"\n\n乌龟没有嘲笑它，而是平静地说：\"当然可以。\"乌龟虽然行动缓慢，但非常聪明。它找来一根长长的藤蔓，垂到坑里，让松鼠抓住藤蔓爬了上来。\n\n松鼠羞愧地低下了头：\"对不起，我以前总是嘲笑你。\"\n\n乌龟笑着说：\"没关系，我们都有自己的长处和短处。你跑得快，我虽然慢，但很有耐心。\"\n\n从那以后，松鼠再也不嘲笑别人了。它和乌龟成为了好朋友，经常一起散步——松鼠会放慢脚步，乌龟会尽量加快速度，它们互相学习，互相帮助。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=brown%20squirrel%20and%20green%20turtle%20racing%20in%20forest%20path%20Makoto%20Shinkai%20style%20dappled%20sunlight%20detailed%20background%20vibrant%20colors&sign=4281e3a12db3b101a76e3970bd984147"
  },
  {
    id: 10,
    title: "乌鸦与狐狸的智慧",
    description: "乌鸦用智慧从狐狸那里夺回了自己的食物，后来当狐狸遇到危险时，乌鸦却出手相救。",
    category: "魔法冒险",
    categoryId: 2,
    readTime: "7分钟",
    ageRange: "6-9岁",
    imageColor: "bg-purple-100",
    animals: ["乌鸦", "狐狸"],
    moral: "智慧比狡猾更重要，宽恕他人能赢得真正的友谊",
    content: "在一棵大树上，住着一只聪明的乌鸦。一天，它找到了一块美味的奶酪，正准备享用时，一只狡猾的狐狸走了过来。\n\n狐狸抬头看着乌鸦，笑着说：\"亲爱的乌鸦，你的羽毛真漂亮，歌声一定也很美妙！能为我唱一首歌吗？\"\n\n乌鸦知道狐狸想骗它开口，但它灵机一动，假装要唱歌，却在狐狸张嘴准备接掉落的奶酪时，突然带着奶酪飞到了更高的树枝上。\n\n\"你以为我这么容易上当吗？\"乌鸦笑着说。狐狸羞愧地离开了。\n\n几个星期后，乌鸦在森林里飞翔时，看到那只狐狸掉进了猎人设下的陷阱。虽然狐狸曾经想骗它的奶酪，但乌鸦还是决定帮助它。\n\n乌鸦飞到附近，找到了正在巡逻的森林管理员，用叫声引导他来到陷阱边，救了狐狸出来。\n\n狐狸感激地说：\"谢谢你救了我，我以前那样对你，你却还愿意帮助我。\"\n\n乌鸦说：\"过去的事就让它过去吧，森林里的动物应该互相帮助。\"\n\n从此以后，狐狸不再狡猾，乌鸦也多了一个朋友。它们经常一起在森林里寻找食物，互相提醒危险，成为了意想不到的好朋友。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=black%20crow%20and%20orange%20fox%20in%20forest%20Makoto%20Shinkai%20style%20dramatic%20lighting%20detailed%20background%20vibrant%20colors&sign=e3d34a74f69eb585c6231d919470e473"
  },
  {
    id: 11,
    title: "小熊与蜜蜂的蜂蜜",
    description: "小熊想偷蜜蜂的蜂蜜，却被蜜蜂蛰得满头包，后来它帮助蜜蜂赶走了偷蜂蜜的熊，赢得了蜜蜂的友谊。",
    category: "勇敢传说",
    categoryId: 3,
    readTime: "6分钟",
    ageRange: "5-8岁",
    imageColor: "bg-brown-100",
    animals: ["小熊", "蜜蜂"],
    moral: "诚实劳动才能获得回报，通过努力可以弥补过去的错误",
    content: "森林里住着一只贪吃的小熊。一天，它闻到了甜甜的蜂蜜味，顺着香味找到了一个巨大的蜂巢。\n\n小熊想偷偷爬上树偷走蜂蜜，却不小心碰掉了蜂巢。愤怒的蜜蜂们立刻飞了出来，蛰得小熊满头是包。小熊狼狈地逃跑了。\n\n几天后，小熊在森林里散步时，看到一只更大更凶猛的熊正在破坏同一个蜂巢，蜜蜂们虽然勇敢抵抗，但根本不是大熊的对手。\n\n小熊想起了自己被蛰的经历，也明白了蜜蜂们保护家园的心情。它鼓起勇气，大吼一声冲向大熊，用自己学到的技巧把大熊赶跑了。\n\n蜜蜂女王飞到小熊面前，感激地说：\"谢谢你帮助我们，我们看到了你的改变。\"\n\n为了感谢小熊，蜜蜂女王邀请它到蜂巢做客，还送给它一小罐新鲜的蜂蜜。小熊感动地说：\"这是我吃过最美味的蜂蜜，因为它是用友谊换来的。\"\n\n从此以后，小熊经常来帮助蜜蜂们守护蜂巢，而蜜蜂们也会在冬天给小熊送去足够的蜂蜜过冬。小熊明白了，通过诚实的帮助获得的食物，比偷来的更加香甜。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=brown%20bear%20and%20honeybee%20near%20honeycomb%20Makoto%20Shinkai%20style%20warm%20glow%20detailed%20forest%20background%20vibrant%20colors&sign=015d5106bf42ab16c16937b51d91bd8a"
  },
  {
    id: 12,
    title: "兔子与乌龟的新比赛",
    description: "兔子和乌龟再次比赛，但这次兔子帮助受伤的乌龟一起到达终点，赢得了所有人的尊重。",
    category: "友谊故事",
    categoryId: 4,
    readTime: "6分钟",
    ageRange: "4-7岁",
    imageColor: "bg-green-100",
    animals: ["兔子", "乌龟"],
    moral: "真正的胜利不是打败别人，而是帮助他人，共同进步",
    content: "森林里要举行一年一度的跑步比赛，兔子和乌龟又一次成为了竞争对手。上次比赛兔子因为骄傲输掉了，这次它下定决心要赢回来。\n\n比赛开始了，兔子像箭一样冲了出去，很快就把其他动物甩在了后面。乌龟则慢慢地爬着，但一直没有放弃。\n\n就在兔子快要到达终点时，它听到身后传来一声痛苦的叫声。原来是乌龟不小心滚下了小山坡，壳摔裂了，无法继续前进。\n\n兔子犹豫了一下，想起了上次比赛的教训。它决定放弃即将到手的冠军，跑回去帮助乌龟。\n\n兔子小心翼翼地把乌龟背在背上，向终点跑去。虽然速度变慢了，但它一步一步地坚持着。\n\n当它们一起冲过终点线时，森林里的动物们都欢呼起来。虽然兔子没有赢得比赛的第一名，但它赢得了所有人的尊重。\n\n森林之王狮子宣布：\"今天的真正冠军是兔子，因为它展现了最珍贵的品质——善良和友谊。\"\n\n乌龟感动地说：\"谢谢你，兔子，你才是真正的赢家。\"\n\n从此以后，兔子和乌龟成为了最好的朋友,它们经常一起练习跑步，兔子教乌龟如何提高速度，乌龟教兔子如何保持耐心。", 
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=white%20rabbit%20and%20green%20turtle%20racing%20in%20meadow%20Makoto%20Shinkai%20style%20soft%20sunlight%20detailed%20background%20vibrant%20colors%20sparkling%20effects&sign=04086d748ffd51d2ad231cc8a72d7865"
  },
  {
    id: 13,
    title: "小老鼠与狮子",
    description: "小老鼠不小心吵醒了沉睡的狮子，狮子放过了它；后来当狮子被猎人网住时，小老鼠咬断绳子救了狮子。",
    category: "勇敢传说",
    categoryId: 3,
    readTime: "5分钟",
    ageRange: "4-7岁",
    imageColor: "bg-yellow-100",
    animals: ["老鼠", "狮子"],
    moral: "不要小看任何人，即使是最弱小的生命也能展现巨大的勇气",
    content: "在一片广阔的草原上，住着森林之王狮子。一天，狮子正在午睡时，一只小老鼠不小心爬上了它的鬃毛，吵醒了狮子。\n\n狮子生气地抓住小老鼠，正要吃掉它时，小老鼠恳求道：\"请放过我吧，总有一天我会报答你的恩情。\"\n\n狮子觉得很可笑，这么小的老鼠能帮上什么忙呢？但它还是放走了小老鼠。\n\n几个星期后，狮子在森林里行走时，不小心掉进了猎人设下的陷阱，被一张大网紧紧地困住了。无论它怎么挣扎，都无法挣脱。\n\n就在狮子绝望的时候，它听到一阵细微的声音。是那只小老鼠带着它的家族来了！\n\n小老鼠们齐心协力，用它们锋利的牙齿一点一点地咬断了网绳。经过几个小时的努力，网终于破了一个大洞，狮子成功地逃了出来。\n\n狮子感激地对小老鼠说：\"我错了，我不应该小看你。你的勇气和智慧救了我的命！\"\n\n小老鼠笑着说：\"我们虽然小，但团结起来就能发挥巨大的力量。\"\n\n从此以后，狮子和小老鼠家族成为了特殊的朋友。狮子保护小老鼠们免受其他动物的伤害，而小老鼠们则会提醒狮子注意森林里的陷阱和危险。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=small%20grey%20mouse%20and%20golden%20lion%20in%20grassland%20Makoto%20Shinkai%20style%20dramatic%20lighting%20detailed%20background%20vibrant%20colors&sign=81e28d37489e6d6fc90d076240a8f43a"
  },
  {
    id: 14,
    title: "刺猬与狐狸的智慧",
    description: "刺猬用智慧帮助狐狸摆脱了猎人的追捕，后来狐狸在刺猬遇到困难时也伸出了援手。",
    category: "魔法冒险",
    categoryId: 2,
    readTime: "6分钟",
    ageRange: "5-8岁",
    imageColor: "bg-orange-100",
    animals: ["刺猬", "狐狸"],
    moral: "智慧比力量更重要，不同特点的人合作能创造奇迹",
    content: "森林里住着一只聪明的刺猬和一只狡猾的狐狸。它们虽然性格不同，但都很聪明。\n\n一天，狐狸被猎人追赶，眼看就要被抓住了。它跑到刺猬家求助。刺猬虽然知道狐狸平时不太友善，但还是决定帮助它。\n\n刺猬让狐狸躺在地上，然后自己蜷缩成一团，滚到狐狸身上。猎人追过来时，只看到一只普通的刺猬趴在地上，根本没发现下面藏着狐狸。\n\n猎人走后，狐狸感激地说：\"谢谢你救了我，我从来没想过你这么聪明。\"\n\n几个月后，刺猬在收集果实的时候，不小心掉进了一个深洞里，怎么也爬不出来。它大声呼救，正好被路过的狐狸听到了。\n\n狐狸立刻跑过来，它虽然不能下去救刺猬，但它很聪明。狐狸找来一根长长的藤蔓，垂到洞里，让刺猬抓住藤蔓爬了上来。\n\n刺猬感激地说：\"现在我们互相帮助过了，我们是真正的朋友了。\"\n\n狐狸笑着点头。从此以后，聪明的刺猬和机智的狐狸成为了森林里最特别的搭档，它们一起解决了许多难题，帮助了更多的动物。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=brown%20hedgehog%20and%20orange%20fox%20in%20autumn%20forest%20Makoto%20Shinkai%20style%20warm%20colors%20detailed%20background%20soft%20lighting&sign=7b8a909f40feda4b79b324b30ad3d692"
  },
  {
    id: 15,
    title: "小鹿与松鼠的合作",
    description: "小鹿和松鼠合作，一个用身高优势摘果子，一个用敏捷爬树收集坚果，共同度过了寒冷的冬天。",
    category: "友谊故事",
    categoryId: 4,
    readTime: "5分钟",
    ageRange: "4-7岁",
    imageColor: "bg-green-100",
    animals: ["小鹿", "松鼠"],
    moral: "团结合作能创造更多价值，每个人都有自己独特的贡献",
    content: "森林里住着一只高大的小鹿和一只敏捷的松鼠。秋天来了，动物们都在忙着准备过冬的食物。\n\n小鹿虽然高大，能吃到高处的树叶和果实，但它够不到长在细树枝上的坚果。松鼠虽然能轻松爬上细树枝，却够不到高大树上的果实。\n\n松鼠看着小鹿轻松地吃到高处的果实，羡慕地说：\"如果我能像你一样高就好了。\"\n\n小鹿也看着松鼠灵活地收集坚果，说：\"如果我能像你一样爬树就好了。\"\n\n突然，小鹿想到了一个主意：\"我们为什么不合作呢？我帮你摘高处的果实，你帮我收集细树枝上的坚果时。\"\n\n松鼠高兴地同意了。于是，小鹿用它长长的脖子帮松鼠摘到了最高处的果实，而松鼠则爬到小鹿够不到的细树枝上，帮它收集了许多美味的坚果。\n\n它们一起分享收集到的食物，不仅各自都有了丰富的过冬储备，还成为了好朋友。\n\n冬天来临时，小鹿和松鼠经常互相拜访，分享食物和故事，温暖地度过了整个冬天。它们明白了，通过合作，即使是不同的动物也能创造奇迹。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=young%20deer%20and%20brown%20squirrel%20in%20nut%20gathering%20Makoto%20Shinkai%20style%20sunlight%20through%20trees%20detailed%20background%20vibrant%20colors&sign=fc534a84f3c3819abbbdc15e28456003"
  },
  {
    id: 16,
    title: "猫头鹰与兔子的夜晚冒险",
    description: "兔子在夜晚迷路了，害怕黑暗的它遇到了夜行的猫头鹰，猫头鹰帮助它找到了回家的路。",
    category: "魔法冒险",
    categoryId: 2,
    readTime: "6分钟",
    ageRange: "5-8岁",
    imageColor: "bg-indigo-100",
    animals: ["猫头鹰", "兔子"],
    moral: "每个人都有自己的特长，互相帮助可以克服恐惧",
    content: "森林里住着一只胆小的兔子，它非常害怕黑暗，从不在夜晚出门。一天，兔子在森林里玩耍时，不小心迷路了，天色渐渐暗了下来。\n\n当太阳完全落下时，兔子害怕得哭了起来。它缩在一棵大树下，浑身发抖。这时，一只猫头鹰落在了它旁边的树枝上。\n\n\"你为什么在夜晚哭泣呢，小兔子？\"猫头鹰温和地问。兔子说明了自己迷路的情况，还说自己非常害怕黑暗。\n\n猫头鹰说：\"别害怕，黑暗中也有美丽的东西。我可以帮你找到回家的路。\"\n\n猫头鹰带着兔子在夜晚的森林中穿行，它向兔子介绍了夜间活动的动物，展示了月光下森林的美丽景色。兔子渐渐不再害怕黑暗了。\n\n在猫头鹰的帮助下，兔子终于回到了家。兔妈妈感激地邀请猫头鹰进屋休息。\n\n从那以后，兔子不再害怕黑暗，它经常在傍晚时分出来，和猫头鹰一起欣赏美丽的夜景。猫头鹰教会了兔子勇敢，兔子则教会了猫头鹰欣赏白天的阳光。它们成为了跨越日夜的特殊朋友。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=wise%20owl%20and%20white%20rabbit%20at%20night%20Makoto%20Shinkai%20style%20moonlight%20detailed%20night%20background%20stars%20soft%20lighting&sign=21b97f8cb9fd652683b9e27dc3c5b6a6"
  },
  {
    id: 17,
    title: "青蛙与蝎子的过河",
    description: "蝎子请求青蛙背它过河，保证不蛰它；过河途中蝎子还是蛰了青蛙，两人都掉进水里，蝎子解释这是它的天性。",
    category: "动物故事",
    categoryId: 1,
    readTime: "5分钟",
    ageRange: "6-9岁",
    imageColor: "bg-teal-100",
    animals: ["青蛙", "蝎子"],
    moral: "要认识到每个人都有自己的天性，有时帮助他人也要考虑后果",
    content: "在一条湍急的河边，蝎子想过河却不会游泳。它看到一只青蛙正在河边休息，便请求道：\"青蛙先生，你能背我过河吗？\"\n\n青蛙摇摇头说：\"不行，你会蛰我的。\"\n\n蝎子说：\"我保证不会蛰你，如果我蛰了你，我们都会掉进水里淹死的。\"\n\n青蛙觉得有道理，便同意背蝎子过河。当它们游到河中央时，蝎子突然蛰了青蛙一下。\n\n青蛙痛苦地问：\"你为什么要这样做？现在我们都会淹死的！\"\n\n蝎子无奈地说：\"对不起，这是我的天性，我控制不住自己。\"\n\n就在它们开始下沉时，一只路过的水鸟看到了它们，俯冲下来把它们救上了岸。\n\n青蛙虽然生气，但也明白了蝎子的话。蝎子则为自己的行为感到羞愧。\n\n从此以后，蝎子努力控制自己的天性，而青蛙也学会了在帮助他人之前先考虑清楚。它们虽然没有成为最好的朋友，但互相理解了对方，在森林里和平共处。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=green%20frog%20and%20black%20scorpion%20by%20river%20Makoto%20Shinkai%20style%20sparkling%20water%20detailed%20background%20vibrant%20colors&sign=f809f3791527221a9bde8b0cba7f7a4e"
  },
  {
    id: 18,
    title: "小熊与小鸟的歌声",
    description: "小熊在森林里感到孤独，直到它
(Content truncated due to size limit. Use page ranges or line ranges to read remaining content)