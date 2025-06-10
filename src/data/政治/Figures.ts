import type { HistoricalFigure } from '@/types'

// 政治類別的歷史人物
export const politicalFigures: HistoricalFigure[] = [
  // 蘇格拉底時代的雅典、斯巴達、波斯政治人物（公元前400年前後）
  {
    id: 'alcibiades',
    chineseName: '阿爾西比亞德斯',
    englishName: 'Alcibiades',
    startYear: -450,
    endYear: -404,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/阿爾西比亞德斯',
    category: '政治',
    tags: ['將軍', '政治家', '雅典', '伯羅奔尼撒戰爭'],
    description: '雅典著名政治家和將軍，蘇格拉底的學生，在伯羅奔尼撒戰爭中多次改變立場，最終被流放。'
  },
  {
    id: 'lysander',
    chineseName: '呂山德',
    englishName: 'Lysander',
    startYear: -454,
    endYear: -395,
    coordinates: [37.0755, 22.4300], // 斯巴達
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/呂山德',
    category: '政治',
    tags: ['海軍統帥', '斯巴達', '伯羅奔尼撒戰爭', '將軍'],
    description: '斯巴達海軍統帥，在伯羅奔尼撒戰爭末期擊敗雅典海軍，為斯巴達贏得戰爭勝利。'
  },
  {
    id: 'agesilaus-ii',
    chineseName: '阿格西勞斯二世',
    englishName: 'Agesilaus II',
    startYear: -444,
    endYear: -360,
    coordinates: [37.0755, 22.4300], // 斯巴達
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/阿格西勞斯二世',
    category: '政治',
    tags: ['國王', '斯巴達', '軍事統帥', '希臘'],
    description: '斯巴達國王，傑出的軍事統帥，在蘇格拉底死後統治斯巴達，是斯巴達最後的偉大國王。'
  },
  {
    id: 'artaxerxes-ii',
    chineseName: '阿爾塔薛西斯二世',
    englishName: 'Artaxerxes II',
    startYear: -436,
    endYear: -358,
    coordinates: [29.9342, 52.8916], // 波斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/阿爾塔薛西斯二世',
    category: '政治',
    tags: ['國王', '波斯帝國', '阿契美尼德王朝'],
    description: '波斯帝國國王，統治期間與希臘城邦有密切外交關係，支持斯巴達對抗雅典。'
  },
  {
    id: 'cyrus-the-younger',
    chineseName: '小居魯士',
    englishName: 'Cyrus the Younger',
    startYear: -423,
    endYear: -401,
    coordinates: [29.9342, 52.8916], // 波斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/小居魯士',
    category: '政治',
    tags: ['王子', '波斯', '叛亂', '萬人遠征'],
    description: '波斯王子，發動叛亂企圖奪取王位，僱傭希臘軍隊，其失敗導致著名的「萬人遠征」。'
  },
  {
    id: 'thrasybulus',
    chineseName: '特拉西布洛斯',
    englishName: 'Thrasybulus',
    startYear: -440,
    endYear: -388,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/特拉西布洛斯',
    category: '政治',
    tags: ['將軍', '民主派', '雅典', '三十僭主'],
    description: '雅典民主派領袖，推翻三十僭主統治，恢復雅典民主制度，是蘇格拉底時代的重要政治人物。'
  },
  {
    id: 'critias',
    chineseName: '克里提亞斯',
    englishName: 'Critias',
    startYear: -460,
    endYear: -403,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/克里提亞斯',
    category: '政治',
    tags: ['三十僭主', '寡頭政治', '雅典', '蘇格拉底學生'],
    description: '三十僭主之一，蘇格拉底的學生，實行恐怖統治，最終在與民主派的戰鬥中死亡。'
  },
  {
    id: 'pausanias',
    chineseName: '保薩尼亞斯',
    englishName: 'Pausanias',
    startYear: -470,
    endYear: -408,
    coordinates: [37.0755, 22.4300], // 斯巴達
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/保薩尼亞斯_(斯巴達國王)',
    category: '政治',
    tags: ['國王', '斯巴達', '伯羅奔尼撒戰爭', '將軍'],
    description: '斯巴達國王，伯羅奔尼撒戰爭期間的軍事統帥，在普拉提亞戰役中擊敗波斯軍隊。'
  },
  // 非洲古典時代政治人物
  {
    id: 'ramses-ii',
    chineseName: '拉美西斯二世',
    englishName: 'Ramses II',
    startYear: -1303,
    endYear: -1213,
    coordinates: [25.6872, 32.6396], // 盧克索
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/拉美西斯二世',
    category: '政治',
    tags: ['法老', '古埃及', '新王國', '卡迭石戰役'],
    description: '古埃及第十九王朝法老，被稱為「偉大的拉美西斯」，統治埃及66年，是古埃及最著名的法老之一。'
  },
  {
    id: 'cleopatra-vii',
    chineseName: '克麗奧佩特拉七世',
    englishName: 'Cleopatra VII',
    startYear: -69,
    endYear: -30,
    coordinates: [31.2001, 29.9187], // 亞歷山大港
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/克麗奧佩特拉七世',
    category: '政治',
    tags: ['女王', '托勒密王朝', '古埃及', '羅馬', '凱撒', '安東尼'],
    description: '托勒密王朝最後一位法老，以智慧和政治手腕聞名，與凱撒和安東尼的關係影響了羅馬歷史，是古代最著名的女性統治者之一。'
  },
  {
    id: 'mansa-musa',
    chineseName: '曼薩·穆薩',
    englishName: 'Mansa Musa',
    startYear: 1280,
    endYear: 1337,
    coordinates: [12.6508, -8.0000], // 廷巴克圖
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/曼薩·穆薩',
    category: '政治',
    tags: ['國王', '馬里帝國', '黃金', '朝聖'],
    description: '馬里帝國最著名的國王，1324年朝聖麥加時攜帶大量黃金，被認為是歷史上最富有的人之一。'
  },
  {
    id: 'shaka-zulu',
    chineseName: '沙卡·祖魯',
    englishName: 'Shaka Zulu',
    startYear: 1787,
    endYear: 1828,
    coordinates: [-28.4793, 32.1987], // 祖魯蘭
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/沙卡·祖魯',
    category: '政治',
    tags: ['國王', '祖魯王國', '軍事改革', '南非'],
    description: '祖魯王國的創建者，軍事改革家，建立了強大的祖魯軍隊，對南非歷史產生深遠影響。'
  },
  // 非洲現代政治人物
  {
    id: 'nelson-mandela',
    chineseName: '納爾遜·曼德拉',
    englishName: 'Nelson Mandela',
    startYear: 1918,
    endYear: 2013,
    coordinates: [-26.2041, 28.0473], // 約翰內斯堡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/納爾遜·曼德拉',
    category: '政治',
    tags: ['總統', '反種族隔離', '和平', '南非'],
    description: '南非第一位黑人總統，反種族隔離運動領袖，被譽為「南非國父」，1993年諾貝爾和平獎得主。'
  },
  {
    id: 'kwame-nkrumah',
    chineseName: '克瓦米·恩克魯瑪',
    englishName: 'Kwame Nkrumah',
    startYear: 1909,
    endYear: 1972,
    coordinates: [5.5600, -0.2057], // 阿克拉
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/克瓦米·恩克魯瑪',
    category: '政治',
    tags: ['總統', '獨立', '泛非主義', '加納'],
    description: '加納首任總統，領導加納獨立，泛非主義運動的重要領袖，被稱為「非洲解放之父」。'
  },
  {
    id: 'jomo-kenyatta',
    chineseName: '喬莫·肯雅塔',
    englishName: 'Jomo Kenyatta',
    startYear: 1897,
    endYear: 1978,
    coordinates: [-1.2921, 36.8219], // 內羅畢
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/喬莫·肯雅塔',
    category: '政治',
    tags: ['總統', '獨立', '肯亞', '民族主義'],
    description: '肯亞首任總統，領導肯亞獨立運動，被稱為「肯亞國父」，對東非政治發展有重要影響。'
  },
  {
    id: 'julius-nyerere',
    chineseName: '朱利葉斯·尼雷爾',
    englishName: 'Julius Nyerere',
    startYear: 1922,
    endYear: 1999,
    coordinates: [-6.8235, 39.2695], // 達累斯薩拉姆
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/朱利葉斯·尼雷爾',
    category: '政治',
    tags: ['總統', '社會主義', '坦尚尼亞', '烏賈馬'],
    description: '坦尚尼亞首任總統，推行烏賈馬社會主義政策，被稱為「姆瓦利姆」（老師），是非洲重要的政治思想家。'
  },
  {
    id: 'patrice-lumumba',
    chineseName: '帕特里斯·盧蒙巴',
    englishName: 'Patrice Lumumba',
    startYear: 1925,
    endYear: 1961,
    coordinates: [-4.4419, 15.2663], // 金沙薩
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/帕特里斯·盧蒙巴',
    category: '政治',
    tags: ['總理', '獨立', '剛果', '民族主義'],
    description: '剛果民主共和國首任總理，領導剛果獨立運動，是非洲民族主義的重要代表，1961年遇害。'
  },
  {
    id: 'haile-selassie',
    chineseName: '海爾·塞拉西一世',
    englishName: 'Haile Selassie I',
    startYear: 1892,
    endYear: 1975,
    coordinates: [9.0320, 38.7480], // 亞的斯亞貝巴
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/海爾·塞拉西一世',
    category: '政治',
    tags: ['皇帝', '衣索比亞', '非盟', '拉斯塔法里'],
    description: '衣索比亞皇帝，領導衣索比亞抵抗義大利侵略，是非洲統一組織的創始人之一，被拉斯塔法里運動尊為神。'
  },
  {
    id: 'thomas-sankara',
    chineseName: '托馬斯·桑卡拉',
    englishName: 'Thomas Sankara',
    startYear: 1949,
    endYear: 1987,
    coordinates: [12.3714, -1.5197], // 瓦加杜古
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/托馬斯·桑卡拉',
    category: '政治',
    tags: ['總統', '革命', '布吉納法索', '社會主義'],
    description: '布吉納法索革命領袖，推行激進的社會改革，被稱為「非洲的切·格瓦拉」，1987年遇害。'
  },
  {
    id: 'darius-i',
    chineseName: '大流士一世',
    englishName: 'Darius I of Persia',
    startYear: -550,
    endYear: -486,
    coordinates: [29.9342, 52.8916],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/大流士一世',
    category: '政治',
    tags: ['波斯帝國', '帝王'],
    description: '波斯帝國的創建者，被稱為「波斯之獅」。'
  },
  {
    id: 'qin-shihuang',
    chineseName: '秦始皇',
    englishName: 'Qin Shi Huang',
    startYear: -259,
    endYear: -210,
    coordinates: [34.2658, 108.9541],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/秦始皇',
    category: '政治',
    tags: ['秦朝', '帝王'],
    description: '中國歷史上第一位皇帝，統一六國，建立秦朝。'
  },
  {
    id: 'george-washington',
    chineseName: '喬治·華盛頓',
    englishName: 'George Washington',
    startYear: 1732,
    endYear: 1799,
    coordinates: [38.8895, -77.0093],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/喬治·華盛頓',
    category: '政治',
    tags: ['總統', '獨立', '建國', '美國'],
    description: '美國第一任總統，領導美國獨立戰爭，被譽為美國國父。'
  },
  {
    id: 'abraham-lincoln',
    chineseName: '亞伯拉罕·林肯',
    englishName: 'Abraham Lincoln',
    startYear: 1809,
    endYear: 1865,
    coordinates: [38.8977, -77.0365],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/亞伯拉罕·林肯',
    category: '政治',
    tags: ['總統', '解放', '統一', '美國'],
    description: '美國第16任總統，領導南北戰爭，解放黑奴，維護國家統一。'
  },
  {
    id: 'franklin-roosevelt',
    chineseName: '富蘭克林·羅斯福',
    englishName: 'Franklin D. Roosevelt',
    startYear: 1882,
    endYear: 1945,
    coordinates: [40.7128, -74.0060],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/富蘭克林·德拉諾·羅斯福',
    category: '政治',
    tags: ['總統', '新政', '二戰', '美國'],
    description: '美國第32任總統，實施新政應對經濟大蕭條，領導美國參與二戰。'
  },
  {
    id: 'john-kennedy',
    chineseName: '約翰·甘迺迪',
    englishName: 'John F. Kennedy',
    startYear: 1917,
    endYear: 1963,
    coordinates: [42.3601, -71.0589],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/約翰·甘迺迪',
    category: '政治',
    tags: ['總統', '太空', '冷戰', '美國'],
    description: '美國第35任總統，推動太空計劃，在冷戰時期展現領導力。'
  },
  // 柏拉圖70歲時（公元前358年）的重要政治人物
  {
    id: 'philip-ii-macedon',
    chineseName: '菲利普二世',
    englishName: 'Philip II of Macedon',
    startYear: -382,
    endYear: -336,
    coordinates: [40.5169, 23.2132], // 佩拉
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/菲利普二世_(馬其頓)',
    category: '政治',
    tags: ['國王', '馬其頓', '軍事改革', '亞歷山大大帝之父'],
    description: '馬其頓國王，亞歷山大大帝的父親，通過軍事改革和外交手段統一希臘，為亞歷山大東征奠定基礎。'
  },
  {
    id: 'alexander-the-great',
    chineseName: '亞歷山大大帝',
    englishName: 'Alexander the Great',
    startYear: -356,
    endYear: -323,
    coordinates: [40.5169, 23.2132], // 佩拉
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/亞歷山大大帝',
    category: '政治',
    tags: ['國王', '征服者', '馬其頓', '波斯帝國', '亞里士多德學生'],
    description: '馬其頓國王，亞里士多德的學生，在短時間內征服波斯帝國，建立歷史上最大的帝國之一，被譽為「大帝」。'
  },
  {
    id: 'darius-iii',
    chineseName: '大流士三世',
    englishName: 'Darius III',
    startYear: -380,
    endYear: -330,
    coordinates: [29.9342, 52.8916], // 波斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/大流士三世',
    category: '政治',
    tags: ['國王', '波斯帝國', '阿契美尼德王朝', '亞歷山大對手'],
    description: '波斯帝國最後一位阿契美尼德王朝國王，在亞歷山大東征中被擊敗，標誌著波斯帝國的滅亡。'
  },
  {
    id: 'demosthenes',
    chineseName: '德摩斯梯尼',
    englishName: 'Demosthenes',
    startYear: -384,
    endYear: -322,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/德摩斯梯尼',
    category: '政治',
    tags: ['演說家', '政治家', '雅典', '反馬其頓'],
    description: '雅典著名演說家和政治家，反對馬其頓的擴張，其演說被譽為古希臘演說術的典範。'
  },
  {
    id: 'aeschines',
    chineseName: '埃斯基涅斯',
    englishName: 'Aeschines',
    startYear: -389,
    endYear: -314,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/埃斯基涅斯',
    category: '政治',
    tags: ['演說家', '政治家', '雅典', '親馬其頓'],
    description: '雅典演說家和政治家，與德摩斯梯尼對立，支持與馬其頓和解，兩人長期政治鬥爭。'
  },
  {
    id: 'epaminondas',
    chineseName: '伊巴密濃達',
    englishName: 'Epaminondas',
    startYear: -418,
    endYear: -362,
    coordinates: [38.3, 23.3], // 底比斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/伊巴密濃達',
    category: '政治',
    tags: ['將軍', '政治家', '底比斯', '軍事改革'],
    description: '底比斯將軍和政治家，在留克特拉戰役中擊敗斯巴達，打破斯巴達軍事霸權，但不久後戰死。'
  },
  {
    id: 'pelopidas',
    chineseName: '佩洛皮達斯',
    englishName: 'Pelopidas',
    startYear: -410,
    endYear: -364,
    coordinates: [38.3, 23.3], // 底比斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/佩洛皮達斯',
    category: '政治',
    tags: ['將軍', '政治家', '底比斯', '神聖軍團'],
    description: '底比斯將軍和政治家，與伊巴密濃達共同領導底比斯崛起，建立著名的神聖軍團。'
  },
  {
    id: 'artaxerxes-iii',
    chineseName: '阿爾塔薛西斯三世',
    englishName: 'Artaxerxes III',
    startYear: -425,
    endYear: -338,
    coordinates: [29.9342, 52.8916], // 波斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/阿爾塔薛西斯三世',
    category: '政治',
    tags: ['國王', '波斯帝國', '阿契美尼德王朝', '鎮壓叛亂'],
    description: '波斯帝國國王，統治期間鎮壓埃及等地的叛亂，恢復波斯帝國的統一，但最終被謀殺。'
  },
  // 中國上古時期聖王
  {
    id: 'tang-yao',
    chineseName: '唐堯',
    englishName: 'Tang Yao',
    startYear: -2357,
    endYear: -2258,
    coordinates: [34.7, 113.6], // 中原
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/堯',
    category: '政治',
    tags: ['聖王', '五帝', '上古', '禪讓', '中國'],
    description: '中國上古時期五帝之一，以仁德治國，實行禪讓制度，將帝位傳給虞舜，被後世尊為聖王典範。'
  },
  {
    id: 'dan-zhu',
    chineseName: '丹朱',
    englishName: 'Dan Zhu',
    startYear: -2300,
    endYear: -2200,
    coordinates: [34.7, 113.6], // 中原
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/丹朱',
    category: '政治',
    tags: ['王子', '唐堯之子', '上古', '中國'],
    description: '唐堯的兒子，因品行不端未能繼承帝位，堯將帝位禪讓給虞舜，體現了上古禪讓制度的公正性。'
  },
  {
    id: 'yu-shun',
    chineseName: '虞舜',
    englishName: 'Yu Shun',
    startYear: -2294,
    endYear: -2184,
    coordinates: [34.7, 113.6], // 中原
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/舜',
    category: '政治',
    tags: ['聖王', '五帝', '上古', '禪讓', '中國'],
    description: '中國上古時期五帝之一，唐堯禪讓帝位給他，以孝道和仁德聞名，後將帝位禪讓給大禹，是禪讓制度的典範。'
  },
  {
    id: 'da-yu',
    chineseName: '大禹',
    englishName: 'Da Yu',
    startYear: -2200,
    endYear: -2100,
    coordinates: [34.7, 113.6], // 中原
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/大禹',
    category: '政治',
    tags: ['聖王', '五帝', '上古', '治水', '中國'],
    description: '中國上古時期五帝之一，因治水有功而獲得虞舜禪讓帝位，開創夏朝，是中國歷史上第一位王朝的建立者。'
  },
  // 著名女性政治人物
  {
    id: 'queen-victoria',
    chineseName: '維多利亞女王',
    englishName: 'Queen Victoria',
    startYear: 1819,
    endYear: 1901,
    coordinates: [51.5074, -0.1278], // 倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/維多利亞女王',
    category: '政治',
    tags: ['女王', '英國', '維多利亞時代', '大英帝國'],
    description: '英國歷史上在位時間最長的君主，統治期間英國成為世界最強大的帝國，維多利亞時代以她的名字命名。'
  },
  {
    id: 'indira-gandhi',
    chineseName: '英迪拉·甘地',
    englishName: 'Indira Gandhi',
    startYear: 1917,
    endYear: 1984,
    coordinates: [28.6139, 77.2090], // 新德里
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/英迪拉·甘地',
    category: '政治',
    tags: ['總理', '印度', '國大黨', '綠色革命'],
    description: '印度第一位女總理，尼赫魯的女兒，領導印度進行綠色革命，是20世紀最有影響力的女性政治領袖之一。'
  },
  {
    id: 'margaret-thatcher',
    chineseName: '瑪格麗特·柴契爾',
    englishName: 'Margaret Thatcher',
    startYear: 1925,
    endYear: 2013,
    coordinates: [51.5074, -0.1278], // 倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/瑪格麗特·柴契爾',
    category: '政治',
    tags: ['首相', '英國', '保守黨', '鐵娘子', '柴契爾主義'],
    description: '英國第一位女首相，被稱為「鐵娘子」，推行柴契爾主義經濟政策，對英國和世界政治產生深遠影響。'
  },
  {
    id: 'angela-merkel',
    chineseName: '安格拉·梅克爾',
    englishName: 'Angela Merkel',
    startYear: 1954,
    endYear: 2024,
    coordinates: [52.5200, 13.4050], // 柏林
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/安格拉·梅克爾',
    category: '政治',
    tags: ['總理', '德國', '基民盟', '歐盟', '物理學家'],
    description: '德國第一位女總理，歐洲最有影響力的政治領袖之一，領導德國度過金融危機和難民危機，被稱為「歐洲的總理」。'
  },
  // 黑死病時期的政治人物
  {
    id: 'edward-iii',
    chineseName: '愛德華三世',
    englishName: 'Edward III',
    startYear: 1312,
    endYear: 1377,
    coordinates: [51.5074, -0.1278], // 英國倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/愛德華三世_(英格蘭)',
    category: '政治',
    tags: ['國王', '英格蘭', '百年戰爭', '黑死病', '中世紀'],
    description: '英格蘭國王，統治期間正值黑死病大流行，也是百年戰爭的重要參與者，對英格蘭歷史有重要影響。'
  },
  {
    id: 'philip-vi',
    chineseName: '菲利普六世',
    englishName: 'Philip VI',
    startYear: 1293,
    endYear: 1350,
    coordinates: [48.8566, 2.3522], // 法國巴黎
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/菲利普六世_(法蘭西)',
    category: '政治',
    tags: ['國王', '法國', '百年戰爭', '黑死病', '中世紀'],
    description: '法國國王，瓦盧瓦王朝的建立者，統治期間正值黑死病大流行和百年戰爭初期。'
  },
  {
    id: 'clement-vi',
    chineseName: '克萊門特六世',
    englishName: 'Clement VI',
    startYear: 1291,
    endYear: 1352,
    coordinates: [43.9493, 4.8055], // 法國阿維尼翁
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/克萊門特六世',
    category: '政治',
    tags: ['教皇', '天主教', '阿維尼翁教廷', '黑死病', '中世紀'],
    description: '羅馬教皇，阿維尼翁教廷時期的重要教皇，統治期間正值黑死病大流行，對教會應對瘟疫有重要影響。'
  },
  {
    id: 'coluccio-salutati',
    chineseName: '科盧喬·薩盧塔蒂',
    englishName: 'Coluccio Salutati',
    startYear: 1331,
    endYear: 1406,
    coordinates: [43.7696, 11.2558], // 義大利佛羅倫斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/科盧喬·薩盧塔蒂',
    category: '政治',
    tags: ['政治家', '人文主義者', '佛羅倫斯', '文藝復興', '黑死病'],
    description: '義大利政治家和人文主義者，佛羅倫斯共和國的執政官，黑死病後期的重要政治人物，對文藝復興有重要影響。'
  }
]
