// 歷史地圖資料類型定義

export type Category = '社會' | '數理' | '文化' | '政治' | '探險' | '藝術' | '科技'
export type Tag = string

export interface BaseData {
  id: string
  chineseName: string
  englishName: string
  coordinates: [number, number]
  wikipediaUrl: string
  category: Category
  tags: Tag[]
}

export interface HistoricalFigure extends BaseData {
  startYear: number
  endYear?: number
  description?: string
}

export interface HistoricalEvent extends BaseData {
  startYear: number
  endYear?: number
  description?: string
}

export interface MasterWork extends BaseData {
  author: string
  authorEnglish: string
  year?: number
  description?: string
}

export type MarkerType = 'figure' | 'event' | 'masterwork'

export interface MapMarker {
  type: MarkerType
  data: HistoricalFigure | HistoricalEvent | MasterWork
}
