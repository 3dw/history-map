import type { MasterWork } from '@/types'

// 政治類別的著作
export const politicalMasterWorks: MasterWork[] = [
  {
    id: 'prince',
    chineseName: '君主論',
    englishName: 'The Prince',
    author: '馬基雅維利',
    authorEnglish: 'Niccolò Machiavelli',
    year: 1532,
    coordinates: [43.7, 11.2],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/君主論',
    category: '政治',
    tags: ['政治學', '權力', '文藝復興', '義大利'],
    description: '探討政治權力和統治藝術的經典著作。'
  },
  {
    id: 'declaration-of-independence',
    chineseName: '獨立宣言',
    englishName: 'Declaration of Independence',
    author: '托馬斯·傑斐遜',
    authorEnglish: 'Thomas Jefferson',
    year: 1776,
    coordinates: [39.9496, -75.1503],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/美國獨立宣言',
    category: '政治',
    tags: ['獨立', '民主', '自由', '美國'],
    description: '美國獨立宣言，宣佈十三個殖民地脫離英國統治，建立獨立國家。'
  },
  {
    id: 'constitution-of-united-states',
    chineseName: '美國憲法',
    englishName: 'Constitution of the United States',
    author: '制憲會議',
    authorEnglish: 'Constitutional Convention',
    year: 1787,
    coordinates: [39.9496, -75.1503],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/美國憲法',
    category: '政治',
    tags: ['憲法', '民主', '法治', '美國'],
    description: '美國聯邦憲法，確立三權分立制度，成為現代民主政治的典範。'
  },
  {
    id: 'federalist-papers',
    chineseName: '聯邦黨人文集',
    englishName: 'The Federalist Papers',
    author: '亞歷山大·漢密爾頓等',
    authorEnglish: 'Alexander Hamilton et al.',
    year: 1788,
    coordinates: [40.7128, -74.0060],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/聯邦黨人文集',
    category: '政治',
    tags: ['政治學', '聯邦制', '憲法', '美國'],
    description: '解釋和捍衛美國憲法的經典政治文獻。'
  },
  {
    id: 'communist-manifesto',
    chineseName: '共產黨宣言',
    englishName: 'The Communist Manifesto',
    author: '馬克思和恩格斯',
    authorEnglish: 'Karl Marx and Friedrich Engels',
    year: 1848,
    coordinates: [51.2, 6.8],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/共產黨宣言',
    category: '政治',
    tags: ['政治學', '社會主義', '經濟學', '德國'],
    description: '馬克思主義的綱領性文件。'
  },
  {
    id: 'gettysburg-address',
    chineseName: '蓋茲堡演說',
    englishName: 'Gettysburg Address',
    author: '亞伯拉罕·林肯',
    authorEnglish: 'Abraham Lincoln',
    year: 1863,
    coordinates: [40.7128, -74.0060],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/蓋茲堡演說',
    category: '政治',
    tags: ['演說', '民主', '自由', '美國'],
    description: '林肯在蓋茲堡戰場發表的著名演說，闡述民主政府的理念。'
  }
]
