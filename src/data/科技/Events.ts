import type { HistoricalEvent } from '@/types'

// 科技類別的歷史事件
export const techEvents: HistoricalEvent[] = [
  // 魯班發明鋸子
  {
    id: 'invention-of-saw',
    chineseName: '鋸子發明',
    englishName: 'Invention of the Saw',
    startYear: -500,
    endYear: -500,
    coordinates: [35.4, 116.6], // 魯國
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/鋸子',
    category: '科技',
    tags: ['發明', '工具', '木工', '魯班', '春秋戰國'],
    description: '相傳魯班受到草葉邊緣的啟發，發明了鋸子，大大提高了木工加工效率，是古代重要的工具發明。'
  },
  // 魯班發明墨斗
  {
    id: 'invention-of-ink-line',
    chineseName: '墨斗發明',
    englishName: 'Invention of the Ink Line',
    startYear: -500,
    endYear: -500,
    coordinates: [35.4, 116.6], // 魯國
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/墨斗',
    category: '科技',
    tags: ['發明', '工具', '測量', '魯班', '春秋戰國'],
    description: '魯班發明的墨斗用於在木材上畫直線，是古代建築和木工的重要測量工具，至今仍在使用。'
  },
  // 魯班發明曲尺
  {
    id: 'invention-of-carpenter-square',
    chineseName: '曲尺發明',
    englishName: 'Invention of the Carpenter Square',
    startYear: -500,
    endYear: -500,
    coordinates: [35.4, 116.6], // 魯國
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/曲尺',
    category: '科技',
    tags: ['發明', '工具', '測量', '魯班', '春秋戰國'],
    description: '魯班發明的曲尺用於測量直角和畫線，是古代建築和木工的基本工具，對建築精確度有重要貢獻。'
  },
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
