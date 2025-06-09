import type { MasterWork } from '@/types'

// 社會類別的著作
export const socialMasterWorks: MasterWork[] = [
  {
    id: 'wealth-of-nations',
    chineseName: '國富論',
    englishName: 'The Wealth of Nations',
    author: '亞當·斯密',
    authorEnglish: 'Adam Smith',
    year: 1776,
    coordinates: [55.9, -3.2],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/國富論',
    category: '社會',
    tags: ['經濟學', '政治經濟學', '啟蒙運動', '蘇格蘭'],
    description: '現代經濟學的奠基之作。'
  },
  {
    id: 'das-kapital',
    chineseName: '資本論',
    englishName: 'Das Kapital',
    author: '卡爾·馬克思',
    authorEnglish: 'Karl Marx',
    year: 1867,
    coordinates: [51.5074, -0.1278],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/資本論',
    category: '社會',
    tags: ['經濟學', '社會主義', '馬克思主義', '德國'],
    description: '馬克思主義的經濟學著作。'
  }
]
