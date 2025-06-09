import type { HistoricalFigure } from '@/types'

// 藝術家
export const artFigures: HistoricalFigure[] = [
  {
    id: 'homer',
    chineseName: '荷馬',
    englishName: 'Homer',
    startYear: -800,
    endYear: -700,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/荷馬',
    category: '文化',
    tags: ['詩人', '史詩', '古希臘', '《伊利亞特》', '《奧德賽》'],
    description: '古希臘最偉大的史詩詩人，《伊利亞特》和《奧德賽》的作者，被稱為西方文學之父。'
  },
  {
    id: 'aeschylus',
    chineseName: '埃斯庫羅斯',
    englishName: 'Aeschylus',
    startYear: -525,
    endYear: -456,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/埃斯庫羅斯',
    category: '文化',
    tags: ['悲劇作家', '戲劇家', '古希臘', '《被縛的普羅米修斯》'],
    description: '古希臘三大悲劇作家之一，被稱為「悲劇之父」，作品如《被縛的普羅米修斯》《阿伽門農》。'
  },
  {
    id: 'sophocles',
    chineseName: '索福克勒斯',
    englishName: 'Sophocles',
    startYear: -497,
    endYear: -406,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/索福克勒斯',
    category: '文化',
    tags: ['悲劇作家', '戲劇家', '古希臘', '《俄狄浦斯王》', '《安提戈涅》'],
    description: '古希臘三大悲劇作家之一，作品如《俄狄浦斯王》《安提戈涅》，被譽為悲劇藝術的完美典範。'
  },
  {
    id: 'euripides',
    chineseName: '歐里庇得斯',
    englishName: 'Euripides',
    startYear: -480,
    endYear: -406,
    coordinates: [37.9755, 23.7348], // 雅典
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/歐里庇得斯',
    category: '文化',
    tags: ['悲劇作家', '戲劇家', '古希臘', '《美狄亞》', '《特洛伊婦女》'],
    description: '古希臘三大悲劇作家之一，作品如《美狄亞》《特洛伊婦女》，以心理描寫深刻著稱。'
  },
  {
    id: 'leonardo-da-vinci',
    chineseName: '李奧納多·達文西',
    englishName: 'Leonardo da Vinci',
    startYear: 1452,
    endYear: 1519,
    coordinates: [43.7696, 11.2558],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/李奧納多·達文西',
    category: '藝術',
    tags: ['畫家', '發明家', '科學家'],
    description: '文藝復興「全才」，畫作如《蒙娜麗莎》《最後的晚餐》，對後世影響深遠。'
  },
  {
    id: 'michelangelo',
    chineseName: '米開朗基羅',
    englishName: 'Michelangelo',
    startYear: 1475,
    endYear: 1564,
    coordinates: [43.7696, 11.2558],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/Michelangelo',
    category: '藝術',
    tags: ['雕塑家', '畫家', '建築師'],
    description: '《大衛》《西斯廷禮拜堂》天花板與《最後的審判》作者，被稱為真正的文藝復興巨匠。'
  },
  {
    id: 'raphael',
    chineseName: '拉斐爾',
    englishName: 'Raphael',
    startYear: 1483,
    endYear: 1520,
    coordinates: [43.7973, 11.2481],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/Raphael',
    category: '藝術',
    tags: ['畫家', '建築師'],
    description: '盛期文藝復興代表，作品和諧優美，如《雅典學院》《聖母像》。'
  },
  {
    id: 'sandro-botticelli',
    chineseName: '桑德羅·波提切利',
    englishName: 'Sandro Botticelli',
    startYear: 1445,
    endYear: 1510,
    coordinates: [43.7710, 11.2560],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/Sandro_Botticelli',
    category: '藝術',
    tags: ['畫家'],
    description: '早期盛期畫派代表，《春》《維納斯的誕生》極具古典美學。'
  },
  {
    id: 'titian',
    chineseName: '提香',
    englishName: 'Titian',
    startYear: 1488,
    endYear: 1576,
    coordinates: [45.434, 12.338],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/Titian',
    category: '藝術',
    tags: ['畫家'],
    description: '威尼斯畫派大師，以色彩與動態聞名，被稱為最偉大的威尼斯藝術家。'
  },
  {
    id: 'donatello',
    chineseName: '多納太羅',
    englishName: 'Donatello',
    startYear: 1386,
    endYear: 1466,
    coordinates: [43.7710, 11.2560],
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/Donatello',
    category: '藝術',
    tags: ['雕塑家'],
    description: '早期文藝復興雕塑家，開創自由立體雕塑，以青銅《大衛》最為人知。'
  },
]
