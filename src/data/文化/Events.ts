import type { HistoricalEvent } from '@/types'

// 文化類別的歷史事件
export const culturalEvents: HistoricalEvent[] = [
  {
    id: 'founding-of-academy',
    chineseName: '柏拉圖學院創立',
    englishName: 'Founding of Plato\'s Academy',
    startYear: -387,
    endYear: -387,
    coordinates: [37.9755, 23.7348],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/柏拉圖學院',
    category: '文化',
    tags: ['哲學', '古希臘', '雅典'],
    description: '柏拉圖在雅典創立的學院，是西方哲學的重要發源地。'
  },
  {
    id: 'great-wall',
    chineseName: '萬里長城建造',
    englishName: 'Construction of the Great Wall',
    startYear: -220,
    endYear: 1644,
    coordinates: [40.4319, 116.5704],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/萬里長城',
    category: '文化',
    tags: ['長城', '中國', '古代'],
    description: '中國古代的巨大工程，長達萬里，用於防禦外敵。'
  },
  {
    id: 'silk-road',
    chineseName: '絲綢之路開通',
    englishName: 'Opening of the Silk Road',
    startYear: -130,
    endYear: 1453,
    coordinates: [43.2567, 76.9286],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/絲綢之路',
    category: '文化',
    tags: ['絲綢', '絲路', '古代', '中國'],
    description: '連接東西方的重要貿易路線，促進了文化交流和經濟發展。'
  },
  {
    id: 'renaissance',
    chineseName: '文藝復興',
    englishName: 'Renaissance',
    startYear: 1300,
    endYear: 1600,
    coordinates: [43.7, 11.2],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/文藝復興',
    category: '文化',
    tags: ['藝術', '科學', '人文主義', '歐洲'],
    description: '歐洲文化復興運動，促進了藝術、科學和人文主義的發展。'
  },
  {
    id: 'galileo-trial',
    chineseName: '伽利略審判',
    englishName: 'Trial of Galileo',
    startYear: 1633,
    endYear: 1633,
    coordinates: [41.9028, 12.4964],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/伽利略事件',
    category: '文化',
    tags: ['宗教', '政治', '科學', '羅馬'],
    description: '伽利略因支持哥白尼學說而受到宗教裁判所的審判。'
  }
]
