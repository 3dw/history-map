import type { MasterWork } from '@/types'

// 數理類別的著作
export const scientificMasterWorks: MasterWork[] = [
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
    id: 'al-kitab-al-mukhtasar-fi-hisab-al-jabr-wal-muqabala',
    chineseName: '代數學',
    englishName: 'The Compendious Book on Calculation by Completion and Balancing',
    author: '花拉子米',
    authorEnglish: 'Muhammad ibn Musa al-Khwarizmi',
    year: 820,
    coordinates: [33.3128, 44.3615], // 巴格達
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/花拉子米',
    category: '數理',
    tags: ['數學', '代數', '伊斯蘭', '花拉子米'],
    description: '伊斯蘭黃金時代數學家花拉子米所著，系統闡述方程解法，開創代數學科，對後世影響深遠。'
  },
  // 熱學相關著作
  {
    id: 'traite-elementaire-de-chimie',
    chineseName: '化學基本論述',
    englishName: 'Traité Élémentaire de Chimie',
    author: '安托萬·拉瓦節',
    authorEnglish: 'Antoine Lavoisier',
    year: 1789,
    coordinates: [48.8566, 2.3522], // 法國巴黎
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/化學基本論述',
    category: '數理',
    tags: ['化學', '熱學', '燃燒理論', '法國', '科學革命'],
    description: '拉瓦節的化學著作，系統闡述了燃燒理論和質量守恆定律，奠定了現代化學的基礎。'
  },
  {
    id: 'on-the-mechanical-equivalent-of-heat',
    chineseName: '論熱的機械當量',
    englishName: 'On the Mechanical Equivalent of Heat',
    author: '詹姆斯·普雷斯科特·焦耳',
    authorEnglish: 'James Prescott Joule',
    year: 1845,
    coordinates: [53.4808, -2.2426], // 英國曼徹斯特
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/詹姆斯·普雷斯科特·焦耳',
    category: '數理',
    tags: ['物理學', '熱學', '能量守恆', '焦耳定律', '英國'],
    description: '焦耳的重要論文，確立了熱和機械功之間的定量關係，為熱力學第一定律奠定基礎。'
  }
]
