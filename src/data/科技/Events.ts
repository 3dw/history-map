import type { HistoricalEvent } from '@/types'

// 科技類別的歷史事件
export const techEvents: HistoricalEvent[] = [
  {
    id: 'black-death',
    chineseName: '黑死病大流行',
    englishName: 'Black Death Pandemic',
    startYear: 1347,
    endYear: 1353,
    coordinates: [45.4642, 9.1900],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/黑死病',
    category: '科技',
    tags: ['疾病', '歐洲', '中世紀', '醫學'],
    description: '14世紀歐洲爆發的大規模傳染病，造成大量人口死亡。'
  },
  {
    id: 'printing-press',
    chineseName: '古騰堡印刷術發明',
    englishName: 'Invention of the Printing Press',
    startYear: 1440,
    endYear: 1440,
    coordinates: [49.9929, 8.2473],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/約翰內斯·古騰堡',
    category: '科技',
    tags: ['印刷', '德國', '中世紀'],
    description: '古騰堡發明的印刷術，對文化和知識的傳播產生了革命性的影響。'
  }
]
