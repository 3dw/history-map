import type { HistoricalEvent } from '@/types'

// 探險類別的歷史事件
export const explorationEvents: HistoricalEvent[] = [
  {
    id: 'columbus-discovery',
    chineseName: '哥倫布發現美洲',
    englishName: 'Columbus Discovers America',
    startYear: 1492,
    endYear: 1492,
    coordinates: [25.0343, -77.3963],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/克里斯托弗·哥倫布',
    category: '探險',
    tags: ['探索', '新大陸', '歐洲'],
    description: '哥倫布在1492年發現了新大陸，開啟了歐洲人對美洲的探索。'
  }
]
