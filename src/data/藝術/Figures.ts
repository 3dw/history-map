import type { HistoricalFigure } from '@/types'

// 藝術家
export const artFigures: HistoricalFigure[] = [
  {
    id: 'homer',
    chineseName: '荷馬',
    englishName: 'Homer',
    startYear: -800,
    endYear: -700,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/荷馬',
    category: '文化',
    tags: ['詩人', '史詩', '古希臘', '《伊利亞特》', '《奧德賽》'],
    description: '古希臘最偉大的史詩詩人，《伊利亞特》和《奧德賽》的作者，被稱為西方文學之父。'
  },
  {
    id: 'aeschylus',
    chineseName: '埃斯庫羅斯',
    englishName: 'Aeschylus',
    startYear: -525,
    endYear: -456,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/埃斯庫羅斯',
    category: '文化',
    tags: ['悲劇作家', '戲劇家', '古希臘', '《被縛的普羅米修斯》'],
    description: '古希臘三大悲劇作家之一，被稱為「悲劇之父」，作品如《被縛的普羅米修斯》《阿伽門農》。'
  },
  {
    id: 'sophocles',
    chineseName: '索福克勒斯',
    englishName: 'Sophocles',
    startYear: -497,
    endYear: -406,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/索福克勒斯',
    category: '文化',
    tags: ['悲劇作家', '戲劇家', '古希臘', '《俄狄浦斯王》', '《安提戈涅》'],
    description: '古希臘三大悲劇作家之一，作品如《俄狄浦斯王》《安提戈涅》，被譽為悲劇藝術的完美典範。'
  },
  {
    id: 'euripides',
    chineseName: '歐里庇得斯',
    englishName: 'Euripides',
    startYear: -480,
    endYear: -406,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/歐里庇得斯',
    category: '文化',
    tags: ['悲劇作家', '戲劇家', '古希臘', '《美狄亞》', '《特洛伊婦女》'],
    description: '古希臘三大悲劇作家之一，作品如《美狄亞》《特洛伊婦女》，以心理描寫深刻著稱。'
  },
  {
    id: 'leonardo-da-vinci',
    chineseName: '李奧納多·達文西',
    englishName: 'Leonardo da Vinci',
    startYear: 1452,
    endYear: 1519,
    coordinates: [43.7696, 11.2558],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/李奧納多·達文西',
    category: '藝術',
    tags: ['畫家', '發明家', '科學家'],
    description: '文藝復興「全才」，畫作如《蒙娜麗莎》《最後的晚餐》，對後世影響深遠。'
  },
  {
    id: 'michelangelo',
    chineseName: '米開朗基羅',
    englishName: 'Michelangelo',
    startYear: 1475,
    endYear: 1564,
    coordinates: [43.7696, 11.2558],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/Michelangelo',
    category: '藝術',
    tags: ['雕塑家', '畫家', '建築師'],
    description: '《大衛》《西斯廷禮拜堂》天花板與《最後的審判》作者，被稱為真正的文藝復興巨匠。'
  },
  {
    id: 'raphael',
    chineseName: '拉斐爾',
    englishName: 'Raphael',
    startYear: 1483,
    endYear: 1520,
    coordinates: [43.7973, 11.2481],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/Raphael',
    category: '藝術',
    tags: ['畫家', '建築師'],
    description: '盛期文藝復興代表，作品和諧優美，如《雅典學院》《聖母像》。'
  },
  {
    id: 'sandro-botticelli',
    chineseName: '桑德羅·波提切利',
    englishName: 'Sandro Botticelli',
    startYear: 1445,
    endYear: 1510,
    coordinates: [43.7710, 11.2560],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/Sandro_Botticelli',
    category: '藝術',
    tags: ['畫家'],
    description: '早期盛期畫派代表，《春》《維納斯的誕生》極具古典美學。'
  },
  {
    id: 'titian',
    chineseName: '提香',
    englishName: 'Titian',
    startYear: 1488,
    endYear: 1576,
    coordinates: [45.434, 12.338],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/Titian',
    category: '藝術',
    tags: ['畫家'],
    description: '威尼斯畫派大師，以色彩與動態聞名，被稱為最偉大的威尼斯藝術家。'
  },
  {
    id: 'donatello',
    chineseName: '多納太羅',
    englishName: 'Donatello',
    startYear: 1386,
    endYear: 1466,
    coordinates: [43.7710, 11.2560],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/Donatello',
    category: '藝術',
    tags: ['雕塑家'],
    description: '早期文藝復興雕塑家，開創自由立體雕塑，以青銅《大衛》最為人知。'
  },
  // 音樂家
  {
    id: 'johann-sebastian-bach',
    chineseName: '約翰·塞巴斯蒂安·巴哈',
    englishName: 'Johann Sebastian Bach',
    startYear: 1685,
    endYear: 1750,
    coordinates: [51.3397, 12.3731], // 德國萊比錫
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/約翰·塞巴斯蒂安·巴哈',
    category: '藝術',
    tags: ['作曲家', '管風琴家', '巴洛克音樂', '德國', '《馬太受難曲》'],
    description: '德國作曲家、管風琴家，被稱為「音樂之父」，巴洛克音樂的代表人物，作品如《馬太受難曲》《布蘭登堡協奏曲》。'
  },
  {
    id: 'ludwig-van-beethoven',
    chineseName: '路德維希·范·貝多芬',
    englishName: 'Ludwig van Beethoven',
    startYear: 1770,
    endYear: 1827,
    coordinates: [48.2082, 16.3738], // 奧地利維也納
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/路德維希·范·貝多芬',
    category: '藝術',
    tags: ['作曲家', '鋼琴家', '古典音樂', '浪漫主義', '德國'],
    description: '德國作曲家、鋼琴家，古典音樂和浪漫主義音樂的橋樑，作品如《第九交響曲》《月光奏鳴曲》《命運交響曲》。'
  },
  {
    id: 'wolfgang-amadeus-mozart',
    chineseName: '沃夫岡·阿瑪迪斯·莫札特',
    englishName: 'Wolfgang Amadeus Mozart',
    startYear: 1756,
    endYear: 1791,
    coordinates: [47.8095, 13.0550], // 奧地利薩爾斯堡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/沃夫岡·阿瑪迪斯·莫札特',
    category: '藝術',
    tags: ['作曲家', '鋼琴家', '古典音樂', '神童', '奧地利'],
    description: '奧地利作曲家、鋼琴家，被稱為「音樂神童」，古典音樂的代表人物，作品如《魔笛》《唐喬望尼》《安魂曲》。'
  },
  {
    id: 'joseph-haydn',
    chineseName: '約瑟夫·海頓',
    englishName: 'Joseph Haydn',
    startYear: 1732,
    endYear: 1809,
    coordinates: [48.2082, 16.3738], // 奧地利維也納
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/約瑟夫·海頓',
    category: '藝術',
    tags: ['作曲家', '古典音樂', '交響曲之父', '弦樂四重奏', '奧地利'],
    description: '奧地利作曲家，被稱為「交響曲之父」和「弦樂四重奏之父」，古典音樂的重要代表人物，作品如《創世紀》《倫敦交響曲》。'
  },
  {
    id: 'frederic-chopin',
    chineseName: '弗雷德里克·蕭邦',
    englishName: 'Frédéric Chopin',
    startYear: 1810,
    endYear: 1849,
    coordinates: [52.2297, 21.0122], // 波蘭華沙
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/弗雷德里克·蕭邦',
    category: '藝術',
    tags: ['作曲家', '鋼琴家', '浪漫主義', '波蘭', '鋼琴詩人'],
    description: '波蘭作曲家、鋼琴家，被稱為「鋼琴詩人」，浪漫主義音樂的代表人物，作品如《夜曲》《波蘭舞曲》《練習曲》。'
  },
  {
    id: 'franz-schubert',
    chineseName: '法蘭茲·舒伯特',
    englishName: 'Franz Schubert',
    startYear: 1797,
    endYear: 1828,
    coordinates: [48.2082, 16.3738], // 奧地利維也納
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/法蘭茲·舒伯特',
    category: '藝術',
    tags: ['作曲家', '浪漫主義', '藝術歌曲', '交響曲', '奧地利'],
    description: '奧地利作曲家，被稱為「藝術歌曲之王」，浪漫主義音樂的重要代表人物，作品如《未完成交響曲》《冬之旅》。'
  },
  {
    id: 'richard-wagner',
    chineseName: '理察·華格納',
    englishName: 'Richard Wagner',
    startYear: 1813,
    endYear: 1883,
    coordinates: [51.3397, 12.3731], // 德國萊比錫
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/理察·華格納',
    category: '藝術',
    tags: ['作曲家', '歌劇', '浪漫主義', '德國', '《尼伯龍根的指環》'],
    description: '德國作曲家，歌劇改革者，浪漫主義音樂的重要代表人物，作品如《尼伯龍根的指環》《崔斯坦與伊索德》。'
  },
  {
    id: 'pyotr-ilyich-tchaikovsky',
    chineseName: '彼得·伊里奇·柴可夫斯基',
    englishName: 'Pyotr Ilyich Tchaikovsky',
    startYear: 1840,
    endYear: 1893,
    coordinates: [55.7558, 37.6176], // 俄羅斯莫斯科
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/彼得·伊里奇·柴可夫斯基',
    category: '藝術',
    tags: ['作曲家', '浪漫主義', '芭蕾舞劇', '俄羅斯', '《天鵝湖》'],
    description: '俄羅斯作曲家，浪漫主義音樂的重要代表人物，作品如《天鵝湖》《胡桃鉗》《第六交響曲》。'
  },
  {
    id: 'claude-debussy',
    chineseName: '克勞德·德布西',
    englishName: 'Claude Debussy',
    startYear: 1862,
    endYear: 1918,
    coordinates: [48.8566, 2.3522], // 法國巴黎
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/克勞德·德布西',
    category: '藝術',
    tags: ['作曲家', '印象主義', '法國', '《月光》', '《牧神的午後》'],
    description: '法國作曲家，印象主義音樂的創始人，作品如《月光》《牧神的午後》《海》，對現代音樂有深遠影響。'
  },
  {
    id: 'igor-stravinsky',
    chineseName: '伊戈爾·史特拉汶斯基',
    englishName: 'Igor Stravinsky',
    startYear: 1882,
    endYear: 1971,
    coordinates: [55.7558, 37.6176], // 俄羅斯聖彼得堡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/伊戈爾·史特拉汶斯基',
    category: '藝術',
    tags: ['作曲家', '現代主義', '俄羅斯', '《春之祭》', '《火鳥》'],
    description: '俄羅斯作曲家，現代主義音樂的重要代表人物，作品如《春之祭》《火鳥》《彼得魯什卡》，對20世紀音樂有重大影響。'
  },
  // 台灣藝術家
  {
    id: 'lin-yu-shan',
    chineseName: '林玉山',
    englishName: 'Lin Yu‑shan',
    startYear: 1907,
    endYear: 2004,
    coordinates: [23.4809, 120.4480], // 嘉義
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/林玉山',
    category: '藝術',
    tags: ['膠彩畫','水墨畫','台展三少年','台灣近代'],
    description: '擅長膠彩與水墨作品，1927 年入選第 1 屆台灣美術展，代表作《蓮池》已被列為國寶。'
  },
  {
    id: 'liao-xiu-ping',
    chineseName: '廖修平',
    englishName: 'Liao Hsiu‑ping',
    startYear: 1936,
    coordinates: [25.0330, 121.5654], // 台北
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/廖修平',
    category: '藝術',
    tags: ['版畫','現代版畫','臺灣現代版畫之父'],
    description: '臺灣現代版畫先驅，被譽為「臺灣現代版畫之父」，曾獲多項國際版畫獎項。'
  },
  {
    id: 'chen-ting-shih',
    chineseName: '陳庭詩',
    englishName: 'Chen Ting‑shih',
    startYear: 1913,
    endYear: 2002,
    coordinates: [22.6273, 120.3014], // 高雄
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/陳庭詩',
    category: '藝術',
    tags: ['版畫','雕塑','現成物藝術'],
    description: '以甘蔗板版畫聞名，曾獲韓國國際版畫展首獎，後期轉向現成物雕塑，名聲響亮。'
  },

  // 中國藝術家
  {
    id: 'qi-bai-shi',
    chineseName: '齊白石',
    englishName: 'Qi Baishi',
    startYear: 1864,
    endYear: 1957,
    coordinates: [27.8290, 112.9370], // 湖南湘潭
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/齐白石',
    category: '藝術',
    tags: ['花鳥畫','國畫大師','墨蝦','文化名人'],
    description: '擅長山水、花鳥、蟲魚，以濃艷明快的色彩和簡練造型聞名，是近現代國畫大師。'
  },
  {
    id: 'xu-bei-hong',
    chineseName: '徐悲鴻',
    englishName: 'Xu Beihong',
    startYear: 1895,
    endYear: 1953,
    coordinates: [31.2304, 121.4737], // 上海
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/徐悲鸿',
    category: '藝術',
    tags: ['寫實主義','油畫','國畫','馬','教育家'],
    description: '中國近代畫家，推崇寫實主義，以油畫和國畫著稱，代表作多描繪馬，並曾創辦多所藝術學校。'
  },
  {
    id: 'zhang-da-qian',
    chineseName: '張大千',
    englishName: 'Zhang Daqian',
    startYear: 1899,
    endYear: 1983,
    coordinates: [30.6510, 104.0759], // 四川
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/张大千',
    category: '藝術',
    tags: ['山水畫','潑墨','青綠山水','融合中西'],
    description: '兼通青綠與水墨兩宗，以變幻多樣畫風著稱，作品橫跨傳統與創新，是 20 世紀最具影響力的中國畫家之一。'
  },
]
