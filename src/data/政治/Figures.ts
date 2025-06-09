import type { HistoricalFigure } from '@/types'

// 政治類別的歷史人物
export const politicalFigures: HistoricalFigure[] = [
  {
    id: 'darius-i',
    chineseName: '大流士一世',
    englishName: 'Darius I of Persia',
    startYear: -550,
    endYear: -486,
    coordinates: [29.9342, 52.8916],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/大流士一世',
    category: '政治',
    tags: ['波斯帝國', '帝王'],
    description: '波斯帝國的創建者，被稱為「波斯之獅」。'
  },
  {
    id: 'qin-shihuang',
    chineseName: '秦始皇',
    englishName: 'Qin Shi Huang',
    startYear: -259,
    endYear: -210,
    coordinates: [34.2658, 108.9541],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/秦始皇',
    category: '政治',
    tags: ['秦朝', '帝王'],
    description: '中國歷史上第一位皇帝，統一六國，建立秦朝。'
  },
  {
    id: 'george-washington',
    chineseName: '喬治·華盛頓',
    englishName: 'George Washington',
    startYear: 1732,
    endYear: 1799,
    coordinates: [38.8895, -77.0093],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/喬治·華盛頓',
    category: '政治',
    tags: ['總統', '獨立', '建國', '美國'],
    description: '美國第一任總統，領導美國獨立戰爭，被譽為美國國父。'
  },
  {
    id: 'abraham-lincoln',
    chineseName: '亞伯拉罕·林肯',
    englishName: 'Abraham Lincoln',
    startYear: 1809,
    endYear: 1865,
    coordinates: [38.8977, -77.0365],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/亞伯拉罕·林肯',
    category: '政治',
    tags: ['總統', '解放', '統一', '美國'],
    description: '美國第16任總統，領導南北戰爭，解放黑奴，維護國家統一。'
  },
  {
    id: 'franklin-roosevelt',
    chineseName: '富蘭克林·羅斯福',
    englishName: 'Franklin D. Roosevelt',
    startYear: 1882,
    endYear: 1945,
    coordinates: [40.7128, -74.0060],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/富蘭克林·德拉諾·羅斯福',
    category: '政治',
    tags: ['總統', '新政', '二戰', '美國'],
    description: '美國第32任總統，實施新政應對經濟大蕭條，領導美國參與二戰。'
  },
  {
    id: 'john-kennedy',
    chineseName: '約翰·甘迺迪',
    englishName: 'John F. Kennedy',
    startYear: 1917,
    endYear: 1963,
    coordinates: [42.3601, -71.0589],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/約翰·甘迺迪',
    category: '政治',
    tags: ['總統', '太空', '冷戰', '美國'],
    description: '美國第35任總統，推動太空計劃，在冷戰時期展現領導力。'
  }
]
