import type { HistoricalEvent } from '@/types'

// 社會類別的歷史事件
export const socialEvents: HistoricalEvent[] = [
  {
    id: 'industrial-revolution',
    chineseName: '工業革命',
    englishName: 'Industrial Revolution',
    startYear: 1760,
    endYear: 1840,
    coordinates: [53.4, -2.7],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/工業革命',
    category: '社會',
    tags: ['科技', '經濟', '社會變革', '英國'],
    description: '從手工業生產轉向機器生產的社會經濟變革。'
  }
]
