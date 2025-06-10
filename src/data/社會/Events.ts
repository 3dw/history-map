import type { HistoricalEvent } from '@/types'

// 社會類別的歷史事件
export const socialEvents: HistoricalEvent[] = [
  {
    id: 'industrial-revolution',
    chineseName: '工業革命',
    englishName: 'Industrial Revolution',
    startYear: 1760,
    endYear: 1840,
    coordinates: [53.4, -2.7],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/工業革命',
    category: '社會',
    tags: ['科技', '經濟', '社會變革', '英國'],
    description: '從手工業生產轉向機器生產的社會經濟變革。'
  },
  // 重大社會變革事件
  {
    id: 'enlightenment',
    chineseName: '啟蒙運動',
    englishName: 'Age of Enlightenment',
    startYear: 1685,
    endYear: 1815,
    coordinates: [48.8566, 2.3522], // 法國巴黎
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/啟蒙時代',
    category: '社會',
    tags: ['思想運動', '理性主義', '自由主義', '法國', '歐洲'],
    description: '歐洲的思想文化運動，強調理性、科學、自由和人權，對現代社會制度產生深遠影響。'
  },
  {
    id: 'enclosure-movement',
    chineseName: '圈地運動',
    englishName: 'Enclosure Movement',
    startYear: 1500,
    endYear: 1850,
    coordinates: [51.5074, -0.1278], // 英國倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/圈地運動',
    category: '社會',
    tags: ['土地改革', '農業革命', '資本主義', '英國', '社會變革'],
    description: '英國將公共土地私有化的運動，推動農業革命和資本主義發展，但也造成農民流離失所。'
  },
  {
    id: 'french-revolution-social',
    chineseName: '法國大革命社會變革',
    englishName: 'French Revolution Social Changes',
    startYear: 1789,
    endYear: 1799,
    coordinates: [48.8566, 2.3522], // 法國巴黎
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/法國大革命',
    category: '社會',
    tags: ['革命', '社會變革', '平等', '自由', '法國'],
    description: '法國大革命不僅是政治革命，更是深刻的社會變革，廢除封建制度，確立公民平等權利。'
  },
  {
    id: 'abolition-of-slavery',
    chineseName: '廢除奴隸制度',
    englishName: 'Abolition of Slavery',
    startYear: 1807,
    endYear: 1888,
    coordinates: [51.5074, -0.1278], // 英國倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/廢除奴隸制度',
    category: '社會',
    tags: ['人權', '社會正義', '英國', '美國', '巴西'],
    description: '全球範圍內廢除奴隸制度的運動，英國、美國、巴西等國相繼廢除奴隸制，推動人權進步。'
  },
  {
    id: 'women-suffrage-movement',
    chineseName: '婦女參政權運動',
    englishName: 'Women\'s Suffrage Movement',
    startYear: 1848,
    endYear: 1920,
    coordinates: [40.7128, -74.0060], // 美國紐約
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/婦女參政權',
    category: '社會',
    tags: ['女權', '選舉權', '社會運動', '美國', '英國'],
    description: '婦女爭取選舉權和平等權利的社會運動，最終在20世紀初在多個國家獲得成功。'
  },
  {
    id: 'civil-rights-movement',
    chineseName: '美國民權運動',
    englishName: 'American Civil Rights Movement',
    startYear: 1954,
    endYear: 1968,
    coordinates: [33.7490, -84.3880], // 美國亞特蘭大
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/美國民權運動',
    category: '社會',
    tags: ['民權', '種族平等', '馬丁·路德·金', '美國', '社會運動'],
    description: '美國非裔美國人爭取平等權利的社會運動，馬丁·路德·金領導，推動種族平等和社會正義。'
  },
  {
    id: 'may-68-protests',
    chineseName: '五月風暴',
    englishName: 'May 1968 Protests',
    startYear: 1968,
    endYear: 1968,
    coordinates: [48.8566, 2.3522], // 法國巴黎
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/五月風暴',
    category: '社會',
    tags: ['學生運動', '社會抗議', '法國', '1960年代', '社會變革'],
    description: '法國學生和工人大規模抗議運動，反對傳統社會制度和權威，影響全球青年文化。'
  },
  {
    id: 'glasnost-perestroika',
    chineseName: '戈巴契夫改革',
    englishName: 'Glasnost and Perestroika',
    startYear: 1985,
    endYear: 1991,
    coordinates: [55.7558, 37.6176], // 俄羅斯莫斯科
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/戈巴契夫改革',
    category: '社會',
    tags: ['改革', '蘇聯', '戈巴契夫', '開放', '重組'],
    description: '戈巴契夫在蘇聯推行的政治和經濟改革，包括開放政策和重組政策，最終導致蘇聯解體。'
  },
  {
    id: 'arab-spring',
    chineseName: '阿拉伯之春',
    englishName: 'Arab Spring',
    startYear: 2010,
    endYear: 2012,
    coordinates: [36.8065, 10.1815], // 突尼西亞
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/阿拉伯之春',
    category: '社會',
    tags: ['民主運動', '社會抗議', '中東', '北非', '社會變革'],
    description: '中東和北非地區的民主運動浪潮，多個國家發生反政府抗議，推動政治和社會改革。'
  }
]
