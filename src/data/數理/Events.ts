import type { HistoricalEvent } from '@/types'

// 數理類別的歷史事件
export const scientificEvents: HistoricalEvent[] = [
  {
    id: 'copernican-revolution',
    chineseName: '哥白尼革命',
    englishName: 'Copernican Revolution',
    startYear: 1543,
    endYear: 1687,
    coordinates: [54.3520, 18.6466],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/哥白尼革命',
    category: '數理',
    tags: ['天文學', '物理學', '數學', '科學方法'],
    description: '哥白尼提出的日心說，推翻了地心說的傳統觀念。'
  },
  {
    id: 'galileo-telescope-observations',
    chineseName: '伽利略望遠鏡觀測',
    englishName: 'Galileo\'s Telescope Observations',
    startYear: 1609,
    endYear: 1610,
    coordinates: [45.4408, 12.3155],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/伽利略望遠鏡',
    category: '數理',
    tags: ['天文學', '物理學', '數學', '科學方法'],
    description: '伽利略使用望遠鏡進行的天文觀測，證實了哥白尼學說。'
  },
  {
    id: 'invention-of-calculus',
    chineseName: '微積分發明',
    englishName: 'Invention of Calculus',
    startYear: 1665,
    endYear: 1676,
    coordinates: [52.2053, 0.1218],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/微積分',
    category: '數理',
    tags: ['數學', '科學方法', '英國'],
    description: '牛頓和萊布尼茲獨立發現微積分學，對現代數學和物理學有重要影響。'
  },
  {
    id: 'scientific-revolution',
    chineseName: '科學革命',
    englishName: 'Scientific Revolution',
    startYear: 1543,
    endYear: 1687,
    coordinates: [52.2, 0.1],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/科學革命',
    category: '數理',
    tags: ['天文學', '物理學', '數學', '科學方法'],
    description: '現代科學的誕生時期，以哥白尼、伽利略、牛頓等人的發現為代表。'
  },
  {
    id: 'discovery-of-gravity',
    chineseName: '萬有引力定律發現',
    englishName: 'Discovery of Universal Gravitation',
    startYear: 1687,
    endYear: 1687,
    coordinates: [52.2053, 0.1218],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/萬有引力定律',
    category: '數理',
    tags: ['物理學', '數學', '科學方法', '英國'],
    description: '牛頓發現的萬有引力定律，奠定了古典力學的基礎。'
  }
]
