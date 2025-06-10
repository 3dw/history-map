import type { HistoricalFigure } from '@/types'

// 科技類別的歷史人物
export const techFigures: HistoricalFigure[] = [
  // 公輸般（魯班）(公元前507年-公元前444年)
  {
    id: 'gongshu-ban',
    chineseName: '公輸般',
    englishName: 'Gongshu Ban',
    startYear: -507,
    endYear: -444,
    coordinates: [35.4, 116.6], // 魯國（今山東）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/魯班',
    category: '科技',
    tags: ['工匠', '發明家', '建築師', '木工', '春秋戰國', '魯國'],
    description: '中國古代著名工匠和發明家，被尊為「木工祖師」，發明了鋸子、墨斗、曲尺等工具，在建築和木工技藝方面有重大貢獻。'
  },
  // 瓦特(1714-1798)
  {
    id: 'james-watt',
    chineseName: '詹姆斯·瓦特',
    englishName: 'James Watt',
    startYear: 1714,
    endYear: 1798,
    coordinates: [55.9, -3.2],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/詹姆斯·瓦特',
    category: '科技',
    tags: ['機械工程師', '蒸汽機', '英國'],
    description: '著名的機械工程師，改良蒸汽機的設計。'
  },
  // 萊特兄弟(1877-1927)(飛機發明者)
  {
    id: 'wings-brothers',
    chineseName: '萊特兄弟',
    englishName: 'Wings Brothers',
    startYear: 1877,
    endYear: 1927,
    coordinates: [35.2271, -80.8431],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/萊特兄弟',
    category: '科技',
    tags: ['飛機發明者'],
    description: '著名的飛機發明者。'
  },
  // 著名女性科技人物
  {
    id: 'ada-lovelace',
    chineseName: '愛達·勒芙蕾絲',
    englishName: 'Ada Lovelace',
    startYear: 1815,
    endYear: 1852,
    coordinates: [51.5074, -0.1278], // 倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/愛達·勒芙蕾絲',
    category: '科技',
    tags: ['數學家', '程式設計師', '計算機科學', '英國', '拜倫之女'],
    description: '英國數學家，被認為是世界上第一位程式設計師，為查爾斯·巴貝奇的差分機編寫了第一個算法，對計算機科學發展有重要貢獻。'
  },
  {
    id: 'grace-hopper',
    chineseName: '葛麗絲·霍普',
    englishName: 'Grace Hopper',
    startYear: 1906,
    endYear: 1992,
    coordinates: [40.7128, -74.0060], // 紐約
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/葛麗絲·霍普',
    category: '科技',
    tags: ['計算機科學家', '海軍軍官', 'COBOL語言', '美國'],
    description: '美國計算機科學家和海軍軍官，開發了第一個編譯器和COBOL程式語言，被稱為「COBOL之母」。'
  },
  {
    id: 'hedy-lamarr',
    chineseName: '海蒂·拉瑪',
    englishName: 'Hedy Lamarr',
    startYear: 1914,
    endYear: 2000,
    coordinates: [48.2082, 16.3738], // 維也納
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/海蒂·拉瑪',
    category: '科技',
    tags: ['發明家', '演員', '跳頻技術', 'WiFi', '藍牙'],
    description: '奧地利裔美國發明家和演員，發明了跳頻技術，為現代WiFi、藍牙和GPS技術奠定基礎。'
  },
  {
    id: 'radia-perlman',
    chineseName: '拉迪亞·珀爾曼',
    englishName: 'Radia Perlman',
    startYear: 1951,
    endYear: 2024,
    coordinates: [40.7128, -74.0060], // 紐約
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/拉迪亞·珀爾曼',
    category: '科技',
    tags: ['計算機科學家', '網路工程師', '生成樹協議', '互聯網'],
    description: '美國計算機科學家，發明了生成樹協議，被稱為「互聯網之母」，對現代網路技術有重大貢獻。'
  },
  // 發明家
  {
    id: 'thomas-edison',
    chineseName: '湯瑪斯·愛迪生',
    englishName: 'Thomas Edison',
    startYear: 1847,
    endYear: 1931,
    coordinates: [40.7128, -74.0060], // 紐約
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/湯瑪斯·愛迪生',
    category: '科技',
    tags: ['發明家', '企業家', '電燈泡', '留聲機', '美國'],
    description: '美國發明家和企業家，被稱為「發明大王」，發明了電燈泡、留聲機等眾多重要發明，擁有超過1000項專利。'
  },
  {
    id: 'nikola-tesla',
    chineseName: '尼古拉·特斯拉',
    englishName: 'Nikola Tesla',
    startYear: 1856,
    endYear: 1943,
    coordinates: [44.7866, 20.4489], // 塞爾維亞貝爾格勒
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/尼古拉·特斯拉',
    category: '科技',
    tags: ['發明家', '物理學家', '工程師', '交流電', '無線電', '塞爾維亞'],
    description: '塞爾維亞裔美國發明家、物理學家和工程師，發明了交流電系統、無線電技術等，被稱為「交流電之父」。'
  },
  {
    id: 'johannes-gutenberg',
    chineseName: '約翰內斯·古騰堡',
    englishName: 'Johannes Gutenberg',
    startYear: 1400,
    endYear: 1468,
    coordinates: [49.9929, 8.2473], // 德國美因茨
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/約翰內斯·古騰堡',
    category: '科技',
    tags: ['發明家', '印刷術', '活字印刷', '德國', '文藝復興'],
    description: '德國發明家，發明了活字印刷術，被稱為「印刷術之父」，他的發明推動了歐洲文藝復興和知識傳播。'
  },
  // 目前科技類別沒有特定的人物，可以根據需要添加
]
