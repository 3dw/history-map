import type { HistoricalEvent } from '@/types'

import { politicalEvents } from './政治/Events'
import { culturalEvents } from './文化/Events'
import { scientificEvents } from './數理/Events'
import { socialEvents } from './社會/Events'
import { techEvents } from './科技/Events'
import { artEvents } from './藝術/Events'
import { explorationEvents } from './探險/Events'

// 合併所有子分類事件
export const historicalEvents: HistoricalEvent[] = [
  ...politicalEvents,
  ...culturalEvents,
  ...scientificEvents,
  ...socialEvents,
  ...techEvents,
  ...artEvents,
  ...explorationEvents
]
