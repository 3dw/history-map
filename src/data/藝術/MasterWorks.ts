import type { MasterWork } from '@/types'

// 藝術類別的傳世之作
export const artMasterWorks: MasterWork[] = [
  {
    id: 'iliad',
    chineseName: '伊利亞特',
    englishName: 'Iliad',
    author: '荷馬',
    authorEnglish: 'Homer',
    year: -750,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/伊利亞特',
    category: '文化',
    tags: ['史詩', '古希臘', '特洛伊戰爭', '荷馬'],
    description: '荷馬史詩之一，描述特洛伊戰爭的故事，被譽為西方文學的開山之作。'
  },
  {
    id: 'odyssey',
    chineseName: '奧德賽',
    englishName: 'Odyssey',
    author: '荷馬',
    authorEnglish: 'Homer',
    year: -750,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/奧德賽',
    category: '文化',
    tags: ['史詩', '古希臘', '奧德修斯', '荷馬'],
    description: '荷馬史詩之一，描述奧德修斯返鄉的冒險旅程，展現古希臘人的智慧與勇氣。'
  },
  {
    id: 'prometheus-bound',
    chineseName: '被縛的普羅米修斯',
    englishName: 'Prometheus Bound',
    author: '埃斯庫羅斯',
    authorEnglish: 'Aeschylus',
    year: -450,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/被縛的普羅米修斯',
    category: '文化',
    tags: ['悲劇', '古希臘', '普羅米修斯', '埃斯庫羅斯'],
    description: '埃斯庫羅斯的悲劇作品，描述普羅米修斯為人類盜火而被宙斯懲罰的故事。'
  },
  {
    id: 'agamemnon',
    chineseName: '阿伽門農',
    englishName: 'Agamemnon',
    author: '埃斯庫羅斯',
    authorEnglish: 'Aeschylus',
    year: -458,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/阿伽門農',
    category: '文化',
    tags: ['悲劇', '古希臘', '特洛伊戰爭', '埃斯庫羅斯'],
    description: '埃斯庫羅斯《奧瑞斯提亞》三部曲的第一部，描述阿伽門農從特洛伊歸來後的命運。'
  },
  {
    id: 'oedipus-rex',
    chineseName: '俄狄浦斯王',
    englishName: 'Oedipus Rex',
    author: '索福克勒斯',
    authorEnglish: 'Sophocles',
    year: -429,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/俄狄浦斯王',
    category: '文化',
    tags: ['悲劇', '古希臘', '命運', '索福克勒斯'],
    description: '索福克勒斯的經典悲劇，探討命運與自由意志的衝突，被亞里士多德譽為悲劇的典範。'
  },
  {
    id: 'antigone',
    chineseName: '安提戈涅',
    englishName: 'Antigone',
    author: '索福克勒斯',
    authorEnglish: 'Sophocles',
    year: -441,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/安提戈涅',
    category: '文化',
    tags: ['悲劇', '古希臘', '道德', '索福克勒斯'],
    description: '索福克勒斯的悲劇作品，探討個人道德與國家法律之間的衝突。'
  },
  {
    id: 'medea',
    chineseName: '美狄亞',
    englishName: 'Medea',
    author: '歐里庇得斯',
    authorEnglish: 'Euripides',
    year: -431,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/美狄亞',
    category: '文化',
    tags: ['悲劇', '古希臘', '復仇', '歐里庇得斯'],
    description: '歐里庇得斯的悲劇作品，描述美狄亞因丈夫背叛而復仇的故事，以心理描寫深刻著稱。'
  },
  {
    id: 'trojan-women',
    chineseName: '特洛伊婦女',
    englishName: 'The Trojan Women',
    author: '歐里庇得斯',
    authorEnglish: 'Euripides',
    year: -415,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/特洛伊婦女',
    category: '文化',
    tags: ['悲劇', '古希臘', '戰爭', '歐里庇得斯'],
    description: '歐里庇得斯的悲劇作品，描述特洛伊戰爭後婦女們的悲慘命運，展現戰爭的殘酷。'
  },
  // 蒙娜麗莎
  {
    id: 'mona-lisa',
    chineseName: '蒙娜麗莎',
    englishName: 'Mona Lisa',
    author: '達文西',
    authorEnglish: 'Leonardo da Vinci',
    year: 1503,
    coordinates: [45.4667, 12.2333], // 義大利
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/蒙娜麗莎',
    category: '文化',
    tags: ['油畫', '達文西', '文藝復興', '蒙娜麗莎'],
    description: '達文西的著名油畫，被譽為文藝復興時期的代表作之一，以神秘的微笑著稱。'
  }
]
