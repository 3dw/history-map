import type { HistoricalEvent } from '@/types'

// 政治類別的歷史事件
export const politicalEvents: HistoricalEvent[] = [
  // 非洲古典時代事件
  {
    id: 'battle-of-kadesh',
    chineseName: '卡迭石戰役',
    englishName: 'Battle of Kadesh',
    startYear: -1274,
    endYear: -1274,
    coordinates: [34.5577, 36.5197], // 卡迭石
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/卡迭石戰役',
    category: '政治',
    tags: ['戰爭', '古埃及', '赫梯', '拉美西斯二世'],
    description: '古埃及法老拉美西斯二世與赫梯王國的戰役，是古代歷史上最早有詳細記錄的戰役之一。'
  },
  {
    id: 'mansa-musa-pilgrimage',
    chineseName: '曼薩·穆薩朝聖',
    englishName: 'Mansa Musa\'s Pilgrimage',
    startYear: 1324,
    endYear: 1325,
    coordinates: [21.4225, 39.8262], // 麥加
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/曼薩·穆薩',
    category: '政治',
    tags: ['朝聖', '馬里帝國', '黃金', '伊斯蘭'],
    description: '馬里帝國國王曼薩·穆薩攜帶大量黃金朝聖麥加，被認為是歷史上最富有的朝聖之旅。'
  },
  {
    id: 'zulu-kingdom-rise',
    chineseName: '祖魯王國崛起',
    englishName: 'Rise of the Zulu Kingdom',
    startYear: 1816,
    endYear: 1828,
    coordinates: [-28.4793, 32.1987], // 祖魯蘭
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/祖魯王國',
    category: '政治',
    tags: ['王國', '軍事改革', '南非', '沙卡·祖魯'],
    description: '沙卡·祖魯建立強大的祖魯王國，軍事改革對南非歷史產生深遠影響。'
  },
  // 非洲現代事件
  {
    id: 'ghana-independence',
    chineseName: '加納獨立',
    englishName: 'Ghana Independence',
    startYear: 1957,
    endYear: 1957,
    coordinates: [5.5600, -0.2057], // 阿克拉
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/加納',
    category: '政治',
    tags: ['獨立', '殖民', '恩克魯瑪', '泛非主義'],
    description: '加納成為撒哈拉以南非洲第一個獨立的國家，由恩克魯瑪領導，開啟了非洲獨立運動的浪潮。'
  },
  {
    id: 'kenya-independence',
    chineseName: '肯亞獨立',
    englishName: 'Kenya Independence',
    startYear: 1963,
    endYear: 1963,
    coordinates: [-1.2921, 36.8219], // 內羅畢
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/肯亞',
    category: '政治',
    tags: ['獨立', '殖民', '肯雅塔', '茅茅起義'],
    description: '肯亞脫離英國統治獲得獨立，喬莫·肯雅塔成為首任總統，結束了茅茅起義的動盪時期。'
  },
  {
    id: 'congo-crisis',
    chineseName: '剛果危機',
    englishName: 'Congo Crisis',
    startYear: 1960,
    endYear: 1965,
    coordinates: [-4.4419, 15.2663], // 金沙薩
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/剛果危機',
    category: '政治',
    tags: ['獨立', '危機', '盧蒙巴', '冷戰'],
    description: '剛果獨立後的政治動盪，涉及盧蒙巴遇害、聯合國干預和冷戰對抗，對非洲政治產生深遠影響。'
  },
  {
    id: 'ethiopian-resistance',
    chineseName: '衣索比亞抗義戰爭',
    englishName: 'Ethiopian Resistance to Italy',
    startYear: 1935,
    endYear: 1941,
    coordinates: [9.0320, 38.7480], // 亞的斯亞貝巴
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/第二次義大利衣索比亞戰爭',
    category: '政治',
    tags: ['抵抗', '殖民', '海爾·塞拉西', '二戰'],
    description: '衣索比亞在海爾·塞拉西領導下抵抗義大利侵略，是非洲唯一成功抵抗歐洲殖民的國家。'
  },
  {
    id: 'south-african-apartheid',
    chineseName: '南非種族隔離制度',
    englishName: 'South African Apartheid',
    startYear: 1948,
    endYear: 1994,
    coordinates: [-26.2041, 28.0473], // 約翰內斯堡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/種族隔離',
    category: '政治',
    tags: ['種族隔離', '歧視', '曼德拉', '民主化'],
    description: '南非實行種族隔離政策，曼德拉領導反種族隔離運動，最終在1994年實現民主選舉。'
  },
  {
    id: 'african-union-formation',
    chineseName: '非洲聯盟成立',
    englishName: 'Formation of African Union',
    startYear: 2002,
    endYear: 2002,
    coordinates: [9.0320, 38.7480], // 亞的斯亞貝巴
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/非洲聯盟',
    category: '政治',
    tags: ['統一', '合作', '非盟', '泛非主義'],
    description: '非洲統一組織改組為非洲聯盟，促進非洲國家間的合作與發展。'
  },
  {
    id: 'greco-persian-wars',
    chineseName: '希波戰爭',
    englishName: 'Greco-Persian Wars',
    startYear: -499,
    endYear: -449,
    coordinates: [38.0, 24.0],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/希波戰爭',
    category: '政治',
    tags: ['戰爭', '古希臘', '波斯'],
    description: '古希臘與波斯帝國之間的戰爭，對西方歷史產生深遠影響。'
  },
  {
    id: 'battle-of-marathon',
    chineseName: '馬拉松戰役',
    englishName: 'Battle of Marathon',
    startYear: -490,
    endYear: -490,
    coordinates: [38.1547, 24.0133],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/馬拉松戰役',
    category: '政治',
    tags: ['戰爭', '古希臘', '雅典'],
    description: '雅典軍隊在馬拉松平原擊敗波斯軍隊的戰役。'
  },
  {
    id: 'battle-of-thermopylae',
    chineseName: '溫泉關戰役',
    englishName: 'Battle of Thermopylae',
    startYear: -480,
    endYear: -480,
    coordinates: [38.7967, 22.5361],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/溫泉關戰役',
    category: '政治',
    tags: ['戰爭', '古希臘', '斯巴達'],
    description: '斯巴達軍隊在溫泉關擊退波斯軍隊的戰役。'
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
  {
    id: 'american-revolution',
    chineseName: '美國獨立運動',
    englishName: 'American Revolution',
    startYear: 1775,
    endYear: 1783,
    coordinates: [39.8283, -98.5795],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/美國獨立戰爭',
    category: '政治',
    tags: ['獨立', '革命', '民主', '美國'],
    description: '美國十三個殖民地脫離英國統治，建立獨立國家的革命運動。'
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
    id: 'american-civil-war',
    chineseName: '美國南北戰爭',
    englishName: 'American Civil War',
    startYear: 1861,
    endYear: 1865,
    coordinates: [39.8283, -98.5795],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/美國內戰',
    category: '政治',
    tags: ['內戰', '奴隸制', '統一', '美國'],
    description: '美國北方與南方之間的內戰，最終廢除奴隸制度，維護國家統一。'
  },
  {
    id: 'great-depression',
    chineseName: '經濟大蕭條',
    englishName: 'Great Depression',
    startYear: 1929,
    endYear: 1939,
    coordinates: [39.8283, -98.5795],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/經濟大蕭條',
    category: '政治',
    tags: ['經濟危機', '金融', '失業', '美國'],
    description: '1929年華爾街股市崩盤引發的全球性經濟危機，影響深遠。'
  },
  {
    id: 'apollo-11-moon-landing',
    chineseName: '阿波羅11號登月',
    englishName: 'Apollo 11 Moon Landing',
    startYear: 1969,
    endYear: 1969,
    coordinates: [28.5729, -80.6490],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/阿波羅11號',
    category: '政治',
    tags: ['太空探索', '科技', '冷戰', '美國'],
    description: '人類首次成功登陸月球，標誌著太空探索的重要里程碑。'
  },
  {
    id: 'internet-revolution',
    chineseName: '網際網路革命',
    englishName: 'Internet Revolution',
    startYear: 1990,
    endYear: 2000,
    coordinates: [37.7749, -122.4194],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/網際網路',
    category: '政治',
    tags: ['科技', '數位化', '全球化', '美國'],
    description: '網際網路的普及和發展，改變了人類的溝通方式和社會結構。'
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
  },
  {
    id: 'first-sino-japanese-war',
    chineseName: '甲午戰爭',
    englishName: 'First Sino-Japanese War',
    startYear: 1894,
    endYear: 1895,
    coordinates: [37.5, 122.1], // 山東威海衛
    wikipediaUrl: 'https://zh.wikipedia.org/zh-tw/%E7%94%B2%E5%8D%88%E6%88%98%E4%BA%89',
    category: '政治',
    tags: ['戰爭', '清朝', '日本', '台灣', '近代史'],
    description: '清朝與日本於1894年至1895年間爆發的戰爭，最終清朝戰敗並簽訂馬關條約，台灣割讓給日本，對中國與台灣歷史影響深遠。'
  },
  {
    id: 'taiwan-under-japanese-rule',
    chineseName: '日治時代',
    englishName: 'Taiwan under Japanese Rule',
    startYear: 1895,
    endYear: 1945,
    coordinates: [25.0375, 121.5637], // 台北
    wikipediaUrl: 'https://zh.wikipedia.org/zh-tw/%E6%97%A5%E6%B2%BB%E6%99%82%E4%BB%A3',
    category: '政治',
    tags: ['台灣', '日本', '殖民', '現代化', '近代史'],
    description: '自1895年馬關條約後，台灣成為日本的殖民地，長達五十年，對台灣社會、經濟、文化與現代化發展產生重大影響。'
  },
  {
    id: 'taiwan-retrocession',
    chineseName: '台灣光復',
    englishName: 'Retrocession of Taiwan',
    startYear: 1945,
    endYear: 1945,
    coordinates: [25.0375, 121.5637], // 台北
    wikipediaUrl: 'https://zh.wikipedia.org/zh-tw/%E5%8F%B0%E7%81%A3%E5%85%89%E5%BE%A9',
    category: '政治',
    tags: ['台灣', '中國', '戰後', '主權', '近代史'],
    description: '1945年第二次世界大戰結束後，台灣結束日本殖民統治，回歸中華民國，史稱台灣光復，象徵台灣主權的重大轉折。'
  }
]
