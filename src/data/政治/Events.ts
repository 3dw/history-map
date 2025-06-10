import type { HistoricalEvent } from '@/types'

// 政治類別的歷史事件
export const politicalEvents: HistoricalEvent[] = [
  // 蘇格拉底時代的重要事件（公元前400年前後）
  {
    id: 'thirty-tyrants',
    chineseName: '三十僭主統治',
    englishName: 'Rule of the Thirty Tyrants',
    startYear: -404,
    endYear: -403,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/三十僭主',
    category: '政治',
    tags: ['寡頭政治', '雅典', '伯羅奔尼撒戰爭', '克里提亞斯'],
    description: '伯羅奔尼撒戰爭後，斯巴達在雅典建立寡頭統治，由三十僭主實行恐怖統治，蘇格拉底的學生克里提亞斯是其中之一。'
  },
  {
    id: 'restoration-of-democracy',
    chineseName: '雅典民主制度恢復',
    englishName: 'Restoration of Athenian Democracy',
    startYear: -403,
    endYear: -403,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/特拉西布洛斯',
    category: '政治',
    tags: ['民主', '雅典', '特拉西布洛斯', '三十僭主'],
    description: '特拉西布洛斯領導民主派推翻三十僭主統治，恢復雅典民主制度，為蘇格拉底審判奠定政治背景。'
  },
  {
    id: 'battle-of-aegospotami',
    chineseName: '羊河戰役',
    englishName: 'Battle of Aegospotami',
    startYear: -405,
    endYear: -405,
    coordinates: [40.2, 26.4], // 羊河
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/羊河戰役',
    category: '政治',
    tags: ['海戰', '伯羅奔尼撒戰爭', '呂山德', '雅典'],
    description: '斯巴達海軍統帥呂山德在羊河擊敗雅典海軍，這場戰役決定了伯羅奔尼撒戰爭的結局。'
  },
  {
    id: 'march-of-the-ten-thousand',
    chineseName: '萬人遠征',
    englishName: 'March of the Ten Thousand',
    startYear: -401,
    endYear: -399,
    coordinates: [29.9342, 52.8916], // 波斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/萬人遠征',
    category: '政治',
    tags: ['遠征', '波斯', '小居魯士', '希臘僱傭軍'],
    description: '小居魯士僱傭希臘軍隊發動叛亂，失敗後希臘軍隊從波斯腹地長途跋涉返回家鄉，展現了希臘軍隊的戰鬥力。'
  },
  {
    id: 'socrates-trial',
    chineseName: '蘇格拉底審判',
    englishName: 'Trial of Socrates',
    startYear: -399,
    endYear: -399,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/蘇格拉底審判',
    category: '政治',
    tags: ['審判', '哲學', '雅典', '蘇格拉底'],
    description: '蘇格拉底被雅典法庭以「腐蝕青年」和「不敬神」的罪名審判，最終被判處死刑，成為哲學史上的重要事件。'
  },
  {
    id: 'corinthian-war',
    chineseName: '科林斯戰爭',
    englishName: 'Corinthian War',
    startYear: -395,
    endYear: -387,
    coordinates: [37.9, 22.9], // 科林斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/科林斯戰爭',
    category: '政治',
    tags: ['戰爭', '希臘', '斯巴達', '阿格西勞斯二世'],
    description: '雅典、科林斯、底比斯等城邦聯合對抗斯巴達霸權的戰爭，阿格西勞斯二世領導斯巴達軍隊作戰。'
  },
  {
    id: 'king-peace',
    chineseName: '國王和約',
    englishName: 'King\'s Peace',
    startYear: -387,
    endYear: -387,
    coordinates: [29.9342, 52.8916], // 波斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/國王和約',
    category: '政治',
    tags: ['和約', '波斯', '希臘', '阿爾塔薛西斯二世'],
    description: '波斯國王阿爾塔薛西斯二世調停希臘城邦戰爭，確立波斯在希臘事務中的主導地位。'
  },
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
  },
  // 柏拉圖70歲時（公元前358年）的重要歷史事件
  {
    id: 'battle-of-leuctra',
    chineseName: '留克特拉戰役',
    englishName: 'Battle of Leuctra',
    startYear: -371,
    endYear: -371,
    coordinates: [38.3, 23.3], // 底比斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/留克特拉戰役',
    category: '政治',
    tags: ['戰爭', '底比斯', '斯巴達', '伊巴密濃達', '軍事改革'],
    description: '底比斯將軍伊巴密濃達在留克特拉擊敗斯巴達軍隊，打破斯巴達軍事霸權，標誌著底比斯崛起。'
  },
  {
    id: 'battle-of-mantinea',
    chineseName: '曼提尼亞戰役',
    englishName: 'Battle of Mantinea',
    startYear: -362,
    endYear: -362,
    coordinates: [37.6, 22.4], // 曼提尼亞
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/曼提尼亞戰役_(前362年)',
    category: '政治',
    tags: ['戰爭', '底比斯', '斯巴達', '雅典', '伊巴密濃達'],
    description: '底比斯與斯巴達、雅典聯軍的決戰，伊巴密濃達戰死，底比斯霸權結束，希臘城邦陷入混亂。'
  },
  {
    id: 'philip-ii-rise',
    chineseName: '菲利普二世崛起',
    englishName: 'Rise of Philip II of Macedon',
    startYear: -359,
    endYear: -338,
    coordinates: [40.5169, 23.2132], // 佩拉
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/菲利普二世_(馬其頓)',
    category: '政治',
    tags: ['馬其頓', '軍事改革', '統一希臘', '菲利普二世'],
    description: '菲利普二世通過軍事改革和外交手段統一希臘，為亞歷山大東征奠定基礎，建立馬其頓霸權。'
  },
  {
    id: 'battle-of-chaeronea',
    chineseName: '喀羅尼亞戰役',
    englishName: 'Battle of Chaeronea',
    startYear: -338,
    endYear: -338,
    coordinates: [38.5, 22.9], // 喀羅尼亞
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/喀羅尼亞戰役',
    category: '政治',
    tags: ['戰爭', '馬其頓', '雅典', '底比斯', '菲利普二世', '亞歷山大大帝'],
    description: '菲利普二世在喀羅尼亞擊敗雅典和底比斯聯軍，確立馬其頓對希臘的統治，亞歷山大首次展現軍事才能。'
  },
  {
    id: 'corinthian-league',
    chineseName: '科林斯同盟成立',
    englishName: 'Formation of Corinthian League',
    startYear: -337,
    endYear: -337,
    coordinates: [37.9, 22.9], // 科林斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/科林斯同盟',
    category: '政治',
    tags: ['同盟', '希臘', '馬其頓', '菲利普二世'],
    description: '菲利普二世在科林斯建立希臘城邦同盟，為東征波斯做準備，確立馬其頓在希臘的領導地位。'
  },
  {
    id: 'battle-of-granicus',
    chineseName: '格拉尼庫斯河戰役',
    englishName: 'Battle of the Granicus',
    startYear: -334,
    endYear: -334,
    coordinates: [40.2, 27.2], // 格拉尼庫斯河
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/格拉尼庫斯河戰役',
    category: '政治',
    tags: ['戰爭', '亞歷山大大帝', '波斯', '馬其頓'],
    description: '亞歷山大大帝東征的第一場重要戰役，在格拉尼庫斯河擊敗波斯軍隊，開啟征服波斯帝國的序幕。'
  },
  {
    id: 'battle-of-issus',
    chineseName: '伊蘇斯戰役',
    englishName: 'Battle of Issus',
    startYear: -333,
    endYear: -333,
    coordinates: [36.8, 36.2], // 伊蘇斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/伊蘇斯戰役',
    category: '政治',
    tags: ['戰爭', '亞歷山大大帝', '大流士三世', '波斯'],
    description: '亞歷山大大帝在伊蘇斯擊敗波斯國王大流士三世，俘獲波斯王室，取得東征的關鍵勝利。'
  },
  {
    id: 'battle-of-gaugamela',
    chineseName: '高加米拉戰役',
    englishName: 'Battle of Gaugamela',
    startYear: -331,
    endYear: -331,
    coordinates: [36.6, 43.1], // 高加米拉
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/高加米拉戰役',
    category: '政治',
    tags: ['戰爭', '亞歷山大大帝', '大流士三世', '波斯帝國'],
    description: '亞歷山大大帝在高加米拉徹底擊敗大流士三世，波斯帝國滅亡，亞歷山大成為亞洲霸主。'
  },
  {
    id: 'conquest-of-egypt',
    chineseName: '征服埃及',
    englishName: 'Conquest of Egypt',
    startYear: -332,
    endYear: -331,
    coordinates: [31.2001, 29.9187], // 亞歷山大港
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/亞歷山大大帝#征服埃及',
    category: '政治',
    tags: ['征服', '亞歷山大大帝', '埃及', '托勒密王朝'],
    description: '亞歷山大大帝征服埃及，被尊為法老，建立亞歷山大港，為希臘化時代奠定基礎。'
  },
  {
    id: 'conquest-of-india',
    chineseName: '征服印度',
    englishName: 'Conquest of India',
    startYear: -327,
    endYear: -325,
    coordinates: [32.0, 74.0], // 印度河
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/亞歷山大大帝#印度遠征',
    category: '政治',
    tags: ['征服', '亞歷山大大帝', '印度', '波羅斯'],
    description: '亞歷山大大帝遠征印度，在希達斯皮斯河擊敗波羅斯王，但軍隊拒絕繼續東進，被迫返回。'
  },
  {
    id: 'alexander-death',
    chineseName: '亞歷山大大帝逝世',
    englishName: 'Death of Alexander the Great',
    startYear: -323,
    endYear: -323,
    coordinates: [32.0, 44.4], // 巴比倫
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/亞歷山大大帝#逝世',
    category: '政治',
    tags: ['逝世', '亞歷山大大帝', '帝國分裂', '希臘化時代'],
    description: '亞歷山大大帝在巴比倫逝世，年僅32歲，其龐大帝國隨後分裂為多個希臘化王國。'
  },
  // 中國上古時期政治事件
  {
    id: 'yao-shun-abdication',
    chineseName: '堯舜禪讓',
    englishName: 'Yao-Shun Abdication',
    startYear: -2258,
    endYear: -2258,
    coordinates: [34.7, 113.6], // 中原
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/禪讓',
    category: '政治',
    tags: ['禪讓', '政治制度', '上古', '中國', '堯', '舜'],
    description: '唐堯將帝位禪讓給虞舜，開創了中國上古時期的禪讓制度，體現了選賢與能的理想政治理念。'
  },
  {
    id: 'shun-yu-abdication',
    chineseName: '舜禹禪讓',
    englishName: 'Shun-Yu Abdication',
    startYear: -2184,
    endYear: -2184,
    coordinates: [34.7, 113.6], // 中原
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/禪讓',
    category: '政治',
    tags: ['禪讓', '政治制度', '上古', '中國', '舜', '禹'],
    description: '虞舜將帝位禪讓給大禹，延續禪讓制度，大禹因治水有功而獲得帝位，體現了功績與德行的結合。'
  },
  {
    id: 'great-flood-control',
    chineseName: '大禹治水',
    englishName: 'Great Yu\'s Flood Control',
    startYear: -2200,
    endYear: -2100,
    coordinates: [34.7, 113.6], // 中原
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/大禹治水',
    category: '政治',
    tags: ['治水', '工程', '上古', '中國', '大禹'],
    description: '大禹領導人民治理洪水，採用疏導的方法，歷時十三年，最終成功治理水患，為中國古代水利工程奠定基礎。'
  },
  // 重要政治變革事件
  {
    id: 'magna-carta',
    chineseName: '大憲章',
    englishName: 'Magna Carta',
    startYear: 1215,
    endYear: 1215,
    coordinates: [51.5074, -0.1278], // 英國倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/大憲章',
    category: '政治',
    tags: ['憲法', '權利法案', '英國', '約翰王', '封建制度'],
    description: '英國國王約翰被迫簽署的憲章，限制王權，確立法律至上原則，是現代憲政制度的基礎。'
  },
  {
    id: 'english-civil-war',
    chineseName: '英國內戰',
    englishName: 'English Civil War',
    startYear: 1642,
    endYear: 1651,
    coordinates: [51.5074, -0.1278], // 英國倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/英國內戰',
    category: '政治',
    tags: ['內戰', '議會', '君主制', '英國', '克倫威爾'],
    description: '英國議會與國王查理一世之間的內戰，最終議會勝利，建立共和國，影響英國政治制度發展。'
  },
  {
    id: 'glorious-revolution',
    chineseName: '光榮革命',
    englishName: 'Glorious Revolution',
    startYear: 1688,
    endYear: 1689,
    coordinates: [51.5074, -0.1278], // 英國倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/光榮革命',
    category: '政治',
    tags: ['革命', '君主立憲', '英國', '威廉三世', '權利法案'],
    description: '英國議會邀請威廉三世和瑪麗二世繼承王位，確立君主立憲制度，通過權利法案限制王權。'
  },
  {
    id: 'bill-of-rights-1689',
    chineseName: '權利法案',
    englishName: 'Bill of Rights 1689',
    startYear: 1689,
    endYear: 1689,
    coordinates: [51.5074, -0.1278], // 英國倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/權利法案_(英國)',
    category: '政治',
    tags: ['憲法', '權利法案', '英國', '君主立憲', '議會主權'],
    description: '英國議會通過的權利法案，確立議會主權，限制王權，為現代民主制度奠定基礎。'
  },
  {
    id: 'act-of-union-1707',
    chineseName: '1707年聯合法案',
    englishName: 'Act of Union 1707',
    startYear: 1707,
    endYear: 1707,
    coordinates: [55.9533, -3.1883], // 蘇格蘭愛丁堡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/1707年聯合法案',
    category: '政治',
    tags: ['聯合', '英國', '蘇格蘭', '大不列顛', '政治統一'],
    description: '英格蘭和蘇格蘭議會通過聯合法案，建立大不列顛王國，實現政治統一。'
  },
  {
    id: 'declaration-of-independence',
    chineseName: '美國獨立宣言',
    englishName: 'Declaration of Independence',
    startYear: 1776,
    endYear: 1776,
    coordinates: [39.9526, -75.1652], // 美國費城
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/美國獨立宣言',
    category: '政治',
    tags: ['獨立', '宣言', '美國', '傑佛遜', '民主'],
    description: '美國十三個殖民地宣布脫離英國統治的宣言，由傑佛遜起草，確立人人生而平等的原則。'
  },
  {
    id: 'constitutional-convention',
    chineseName: '美國制憲會議',
    englishName: 'Constitutional Convention',
    startYear: 1787,
    endYear: 1787,
    coordinates: [39.9526, -75.1652], // 美國費城
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/美國制憲會議',
    category: '政治',
    tags: ['憲法', '制憲', '美國', '華盛頓', '聯邦制度'],
    description: '美國制憲會議制定美國憲法，建立聯邦制度，確立三權分立的政治體制。'
  },
  {
    id: 'french-revolution-political',
    chineseName: '法國大革命政治變革',
    englishName: 'French Revolution Political Changes',
    startYear: 1789,
    endYear: 1799,
    coordinates: [48.8566, 2.3522], // 法國巴黎
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/法國大革命',
    category: '政治',
    tags: ['革命', '共和制', '法國', '拿破崙', '政治變革'],
    description: '法國大革命推翻君主專制，建立共和制度，拿破崙隨後建立帝國，影響歐洲政治格局。'
  },
  {
    id: 'vienna-congress',
    chineseName: '維也納會議',
    englishName: 'Congress of Vienna',
    startYear: 1814,
    endYear: 1815,
    coordinates: [48.2082, 16.3738], // 奧地利維也納
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/維也納會議',
    category: '政治',
    tags: ['會議', '歐洲', '梅特涅', '保守主義', '國際秩序'],
    description: '拿破崙戰爭後的歐洲國際會議，重新劃分歐洲政治版圖，建立保守主義國際秩序。'
  },
  {
    id: 'german-unification',
    chineseName: '德國統一',
    englishName: 'German Unification',
    startYear: 1871,
    endYear: 1871,
    coordinates: [52.5200, 13.4050], // 德國柏林
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/德意志帝國',
    category: '政治',
    tags: ['統一', '德國', '俾斯麥', '普魯士', '帝國'],
    description: '俾斯麥領導普魯士統一德國各邦，建立德意志帝國，改變歐洲政治格局。'
  },
  {
    id: 'italian-unification',
    chineseName: '義大利統一',
    englishName: 'Italian Unification',
    startYear: 1861,
    endYear: 1871,
    coordinates: [41.9028, 12.4964], // 義大利羅馬
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/義大利統一',
    category: '政治',
    tags: ['統一', '義大利', '加富爾', '加里波第', '王國'],
    description: '加富爾和加里波第領導義大利統一運動，建立義大利王國，完成民族統一。'
  },
  {
    id: 'russian-revolution',
    chineseName: '俄國革命',
    englishName: 'Russian Revolution',
    category: '政治',
    tags: ['革命', '俄國', '布爾什維克', '列寧'],
    startYear: 1917,
    endYear: 1923,
    description: '推翻沙皇統治的革命運動，建立世界上第一個社會主義國家，影響整個20世紀世界格局。',
    coordinates: [59.9311, 30.3609], // 聖彼得堡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/俄國革命',
  },
  {
    id: 'october-revolution',
    chineseName: '十月革命',
    englishName: 'October Revolution',
    category: '政治',
    tags: ['革命', '布爾什維克', '列寧', '社會主義'],
    startYear: 1917,
    endYear: 1917,
    description: '布爾什維克黨在列寧領導下發動武裝起義，推翻臨時政府，建立蘇維埃政權。',
    coordinates: [59.9311, 30.3609], // 聖彼得堡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/十月革命',
  },
  {
    id: 'soviet-union-formation',
    chineseName: '蘇聯成立',
    englishName: 'Soviet Union Formation',
    category: '政治',
    tags: ['蘇聯', '聯邦', '社會主義', '史達林'],
    startYear: 1922,
    endYear: 1922,
    description: '俄羅斯、烏克蘭、白俄羅斯、外高加索聯邦等國組成蘇維埃社會主義共和國聯盟。',
    coordinates: [55.7558, 37.6176], // 莫斯科
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/蘇聯',
  },
  {
    id: 'great-purge',
    chineseName: '大清洗',
    englishName: 'Great Purge',
    category: '政治',
    tags: ['史達林', '清洗', '恐怖', '蘇聯'],
    startYear: 1936,
    endYear: 1938,
    description: '史達林發動的政治清洗運動，大量黨政軍領導人被處決或流放，造成數百萬人死亡。',
    coordinates: [55.7558, 37.6176], // 莫斯科
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/大清洗',
  },
  {
    id: 'russian-federation-formation',
    chineseName: '俄羅斯聯邦成立',
    englishName: 'Russian Federation Formation',
    category: '政治',
    tags: ['俄羅斯', '聯邦', '葉爾欽', '民主'],
    startYear: 1991,
    endYear: 1991,
    description: '蘇聯解體後，俄羅斯聯邦成立，葉爾欽擔任首任總統，開始民主化改革。',
    coordinates: [55.7558, 37.6176], // 莫斯科
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/俄羅斯聯邦',
  },
  // 十字軍東征重要事件
  {
    id: 'first-crusade',
    chineseName: '第一次十字軍東征',
    englishName: 'First Crusade',
    startYear: 1096,
    endYear: 1099,
    coordinates: [31.7683, 35.2137], // 耶路撒冷
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/第一次十字軍東征',
    category: '政治',
    tags: ['十字軍', '宗教戰爭', '耶路撒冷', '基督教', '伊斯蘭'],
    description: '教皇烏爾班二世號召的第一次十字軍東征，成功攻佔耶路撒冷，建立耶路撒冷王國等十字軍國家。'
  },
  {
    id: 'second-crusade',
    chineseName: '第二次十字軍東征',
    englishName: 'Second Crusade',
    startYear: 1147,
    endYear: 1149,
    coordinates: [31.7683, 35.2137], // 耶路撒冷
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/第二次十字軍東征',
    category: '政治',
    tags: ['十字軍', '宗教戰爭', '耶路撒冷', '基督教', '伊斯蘭'],
    description: '教皇尤金三世號召的第二次十字軍東征，由法國國王路易七世和神聖羅馬帝國皇帝康拉德三世領導，但最終失敗。'
  },
  {
    id: 'third-crusade',
    chineseName: '第三次十字軍東征',
    englishName: 'Third Crusade',
    startYear: 1189,
    endYear: 1192,
    coordinates: [31.7683, 35.2137], // 耶路撒冷
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/第三次十字軍東征',
    category: '政治',
    tags: ['十字軍', '宗教戰爭', '耶路撒冷', '獅心王理查', '薩拉丁'],
    description: '由英格蘭國王獅心王理查、法國國王腓力二世和神聖羅馬帝國皇帝腓特烈一世領導，與薩拉丁對抗，最終簽訂和約。'
  },
  {
    id: 'fourth-crusade',
    chineseName: '第四次十字軍東征',
    englishName: 'Fourth Crusade',
    startYear: 1202,
    endYear: 1204,
    coordinates: [41.0082, 28.9784], // 君士坦丁堡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/第四次十字軍東征',
    category: '政治',
    tags: ['十字軍', '宗教戰爭', '君士坦丁堡', '拜占庭', '拉丁帝國'],
    description: '十字軍原本目標是收復耶路撒冷，但最終攻佔並洗劫君士坦丁堡，建立拉丁帝國，嚴重削弱拜占庭帝國。'
  },
  {
    id: 'childrens-crusade',
    chineseName: '兒童十字軍',
    englishName: 'Children\'s Crusade',
    startYear: 1212,
    endYear: 1212,
    coordinates: [48.8566, 2.3522], // 法國巴黎
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/兒童十字軍',
    category: '政治',
    tags: ['十字軍', '宗教戰爭', '兒童', '法國', '德國'],
    description: '由法國和德國兒童組成的十字軍，試圖通過純潔和信仰收復耶路撒冷，但最終以悲劇收場。'
  },
  {
    id: 'fifth-crusade',
    chineseName: '第五次十字軍東征',
    englishName: 'Fifth Crusade',
    startYear: 1217,
    endYear: 1221,
    coordinates: [30.0444, 31.2357], // 埃及開羅
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/第五次十字軍東征',
    category: '政治',
    tags: ['十字軍', '宗教戰爭', '埃及', '達米埃塔', '基督教'],
    description: '十字軍進攻埃及，攻佔達米埃塔，但最終在尼羅河洪水後被迫撤退，以失敗告終。'
  },
  {
    id: 'sixth-crusade',
    chineseName: '第六次十字軍東征',
    englishName: 'Sixth Crusade',
    startYear: 1228,
    endYear: 1229,
    coordinates: [31.7683, 35.2137], // 耶路撒冷
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/第六次十字軍東征',
    category: '政治',
    tags: ['十字軍', '宗教戰爭', '耶路撒冷', '腓特烈二世', '外交'],
    description: '神聖羅馬帝國皇帝腓特烈二世通過外交手段，與埃及蘇丹簽訂條約，成功收復耶路撒冷，是唯一不流血的十字軍。'
  },
  {
    id: 'seventh-crusade',
    chineseName: '第七次十字軍東征',
    englishName: 'Seventh Crusade',
    startYear: 1248,
    endYear: 1254,
    coordinates: [30.0444, 31.2357], // 埃及開羅
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/第七次十字軍東征',
    category: '政治',
    tags: ['十字軍', '宗教戰爭', '埃及', '路易九世', '法國'],
    description: '法國國王路易九世領導的十字軍，進攻埃及但失敗，路易九世被俘，後以巨額贖金獲釋。'
  },
  {
    id: 'eighth-crusade',
    chineseName: '第八次十字軍東征',
    englishName: 'Eighth Crusade',
    startYear: 1270,
    endYear: 1270,
    coordinates: [36.8065, 10.1815], // 突尼西亞
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/第八次十字軍東征',
    category: '政治',
    tags: ['十字軍', '宗教戰爭', '突尼西亞', '路易九世', '法國'],
    description: '法國國王路易九世最後一次十字軍東征，進攻突尼西亞，但路易九世在圍攻期間死於瘟疫。'
  },
  {
    id: 'fall-of-acre',
    chineseName: '阿卡淪陷',
    englishName: 'Fall of Acre',
    startYear: 1291,
    endYear: 1291,
    coordinates: [32.9281, 35.0820], // 阿卡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/阿卡圍城戰_(1291年)',
    category: '政治',
    tags: ['十字軍', '宗教戰爭', '阿卡', '馬木留克', '耶路撒冷王國'],
    description: '馬木留克蘇丹國攻佔阿卡，最後一個十字軍據點淪陷，標誌著十字軍東征時代的結束。'
  },
  // 蒙古帝國與南宋重大事件
  {
    id: 'mongol-unification',
    chineseName: '蒙古統一',
    englishName: 'Mongol Unification',
    startYear: 1206,
    endYear: 1206,
    coordinates: [47.9184, 106.9177], // 蒙古烏蘭巴托
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/成吉思汗',
    category: '政治',
    tags: ['蒙古帝國', '成吉思汗', '統一', '亞洲', '征服'],
    description: '成吉思汗統一蒙古各部，建立蒙古帝國，開始了蒙古帝國的擴張時代。'
  },
  {
    id: 'mongol-conquest-of-china',
    chineseName: '蒙古征服中國',
    englishName: 'Mongol Conquest of China',
    startYear: 1211,
    endYear: 1279,
    coordinates: [39.9042, 116.4074], // 中國北京
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/蒙古征服中國',
    category: '政治',
    tags: ['蒙古帝國', '征服', '中國', '金朝', '南宋'],
    description: '蒙古帝國征服中國的過程，先後滅亡金朝和南宋，統一中國全境。'
  },
  {
    id: 'battle-of-yamen',
    chineseName: '崖山海戰',
    englishName: 'Battle of Yamen',
    startYear: 1279,
    endYear: 1279,
    coordinates: [22.1667, 113.5000], // 廣東崖山
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/崖山海戰',
    category: '政治',
    tags: ['海戰', '南宋', '蒙古', '崖山', '中國'],
    description: '南宋與蒙古的最後一戰，南宋軍隊在崖山海戰中全軍覆沒，南宋滅亡，標誌著中國歷史上第一次完全被外族統治。'
  },
  {
    id: 'yuan-dynasty-establishment',
    chineseName: '元朝建立',
    englishName: 'Establishment of Yuan Dynasty',
    startYear: 1271,
    endYear: 1271,
    coordinates: [39.9042, 116.4074], // 中國北京
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/元朝',
    category: '政治',
    tags: ['元朝', '忽必烈', '中國', '蒙古帝國', '王朝'],
    description: '忽必烈建立元朝，定都大都（今北京），是中國歷史上第一個由少數民族建立的全國性政權。'
  },
  {
    id: 'mongol-invasion-of-europe',
    chineseName: '蒙古西征歐洲',
    englishName: 'Mongol Invasion of Europe',
    startYear: 1236,
    endYear: 1242,
    coordinates: [55.7558, 37.6176], // 俄羅斯莫斯科
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/蒙古西征',
    category: '政治',
    tags: ['蒙古帝國', '西征', '歐洲', '拔都', '金帳汗國'],
    description: '拔都領導蒙古軍隊西征歐洲，征服俄羅斯、波蘭、匈牙利等地，建立金帳汗國。'
  },
  {
    id: 'battle-of-legnica',
    chineseName: '列格尼卡戰役',
    englishName: 'Battle of Legnica',
    startYear: 1241,
    endYear: 1241,
    coordinates: [51.2093, 16.1585], // 波蘭列格尼卡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/列格尼卡戰役',
    category: '政治',
    tags: ['蒙古帝國', '歐洲', '波蘭', '拔都', '西征'],
    description: '蒙古軍隊在列格尼卡擊敗波蘭軍隊，是蒙古西征歐洲的重要戰役之一。'
  },
  {
    id: 'mongol-conquest-of-persia',
    chineseName: '蒙古征服波斯',
    englishName: 'Mongol Conquest of Persia',
    startYear: 1219,
    endYear: 1258,
    coordinates: [35.6892, 51.3890], // 伊朗德黑蘭
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/蒙古征服波斯',
    category: '政治',
    tags: ['蒙古帝國', '征服', '波斯', '花剌子模', '伊兒汗國'],
    description: '蒙古帝國征服波斯地區，滅亡花剌子模王朝，建立伊兒汗國。'
  },
  {
    id: 'mongol-conquest-of-central-asia',
    chineseName: '蒙古征服中亞',
    englishName: 'Mongol Conquest of Central Asia',
    startYear: 1218,
    endYear: 1225,
    coordinates: [43.2220, 76.8512], // 哈薩克阿拉木圖
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/蒙古征服中亞',
    category: '政治',
    tags: ['蒙古帝國', '征服', '中亞', '花剌子模', '成吉思汗'],
    description: '成吉思汗領導蒙古軍隊征服中亞地區，滅亡花剌子模帝國。'
  },
  {
    id: 'southern-song-resistance',
    chineseName: '南宋抗元',
    englishName: 'Southern Song Resistance',
    startYear: 1234,
    endYear: 1279,
    coordinates: [30.2741, 120.1551], // 中國杭州
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/南宋',
    category: '政治',
    tags: ['南宋', '抗元', '中國', '文天祥', '崖山'],
    description: '南宋抵抗蒙古入侵的戰爭，文天祥等愛國將領奮力抗擊，最終在崖山海戰中失敗。'
  },
  {
    id: 'kublai-khan-conquest-of-southern-song',
    chineseName: '忽必烈滅南宋',
    englishName: 'Kublai Khan\'s Conquest of Southern Song',
    startYear: 1268,
    endYear: 1279,
    coordinates: [30.2741, 120.1551], // 中國杭州
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/忽必烈',
    category: '政治',
    tags: ['忽必烈', '南宋', '征服', '中國', '元朝'],
    description: '忽必烈領導蒙古軍隊最終滅亡南宋，完成中國統一，建立元朝。'
  },
  // 西方文明東傳重要事件
  {
    id: 'peter-the-great-reforms',
    chineseName: '彼得大帝改革',
    englishName: 'Peter the Great\'s Reforms',
    startYear: 1689,
    endYear: 1725,
    coordinates: [59.9311, 30.3609], // 俄羅斯聖彼得堡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/彼得大帝改革',
    category: '政治',
    tags: ['俄羅斯', '西化', '改革', '彼得大帝', '現代化'],
    description: '彼得大帝推動俄羅斯全面西化改革，包括軍事、行政、教育、文化等方面，使俄羅斯成為歐洲強國。'
  },
  {
    id: 'meiji-restoration',
    chineseName: '明治維新',
    englishName: 'Meiji Restoration',
    startYear: 1868,
    endYear: 1912,
    coordinates: [35.6762, 139.6503], // 日本東京
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/明治維新',
    category: '政治',
    tags: ['日本', '明治維新', '現代化', '西化', '亞洲'],
    description: '日本明治天皇推動的全面改革，使日本從封建社會轉變為現代化國家，成為亞洲第一個工業化國家。'
  },
  {
    id: 'opium-wars',
    chineseName: '鴉片戰爭',
    englishName: 'Opium Wars',
    startYear: 1839,
    endYear: 1860,
    coordinates: [22.3193, 114.1694], // 中國香港
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/鴉片戰爭',
    category: '政治',
    tags: ['戰爭', '中國', '英國', '鴉片', '不平等條約'],
    description: '英國與中國之間的兩次戰爭，起因是鴉片貿易，結果中國戰敗，被迫簽訂不平等條約，開啟中國近代史。'
  },
  {
    id: 'sino-japanese-war-1894',
    chineseName: '甲午戰爭',
    englishName: 'First Sino-Japanese War',
    startYear: 1894,
    endYear: 1895,
    coordinates: [37.5, 122.1], // 山東威海衛
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/甲午戰爭',
    category: '政治',
    tags: ['戰爭', '中國', '日本', '清朝', '現代化'],
    description: '清朝與日本之間的戰爭，清朝戰敗，簽訂馬關條約，割讓台灣，標誌著日本現代化的成功和中國的進一步衰落。'
  },
  {
    id: 'boxer-rebellion',
    chineseName: '義和團運動',
    englishName: 'Boxer Rebellion',
    startYear: 1899,
    endYear: 1901,
    coordinates: [39.9042, 116.4074], // 中國北京
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/義和團運動',
    category: '政治',
    tags: ['反抗', '中國', '清朝', '外國勢力', '民族主義'],
    description: '中國民間反外國勢力的運動，最終被八國聯軍鎮壓，清朝被迫簽訂辛丑條約，進一步淪為半殖民地。'
  },
  {
    id: 'russian-japanese-war',
    chineseName: '日俄戰爭',
    englishName: 'Russo-Japanese War',
    startYear: 1904,
    endYear: 1905,
    coordinates: [38.7223, 125.7442], // 朝鮮半島
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/日俄戰爭',
    category: '政治',
    tags: ['戰爭', '日本', '俄羅斯', '朝鮮', '亞洲'],
    description: '日本與俄羅斯為爭奪朝鮮和中國東北而爆發的戰爭，日本勝利，確立了日本在亞洲的強國地位。'
  },
  {
    id: 'establishment-of-tongwen-guan',
    chineseName: '同文館建立',
    englishName: 'Establishment of Tongwen Guan',
    startYear: 1862,
    endYear: 1862,
    coordinates: [39.9042, 116.4074], // 中國北京
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/同文館',
    category: '政治',
    tags: ['教育', '中國', '清朝', '西學', '翻譯'],
    description: '清朝建立的翻譯學校，培養外語人才，翻譯西方著作，是中國近代教育的重要機構。'
  },
  {
    id: 'self-strengthening-movement',
    chineseName: '洋務運動',
    englishName: 'Self-Strengthening Movement',
    startYear: 1861,
    endYear: 1895,
    coordinates: [31.2304, 121.4737], // 中國上海
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/洋務運動',
    category: '政治',
    tags: ['改革', '中國', '清朝', '西學', '現代化'],
    description: '清朝後期的改革運動，學習西方技術，建立近代工業和軍事，但最終因甲午戰爭失敗而告終。'
  },
  {
    id: 'hundred-days-reform',
    chineseName: '戊戌變法',
    englishName: 'Hundred Days\' Reform',
    startYear: 1898,
    endYear: 1898,
    coordinates: [39.9042, 116.4074], // 中國北京
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/戊戌變法',
    category: '政治',
    tags: ['改革', '中國', '清朝', '康有為', '梁啟超'],
    description: '光緒皇帝推動的變法運動，由康有為、梁啟超等人主導，但被慈禧太后鎮壓，僅持續103天。'
  },
  // 北美地區重要事件
  {
    id: 'american-independence',
    chineseName: '美國獨立戰爭',
    englishName: 'American Revolutionary War',
    category: '政治',
    tags: ['獨立戰爭', '美國', '英國', '殖民地', '自由'],
    startYear: 1775,
    endYear: 1783,
    description: '北美十三個殖民地反抗英國統治的戰爭，最終建立美利堅合眾國，是現代民主制度的重要里程碑。',
    coordinates: [39.8283, -98.5795], // 美國中部
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/美國獨立戰爭',
  },
  {
    id: 'civil-war',
    chineseName: '美國內戰',
    englishName: 'American Civil War',
    category: '政治',
    tags: ['內戰', '美國', '奴隸制', '聯邦', '邦聯'],
    startYear: 1861,
    endYear: 1865,
    description: '美國歷史上最血腥的戰爭，北方聯邦與南方邦聯之間的衝突，最終廢除奴隸制，維護國家統一。',
    coordinates: [38.9072, -77.0369], // 華盛頓特區
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/美國內戰',
  },
  {
    id: 'canadian-confederation',
    chineseName: '加拿大聯邦成立',
    englishName: 'Canadian Confederation',
    category: '政治',
    tags: ['聯邦', '加拿大', '自治領', '英國'],
    startYear: 1867,
    endYear: 1867,
    description: '加拿大從英國殖民地轉變為自治領，建立聯邦制度，為日後完全獨立奠定基礎。',
    coordinates: [45.4215, -75.6972], // 渥太華
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/加拿大聯邦',
  },
  {
    id: 'mexican-revolution',
    chineseName: '墨西哥革命',
    englishName: 'Mexican Revolution',
    category: '政治',
    tags: ['革命', '墨西哥', '土地改革', '民主'],
    startYear: 1910,
    endYear: 1920,
    description: '墨西哥推翻獨裁統治的革命運動，實現土地改革和社會變革，建立現代墨西哥政治制度。',
    coordinates: [19.4326, -99.1332], // 墨西哥城
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/墨西哥革命',
  },
  {
    id: 'cuban-revolution',
    chineseName: '古巴革命',
    englishName: 'Cuban Revolution',
    category: '政治',
    tags: ['革命', '古巴', '卡斯楚', '社會主義'],
    startYear: 1953,
    endYear: 1959,
    description: '菲德爾·卡斯楚領導的革命運動，推翻巴蒂斯塔獨裁政權，建立社會主義政權，影響整個拉丁美洲。',
    coordinates: [23.1136, -82.3666], // 哈瓦那
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/古巴革命',
  },
  {
    id: 'north-american-free-trade',
    chineseName: '北美自由貿易協定',
    englishName: 'North American Free Trade Agreement',
    category: '政治',
    tags: ['貿易協定', '美國', '加拿大', '墨西哥', '經濟'],
    startYear: 1994,
    endYear: 1994,
    description: '美國、加拿大、墨西哥三國簽署的自由貿易協定，建立北美自由貿易區，促進區域經濟一體化。',
    coordinates: [39.8283, -98.5795], // 美國中部
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/北美自由貿易協定',
  },
  // 南美地區重要事件
  {
    id: 'south-american-independence',
    chineseName: '南美獨立運動',
    englishName: 'South American Independence',
    category: '政治',
    tags: ['獨立運動', '南美', '西班牙', '玻利瓦爾'],
    startYear: 1808,
    endYear: 1830,
    description: '西蒙·玻利瓦爾和何塞·德·聖馬丁領導的南美獨立運動，推翻西班牙殖民統治，建立多個獨立國家。',
    coordinates: [-12.0464, -77.0428], // 利馬
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/南美獨立戰爭',
  },
  {
    id: 'brazilian-independence',
    chineseName: '巴西獨立',
    englishName: 'Brazilian Independence',
    category: '政治',
    tags: ['獨立', '巴西', '葡萄牙', '帝國'],
    startYear: 1822,
    endYear: 1822,
    description: '佩德羅一世宣布巴西脫離葡萄牙獨立，建立巴西帝國，是南美唯一以君主制獨立的國家。',
    coordinates: [-15.7801, -47.9292], // 巴西利亞
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/巴西獨立',
  },
  {
    id: 'paraguayan-war',
    chineseName: '巴拉圭戰爭',
    englishName: 'Paraguayan War',
    category: '政治',
    tags: ['戰爭', '巴拉圭', '巴西', '阿根廷', '烏拉圭'],
    startYear: 1864,
    endYear: 1870,
    description: '巴拉圭與巴西、阿根廷、烏拉圭三國聯盟的戰爭，巴拉圭戰敗，人口損失慘重。',
    coordinates: [-25.2637, -57.5759], // 亞松森
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/巴拉圭戰爭',
  },
  {
    id: 'chilean-civil-war',
    chineseName: '智利內戰',
    englishName: 'Chilean Civil War',
    category: '政治',
    tags: ['內戰', '智利', '議會制', '總統制'],
    startYear: 1891,
    endYear: 1891,
    description: '智利總統何塞·曼努埃爾·巴爾馬塞達與國會之間的衝突，最終確立議會制政體。',
    coordinates: [-33.4489, -70.6693], // 聖地亞哥
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/智利內戰',
  },
  {
    id: 'peruvian-revolution',
    chineseName: '秘魯革命',
    englishName: 'Peruvian Revolution',
    category: '政治',
    tags: ['革命', '秘魯', '軍政府', '改革'],
    startYear: 1968,
    endYear: 1980,
    description: '胡安·貝拉斯科·阿爾瓦拉多將軍領導的革命，實施土地改革和國有化政策。',
    coordinates: [-12.0464, -77.0428], // 利馬
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/秘魯革命',
  },
  {
    id: 'mercosur-formation',
    chineseName: '南方共同市場成立',
    englishName: 'Mercosur Formation',
    category: '政治',
    tags: ['經濟聯盟', '南美', '貿易', '一體化'],
    startYear: 1991,
    endYear: 1991,
    description: '阿根廷、巴西、巴拉圭、烏拉圭四國簽署《亞松森條約》，建立南方共同市場，促進南美經濟一體化。',
    coordinates: [-34.6118, -58.3960], // 布宜諾斯艾利斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/南方共同市場',
  },
  // 俄羅斯地區重要事件
  {
    id: 'october-revolution',
    chineseName: '十月革命',
    englishName: 'October Revolution',
    category: '政治',
    tags: ['革命', '布爾什維克', '列寧', '社會主義'],
    startYear: 1917,
    endYear: 1917,
    description: '布爾什維克黨在列寧領導下發動武裝起義，推翻臨時政府，建立蘇維埃政權。',
    coordinates: [59.9311, 30.3609], // 聖彼得堡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/十月革命',
  },
  {
    id: 'soviet-union-formation',
    chineseName: '蘇聯成立',
    englishName: 'Soviet Union Formation',
    category: '政治',
    tags: ['蘇聯', '聯邦', '社會主義', '史達林'],
    startYear: 1922,
    endYear: 1922,
    description: '俄羅斯、烏克蘭、白俄羅斯、外高加索聯邦等國組成蘇維埃社會主義共和國聯盟。',
    coordinates: [55.7558, 37.6176], // 莫斯科
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/蘇聯',
  },
  {
    id: 'great-purge',
    chineseName: '大清洗',
    englishName: 'Great Purge',
    category: '政治',
    tags: ['史達林', '清洗', '恐怖', '蘇聯'],
    startYear: 1936,
    endYear: 1938,
    description: '史達林發動的政治清洗運動，大量黨政軍領導人被處決或流放，造成數百萬人死亡。',
    coordinates: [55.7558, 37.6176], // 莫斯科
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/大清洗',
  },
  {
    id: 'soviet-collapse',
    chineseName: '蘇聯解體',
    englishName: 'Soviet Union Collapse',
    category: '政治',
    tags: ['蘇聯', '解體', '戈巴契夫', '冷戰'],
    startYear: 1991,
    endYear: 1991,
    description: '蘇聯各加盟共和國紛紛獨立，蘇聯正式解體，標誌著冷戰結束和社會主義陣營瓦解。',
    coordinates: [55.7558, 37.6176], // 莫斯科
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/蘇聯解體',
  },
  {
    id: 'russian-federation-formation',
    chineseName: '俄羅斯聯邦成立',
    englishName: 'Russian Federation Formation',
    category: '政治',
    tags: ['俄羅斯', '聯邦', '葉爾欽', '民主'],
    startYear: 1991,
    endYear: 1991,
    description: '蘇聯解體後，俄羅斯聯邦成立，葉爾欽擔任首任總統，開始民主化改革。',
    coordinates: [55.7558, 37.6176], // 莫斯科
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/俄羅斯聯邦',
  },
  {
    id: 'putin-era',
    chineseName: '普丁時代',
    englishName: 'Putin Era',
    category: '政治',
    tags: ['普丁', '俄羅斯', '總統', '強權'],
    startYear: 2000,
    endYear: 2024,
    description: '弗拉基米爾·普丁擔任俄羅斯總統，恢復俄羅斯國際地位，實行強權政治。',
    coordinates: [55.7558, 37.6176], // 莫斯科
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/弗拉基米爾·普丁',
  }
]
