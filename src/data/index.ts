// 社會類別
export { socialEvents } from './社會/Events'
export { socialFigures } from './社會/Figures'
export { socialMasterWorks } from './社會/MasterWorks'

// 數理類別
export { mathematicalEvents } from './數理'
export { mathematicalFigures } from './數理'
export { mathematicalMasterWorks } from './數理'

// 文化類別
export { culturalEvents } from './文化/Events'
export { culturalFigures } from './文化/Figures'
export { culturalMasterWorks } from './文化/MasterWorks'

// 政治類別
export { politicalEvents } from './政治/Events'
export { politicalFigures } from './政治/Figures'
export { politicalMasterWorks } from './政治/MasterWorks'

// 探險類別
export { explorationEvents } from './探險/Events'
export { explorationFigures } from './探險/Figures'
export { explorationMasterWorks } from './探險/MasterWorks'

// 藝術類別
export { artisticEvents } from './藝術'
export { artisticFigures } from './藝術'
export { artisticMasterWorks } from './藝術'

// 科技類別
export { technologicalEvents } from './科技'
export { technologicalFigures } from './科技'
export { technologicalMasterWorks } from './科技'

// 整合所有資料
import { socialEvents, socialFigures, socialMasterWorks } from './社會'
import { mathematicalEvents, mathematicalFigures, mathematicalMasterWorks } from './數理'
import { culturalEvents, culturalFigures, culturalMasterWorks } from './文化'
import { politicalEvents, politicalFigures, politicalMasterWorks } from './政治'
import { explorationEvents, explorationFigures, explorationMasterWorks } from './探險'
import { artisticEvents, artisticFigures, artisticMasterWorks } from './藝術'
import { technologicalEvents, technologicalFigures, technologicalMasterWorks } from './科技'

// 匯出整合後的資料
export const historicalEvents = [
  ...socialEvents,
  ...mathematicalEvents,
  ...culturalEvents,
  ...politicalEvents,
  ...explorationEvents,
  ...artisticEvents,
  ...technologicalEvents
]

export const historicalFigures = [
  ...socialFigures,
  ...mathematicalFigures,
  ...culturalFigures,
  ...politicalFigures,
  ...explorationFigures,
  ...artisticFigures,
  ...technologicalFigures
]

export const masterWorks = [
  ...socialMasterWorks,
  ...mathematicalMasterWorks,
  ...culturalMasterWorks,
  ...politicalMasterWorks,
  ...explorationMasterWorks,
  ...artisticMasterWorks,
  ...technologicalMasterWorks
]
