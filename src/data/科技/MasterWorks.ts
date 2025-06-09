import type { MasterWork } from '@/types'

// 科技類別的著作
export const techMasterWorks: MasterWork[] = [
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
