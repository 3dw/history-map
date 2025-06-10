import type { MasterWork } from '@/types'

// 科技類別的著作
export const techMasterWorks: MasterWork[] = [
  // 魯班經（相傳）
  {
    id: 'luban-jing',
    chineseName: '魯班經',
    englishName: 'Luban Jing',
    author: '公輸般',
    authorEnglish: 'Gongshu Ban',
    year: -450,
    coordinates: [35.4, 116.6], // 魯國
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/魯班經',
    category: '科技',
    tags: ['建築', '木工', '技術', '魯班', '春秋戰國'],
    description: '相傳為魯班所著的建築和木工技術手冊，記載了古代建築技藝和工具使用方法，是中國古代重要的技術文獻。'
  },
  {
    id: 'canon-of-medicine',
    chineseName: '醫典',
    englishName: 'The Canon of Medicine',
    author: '伊本·西那',
    authorEnglish: 'Avicenna',
    year: 1025,
    coordinates: [35.7, 51.4],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/醫典',
    category: '科技',
    tags: ['醫學', '藥學', '伊斯蘭', '中世紀'],
    description: '中世紀最重要的醫學百科全書。'
  }
]
