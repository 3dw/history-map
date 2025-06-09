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
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/泰勒斯',
    category: '數理',
    tags: ['哲學家', '古希臘'],
    description: '古希臘哲學家，被認為是西方哲學的奠基者之一。'
  },
  {
    id: 'socrates',
    chineseName: '蘇格拉底',
    englishName: 'Socrates',
    startYear: -470, // 西元前470年
    endYear: -399, // 西元前399年
    coordinates: [37.9755, 23.7348], // 希臘雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/蘇格拉底',
    category: '文化',
    tags: ['哲學家', '思想家', '教育家', '古希臘'],
    description: '古希臘哲學家，被認為是西方哲學的奠基者之一。'
  },
  {
    id: 'plato',
    chineseName: '柏拉圖',
    englishName: 'Plato',
    startYear: -428, // 西元前428年
    endYear: -348, // 西元前348年
    coordinates: [37.9755, 23.7348], // 希臘雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/柏拉圖',
    category: '文化',
    tags: ['哲學家', '思想家', '教育家', '古希臘', '《理想國》'],
    description: '古希臘哲學家，蘇格拉底的學生，亞里士多德的老師。'
  },
  {
    id: 'aristotle',
    chineseName: '亞里士多德',
    englishName: 'Aristotle',
    startYear: -384, // 西元前384年
    endYear: -322, // 西元前322年
    coordinates: [40.5169, 23.2132], // 希臘斯塔吉拉
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/亞里士多德',
    category: '數理',
    tags: ['哲學家', '科學家', '邏輯學', '生物學', '物理學', '古希臘'],
    description: '古希臘哲學家、科學家，被稱為「百科全書式的學者」。'
  },
  {
    id: 'darius-i',
    chineseName: '大流士一世',
    englishName: 'Darius I of Persia',
    startYear: -550, // 西元前550年
    endYear: -486, // 西元前486年
    coordinates: [29.9342, 52.8916], // 伊朗波斯波利斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/大流士一世',
    category: '政治',
    tags: ['波斯帝國', '帝王'],
    description: '波斯帝國的創建者，被稱為「波斯之獅」。'
  },

  // 中國古代人物
  {
    id: 'confucius',
    chineseName: '孔子',
    englishName: 'Confucius',
    startYear: -551, // 西元前551年
    endYear: -479, // 西元前479年
    coordinates: [35.6037, 117.0230], // 山東曲阜
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/孔子',
    category: '文化',
    tags: ['儒家', '思想家', '教育家', '哲學家'],
    description: '中國古代思想家、教育家，儒家學派創始人。'
  },
  {
    id: 'qin-shihuang',
    chineseName: '秦始皇',
    englishName: 'Qin Shi Huang',
    startYear: -259, // 西元前259年
    endYear: -210, // 西元前210年
    coordinates: [34.2658, 108.9541], // 西安
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/秦始皇',
    category: '政治',
    tags: ['秦朝', '帝王'],
    description: '中國歷史上第一位皇帝，統一六國，建立秦朝。'
  },

  // 中世紀及近代人物
  {
    id: 'marco-polo',
    chineseName: '馬可·波羅',
    englishName: 'Marco Polo',
    startYear: 1254,
    endYear: 1324,
    coordinates: [45.4408, 12.3155], // 威尼斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/馬可·波羅',
    category: '探險',
    tags: ['探險家', '旅行家', '威尼斯人'],
    description: '義大利旅行家，著有《東方見聞錄》，描述了他在中國的見聞。'
  },
  {
    id: 'zheng-he',
    chineseName: '鄭和',
    englishName: 'Zheng He',
    startYear: 1371,
    endYear: 1433,
    coordinates: [25.0478, 121.5319], // 南京附近
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/鄭和',
    category: '探險',
    tags: ['探險家', '旅行家', '中國人'],
    description: '中國明朝的航海家，七次下西洋，開創了中國古代航海史上的壯舉。'
  },
  {
    id: 'leonardo-da-vinci',
    chineseName: '李奧納多·達文西',
    englishName: 'Leonardo da Vinci',
    startYear: 1452,
    endYear: 1519,
    coordinates: [43.7696, 11.2558], // 義大利佛羅倫斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/李奧納多·達文西',
    category: '藝術',
    tags: ['藝術家', '畫家', '雕塑家', '發明家', '古義大利'],
    description: '義大利藝術家、畫家、雕塑家，被稱為「文藝復興時期最後一位全才」。'
  },

  // 科學革命時代人物
  {
    id: 'copernicus',
    chineseName: '尼古拉·哥白尼',
    englishName: 'Nicolaus Copernicus',
    startYear: 1473,
    endYear: 1543,
    coordinates: [54.3520, 18.6466], // 波蘭托倫
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/尼古拉·哥白尼',
    category: '數理',
    tags: ['天文學家', '數學家', '科學革命', '地心說'],
    description: '波蘭天文學家，提出了日心說，推翻了地心說。'
  },
  {
    id: 'kepler',
    chineseName: '約翰尼斯·開普勒',
    englishName: 'Johannes Kepler',
    startYear: 1571,
    endYear: 1630,
    coordinates: [48.7758, 9.1829], // 德國魏爾
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/約翰尼斯·開普勒',
    category: '數理',
    tags: ['天文學家', '數學家', '科學革命', '行星運動'],
    description: '德國天文學家、數學家，提出了開普勒定律，描述了行星運動的規律。'
  },
  {
    id: 'galileo',
    chineseName: '伽利略·伽利萊',
    englishName: 'Galileo Galilei',
    startYear: 1564,
    endYear: 1642,
    coordinates: [43.7230, 10.4017], // 義大利比薩
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/伽利略·伽利萊',
    category: '數理',
    tags: ['物理學家', '天文學家', '數學家', '科學革命', '望遠鏡'],
    description: '義大利物理學家、天文學家，被稱為「現代科學之父」。'
  },
  {
    id: 'leibniz',
    chineseName: '戈特弗里德·萊布尼茲',
    englishName: 'Gottfried Wilhelm Leibniz',
    startYear: 1646,
    endYear: 1716,
    coordinates: [52.3705, 9.7332], // 德國漢諾威
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/戈特弗里德·萊布尼茲',
    category: '數理',
    tags: ['數學家', '哲學家', '微積分'],
    description: '德國數學家、哲學家，發明了微積分。'
  },
  {
    id: 'jakob-bernoulli',
    chineseName: '雅各布·白努利',
    englishName: 'Jakob Bernoulli',
    startYear: 1654,
    endYear: 1705,
    coordinates: [47.5596, 7.5886], // 瑞士巴塞爾
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/雅各布·白努利',
    category: '數理',
    tags: ['數學家', '概率論'],
    description: '瑞士數學家，提出了伯努利定理和概率論的基本原理。'
  },
  {
    id: 'isaac-newton',
    chineseName: '艾薩克·牛頓',
    englishName: 'Isaac Newton',
    startYear: 1643,
    endYear: 1727,
    coordinates: [52.8118, -0.5395], // 英國林肯郡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/艾薩克·牛頓',
    category: '數理',
    tags: ['物理學家', '數學家', '天文學家', '萬有引力', '微積分'],
    description: '英國物理學家、數學家，被稱為「現代物理學之父」。'
  },
  {
    id: 'laozi',
    chineseName: '老子',
    englishName: 'Laozi',
    startYear: -600,
    endYear: -500,
    coordinates: [34.7, 113.6],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/老子',
    category: '文化',
    tags: ['道家', '思想家', '哲學家', '《道德經》'],
    description: '中國古代思想家，道家學派創始人，《道德經》作者。'
  },
  {
    id: 'archimedes',
    chineseName: '阿基米德',
    englishName: 'Archimedes',
    startYear: -287,
    endYear: -212,
    coordinates: [37.5, 15.1],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/阿基米德',
    category: '數理',
    tags: ['數學家', '物理學家', '工程師', '發明家', '古希臘'],
    description: '古希臘數學家、物理學家、工程師，被稱為「古代最偉大的數學家」。'
  },
  {
    id: 'euclid',
    chineseName: '歐幾里得',
    englishName: 'Euclid',
    startYear: -300,
    endYear: -200,
    coordinates: [31.2, 29.9],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/歐幾里得',
    category: '數理',
    tags: ['數學家', '幾何學', '《幾何原本》', '古希臘'],
    description: '古希臘數學家，被稱為「幾何學之父」。'
  },
  {
    id: 'ptolemy',
    chineseName: '托勒密',
    englishName: 'Ptolemy',
    startYear: 100,
    endYear: 170,
    coordinates: [31.2, 29.9],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/克勞狄烏斯·托勒密',
    category: '數理',
    tags: ['天文學家', '地理學家', '數學家', '古羅馬'],
    description: '古羅馬天文學家、地理學家，地心說的主要支持者。'
  },
  {
    id: 'zu-chongzhi',
    chineseName: '祖沖之',
    englishName: 'Zu Chongzhi',
    startYear: 429,
    endYear: 500,
    coordinates: [32.0, 118.8], // 南京附近
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/祖沖之',
    category: '數理',
    tags: ['數學家', '天文學家', '中國', '南北朝'],
    description: '中國南北朝時期數學家、天文學家，計算出圓周率到小數點後七位。'
  },
  {
    id: 'leonhard-euler',
    chineseName: '萊昂哈德·歐拉',
    englishName: 'Leonhard Euler',
    startYear: 1707,
    endYear: 1783,
    coordinates: [47.5596, 7.5886], // 瑞士巴塞爾
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/萊昂哈德·歐拉',
    category: '數理',
    tags: ['數學家', '物理學家', '瑞士', '歐拉公式'],
    description: '瑞士數學家、物理學家，被稱為「數學之王」，對現代數學有重大貢獻。'
  },
  {
    id: 'carl-friedrich-gauss',
    chineseName: '卡爾·弗里德里希·高斯',
    englishName: 'Carl Friedrich Gauss',
    startYear: 1777,
    endYear: 1855,
    coordinates: [52.3759, 9.7320], // 德國不倫瑞克
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/卡爾·弗里德里希·高斯',
    category: '數理',
    tags: ['數學家', '物理學家', '天文學家', '德國', '高斯分布'],
    description: '德國數學家、物理學家、天文學家，被稱為「數學王子」。'
  },
  {
    id: 'evariste-galois',
    chineseName: '埃瓦里斯特·伽羅瓦',
    englishName: 'Évariste Galois',
    startYear: 1811,
    endYear: 1832,
    coordinates: [48.8566, 2.3522], // 法國巴黎
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/埃瓦里斯特·伽羅瓦',
    category: '數理',
    tags: ['數學家', '法國', '伽羅瓦理論', '群論'],
    description: '法國數學家，創立了伽羅瓦理論，為代數方程的可解性提供了判別方法。'
  }
]
