import type { MasterWork } from '@/types'

// 文化類別的著作
export const culturalMasterWorks: MasterWork[] = [
  // 易經
  {
    id: 'i-ching',
    chineseName: '周易',
    englishName: 'I Ching (Book of Changes)',
    author: '周文王',
    authorEnglish: 'King Wen of Zhou',
    year: -1000,
    coordinates: [34.2658, 108.9541],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/易經',
    category: '文化',
    tags: ['哲學', '中國', '古代'],
    description: '中國古代最重要的哲學著作之一。'
  },
  {
    id: 'tao-te-ching',
    chineseName: '道德經',
    englishName: 'Tao Te Ching',
    author: '老子',
    authorEnglish: 'Laozi',
    year: -500,
    coordinates: [33.8818, 113.1142],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/道德經',
    category: '文化',
    tags: ['哲學', '中國', '古代'],
    description: '中國古代最重要的哲學著作之一。'
  },
  {
    id: 'analects',
    chineseName: '論語',
    englishName: 'Analects of Confucius',
    author: '孔子',
    authorEnglish: 'Confucius',
    year: -500,
    coordinates: [35.4, 116.6],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/論語',
    category: '文化',
    tags: ['儒家', '哲學', '中國', '古代'],
    description: '記錄孔子及其弟子言行的儒家經典著作。'
  },
  {
    id: 'new-testament',
    chineseName: '新約聖經',
    englishName: 'New Testament',
    author: '耶穌的門徒',
    authorEnglish: 'Disciples of Jesus',
    year: 100,
    coordinates: [31.7683, 35.2137],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/新約聖經',
    category: '文化',
    tags: ['基督教', '聖經', '耶穌', '宗教'],
    description: '基督教最重要的經典著作之一。'
  },
  {
    id: 'divine-comedy',
    chineseName: '神曲',
    englishName: 'Divine Comedy',
    author: '但丁',
    authorEnglish: 'Dante Alighieri',
    year: 1320,
    coordinates: [43.7, 11.2],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/神曲',
    category: '文化',
    tags: ['文學', '詩歌', '中世紀', '義大利'],
    description: '但丁的史詩作品，描繪了地獄、煉獄和天堂的旅程。'
  },
  {
    id: 'hamlet',
    chineseName: '哈姆雷特',
    englishName: 'Hamlet',
    author: '莎士比亞',
    authorEnglish: 'William Shakespeare',
    year: 1601,
    coordinates: [51.5, -0.1],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/哈姆雷特',
    category: '文化',
    tags: ['戲劇', '文學', '英國', '文藝復興'],
    description: '莎士比亞最著名的悲劇作品。'
  },
  {
    id: 'art-of-war',
    chineseName: '孫子兵法',
    englishName: 'The Art of War',
    author: '孫武',
    authorEnglish: 'Sun Tzu',
    year: -500,
    coordinates: [31.2, 120.6],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/孫子兵法',
    category: '文化',
    tags: ['軍事', '戰略', '中國', '古代'],
    description: '中國古代最重要的軍事理論著作。'
  },
  {
    id: 'republic',
    chineseName: '理想國',
    englishName: 'The Republic',
    author: '柏拉圖',
    authorEnglish: 'Plato',
    year: -380,
    coordinates: [37.9, 23.7],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/理想國',
    category: '文化',
    tags: ['哲學', '政治', '古希臘', '雅典'],
    description: '柏拉圖最重要的哲學著作，探討理想社會的構建。'
  },
  {
    id: 'politics',
    chineseName: '政治學',
    englishName: 'Politics',
    author: '亞里士多德',
    authorEnglish: 'Aristotle',
    year: -350,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/政治學_(亞里士多德)',
    category: '文化',
    tags: ['哲學', '政治學', '古希臘', '亞里士多德'],
    description: '亞里士多德的政治學著作，系統探討政體形式和理想政治制度，對西方政治思想產生深遠影響。'
  },
  {
    id: 'metaphysics',
    chineseName: '形而上學',
    englishName: 'Metaphysics',
    author: '亞里士多德',
    authorEnglish: 'Aristotle',
    year: -350,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/形而上學_(亞里士多德)',
    category: '文化',
    tags: ['哲學', '形而上學', '古希臘', '亞里士多德'],
    description: '亞里士多德的形而上學著作，探討存在、本質、原因等根本哲學問題，被稱為「第一哲學」。'
  },
  {
    id: 'nicomachean-ethics',
    chineseName: '尼各馬可倫理學',
    englishName: 'Nicomachean Ethics',
    author: '亞里士多德',
    authorEnglish: 'Aristotle',
    year: -350,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/尼各馬可倫理學',
    category: '文化',
    tags: ['哲學', '倫理學', '古希臘', '亞里士多德'],
    description: '亞里士多德的倫理學著作，探討幸福、美德、中庸等倫理概念，是西方倫理學的經典之作。'
  },
  {
    id: 'poetics',
    chineseName: '詩學',
    englishName: 'Poetics',
    author: '亞里士多德',
    authorEnglish: 'Aristotle',
    year: -335,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/詩學_(亞里士多德)',
    category: '文化',
    tags: ['文學理論', '戲劇', '古希臘', '亞里士多德'],
    description: '亞里士多德的文學理論著作，分析悲劇和史詩的結構與功能，對西方文學理論產生深遠影響。'
  },
  {
    id: 'organon',
    chineseName: '工具論',
    englishName: 'Organon',
    author: '亞里士多德',
    authorEnglish: 'Aristotle',
    year: -350,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/工具論',
    category: '文化',
    tags: ['邏輯學', '哲學', '古希臘', '亞里士多德'],
    description: '亞里士多德的邏輯學著作集，包括《範疇篇》《解釋篇》《前分析篇》等，是形式邏輯的開山之作。'
  },
  {
    id: 'monadology',
    chineseName: '單子論',
    englishName: 'Monadology',
    author: '戈特弗里德·萊布尼茲',
    authorEnglish: 'Gottfried Wilhelm Leibniz',
    year: 1714,
    coordinates: [52.3705, 9.7332],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/單子論',
    category: '文化',
    tags: ['哲學', '德國', '萊布尼茲'],
    description: '萊布尼茲的哲學著作，探討單子論。'
  },
  {
    id: 'discourse-on-method',
    chineseName: '方法論',
    englishName: 'Discourse on the Method',
    author: '笛卡爾',
    authorEnglish: 'René Descartes',
    year: 1637,
    coordinates: [48.8, 2.3],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/方法論',
    category: '文化',
    tags: ['哲學', '數學', '科學方法', '法國'],
    description: '笛卡爾的哲學著作，提出了理性主義的方法論。'
  },
  // 黑死病時期的著作
  {
    id: 'decameron',
    chineseName: '十日談',
    englishName: 'The Decameron',
    author: '喬萬尼·薄伽丘',
    authorEnglish: 'Giovanni Boccaccio',
    year: 1353,
    coordinates: [43.7696, 11.2558], // 義大利佛羅倫斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/十日談',
    category: '文化',
    tags: ['文學', '短篇小說', '黑死病', '文藝復興', '義大利'],
    description: '薄伽丘的文學作品，以黑死病為背景，描述十個年輕人在瘟疫期間講述的故事，是文藝復興時期的重要文學作品。'
  },
  {
    id: 'chirurgia-magna',
    chineseName: '大外科學',
    englishName: 'Chirurgia Magna',
    author: '居伊·德·肖利亞克',
    authorEnglish: 'Guy de Chauliac',
    year: 1363,
    coordinates: [44.8378, -0.5792], // 法國波爾多
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/居伊·德·肖利亞克',
    category: '文化',
    tags: ['醫學', '外科', '黑死病', '中世紀', '法國'],
    description: '中世紀重要的外科醫學著作，對黑死病等疾病有詳細描述，是中世紀醫學的重要文獻。'
  },
  // 文天祥的重要著作
  {
    id: 'zhengqi-ge',
    chineseName: '正氣歌',
    englishName: 'Song of Righteousness',
    author: '文天祥',
    authorEnglish: 'Wen Tianxiang',
    year: 1281,
    coordinates: [39.9042, 116.4074], // 中國北京
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/正氣歌',
    category: '文化',
    tags: ['詩歌', '愛國', '南宋', '抗元', '中國'],
    description: '文天祥在被囚期間創作的愛國詩歌，表達了堅貞不屈的民族氣節和愛國精神，是中國文學史上的經典作品。'
  },
  {
    id: 'guo-ling-ding-yang',
    chineseName: '過零丁洋',
    englishName: 'Crossing the Lonely Ocean',
    author: '文天祥',
    authorEnglish: 'Wen Tianxiang',
    year: 1279,
    coordinates: [22.1667, 113.5000], // 廣東崖山
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/過零丁洋',
    category: '文化',
    tags: ['詩歌', '愛國', '南宋', '崖山', '中國'],
    description: '文天祥在崖山海戰後被俘途中所作的詩，其中「人生自古誰無死，留取丹心照汗青」成為千古名句。'
  },
  // 西方文明東傳重要著作
  {
    id: 'jihe-yuanben',
    chineseName: '幾何原本',
    englishName: 'Elements of Geometry',
    author: '歐幾里得',
    authorEnglish: 'Euclid',
    year: 1607,
    coordinates: [39.9042, 116.4074], // 中國北京
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/幾何原本',
    category: '文化',
    tags: ['數學', '翻譯', '幾何學', '中國', '明朝'],
    description: '利瑪竇與徐光啟合作翻譯的歐幾里得《幾何原本》，是西方數學在中國傳播的重要里程碑。'
  },
  {
    id: 'tianwen-lue',
    chineseName: '天文略',
    englishName: 'Summary of Astronomy',
    author: '利瑪竇',
    authorEnglish: 'Matteo Ricci',
    year: 1610,
    coordinates: [39.9042, 116.4074], // 中國北京
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/利瑪竇',
    category: '文化',
    tags: ['天文學', '翻譯', '科學', '中國', '明朝'],
    description: '利瑪竇編寫的天文學著作，介紹西方天文學知識，對中國天文學發展有重要影響。'
  },
  {
    id: 'daishu-xue',
    chineseName: '代數學',
    englishName: 'Algebra',
    author: '李善蘭',
    authorEnglish: 'Li Shanlan',
    year: 1859,
    coordinates: [30.2741, 120.1551], // 中國杭州
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/李善蘭',
    category: '文化',
    tags: ['數學', '代數', '翻譯', '中國', '清朝'],
    description: '李善蘭翻譯的西方代數學著作，創立了中國近代數學體系，對中國數學現代化有重要貢獻。'
  },
  {
    id: 'weiji-fenxue',
    chineseName: '微積分學',
    englishName: 'Calculus',
    author: '李善蘭',
    authorEnglish: 'Li Shanlan',
    year: 1859,
    coordinates: [30.2741, 120.1551], // 中國杭州
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/李善蘭',
    category: '文化',
    tags: ['數學', '微積分', '翻譯', '中國', '清朝'],
    description: '李善蘭翻譯的微積分學著作，將西方高等數學引入中國，推動中國數學的現代化發展。'
  }
]
