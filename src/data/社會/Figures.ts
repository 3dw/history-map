import type { HistoricalFigure } from '@/types'

// 社會類別的歷史人物
export const socialFigures: HistoricalFigure[] = [
  // 目前社會類別沒有特定的人物，可以根據需要添加

  // 墨子
  {
    id: 'mozi',
    chineseName: '墨子',
    englishName: 'Mozi',
    category: '社會',
    tags: ['墨家', '哲學家', '思想家'],
    startYear: -470,
    endYear: -390,
    description: '墨子是中國古代哲學家，墨家學派創始人，主張兼愛非攻，反對戰爭和暴力。',
    // 河南商丘，墨子出生地
    coordinates: [34.4371, 115.6556],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/墨子',
  },
  // 孔子
  {
    id: 'confucius',
    chineseName: '孔子',
    englishName: 'Confucius',
    category: '社會',
    tags: ['儒家', '哲學家', '思想家'],
    startYear: -551,
    endYear: -479,
    description: '孔子是中國古代哲學家，儒家學派創始人，主張仁愛和禮治，被尊為聖人。',
    coordinates: [35.4, 116.6],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/孔子',
  },
  // 孟子
  {
    id: 'mengzi',
    chineseName: '孟子',
    englishName: 'Mengzi',
    category: '社會',
    tags: ['儒家', '哲學家', '思想家'],
    startYear: -372,
    endYear: -289,
    description: '孟子是中國古代哲學家，儒家學派性善論創始人，主張仁愛和禮治，被尊為亞聖。',
    coordinates: [39.9042, 116.4074],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/孟子',
  },
  // 荀子
  {
    id: 'xunzi',
    chineseName: '荀子',
    englishName: 'Xunzi',
    category: '社會',
    tags: ['儒家', '哲學家', '思想家'],
    startYear: -313,
    endYear: -238,
    description: '荀子是中國古代哲學家，儒家學派性惡論創始人，主張禮治和法治，被尊為大儒。',
    coordinates: [34.7, 113.6],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/荀子',
  },
  // 著名女性社會人物
  {
    id: 'mother-teresa',
    chineseName: '德蕾莎修女',
    englishName: 'Mother Teresa',
    category: '社會',
    tags: ['修女', '慈善家', '諾貝爾和平獎', '印度', '天主教'],
    startYear: 1910,
    endYear: 1997,
    description: '阿爾巴尼亞裔印度修女，創立仁愛傳教會，致力於幫助窮人和病人，1979年獲得諾貝爾和平獎，被譽為「加爾各答的聖人」。',
    coordinates: [22.5726, 88.3639], // 加爾各答
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/德蕾莎修女',
  },
  {
    id: 'joan-of-arc',
    chineseName: '聖女貞德',
    englishName: 'Joan of Arc',
    category: '社會',
    tags: ['軍事領袖', '聖女', '法國', '百年戰爭', '天主教'],
    startYear: 1412,
    endYear: 1431,
    description: '法國民族英雄，在百年戰爭中領導法國軍隊對抗英軍，被教會尊為聖女，最終被英軍俘虜並處以火刑。',
    coordinates: [48.8566, 2.3522], // 巴黎
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/聖女貞德',
  },
  {
    id: 'florence-nightingale',
    chineseName: '佛羅倫斯·南丁格爾',
    englishName: 'Florence Nightingale',
    category: '社會',
    tags: ['護士', '統計學家', '社會改革家', '英國', '克里米亞戰爭'],
    startYear: 1820,
    endYear: 1910,
    description: '英國護士和社會改革家，被稱為「提燈女士」，現代護理學的創始人，在克里米亞戰爭中改善了醫療條件。',
    coordinates: [51.5074, -0.1278], // 倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/佛羅倫斯·南丁格爾',
  },
  {
    id: 'rosa-parks',
    chineseName: '羅莎·帕克斯',
    englishName: 'Rosa Parks',
    category: '社會',
    tags: ['民權運動', '反種族隔離', '美國', '非暴力抗爭'],
    startYear: 1913,
    endYear: 2005,
    description: '美國民權運動領袖，因拒絕在公車上讓座給白人而引發蒙哥馬利公車抵制運動，被稱為「民權運動之母」。',
    coordinates: [32.3792, -86.3077], // 蒙哥馬利
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/羅莎·帕克斯',
  },
  {
    id: 'malala-yousafzai',
    chineseName: '馬拉拉·優素福扎伊',
    englishName: 'Malala Yousafzai',
    category: '社會',
    tags: ['教育活動家', '諾貝爾和平獎', '巴基斯坦', '女權'],
    startYear: 1997,
    description: '巴基斯坦教育活動家，為女童教育權利而奮鬥，2014年成為最年輕的諾貝爾和平獎得主，被譽為「女童教育之聲」。',
    coordinates: [34.0150, 71.5249], // 巴基斯坦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/馬拉拉·優素福扎伊',
  },
  {
    id: 'eleanor-roosevelt',
    chineseName: '埃莉諾·羅斯福',
    englishName: 'Eleanor Roosevelt',
    category: '社會',
    tags: ['第一夫人', '人權活動家', '聯合國', '美國', '社會改革'],
    startYear: 1884,
    endYear: 1962,
    description: '美國第一夫人和人權活動家，富蘭克林·羅斯福的妻子，參與起草《世界人權宣言》，被譽為「世界第一夫人」。',
    coordinates: [40.7128, -74.0060], // 紐約
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/埃莉諾·羅斯福',
  },
  // 教育家和教育思想家
  {
    id: 'rudolf-steiner',
    chineseName: '魯道夫·史代納',
    englishName: 'Rudolf Steiner',
    category: '社會',
    tags: ['教育家', '哲學家', '華德福教育', '人智學', '奧地利'],
    startYear: 1861,
    endYear: 1925,
    description: '奧地利哲學家、教育家，創立了華德福教育體系和人智學，強調藝術、手工和自然教育，對現代教育有深遠影響。',
    coordinates: [48.2082, 16.3738], // 維也納
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/魯道夫·史代納',
  },
  {
    id: 'maria-montessori',
    chineseName: '瑪麗亞·蒙特梭利',
    englishName: 'Maria Montessori',
    category: '社會',
    tags: ['教育家', '醫生', '蒙特梭利教育', '兒童教育', '義大利'],
    startYear: 1870,
    endYear: 1952,
    description: '義大利醫生和教育家，創立了蒙特梭利教育法，強調兒童自主學習和感官教育，對現代幼兒教育有重大影響。',
    coordinates: [41.9028, 12.4964], // 羅馬
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/瑪麗亞·蒙特梭利',
  },
  {
    id: 'jean-jacques-rousseau',
    chineseName: '讓-雅克·盧梭',
    englishName: 'Jean-Jacques Rousseau',
    category: '社會',
    tags: ['哲學家', '教育家', '啟蒙運動', '社會契約論', '法國'],
    startYear: 1712,
    endYear: 1778,
    description: '法國啟蒙思想家、哲學家和教育家，提出自然教育理論，強調兒童天性發展，對現代教育理論有深遠影響。',
    coordinates: [46.2044, 6.1432], // 日內瓦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/讓-雅克·盧梭',
  },
  {
    id: 'john-dewey',
    chineseName: '約翰·杜威',
    englishName: 'John Dewey',
    category: '社會',
    tags: ['教育家', '哲學家', '實用主義', '進步教育', '美國'],
    startYear: 1859,
    endYear: 1952,
    description: '美國哲學家、教育家和心理學家，實用主義教育理論的代表人物，主張「做中學」，對現代教育有重大影響。',
    coordinates: [42.3601, -71.0589], // 波士頓
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/約翰·杜威',
  },
  // 心理學家
  {
    id: 'sigmund-freud',
    chineseName: '西格蒙德·佛洛伊德',
    englishName: 'Sigmund Freud',
    category: '社會',
    tags: ['心理學家', '精神分析', '潛意識', '心理治療', '奧地利'],
    startYear: 1856,
    endYear: 1939,
    description: '奧地利神經學家和心理學家，精神分析學派的創始人，發現潛意識理論，對現代心理學和心理治療有深遠影響。',
    coordinates: [48.2082, 16.3738], // 維也納
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/西格蒙德·佛洛伊德',
  },
  {
    id: 'carl-jung',
    chineseName: '卡爾·榮格',
    englishName: 'Carl Jung',
    category: '社會',
    tags: ['心理學家', '精神分析', '集體潛意識', '原型理論', '瑞士'],
    startYear: 1875,
    endYear: 1961,
    description: '瑞士心理學家和精神分析學家，分析心理學的創始人，提出集體潛意識和原型理論，對現代心理學有重要貢獻。',
    coordinates: [47.5596, 7.5886], // 巴塞爾
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/卡爾·榮格',
  },
  {
    id: 'alfred-adler',
    chineseName: '阿爾弗雷德·阿德勒',
    englishName: 'Alfred Adler',
    category: '社會',
    tags: ['心理學家', '個體心理學', '自卑情結', '社會興趣', '奧地利'],
    startYear: 1870,
    endYear: 1937,
    description: '奧地利心理學家和醫生，個體心理學的創始人，提出自卑情結和社會興趣理論，對現代心理學有重要影響。',
    coordinates: [48.2082, 16.3738], // 維也納
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/阿爾弗雷德·阿德勒',
  },
  {
    id: 'george-leslie-mackay',
    chineseName: '馬偕',
    englishName: 'George Leslie Mackay',
    startYear: 1844,
    endYear: 1901,
    coordinates: [25.1754, 121.4516], // 台灣淡水
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/馬偕',
    category: '社會',
    tags: ['傳教士', '醫生', '教育家', '台灣', '加拿大'],
    description: '加拿大長老會傳教士，在台灣北部傳教、行醫、辦學，建立馬偕醫院和牛津學堂，對台灣現代化有重要貢獻。'
  },
  // 戊戌變法和民國初期社會思想家
  {
    id: 'kang-youwei',
    chineseName: '康有為',
    englishName: 'Kang Youwei',
    category: '社會',
    tags: ['思想家', '改革家', '戊戌變法', '保皇派', '中國'],
    startYear: 1858,
    endYear: 1927,
    description: '中國近代思想家、政治家和改革家，戊戌變法的主要領導者，主張君主立憲制，著有《大同書》等著作。',
    coordinates: [23.1291, 113.2644], // 廣東南海
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/康有為',
  },
  {
    id: 'liang-qichao',
    chineseName: '梁啟超',
    englishName: 'Liang Qichao',
    category: '社會',
    tags: ['思想家', '改革家', '戊戌變法', '學者', '中國'],
    startYear: 1873,
    endYear: 1929,
    description: '中國近代思想家、政治家和學者，戊戌變法的重要參與者，後期轉向學術研究，對中國近代思想文化有重要影響。',
    coordinates: [23.1291, 113.2644], // 廣東新會
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/梁啟超',
  },
  {
    id: 'hu-shi',
    chineseName: '胡適',
    englishName: 'Hu Shi',
    category: '社會',
    tags: ['思想家', '學者', '白話文運動', '新文化運動', '中國'],
    startYear: 1891,
    endYear: 1962,
    description: '中國近代思想家、學者和教育家，新文化運動的領導者，推動白話文運動，主張「大膽假設，小心求證」的治學方法。',
    coordinates: [31.2304, 121.4737], // 上海
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/胡適',
  },
  {
    id: 'chen-duxiu',
    chineseName: '陳獨秀',
    englishName: 'Chen Duxiu',
    category: '社會',
    tags: ['思想家', '革命家', '新文化運動', '共產黨', '中國'],
    startYear: 1879,
    endYear: 1942,
    description: '中國近代思想家、革命家和教育家，新文化運動的領導者，《新青年》雜誌創辦人，中國共產黨創始人之一。',
    coordinates: [31.2304, 121.4737], // 上海
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/陳獨秀',
  },
  {
    id: 'lu-xun',
    chineseName: '魯迅',
    englishName: 'Lu Xun',
    category: '社會',
    tags: ['作家', '思想家', '新文化運動', '白話文', '中國'],
    startYear: 1881,
    endYear: 1936,
    description: '中國近代作家、思想家和革命家，新文化運動的重要參與者，被譽為「中國現代文學之父」，作品深刻批判社會現實。',
    coordinates: [30.2741, 120.1551], // 杭州
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/魯迅',
  },
  {
    id: 'li-dazhao',
    chineseName: '李大釗',
    englishName: 'Li Dazhao',
    category: '社會',
    tags: ['思想家', '革命家', '馬克思主義', '共產黨', '中國'],
    startYear: 1889,
    endYear: 1927,
    description: '中國近代思想家、革命家和教育家，馬克思主義在中國的早期傳播者，中國共產黨創始人之一，被軍閥殺害。',
    coordinates: [39.9042, 116.4074], // 北京
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/李大釗',
  },
  {
    id: 'sun-yat-sen',
    chineseName: '孫中山',
    englishName: 'Sun Yat-sen',
    category: '社會',
    tags: ['革命家', '政治家', '三民主義', '中華民國', '中國'],
    startYear: 1866,
    endYear: 1925,
    description: '中國近代革命家、政治家和思想家，中華民國國父，提出三民主義，領導辛亥革命推翻清朝，建立亞洲第一個共和國。',
    coordinates: [22.3193, 114.1694], // 香港
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/孫中山',
  },
  {
    id: 'zhang-binglin',
    chineseName: '章炳麟',
    englishName: 'Zhang Binglin',
    category: '社會',
    tags: ['學者', '思想家', '國學', '革命家', '中國'],
    startYear: 1869,
    endYear: 1936,
    description: '中國近代學者、思想家和革命家，國學大師，參與辛亥革命，對中國傳統文化有深入研究，被譽為「國學泰斗」。',
    coordinates: [30.2741, 120.1551], // 杭州
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/章炳麟',
  },
  {
    id: 'wang-guo-wei',
    chineseName: '王國維',
    englishName: 'Wang Guowei',
    category: '社會',
    tags: ['學者', '思想家', '國學', '美學', '中國'],
    startYear: 1877,
    endYear: 1927,
    description: '中國近代學者、思想家和美學家，國學大師，在文學、史學、哲學等領域都有重要貢獻，著有《人間詞話》等。',
    coordinates: [30.2741, 120.1551], // 杭州
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/王國維',
  },
  {
    id: 'chen-yinke',
    chineseName: '陳寅恪',
    englishName: 'Chen Yinke',
    category: '社會',
    tags: ['學者', '史學家', '國學', '教授', '中國'],
    startYear: 1890,
    endYear: 1969,
    description: '中國近代史學家、學者，被譽為「教授中的教授」，在隋唐史、佛教史等領域有重要研究，堅持「獨立之精神，自由之思想」。',
    coordinates: [39.9042, 116.4074], // 北京
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/陳寅恪',
  }
]
