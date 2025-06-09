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
    coordinates: [32.05, 118.77], // 修正為南京（江蘇南京市中心）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/鄭和',
    category: '探險',
    tags: ['探險家', '旅行家', '中國人'],
    description: '中國明朝的航海家，七次下西洋，開創了中國古代航海史上的壯舉。'
  },
  {
    id: 'charles-darwin',
    chineseName: '查爾斯·達爾文',
    englishName: 'Charles Darwin',
    startYear: 1809,
    endYear: 1882,
    coordinates: [52.7082, -2.7543], // Shrewsbury, 英格蘭
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/查爾斯·達爾文',
    category: '探險',
    tags: ['自然學家', '生物學家', '進化論'],
    description: '英國自然學家，提出演化論，著有《物種起源》，曾隨「貝格爾號」環繞世界航行。'
  },
  {
    id: 'christopher-columbus',
    chineseName: '克里斯多福·哥倫布',
    englishName: 'Christopher Columbus',
    startYear: 1451,
    endYear: 1506,
    coordinates: [44.4056, 8.9463], // 熱那亞 (Genoa, 義大利)
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/克里斯多福·哥倫布',
    category: '探險',
    tags: ['探險家', '航海家', '義大利人'],
    description: '義大利出生，受西班牙君主資助，1492年首航新大陸，打開歐洲與美洲的連結。'
  },
  {
    id: 'ferdinand-magellan',
    chineseName: '費迪南·麥哲倫',
    englishName: 'Ferdinand Magellan',
    startYear: 1480,
    endYear: 1521,
    coordinates: [38.5333, -8.9], // 麥哲倫出生地：保羅島附近的希尼什 (Portugal)
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/費迪南·麥哲倫',
    category: '探險',
    tags: ['探險家', '航海家', '葡萄牙人'],
    description: '葡萄牙航海家，發起歷史首次環球航行（1519–1522），本人於旅途中逝世。'
  }
]
