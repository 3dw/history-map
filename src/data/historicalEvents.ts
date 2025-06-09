import type { HistoricalEvent } from '@/types'

// 重大事件資料
export const historicalEvents: HistoricalEvent[] = [
  // 古希臘時期事件
  {
    id: 'greco-persian-wars',
    chineseName: '希波戰爭',
    englishName: 'Greco-Persian Wars',
    startYear: -499, // 西元前499年
    endYear: -449, // 西元前449年
    coordinates: [38.0, 24.0], // 希臘中部（主要戰場）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/希波戰爭'
  },
  {
    id: 'battle-of-marathon',
    chineseName: '馬拉松戰役',
    englishName: 'Battle of Marathon',
    startYear: -490, // 西元前490年
    endYear: -490, // 單一事件
    coordinates: [38.1547, 24.0133], // 希臘馬拉松
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/馬拉松戰役'
  },
  {
    id: 'battle-of-thermopylae',
    chineseName: '溫泉關戰役',
    englishName: 'Battle of Thermopylae',
    startYear: -480, // 西元前480年
    endYear: -480, // 單一事件
    coordinates: [38.7967, 22.5361], // 希臘溫泉關
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/溫泉關戰役'
  },
  {
    id: 'founding-of-academy',
    chineseName: '柏拉圖學院創立',
    englishName: 'Founding of Plato\'s Academy',
    startYear: -387, // 西元前387年
    endYear: -387, // 單一事件
    coordinates: [37.9755, 23.7348], // 希臘雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/柏拉圖學院'
  },
  {
    id: 'peloponnesian-war',
    chineseName: '伯羅奔尼撒戰爭',
    englishName: 'Peloponnesian War',
    startYear: -431, // 西元前431年
    endYear: -404, // 西元前404年
    coordinates: [37.0, 22.0], // 希臘伯羅奔尼撒半島
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/伯羅奔尼撒戰爭'
  },

  // 中國古代事件
  {
    id: 'great-wall',
    chineseName: '萬里長城建造',
    englishName: 'Construction of the Great Wall',
    startYear: -220, // 西元前220年開始大規模建造
    endYear: 1644, // 明朝結束
    coordinates: [40.4319, 116.5704], // 北京八達嶺
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/萬里長城'
  },
  {
    id: 'silk-road',
    chineseName: '絲綢之路開通',
    englishName: 'Opening of the Silk Road',
    startYear: -130, // 西元前130年左右
    endYear: 1453, // 奧斯曼帝國佔領君士坦丁堡
    coordinates: [43.2567, 76.9286], // 阿拉木圖（古代重要節點）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/絲綢之路'
  },

  // 中世紀及近代事件
  {
    id: 'black-death',
    chineseName: '黑死病大流行',
    englishName: 'Black Death Pandemic',
    startYear: 1347,
    endYear: 1353,
    coordinates: [45.4642, 9.1900], // 米蘭（歐洲重災區）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/黑死病'
  },
  {
    id: 'columbus-discovery',
    chineseName: '哥倫布發現美洲',
    englishName: 'Columbus Discovers America',
    startYear: 1492,
    endYear: 1492, // 單一事件
    coordinates: [25.0343, -77.3963], // 巴哈馬群島
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/克里斯托弗·哥倫布'
  },
  {
    id: 'printing-press',
    chineseName: '古騰堡印刷術發明',
    englishName: 'Invention of the Printing Press',
    startYear: 1440,
    endYear: 1440, // 單一事件
    coordinates: [49.9929, 8.2473], // 德國美因茲
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/約翰內斯·古騰堡'
  },
  {
    id: 'renaissance',
    chineseName: '文藝復興',
    englishName: 'Renaissance',
    startYear: 1300,
    endYear: 1600,
    coordinates: [43.7696, 11.2558], // 義大利佛羅倫斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/文藝復興'
  },

  // 科學革命時代事件
  {
    id: 'copernican-revolution',
    chineseName: '哥白尼革命',
    englishName: 'Copernican Revolution',
    startYear: 1543,
    endYear: 1687, // 到牛頓《原理》出版
    coordinates: [54.3520, 18.6466], // 波蘭托倫
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/哥白尼革命'
  },
  {
    id: 'galileo-telescope-observations',
    chineseName: '伽利略望遠鏡觀測',
    englishName: 'Galileo\'s Telescope Observations',
    startYear: 1609,
    endYear: 1610,
    coordinates: [45.4408, 12.3155], // 義大利威尼斯（首次展示望遠鏡）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/伽利略望遠鏡'
  },
  {
    id: 'galileo-trial',
    chineseName: '伽利略審判',
    englishName: 'Trial of Galileo',
    startYear: 1633,
    endYear: 1633, // 單一事件
    coordinates: [41.9028, 12.4964], // 義大利羅馬
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/伽利略事件'
  },
  {
    id: 'invention-of-calculus',
    chineseName: '微積分發明',
    englishName: 'Invention of Calculus',
    startYear: 1665,
    endYear: 1676, // 萊布尼茲獨立發明
    coordinates: [52.2053, 0.1218], // 英國劍橋（牛頓）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/微積分'
  },
  {
    id: 'scientific-revolution',
    chineseName: '科學革命',
    englishName: 'Scientific Revolution',
    startYear: 1543,
    endYear: 1687,
    coordinates: [51.5074, -0.1278], // 英國倫敦（皇家學會）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/科學革命'
  },
  {
    id: 'discovery-of-gravity',
    chineseName: '萬有引力定律發現',
    englishName: 'Discovery of Universal Gravitation',
    startYear: 1687,
    endYear: 1687, // 單一事件
    coordinates: [52.2053, 0.1218], // 英國劍橋
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/萬有引力定律'
  },
  {
    id: 'industrial-revolution',
    chineseName: '工業革命',
    englishName: 'Industrial Revolution',
    startYear: 1760,
    endYear: 1840,
    coordinates: [53.4808, -2.2426], // 英國曼徹斯特
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/工業革命'
  }
]
