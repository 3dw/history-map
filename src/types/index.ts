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

export type MarkerType = 'figure' | 'event'

export interface MapMarker {
  type: MarkerType
  data: HistoricalFigure | HistoricalEvent
}