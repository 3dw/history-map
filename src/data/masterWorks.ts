import type { MasterWork } from '@/types'

import { politicalMasterWorks } from './政治/MasterWorks'
import { culturalMasterWorks } from './文化/MasterWorks'
import { scientificMasterWorks } from './數理/MasterWorks'
import { socialMasterWorks } from './社會/MasterWorks'
import { techMasterWorks } from './科技/MasterWorks'
import { artMasterWorks } from './藝術/MasterWorks'
import { explorationMasterWorks } from './探險/MasterWorks'

// 合併所有子分類傳世之作
export const masterWorks: MasterWork[] = [
  ...politicalMasterWorks,
  ...culturalMasterWorks,
  ...scientificMasterWorks,
  ...socialMasterWorks,
  ...techMasterWorks,
  ...artMasterWorks,
  ...explorationMasterWorks
]
