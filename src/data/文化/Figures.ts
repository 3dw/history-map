import type { HistoricalFigure } from '@/types'

// 文化類別的歷史人物
export const culturalFigures: HistoricalFigure[] = [
  {
    id: 'socrates',
    chineseName: '蘇格拉底',
    englishName: 'Socrates',
    startYear: -470,
    endYear: -399,
    coordinates: [37.9755, 23.7348],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/蘇格拉底',
    category: '文化',
    tags: ['哲學家', '思想家', '教育家', '古希臘'],
    description: '古希臘哲學家，被認為是西方哲學的奠基者之一。'
  },
  {
    id: 'plato',
    chineseName: '柏拉圖',
    englishName: 'Plato',
    startYear: -428,
    endYear: -348,
    coordinates: [37.9755, 23.7348],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/柏拉圖',
    category: '文化',
    tags: ['哲學家', '思想家', '教育家', '古希臘', '《理想國》'],
    description: '古希臘哲學家，蘇格拉底的學生，亞里士多德的老師，被譽為「哲學之父」。蘇格拉底的對話錄大多以柏拉圖的記載而能傳世。柏拉圖的哲學思想對西方哲學的發展產生了深遠的影響。'
  },
  {
    id: 'laozi',
    chineseName: '老子',
    englishName: 'Laozi',
    startYear: -600,
    endYear: -500,
    coordinates: [34.7, 113.6],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/老子',
    category: '文化',
    tags: ['道家', '思想家', '哲學家', '《道德經》'],
    description: '中國古代思想家，道家學派創始人，《道德經》作者。'
  },
  // 釋迦牟尼
  {
    id: 'buddha',
    chineseName: '釋迦牟尼',
    englishName: 'Buddha',
    startYear: -563,
    endYear: -483,
    coordinates: [23.7231, 85.3049],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/釋迦牟尼',
    category: '文化',
    tags: ['佛教', '佛陀', '釋迦牟尼', '佛教創始人'],
    description: '佛教創始人，被尊為佛陀，意為「覺悟者」，是佛教的創始人和主要教義的闡述者。'
  },
  // 耶穌
  {
    id: 'jesus',
    chineseName: '耶穌',
    englishName: 'Jesus',
    startYear: -6,
    endYear: 33,
    coordinates: [31.7683, 35.2137],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/耶穌',
    category: '文化',
    tags: ['基督教', '耶穌', '基督'],
    description: '基督教中被尊為基督，意為「救世主」，新約聖經中記載的耶穌基督，教導人們相愛，曾被釘在十字架上，據聞復活。'
  },
  {
    id: 'aristotle',
    chineseName: '亞里士多德',
    englishName: 'Aristotle',
    startYear: -384,
    endYear: -322,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/亞里士多德',
    category: '文化',
    tags: ['哲學家', '思想家', '科學家', '古希臘', '柏拉圖學生', '亞歷山大大帝老師'],
    description: '古希臘哲學家，柏拉圖的學生，亞歷山大大帝的老師，被稱為「百科全書式的學者」，其思想對西方哲學、科學、政治學等領域產生深遠影響。'
  },
  // 著名女性文化人物
  {
    id: 'helen-keller',
    chineseName: '海倫·凱勒',
    englishName: 'Helen Keller',
    startYear: 1880,
    endYear: 1968,
    coordinates: [34.7304, -86.5861], // 阿拉巴馬
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/海倫·凱勒',
    category: '文化',
    tags: ['作家', '演說家', '社會活動家', '盲聾', '美國'],
    description: '美國作家、演說家和社會活動家，雖然失明失聰，但在老師安妮·沙利文的幫助下學會溝通，成為激勵無數人的典範。'
  },
  {
    id: 'virginia-satir',
    chineseName: '維琴尼亞·薩提爾',
    englishName: 'Virginia Satir',
    startYear: 1916,
    endYear: 1988,
    coordinates: [42.3601, -71.0589], // 波士頓
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/維琴尼亞·薩提爾',
    category: '文化',
    tags: ['心理治療師', '家庭治療', '社會工作者', '美國'],
    description: '美國心理治療師和社會工作者，被稱為「家庭治療之母」，開創了現代家庭治療方法，對心理治療領域有重大影響。'
  },
  {
    id: 'simone-de-beauvoir',
    chineseName: '西蒙·波娃',
    englishName: 'Simone de Beauvoir',
    startYear: 1908,
    endYear: 1986,
    coordinates: [48.8566, 2.3522], // 巴黎
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/西蒙·波娃',
    category: '文化',
    tags: ['哲學家', '作家', '女權主義', '存在主義', '法國'],
    description: '法國哲學家、作家和女權主義者，著有《第二性》，被認為是現代女權主義運動的重要理論家。'
  },
  {
    id: 'emily-dickinson',
    chineseName: '艾米莉·狄金森',
    englishName: 'Emily Dickinson',
    startYear: 1830,
    endYear: 1886,
    coordinates: [42.3601, -71.0589], // 麻薩諸塞
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/艾米莉·狄金森',
    category: '文化',
    tags: ['詩人', '隱士', '美國文學', '浪漫主義'],
    description: '美國著名女詩人，一生創作了近1800首詩歌，以其獨特的風格和深刻的主題被譽為美國文學史上最重要的詩人之一。'
  },
  {
    id: 'jane-austen',
    chineseName: '珍·奧斯汀',
    englishName: 'Jane Austen',
    startYear: 1775,
    endYear: 1817,
    coordinates: [51.5074, -0.1278], // 倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/珍·奧斯汀',
    category: '文化',
    tags: ['小說家', '浪漫主義', '英國文學', '《傲慢與偏見》'],
    description: '英國著名女小說家，著有《傲慢與偏見》《理性與感性》等經典作品，被譽為英國文學史上最偉大的女作家之一。'
  },
  // 黑死病時期的文學家
  {
    id: 'giovanni-boccaccio',
    chineseName: '喬萬尼·薄伽丘',
    englishName: 'Giovanni Boccaccio',
    startYear: 1313,
    endYear: 1375,
    coordinates: [43.7696, 11.2558], // 義大利佛羅倫斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/喬萬尼·薄伽丘',
    category: '文化',
    tags: ['作家', '詩人', '黑死病', '文藝復興', '義大利', '《十日談》'],
    description: '義大利作家和詩人，文藝復興時期的重要文學家，著有《十日談》，以黑死病為背景，對歐洲文學有重要影響。'
  }
]
