import type { HistoricalFigure } from '@/types'

import { politicalFigures } from './政治/Figures'
import { culturalFigures } from './文化/Figures'
import { scientificFigures } from './數理/Figures'
import { socialFigures } from './社會/Figures'
import { techFigures } from './科技/Figures'
import { artFigures } from './藝術/Figures'
import { explorationFigures } from './探險/Figures'

// 合併所有子分類人物
export const historicalFigures: HistoricalFigure[] = [
  ...politicalFigures,
  ...culturalFigures,
  ...scientificFigures,
  ...socialFigures,
  ...techFigures,
  ...artFigures,
  ...explorationFigures
]
