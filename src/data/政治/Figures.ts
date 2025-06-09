import type { HistoricalFigure } from '@/types'

// 政治類別的歷史人物
export const politicalFigures: HistoricalFigure[] = [
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
    tags: ['女王', '托勒密王朝', '古埃及', '羅馬'],
    description: '托勒密王朝最後一位法老，以智慧和政治手腕聞名，與凱撒和安東尼的關係影響了羅馬歷史。'
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
  }
]
