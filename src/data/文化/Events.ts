import type { HistoricalEvent } from '@/types'

// 文化類別的歷史事件
export const culturalEvents: HistoricalEvent[] = [
  {
    id: 'founding-of-academy',
    chineseName: '柏拉圖學院創立',
    englishName: 'Founding of Plato\'s Academy',
    startYear: -387,
    endYear: -387,
    coordinates: [37.9755, 23.7348],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/柏拉圖學院',
    category: '文化',
    tags: ['哲學', '古希臘', '雅典'],
    description: '柏拉圖在雅典創立的學院，是西方哲學的重要發源地。'
  },
  {
    id: 'great-wall',
    chineseName: '萬里長城建造',
    englishName: 'Construction of the Great Wall',
    startYear: -220,
    endYear: 1644,
    coordinates: [40.4319, 116.5704],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/萬里長城',
    category: '文化',
    tags: ['長城', '中國', '古代'],
    description: '中國古代的巨大工程，長達萬里，用於防禦外敵。'
  },
  {
    id: 'silk-road',
    chineseName: '絲綢之路開通',
    englishName: 'Opening of the Silk Road',
    startYear: -130,
    endYear: 1453,
    coordinates: [43.2567, 76.9286],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/絲綢之路',
    category: '文化',
    tags: ['絲綢', '絲路', '古代', '中國'],
    description: '連接東西方的重要貿易路線，促進了文化交流和經濟發展。'
  },
  {
    id: 'renaissance',
    chineseName: '文藝復興',
    englishName: 'Renaissance',
    startYear: 1300,
    endYear: 1600,
    coordinates: [43.7, 11.2],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/文藝復興',
    category: '文化',
    tags: ['藝術', '科學', '人文主義', '歐洲'],
    description: '歐洲文化復興運動，促進了藝術、科學和人文主義的發展。'
  },
  {
    id: 'galileo-trial',
    chineseName: '伽利略審判',
    englishName: 'Trial of Galileo',
    startYear: 1633,
    endYear: 1633,
    coordinates: [41.9028, 12.4964],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/伽利略事件',
    category: '文化',
    tags: ['宗教', '政治', '科學', '羅馬'],
    description: '伽利略因支持哥白尼學說而受到宗教裁判所的審判。'
  },
  // 柏拉圖70歲時（公元前358年）的重要文化事件
  {
    id: 'founding-of-lyceum',
    chineseName: '呂克昂學院創立',
    englishName: 'Founding of the Lyceum',
    startYear: -335,
    endYear: -335,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/呂克昂學院',
    category: '文化',
    tags: ['哲學', '教育', '古希臘', '亞里士多德'],
    description: '亞里士多德在雅典創立呂克昂學院，與柏拉圖學院並列為古希臘兩大哲學中心，培養了眾多學者。'
  },
  {
    id: 'hellenistic-age',
    chineseName: '希臘化時代開始',
    englishName: 'Beginning of Hellenistic Age',
    startYear: -323,
    endYear: -323,
    coordinates: [32.0, 44.4], // 巴比倫
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/希臘化時代',
    category: '文化',
    tags: ['文化融合', '希臘化', '亞歷山大大帝', '文化交流'],
    description: '亞歷山大大帝逝世後，希臘文化與東方文化開始融合，開啟了持續三百年的希臘化時代。'
  },
  {
    id: 'library-of-alexandria',
    chineseName: '亞歷山大圖書館建立',
    englishName: 'Foundation of Library of Alexandria',
    startYear: -300,
    endYear: -300,
    coordinates: [31.2001, 29.9187], // 亞歷山大港
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/亞歷山大圖書館',
    category: '文化',
    tags: ['圖書館', '學術', '希臘化', '托勒密王朝'],
    description: '托勒密王朝在亞歷山大港建立圖書館，成為古代世界最大的學術中心，收藏了大量珍貴文獻。'
  },
  {
    id: 'macedonian-phalanx',
    chineseName: '馬其頓方陣發展',
    englishName: 'Development of Macedonian Phalanx',
    startYear: -350,
    endYear: -340,
    coordinates: [40.5169, 23.2132], // 佩拉
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/馬其頓方陣',
    category: '文化',
    tags: ['軍事', '戰術', '馬其頓', '菲利普二世'],
    description: '菲利普二世發展馬其頓方陣戰術，結合長矛和騎兵，成為古代最有效的軍事戰術之一。'
  }
]
