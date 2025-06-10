import type { HistoricalFigure } from '@/types'

// 科技類別的歷史人物
export const techFigures: HistoricalFigure[] = [
  // 公輸般（魯班）(公元前507年-公元前444年)
  {
    id: 'gongshu-ban',
    chineseName: '公輸般',
    englishName: 'Gongshu Ban',
    startYear: -507,
    endYear: -444,
    coordinates: [35.4, 116.6], // 魯國（今山東）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/魯班',
    category: '科技',
    tags: ['工匠', '發明家', '建築師', '木工', '春秋戰國', '魯國'],
    description: '中國古代著名工匠和發明家，被尊為「木工祖師」，發明了鋸子、墨斗、曲尺等工具，在建築和木工技藝方面有重大貢獻。'
  },
  // 瓦特(1714-1798)
  {
    id: 'james-watt',
    chineseName: '詹姆斯·瓦特',
    englishName: 'James Watt',
    startYear: 1714,
    endYear: 1798,
    coordinates: [55.9, -3.2],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/詹姆斯·瓦特',
    category: '科技',
    tags: ['機械工程師', '蒸汽機', '英國'],
    description: '著名的機械工程師，改良蒸汽機的設計。'
  },
  // 萊特兄弟(1877-1927)(飛機發明者)
  {
    id: 'wings-brothers',
    chineseName: '萊特兄弟',
    englishName: 'Wings Brothers',
    startYear: 1877,
    endYear: 1927,
    // 坐標：33°50N－36°35'N, 75°28'W－84°19'W
    coordinates: [33.8333, -75.4667],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/萊特兄弟',
    category: '科技',
    tags: ['飛機發明者'],
    description: '著名的飛機發明者。'
  },
  // 目前科技類別沒有特定的人物，可以根據需要添加
]
