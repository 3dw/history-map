// 歷史地圖資料類型定義

export interface HistoricalFigure {
  id: string
  chineseName: string
  englishName: string
  startYear: number // 西元前用負值
  endYear?: number // 還活著就為空值
  coordinates: [number, number] // [緯度, 經度]
  wikipediaUrl: string
}

export interface HistoricalEvent {
  id: string
  chineseName: string
  englishName: string
  startYear: number // 西元前用負值，發生年份
  endYear?: number // 結束年份，瞬間事件為空值
  coordinates: [number, number] // [緯度, 經度]
  wikipediaUrl: string
}

export interface MasterWork {
  id: string
  chineseName: string
  englishName: string
  author: string // 作者中文名
  authorEnglish: string // 作者英文名
  year?: number // 創作/出版年份，西元前用負值
  coordinates: [number, number] // [緯度, 經度] - 創作地點或相關地點
  wikipediaUrl: string
}

export type MarkerType = 'figure' | 'event' | 'masterwork'

export interface MapMarker {
  type: MarkerType
  data: HistoricalFigure | HistoricalEvent | MasterWork
}
