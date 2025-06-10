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
    description: '墨子是中國古代哲學家，墨家學派創始人，主張兼愛非攻，反對戰爭和暴力。',
    // 河南商丘，墨子出生地
    coordinates: [34.4371, 115.6556],
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
    description: '孔子是中國古代哲學家，儒家學派創始人，主張仁愛和禮治，被尊為聖人。',
    coordinates: [35.4, 116.6],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/孔子',
  },
  // 孟子
  {
    id: 'mengzi',
    chineseName: '孟子',
    englishName: 'Mengzi',
    category: '社會',
    tags: ['儒家', '哲學家', '思想家'],
    startYear: -372,
    endYear: -289,
    description: '孟子是中國古代哲學家，儒家學派性善論創始人，主張仁愛和禮治，被尊為亞聖。',
    coordinates: [39.9042, 116.4074],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/孟子',
  },
  // 荀子
  {
    id: 'xunzi',
    chineseName: '荀子',
    englishName: 'Xunzi',
    category: '社會',
    tags: ['儒家', '哲學家', '思想家'],
    startYear: -313,
    endYear: -238,
    description: '荀子是中國古代哲學家，儒家學派性惡論創始人，主張禮治和法治，被尊為大儒。',
    coordinates: [34.7, 113.6],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/荀子',
  },
]
