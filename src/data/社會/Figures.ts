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
  // 著名女性社會人物
  {
    id: 'mother-teresa',
    chineseName: '德蕾莎修女',
    englishName: 'Mother Teresa',
    category: '社會',
    tags: ['修女', '慈善家', '諾貝爾和平獎', '印度', '天主教'],
    startYear: 1910,
    endYear: 1997,
    description: '阿爾巴尼亞裔印度修女，創立仁愛傳教會，致力於幫助窮人和病人，1979年獲得諾貝爾和平獎，被譽為「加爾各答的聖人」。',
    coordinates: [22.5726, 88.3639], // 加爾各答
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/德蕾莎修女',
  },
  {
    id: 'joan-of-arc',
    chineseName: '聖女貞德',
    englishName: 'Joan of Arc',
    category: '社會',
    tags: ['軍事領袖', '聖女', '法國', '百年戰爭', '天主教'],
    startYear: 1412,
    endYear: 1431,
    description: '法國民族英雄，在百年戰爭中領導法國軍隊對抗英軍，被教會尊為聖女，最終被英軍俘虜並處以火刑。',
    coordinates: [48.8566, 2.3522], // 巴黎
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/聖女貞德',
  },
  {
    id: 'florence-nightingale',
    chineseName: '佛羅倫斯·南丁格爾',
    englishName: 'Florence Nightingale',
    category: '社會',
    tags: ['護士', '統計學家', '社會改革家', '英國', '克里米亞戰爭'],
    startYear: 1820,
    endYear: 1910,
    description: '英國護士和社會改革家，被稱為「提燈女士」，現代護理學的創始人，在克里米亞戰爭中改善了醫療條件。',
    coordinates: [51.5074, -0.1278], // 倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/佛羅倫斯·南丁格爾',
  },
  {
    id: 'rosa-parks',
    chineseName: '羅莎·帕克斯',
    englishName: 'Rosa Parks',
    category: '社會',
    tags: ['民權運動', '反種族隔離', '美國', '非暴力抗爭'],
    startYear: 1913,
    endYear: 2005,
    description: '美國民權運動領袖，因拒絕在公車上讓座給白人而引發蒙哥馬利公車抵制運動，被稱為「民權運動之母」。',
    coordinates: [32.3792, -86.3077], // 蒙哥馬利
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/羅莎·帕克斯',
  },
  {
    id: 'malala-yousafzai',
    chineseName: '馬拉拉·優素福扎伊',
    englishName: 'Malala Yousafzai',
    category: '社會',
    tags: ['教育活動家', '諾貝爾和平獎', '巴基斯坦', '女權'],
    startYear: 1997,
    endYear: 2024,
    description: '巴基斯坦教育活動家，為女童教育權利而奮鬥，2014年成為最年輕的諾貝爾和平獎得主，被譽為「女童教育之聲」。',
    coordinates: [34.0150, 71.5249], // 巴基斯坦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/馬拉拉·優素福扎伊',
  },
  {
    id: 'eleanor-roosevelt',
    chineseName: '埃莉諾·羅斯福',
    englishName: 'Eleanor Roosevelt',
    category: '社會',
    tags: ['第一夫人', '人權活動家', '聯合國', '美國', '社會改革'],
    startYear: 1884,
    endYear: 1962,
    description: '美國第一夫人和人權活動家，富蘭克林·羅斯福的妻子，參與起草《世界人權宣言》，被譽為「世界第一夫人」。',
    coordinates: [40.7128, -74.0060], // 紐約
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/埃莉諾·羅斯福',
  }
]
