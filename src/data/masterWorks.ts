import type { MasterWork } from '@/types'

// 傳世之作資料
export const masterWorks: MasterWork[] = [
  // 中國古典經典
  {
    id: 'i-ching',
    chineseName: '周易',
    englishName: 'I Ching (Book of Changes)',
    author: '周文王',
    authorEnglish: 'King Wen of Zhou',
    year: -1000, // 約西元前1000年
    coordinates: [34.2658, 108.9541], // 中國陝西西安（周朝都城）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/易經'
  },
  {
    id: 'tao-te-ching',
    chineseName: '道德經',
    englishName: 'Tao Te Ching',
    author: '老子',
    authorEnglish: 'Laozi',
    year: -500, // 約西元前500年
    coordinates: [33.8818, 113.1142], // 中國河南鹿邑（老子故里）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/道德經'
  },
  {
    id: 'analects',
    chineseName: '論語',
    englishName: 'The Analects',
    author: '孔子及其弟子',
    authorEnglish: 'Confucius and his disciples',
    year: -400, // 約西元前400年完成編纂
    coordinates: [35.6037, 117.0230], // 山東曲阜
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/論語'
  },

  // 宗教經典
  {
    id: 'new-testament',
    chineseName: '新約聖經',
    englishName: 'New Testament',
    author: '耶穌的門徒',
    authorEnglish: 'Disciples of Jesus',
    year: 100, // 約西元100年完成
    coordinates: [31.7683, 35.2137], // 耶路撒冷
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/新約聖經'
  },

  // 文學經典
  {
    id: 'divine-comedy',
    chineseName: '神曲',
    englishName: 'The Divine Comedy',
    author: '但丁',
    authorEnglish: 'Dante Alighieri',
    year: 1320, // 約1320年完成
    coordinates: [43.7696, 11.2558], // 義大利佛羅倫斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/神曲'
  },
  {
    id: 'hamlet',
    chineseName: '哈姆雷特',
    englishName: 'Hamlet',
    author: '莎士比亞',
    authorEnglish: 'William Shakespeare',
    year: 1603, // 約1603年
    coordinates: [52.1951, -1.7118], // 英國斯特拉福德
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/哈姆雷特'
  },

  // 經濟學經典
  {
    id: 'wealth-of-nations',
    chineseName: '國富論',
    englishName: 'The Wealth of Nations',
    author: '亞當·史密斯',
    authorEnglish: 'Adam Smith',
    year: 1776,
    coordinates: [55.9533, -3.1883], // 蘇格蘭愛丁堡
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/國富論'
  },
  {
    id: 'das-kapital',
    chineseName: '資本論',
    englishName: 'Das Kapital',
    author: '卡爾·馬克思',
    authorEnglish: 'Karl Marx',
    year: 1867,
    coordinates: [51.5074, -0.1278], // 英國倫敦（馬克思寫作地）
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/資本論'
  },

  // 科學經典
  {
    id: 'de-revolutionibus',
    chineseName: '天體運行論',
    englishName: 'De revolutionibus orbium coelestium',
    author: '尼古拉·哥白尼',
    authorEnglish: 'Nicolaus Copernicus',
    year: 1543,
    coordinates: [54.3520, 18.6466], // 波蘭托倫
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/天體運行論'
  },
  {
    id: 'astronomia-nova',
    chineseName: '新天文學',
    englishName: 'Astronomia Nova',
    author: '約翰尼斯·開普勒',
    authorEnglish: 'Johannes Kepler',
    year: 1609,
    coordinates: [48.7758, 9.1829], // 德國魏爾
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/新天文學'
  },
  {
    id: 'sidereus-nuncius',
    chineseName: '星際信使',
    englishName: 'Sidereus Nuncius',
    author: '伽利略·伽利萊',
    authorEnglish: 'Galileo Galilei',
    year: 1610,
    coordinates: [43.7230, 10.4017], // 義大利比薩
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/星際信使'
  },
  {
    id: 'dialogue-concerning-two-chief-world-systems',
    chineseName: '關於托勒密和哥白尼兩大世界體系的對話',
    englishName: 'Dialogue Concerning the Two Chief World Systems',
    author: '伽利略·伽利萊',
    authorEnglish: 'Galileo Galilei',
    year: 1632,
    coordinates: [43.7696, 11.2558], // 義大利佛羅倫斯
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/關於托勒密和哥白尼兩大世界體系的對話'
  },
  {
    id: 'monadology',
    chineseName: '單子論',
    englishName: 'Monadology',
    author: '戈特弗里德·萊布尼茲',
    authorEnglish: 'Gottfried Wilhelm Leibniz',
    year: 1714,
    coordinates: [52.3705, 9.7332], // 德國漢諾威
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/單子論'
  },
  {
    id: 'ars-conjectandi',
    chineseName: '推測術',
    englishName: 'Ars Conjectandi',
    author: '雅各布·白努利',
    authorEnglish: 'Jakob Bernoulli',
    year: 1713,
    coordinates: [47.5596, 7.5886], // 瑞士巴塞爾
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/推測術'
  },
  {
    id: 'principia',
    chineseName: '自然哲學的數學原理',
    englishName: 'Principia Mathematica',
    author: '艾薩克·牛頓',
    authorEnglish: 'Isaac Newton',
    year: 1687,
    coordinates: [52.2053, 0.1218], // 英國劍橋
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/自然哲學的數學原理'
  },
  {
    id: 'origin-of-species',
    chineseName: '物種起源',
    englishName: 'On the Origin of Species',
    author: '查爾斯·達爾文',
    authorEnglish: 'Charles Darwin',
    year: 1859,
    coordinates: [51.5074, -0.1278], // 英國倫敦
    wikipediaUrl: 'https://zh.wikipedia.org/wiki/物種起源'
  }
]
