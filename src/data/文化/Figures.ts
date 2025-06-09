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
  }
]
