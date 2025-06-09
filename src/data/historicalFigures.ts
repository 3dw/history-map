import type { HistoricalFigure } from '@/types'

// 歷史人物資料
export const historicalFigures: HistoricalFigure[] = [
  // 古希臘時期人物
  {
    id: 'thales',
    chineseName: '泰勒斯',
    englishName: 'Thales of Miletus',
    startYear: -624, // 西元前624年
    endYear: -546, // 西元前546年
    coordinates: [37.5167, 27.2833], // 土耳其米利都
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/泰勒斯'
  },
  {
    id: 'socrates',
    chineseName: '蘇格拉底',
    englishName: 'Socrates',
    startYear: -470, // 西元前470年
    endYear: -399, // 西元前399年
    coordinates: [37.9755, 23.7348], // 希臘雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/蘇格拉底'
  },
  {
    id: 'plato',
    chineseName: '柏拉圖',
    englishName: 'Plato',
    startYear: -428, // 西元前428年
    endYear: -348, // 西元前348年
    coordinates: [37.9755, 23.7348], // 希臘雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/柏拉圖'
  },
  {
    id: 'aristotle',
    chineseName: '亞里士多德',
    englishName: 'Aristotle',
    startYear: -384, // 西元前384年
    endYear: -322, // 西元前322年
    coordinates: [40.5169, 23.2132], // 希臘斯塔吉拉
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/亞里士多德'
  },
  {
    id: 'darius-i',
    chineseName: '大流士一世',
    englishName: 'Darius I of Persia',
    startYear: -550, // 西元前550年
    endYear: -486, // 西元前486年
    coordinates: [29.9342, 52.8916], // 伊朗波斯波利斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/大流士一世'
  },

  // 中國古代人物
  {
    id: 'confucius',
    chineseName: '孔子',
    englishName: 'Confucius',
    startYear: -551, // 西元前551年
    endYear: -479, // 西元前479年
    coordinates: [35.6037, 117.0230], // 山東曲阜
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/孔子'
  },
  {
    id: 'qin-shihuang',
    chineseName: '秦始皇',
    englishName: 'Qin Shi Huang',
    startYear: -259, // 西元前259年
    endYear: -210, // 西元前210年
    coordinates: [34.2658, 108.9541], // 西安
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/秦始皇'
  },

  // 中世紀及近代人物
  {
    id: 'marco-polo',
    chineseName: '馬可·波羅',
    englishName: 'Marco Polo',
    startYear: 1254,
    endYear: 1324,
    coordinates: [45.4408, 12.3155], // 威尼斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/馬可·波羅'
  },
  {
    id: 'zheng-he',
    chineseName: '鄭和',
    englishName: 'Zheng He',
    startYear: 1371,
    endYear: 1433,
    coordinates: [25.0478, 121.5319], // 南京附近
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/鄭和'
  },
  {
    id: 'leonardo-da-vinci',
    chineseName: '李奧納多·達文西',
    englishName: 'Leonardo da Vinci',
    startYear: 1452,
    endYear: 1519,
    coordinates: [43.7696, 11.2558], // 義大利佛羅倫斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/李奧納多·達文西'
  },
  {
    id: 'isaac-newton',
    chineseName: '艾薩克·牛頓',
    englishName: 'Isaac Newton',
    startYear: 1643,
    endYear: 1727,
    coordinates: [52.8118, -0.5395], // 英國林肯郡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/艾薩克·牛頓'
  }
]
