import type { HistoricalFigure } from '@/types'

// 社會類別的歷史人物
export const socialFigures: HistoricalFigure[] = [
  // 目前社會類別沒有特定的人物，可以根據需要添加

  // 墨子
  {
    id: 'mozi',
    chineseName: '墨子',
    englishName: 'Mozi',
    category: '社會',
    tags: ['墨家', '哲學家', '思想家'],
    startYear: -470,
    endYear: -390,
    coordinates: [31.7683, 35.2137],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/墨子',
  },
  // 孔子
  {
    id: 'confucius',
    chineseName: '孔子',
    englishName: 'Confucius',
    category: '社會',
    tags: ['儒家', '哲學家', '思想家'],
    startYear: -551,
    endYear: -479,
    coordinates: [35.4, 116.6],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/孔子',
  },
]
