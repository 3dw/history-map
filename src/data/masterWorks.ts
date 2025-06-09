import type { MasterWork } from '@/types'

// 傳世之作資料
export const masterWorks: MasterWork[] = [
  // 中國古典經典
  {
    id: 'i-ching',
    chineseName: '周易',
    englishName: 'I Ching (Book of Changes)',
    author: '周文王',
    authorEnglish: 'King Wen of Zhou',
    year: -1000, // 約西元前1000年
    coordinates: [34.2658, 108.9541], // 中國陝西西安（周朝都城）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/易經',
    category: '文化',
    tags: ['哲學', '中國', '古代'],
    description: '中國古代最重要的哲學著作之一。'
  },
  {
    id: 'tao-te-ching',
    chineseName: '道德經',
    englishName: 'Tao Te Ching',
    author: '老子',
    authorEnglish: 'Laozi',
    year: -500, // 約西元前500年
    coordinates: [33.8818, 113.1142], // 中國河南鹿邑（老子故里）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/道德經',
    category: '文化',
    tags: ['哲學', '中國', '古代'],
    description: '中國古代最重要的哲學著作之一。'
  },
  {
    id: 'analects',
    chineseName: '論語',
    englishName: 'Analects of Confucius',
    author: '孔子',
    authorEnglish: 'Confucius',
    year: -500,
    coordinates: [35.4, 116.6],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/論語',
    category: '文化',
    tags: ['儒家', '哲學', '中國', '古代'],
    description: '記錄孔子及其弟子言行的儒家經典著作。'
  },

  // 宗教經典
  {
    id: 'new-testament',
    chineseName: '新約聖經',
    englishName: 'New Testament',
    author: '耶穌的門徒',
    authorEnglish: 'Disciples of Jesus',
    year: 100, // 約西元100年完成
    coordinates: [31.7683, 35.2137], // 耶路撒冷
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/新約聖經',
    category: '文化',
    tags: ['基督教', '聖經', '耶穌', '宗教'],
    description: '基督教最重要的經典著作之一。'
  },

  // 文學經典
  {
    id: 'divine-comedy',
    chineseName: '神曲',
    englishName: 'Divine Comedy',
    author: '但丁',
    authorEnglish: 'Dante Alighieri',
    year: 1320, // 約1320年完成
    coordinates: [43.7, 11.2],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/神曲',
    category: '文化',
    tags: ['文學', '詩歌', '中世紀', '義大利'],
    description: '但丁的史詩作品，描繪了地獄、煉獄和天堂的旅程。'
  },
  {
    id: 'hamlet',
    chineseName: '哈姆雷特',
    englishName: 'Hamlet',
    author: '莎士比亞',
    authorEnglish: 'William Shakespeare',
    year: 1601,
    coordinates: [51.5, -0.1],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/哈姆雷特',
    category: '文化',
    tags: ['戲劇', '文學', '英國', '文藝復興'],
    description: '莎士比亞最著名的悲劇作品。'
  },

  // 經濟學經典
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
    coordinates: [51.5074, -0.1278], // 英國倫敦（馬克思寫作地）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/資本論',
    category: '社會',
    tags: ['經濟學', '社會主義', '馬克思主義', '德國'],
    description: '馬克思主義的經濟學著作。'
  },

  // 科學經典
  {
    id: 'de-revolutionibus',
    chineseName: '天體運行論',
    englishName: 'On the Revolutions of the Heavenly Spheres',
    author: '哥白尼',
    authorEnglish: 'Nicolaus Copernicus',
    year: 1543,
    coordinates: [53.1, 18.0],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/天體運行論',
    category: '數理',
    tags: ['天文學', '科學革命', '波蘭', '文藝復興'],
    description: '哥白尼提出日心說的天文學著作。'
  },
  {
    id: 'astronomia-nova',
    chineseName: '新天文學',
    englishName: 'Astronomia Nova',
    author: '約翰尼斯·開普勒',
    authorEnglish: 'Johannes Kepler',
    year: 1609,
    coordinates: [48.7758, 9.1829],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/新天文學',
    category: '數理',
    tags: ['天文學', '數學', '科學革命', '德國'],
    description: '開普勒的行星運動定律著作。'
  },
  {
    id: 'sidereus-nuncius',
    chineseName: '星際信使',
    englishName: 'Sidereus Nuncius',
    author: '伽利略·伽利萊',
    authorEnglish: 'Galileo Galilei',
    year: 1610,
    coordinates: [43.7230, 10.4017],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/星際信使',
    category: '數理',
    tags: ['天文學', '科學革命', '義大利', '伽利略'],
    description: '伽利略發現木星的四顆衛星。'
  },
  {
    id: 'dialogue-concerning-two-chief-world-systems',
    chineseName: '關於托勒密和哥白尼兩大世界體系的對話',
    englishName: 'Dialogue Concerning the Two Chief World Systems',
    author: '伽利略·伽利萊',
    authorEnglish: 'Galileo Galilei',
    year: 1632,
    coordinates: [43.7696, 11.2558],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/關於托勒密和哥白尼兩大世界體系的對話',
    category: '數理',
    tags: ['天文學', '地心說', '日心說', '伽利略'],
    description: '伽利略對托勒密和哥白尼兩大世界體系的對話。'
  },
  {
    id: 'monadology',
    chineseName: '單子論',
    englishName: 'Monadology',
    author: '戈特弗里德·萊布尼茲',
    authorEnglish: 'Gottfried Wilhelm Leibniz',
    year: 1714,
    coordinates: [52.3705, 9.7332], // 德國漢諾威
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/單子論',
    category: '文化',
    tags: ['哲學', '德國', '萊布尼茲'],
    description: '萊布尼茲的哲學著作，探討單子論。'
  },
  {
    id: 'ars-conjectandi',
    chineseName: '推測術',
    englishName: 'Ars Conjectandi',
    author: '雅各布·白努利',
    authorEnglish: 'Jakob Bernoulli',
    year: 1713,
    coordinates: [47.5596, 7.5886],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/推測術',
    category: '數理',
    tags: ['數學', '概率論', '瑞士', '雅各布·白努利'],
    description: '白努利關於推測術的著作。'
  },
  {
    id: 'principia',
    chineseName: '自然哲學的數學原理',
    englishName: 'Mathematical Principles of Natural Philosophy',
    author: '牛頓',
    authorEnglish: 'Isaac Newton',
    year: 1687,
    coordinates: [52.2, 0.1],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/自然哲學的數學原理',
    category: '數理',
    tags: ['物理學', '數學', '科學革命', '英國'],
    description: '牛頓的物理學著作，奠定了古典力學的基礎。'
  },
  {
    id: 'origin-of-species',
    chineseName: '物種起源',
    englishName: 'On the Origin of Species',
    author: '查爾斯·達爾文',
    authorEnglish: 'Charles Darwin',
    year: 1859,
    coordinates: [51.5, -0.1],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/物種起源',
    category: '數理',
    tags: ['生物學', '進化論', '科學革命', '英國'],
    description: '達爾文提出進化論的科學著作。'
  },
  {
    id: 'art-of-war',
    chineseName: '孫子兵法',
    englishName: 'The Art of War',
    author: '孫武',
    authorEnglish: 'Sun Tzu',
    year: -500,
    coordinates: [31.2, 120.6],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/孫子兵法',
    category: '政治',
    tags: ['軍事', '戰略', '中國', '古代'],
    description: '中國古代最重要的軍事理論著作。'
  },
  {
    id: 'republic',
    chineseName: '理想國',
    englishName: 'The Republic',
    author: '柏拉圖',
    authorEnglish: 'Plato',
    year: -380,
    coordinates: [37.9, 23.7],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/理想國',
    category: '文化',
    tags: ['哲學', '政治', '古希臘', '雅典'],
    description: '柏拉圖最重要的哲學著作，探討理想社會的構建。'
  },
  {
    id: 'elements',
    chineseName: '幾何原本',
    englishName: 'Elements',
    author: '歐幾里得',
    authorEnglish: 'Euclid',
    year: -300,
    coordinates: [31.2, 29.9],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/幾何原本',
    category: '數理',
    tags: ['數學', '幾何', '古希臘', '亞歷山大'],
    description: '歐幾里得編纂的幾何學經典著作。'
  },
  {
    id: 'almagest',
    chineseName: '天文學大成',
    englishName: 'Almagest',
    author: '托勒密',
    authorEnglish: 'Ptolemy',
    year: 150,
    coordinates: [31.2, 29.9],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/天文學大成',
    category: '數理',
    tags: ['天文學', '數學', '古希臘', '亞歷山大'],
    description: '托勒密的天文學著作，建立了地心說體系。'
  },
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
  },
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
    id: 'discourse-on-method',
    chineseName: '方法論',
    englishName: 'Discourse on the Method',
    author: '笛卡爾',
    authorEnglish: 'René Descartes',
    year: 1637,
    coordinates: [48.8, 2.3],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/方法論',
    category: '文化',
    tags: ['哲學', '數學', '科學方法', '法國'],
    description: '笛卡爾的哲學著作，提出了理性主義的方法論。'
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
  }
]
