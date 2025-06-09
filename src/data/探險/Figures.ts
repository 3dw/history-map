import type { HistoricalFigure } from '@/types'

// 探險類別的歷史人物
export const explorationFigures: HistoricalFigure[] = [
  {
    id: 'marco-polo',
    chineseName: '馬可·波羅',
    englishName: 'Marco Polo',
    startYear: 1254,
    endYear: 1324,
    coordinates: [45.4408, 12.3155],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/馬可·波羅',
    category: '探險',
    tags: ['探險家', '旅行家', '威尼斯人'],
    description: '義大利旅行家，著有《東方見聞錄》，描述了他在中國的見聞。'
  },
  {
    id: 'zheng-he',
    chineseName: '鄭和',
    englishName: 'Zheng He',
    startYear: 1371,
    endYear: 1433,
    coordinates: [25.0478, 121.5319],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/鄭和',
    category: '探險',
    tags: ['探險家', '旅行家', '中國人'],
    description: '中國明朝的航海家，七次下西洋，開創了中國古代航海史上的壯舉。'
  }
]
