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
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/希波戰爭',
    category: '政治',
    tags: ['戰爭', '古希臘', '波斯'],
    description: '古希臘與波斯帝國之間的戰爭，對西方歷史產生深遠影響。'
  },
  {
    id: 'battle-of-marathon',
    chineseName: '馬拉松戰役',
    englishName: 'Battle of Marathon',
    startYear: -490, // 西元前490年
    endYear: -490, // 單一事件
    coordinates: [38.1547, 24.0133], // 希臘馬拉松
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/馬拉松戰役',
    category: '政治',
    tags: ['戰爭', '古希臘', '雅典'],
    description: '雅典軍隊在馬拉松平原擊敗波斯軍隊的戰役。'
  },
  {
    id: 'battle-of-thermopylae',
    chineseName: '溫泉關戰役',
    englishName: 'Battle of Thermopylae',
    startYear: -480, // 西元前480年
    endYear: -480, // 單一事件
    coordinates: [38.7967, 22.5361], // 希臘溫泉關
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/溫泉關戰役',
    category: '政治',
    tags: ['戰爭', '古希臘', '斯巴達'],
    description: '斯巴達軍隊在溫泉關擊退波斯軍隊的戰役。'
  },
  {
    id: 'founding-of-academy',
    chineseName: '柏拉圖學院創立',
    englishName: 'Founding of Plato\'s Academy',
    startYear: -387, // 西元前387年
    endYear: -387, // 單一事件
    coordinates: [37.9755, 23.7348], // 希臘雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/柏拉圖學院',
    category: '文化',
    tags: ['哲學', '古希臘', '雅典'],
    description: '柏拉圖在雅典創立的學院，是西方哲學的重要發源地。'
  },
  {
    id: 'peloponnesian-war',
    chineseName: '伯羅奔尼撒戰爭',
    englishName: 'Peloponnesian War',
    startYear: -431,
    endYear: -404,
    coordinates: [37.9, 23.7],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/伯羅奔尼撒戰爭',
    category: '政治',
    tags: ['戰爭', '古希臘', '雅典', '斯巴達'],
    description: '古希臘城邦之間的戰爭，最終導致雅典的衰落。'
  },
  {
    id: 'alexander-conquest',
    chineseName: '亞歷山大東征',
    englishName: 'Alexander the Great\'s Conquest',
    startYear: -334,
    endYear: -323,
    coordinates: [40.6, 22.9],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/亞歷山大東征',
    category: '政治',
    tags: ['戰爭', '征服', '古希臘', '馬其頓'],
    description: '亞歷山大大帝率領馬其頓軍隊征服波斯帝國的戰爭。'
  },
  {
    id: 'roman-empire-fall',
    chineseName: '羅馬帝國滅亡',
    englishName: 'Fall of the Roman Empire',
    startYear: 476,
    coordinates: [41.9, 12.5],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/西羅馬帝國滅亡',
    category: '政治',
    tags: ['帝國', '滅亡', '古羅馬', '中世紀'],
    description: '西羅馬帝國滅亡，標誌著古代歐洲的結束和中世紀的開始。'
  },

  // 中國古代事件
  {
    id: 'great-wall',
    chineseName: '萬里長城建造',
    englishName: 'Construction of the Great Wall',
    startYear: -220, // 西元前220年開始大規模建造
    endYear: 1644, // 明朝結束
    coordinates: [40.4319, 116.5704], // 北京八達嶺
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/萬里長城',
    category: '文化',
    tags: ['長城', '中國', '古代'],
    description: '中國古代的巨大工程，長達萬里，用於防禦外敵。'
  },
  {
    id: 'silk-road',
    chineseName: '絲綢之路開通',
    englishName: 'Opening of the Silk Road',
    startYear: -130, // 西元前130年左右
    endYear: 1453, // 奧斯曼帝國佔領君士坦丁堡
    coordinates: [43.2567, 76.9286], // 阿拉木圖（古代重要節點）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/絲綢之路',
    category: '文化',
    tags: ['絲綢', '絲路', '古代', '中國'],
    description: '連接東西方的重要貿易路線，促進了文化交流和經濟發展。'
  },

  // 中世紀及近代事件
  {
    id: 'black-death',
    chineseName: '黑死病大流行',
    englishName: 'Black Death Pandemic',
    startYear: 1347,
    endYear: 1353,
    coordinates: [45.4642, 9.1900],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/黑死病',
    category: '科技',
    tags: ['疾病', '歐洲', '中世紀', '醫學'],
    description: '14世紀歐洲爆發的大規模傳染病，造成大量人口死亡。'
  },
  {
    id: 'columbus-discovery',
    chineseName: '哥倫布發現美洲',
    englishName: 'Columbus Discovers America',
    startYear: 1492,
    endYear: 1492, // 單一事件
    coordinates: [25.0343, -77.3963], // 巴哈馬群島
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/克里斯托弗·哥倫布',
    category: '探險',
    tags: ['探索', '新大陸', '歐洲'],
    description: '哥倫布在1492年發現了新大陸，開啟了歐洲人對美洲的探索。'
  },
  {
    id: 'printing-press',
    chineseName: '古騰堡印刷術發明',
    englishName: 'Invention of the Printing Press',
    startYear: 1440,
    endYear: 1440, // 單一事件
    coordinates: [49.9929, 8.2473], // 德國美因茲
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/約翰內斯·古騰堡',
    category: '科技',
    tags: ['印刷', '德國', '中世紀'],
    description: '古騰堡發明的印刷術，對文化和知識的傳播產生了革命性的影響。'
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

  // 科學革命時代事件
  {
    id: 'copernican-revolution',
    chineseName: '哥白尼革命',
    englishName: 'Copernican Revolution',
    startYear: 1543,
    endYear: 1687,
    coordinates: [54.3520, 18.6466],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/哥白尼革命',
    category: '數理',
    tags: ['天文學', '物理學', '數學', '科學方法'],
    description: '哥白尼提出的日心說，推翻了地心說的傳統觀念。'
  },
  {
    id: 'galileo-telescope-observations',
    chineseName: '伽利略望遠鏡觀測',
    englishName: 'Galileo\'s Telescope Observations',
    startYear: 1609,
    endYear: 1610,
    coordinates: [45.4408, 12.3155],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/伽利略望遠鏡',
    category: '數理',
    tags: ['天文學', '物理學', '數學', '科學方法'],
    description: '伽利略使用望遠鏡進行的天文觀測，證實了哥白尼學說。'
  },
  {
    id: 'galileo-trial',
    chineseName: '伽利略審判',
    englishName: 'Trial of Galileo',
    startYear: 1633,
    endYear: 1633, // 單一事件
    coordinates: [41.9028, 12.4964], // 義大利羅馬
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/伽利略事件',
    category: '文化',
    tags: ['宗教', '政治', '科學', '羅馬'],
    description: '伽利略因支持哥白尼學說而受到宗教裁判所的審判。'
  },
  {
    id: 'invention-of-calculus',
    chineseName: '微積分發明',
    englishName: 'Invention of Calculus',
    startYear: 1665,
    endYear: 1676,
    coordinates: [52.2053, 0.1218],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/微積分',
    category: '數理',
    tags: ['數學', '科學方法', '英國'],
    description: '牛頓和萊布尼茲獨立發現微積分學，對現代數學和物理學有重要影響。'
  },
  {
    id: 'scientific-revolution',
    chineseName: '科學革命',
    englishName: 'Scientific Revolution',
    startYear: 1543,
    endYear: 1687,
    coordinates: [52.2, 0.1],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/科學革命',
    category: '數理',
    tags: ['天文學', '物理學', '數學', '科學方法'],
    description: '現代科學的誕生時期，以哥白尼、伽利略、牛頓等人的發現為代表。'
  },
  {
    id: 'discovery-of-gravity',
    chineseName: '萬有引力定律發現',
    englishName: 'Discovery of Universal Gravitation',
    startYear: 1687,
    endYear: 1687,
    coordinates: [52.2053, 0.1218],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/萬有引力定律',
    category: '數理',
    tags: ['物理學', '數學', '科學方法', '英國'],
    description: '牛頓發現的萬有引力定律，奠定了古典力學的基礎。'
  },
  {
    id: 'industrial-revolution',
    chineseName: '工業革命',
    englishName: 'Industrial Revolution',
    startYear: 1760,
    endYear: 1840,
    coordinates: [53.4, -2.2],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/工業革命',
    category: '社會',
    tags: ['科技', '經濟', '社會變革', '英國'],
    description: '從手工業生產轉向機器生產的社會經濟變革。'
  },
  {
    id: 'french-revolution',
    chineseName: '法國大革命',
    englishName: 'French Revolution',
    startYear: 1789,
    endYear: 1799,
    coordinates: [48.8, 2.3],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/法國大革命',
    category: '政治',
    tags: ['革命', '民主', '自由', '平等'],
    description: '推翻君主專制，建立共和制度的政治革命。'
  },
  {
    id: 'world-war-1',
    chineseName: '第一次世界大戰',
    englishName: 'World War I',
    startYear: 1914,
    endYear: 1918,
    coordinates: [50.8, 4.4],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/第一次世界大戰',
    category: '政治',
    tags: ['戰爭', '全球衝突', '現代化戰爭'],
    description: '第一次全球規模的現代化戰爭。'
  },
  {
    id: 'world-war-2',
    chineseName: '第二次世界大戰',
    englishName: 'World War II',
    startYear: 1939,
    endYear: 1945,
    coordinates: [52.5, 13.4],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/第二次世界大戰',
    category: '政治',
    tags: ['戰爭', '全球衝突', '現代化戰爭', '冷戰'],
    description: '人類歷史上規模最大的戰爭，導致冷戰時期的開始。'
  },
  {
    id: 'cold-war',
    chineseName: '冷戰',
    englishName: 'Cold War',
    startYear: 1947,
    endYear: 1991,
    coordinates: [55.7, 37.6],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/冷戰',
    category: '政治',
    tags: ['意識形態', '核武競賽', '美蘇對抗'],
    description: '美國和蘇聯之間的意識形態對抗時期。'
  }
]
