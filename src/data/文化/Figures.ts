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
    description: '古希臘哲學家，蘇格拉底的學生，亞里士多德的老師。'
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
  }
]
