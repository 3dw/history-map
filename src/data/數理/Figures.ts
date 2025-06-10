import type { HistoricalFigure } from '@/types'

// 數理類別的歷史人物
export const scientificFigures: HistoricalFigure[] = [
  {
    id: 'thales',
    chineseName: '泰勒斯',
    englishName: 'Thales of Miletus',
    startYear: -624,
    endYear: -546,
    coordinates: [37.5167, 27.2833],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/泰勒斯',
    category: '數理',
    tags: ['哲學家', '古希臘'],
    description: '古希臘哲學家，被認為是西方哲學的奠基者之一。'
  },
  {
    id: 'aristotle',
    chineseName: '亞里士多德',
    englishName: 'Aristotle',
    startYear: -384,
    endYear: -322,
    coordinates: [40.5169, 23.2132],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/亞里士多德',
    category: '數理',
    tags: ['哲學家', '科學家', '邏輯學', '生物學', '物理學', '古希臘'],
    description: '古希臘哲學家、科學家，被稱為「百科全書式的學者」。'
  },
  {
    id: 'copernicus',
    chineseName: '尼古拉·哥白尼',
    englishName: 'Nicolaus Copernicus',
    startYear: 1473,
    endYear: 1543,
    coordinates: [54.3520, 18.6466],
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
    coordinates: [48.7758, 9.1829],
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
    coordinates: [43.7230, 10.4017],
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
    coordinates: [52.3705, 9.7332],
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
    coordinates: [47.5596, 7.5886],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/雅各布·白努利',
    category: '數理',
    tags: ['數學家', '概率論'],
    description: '瑞士數學家，提出了伯努利定理和概率論的基本原理。'
  },
  {
    id: 'johann-bernoulli',
    chineseName: '約翰·白努利',
    englishName: 'Johann Bernoulli',
    startYear: 1667,
    endYear: 1748,
    coordinates: [47.5596, 7.5886], // 瑞士巴塞爾
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/約翰·白努利',
    category: '數理',
    tags: ['數學家', '物理學家', '微積分', '變分法', '瑞士'],
    description: '瑞士數學家和物理學家，雅各布·白努利的弟弟，在微積分和變分法方面有重要貢獻，培養了歐拉等著名數學家。'
  },
  {
    id: 'isaac-newton',
    chineseName: '艾薩克·牛頓',
    englishName: 'Isaac Newton',
    startYear: 1643,
    endYear: 1727,
    coordinates: [52.8118, -0.5395],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/艾薩克·牛頓',
    category: '數理',
    tags: ['物理學家', '數學家', '天文學家', '萬有引力', '微積分'],
    description: '英國物理學家、數學家，被稱為「現代物理學之父」。'
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
    coordinates: [32.0, 118.8],
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
    coordinates: [47.5596, 7.5886],
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
    coordinates: [52.3759, 9.7320],
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
    coordinates: [48.8566, 2.3522],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/埃瓦里斯特·伽羅瓦',
    category: '數理',
    tags: ['數學家', '法國', '伽羅瓦理論', '群論'],
    description: '法國數學家，創立了伽羅瓦理論，為代數方程的可解性提供了判別方法。'
  },
  {
    id: 'al-khwarizmi',
    chineseName: '花拉子米',
    englishName: 'Muhammad ibn Musa al-Khwarizmi',
    startYear: 780,
    endYear: 850,
    coordinates: [33.3, 44.4],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/花拉子米',
    category: '數理',
    tags: ['數學家', '天文學家', '代數之父', '伊斯蘭'],
    description: '寫成《代數學》，系統闡述方程解法，引入"al‑jabr"，開創代數學科。'
  },
  {
    id: 'roger-bacon',
    chineseName: '羅傑·培根',
    englishName: 'Roger Bacon',
    startYear: 1214,
    endYear: 1294,
    coordinates: [51.0, -2.7], // 英格蘭薩默塞特郡伊爾切斯特
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/羅吉爾·培根',
    category: '數理',
    tags: ['哲學家', '科學家', '放大鏡', '光學', '英國', '中世紀'],
    description: '英格蘭哲學家和科學家，被認為是放大鏡的發明者，在光學和實驗科學方面有重要貢獻。'
  },
  {
    id: 'albert-einstein',
    chineseName: '阿爾伯特·愛因斯坦',
    englishName: 'Albert Einstein',
    startYear: 1879,
    endYear: 1955,
    coordinates: [48.7758, 9.1829],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/阿爾伯特·愛因斯坦',
    category: '數理',
    tags: ['物理學家', '相對論', '諾貝爾獎', '德國', '美國'],
    description: '德國出生的理論物理學家，發展了相對論，被認為是現代物理學最重要的科學家之一。'
  },
  // 著名女性數理人物
  {
    id: 'marie-curie',
    chineseName: '瑪麗·居里',
    englishName: 'Marie Curie',
    startYear: 1867,
    endYear: 1934,
    coordinates: [52.2297, 21.0122], // 華沙
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/瑪麗·居里',
    category: '數理',
    tags: ['物理學家', '化學家', '諾貝爾獎', '放射性', '波蘭', '法國'],
    description: '波蘭裔法國物理學家和化學家，發現鐳和釙元素，兩次獲得諾貝爾獎，是第一位獲得諾貝爾獎的女性。'
  },
  {
    id: 'emmy-noether',
    chineseName: '艾米·諾特',
    englishName: 'Emmy Noether',
    startYear: 1882,
    endYear: 1935,
    coordinates: [50.1109, 8.6821], // 法蘭克福
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/艾米·諾特',
    category: '數理',
    tags: ['數學家', '代數', '理論物理', '德國', '猶太人'],
    description: '德國數學家，被愛因斯坦稱為「數學史上最重要的女性」，在抽象代數和理論物理領域有重大貢獻。'
  },
  {
    id: 'sophie-germain',
    chineseName: '索菲·熱爾曼',
    englishName: 'Sophie Germain',
    startYear: 1776,
    endYear: 1831,
    coordinates: [48.8566, 2.3522], // 巴黎
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/索菲·熱爾曼',
    category: '數理',
    tags: ['數學家', '數論', '彈性理論', '法國'],
    description: '法國數學家，在數論和彈性理論方面有重要貢獻，是第一位在巴黎科學院發表論文的女性。'
  },
  {
    id: 'katherine-johnson',
    chineseName: '凱瑟琳·約翰遜',
    englishName: 'Katherine Johnson',
    startYear: 1918,
    endYear: 2020,
    coordinates: [37.5407, -77.4360], // 維吉尼亞
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/凱瑟琳·約翰遜',
    category: '數理',
    tags: ['數學家', 'NASA', '太空計劃', '非裔美國人', '計算機'],
    description: '美國數學家，在NASA工作期間為阿波羅登月計劃進行軌道計算，是電影《關鍵少數》的原型人物之一。'
  },
  // 化學家
  {
    id: 'robert-boyle',
    chineseName: '羅伯特·波義耳',
    englishName: 'Robert Boyle',
    startYear: 1627,
    endYear: 1691,
    coordinates: [53.3498, -6.2603], // 愛爾蘭都柏林
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/羅伯特·波義耳',
    category: '數理',
    tags: ['化學家', '物理學家', '波義耳定律', '英國', '科學革命'],
    description: '愛爾蘭化學家、物理學家，被稱為「現代化學之父」，發現了波義耳定律，建立了化學的實驗方法。'
  },
  {
    id: 'evangelista-torricelli',
    chineseName: '埃萬傑利斯塔·托里切利',
    englishName: 'Evangelista Torricelli',
    startYear: 1608,
    endYear: 1647,
    coordinates: [43.7230, 10.4017], // 義大利佛羅倫斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/埃萬傑利斯塔·托里切利',
    category: '數理',
    tags: ['物理學家', '數學家', '氣壓計', '義大利', '科學革命'],
    description: '義大利物理學家和數學家，發明了氣壓計，證明了空氣有重量，對流體力學有重要貢獻。'
  },
  // 電學家
  {
    id: 'michael-faraday',
    chineseName: '麥可·法拉第',
    englishName: 'Michael Faraday',
    startYear: 1791,
    endYear: 1867,
    coordinates: [51.5074, -0.1278], // 倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/麥可·法拉第',
    category: '數理',
    tags: ['物理學家', '化學家', '電磁學', '電磁感應', '英國'],
    description: '英國物理學家和化學家，發現了電磁感應現象，建立了電磁學的基礎理論，被稱為「電學之父」。'
  },
  {
    id: 'andre-marie-ampere',
    chineseName: '安德烈-瑪麗·安培',
    englishName: 'André-Marie Ampère',
    startYear: 1775,
    endYear: 1836,
    coordinates: [45.7640, 4.8357], // 法國里昂
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/安德烈-瑪麗·安培',
    category: '數理',
    tags: ['物理學家', '數學家', '電磁學', '安培定律', '法國'],
    description: '法國物理學家和數學家，建立了電磁學的數學理論，發現了安培定律，電流單位以他的名字命名。'
  },
  {
    id: 'james-clerk-maxwell',
    chineseName: '詹姆斯·克拉克·馬克士威',
    englishName: 'James Clerk Maxwell',
    startYear: 1831,
    endYear: 1879,
    coordinates: [55.9533, -3.1883], // 蘇格蘭愛丁堡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/詹姆斯·克拉克·馬克士威',
    category: '數理',
    tags: ['物理學家', '數學家', '電磁學', '馬克士威方程', '蘇格蘭'],
    description: '蘇格蘭物理學家和數學家，建立了電磁學的統一理論，提出了馬克士威方程組，為現代物理學奠定基礎。'
  },
  // 熱學相關科學家
  {
    id: 'antoine-lavoisier',
    chineseName: '安托萬·拉瓦節',
    englishName: 'Antoine Lavoisier',
    startYear: 1743,
    endYear: 1794,
    coordinates: [48.8566, 2.3522], // 法國巴黎
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/安托萬·拉瓦節',
    category: '數理',
    tags: ['化學家', '物理學家', '熱學', '燃燒理論', '法國', '科學革命'],
    description: '法國化學家，被稱為「現代化學之父」，發現了燃燒的本質，建立了質量守恆定律，對熱學和化學有重要貢獻。'
  },
  {
    id: 'james-prescott-joule',
    chineseName: '詹姆斯·普雷斯科特·焦耳',
    englishName: 'James Prescott Joule',
    startYear: 1818,
    endYear: 1889,
    coordinates: [53.4808, -2.2426], // 英國曼徹斯特
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/詹姆斯·普雷斯科特·焦耳',
    category: '數理',
    tags: ['物理學家', '熱學', '能量守恆', '焦耳定律', '英國'],
    description: '英國物理學家，發現了熱和機械功之間的關係，建立了能量守恆定律，熱量單位以他的名字命名。'
  }
]
