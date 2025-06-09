# 歷史資料結構

## 目錄結構

```
src/data/
├── index.ts                    # 主要整合文件
├── historicalData.ts           # 向後相容性文件
├── historicalEvents.ts         # 原始事件資料（保留）
├── historicalFigures.ts        # 原始人物資料（保留）
├── masterWorks.ts              # 原始著作資料（保留）
├── 社會/                       # 社會類別
│   ├── index.ts
│   ├── Events.ts
│   ├── Figures.ts
│   └── MasterWorks.ts
├── 數理/                       # 數理類別
│   ├── index.ts
│   ├── Events.ts
│   ├── Figures.ts
│   └── MasterWorks.ts
├── 文化/                       # 文化類別
│   ├── index.ts
│   ├── Events.ts
│   ├── Figures.ts
│   └── MasterWorks.ts
├── 政治/                       # 政治類別
│   ├── index.ts
│   ├── Events.ts
│   ├── Figures.ts
│   └── MasterWorks.ts
├── 探險/                       # 探險類別
│   ├── index.ts
│   ├── Events.ts
│   ├── Figures.ts
│   └── MasterWorks.ts
├── 藝術/                       # 藝術類別
│   ├── index.ts
│   ├── Events.ts
│   ├── Figures.ts
│   └── MasterWorks.ts
└── 科技/                       # 科技類別
    ├── index.ts
    ├── Events.ts
    ├── Figures.ts
    └── MasterWorks.ts
```

## 使用方式

### 匯入所有資料
```typescript
import { historicalEvents, historicalFigures, masterWorks } from '@/data'
```

### 匯入特定分類
```typescript
import { socialEvents, socialFigures, socialMasterWorks } from '@/data/社會'
import { mathematicalEvents, mathematicalFigures, mathematicalMasterWorks } from '@/data/數理'
```

### 匯入特定類型的資料
```typescript
import { socialEvents } from '@/data/社會/Events'
import { mathematicalFigures } from '@/data/數理/Figures'
import { culturalMasterWorks } from '@/data/文化/MasterWorks'
```

## 分類說明

- **社會**: 社會變革、經濟發展、社會運動
- **數理**: 數學、物理學、天文學、科學發現
- **文化**: 哲學、宗教、文學、藝術思想
- **政治**: 戰爭、政治事件、帝國興衰
- **探險**: 地理發現、航海探險、旅行
- **藝術**: 藝術家、藝術作品、藝術運動
- **科技**: 技術發明、醫學發展、工程成就

## 資料格式

每個資料項目都包含以下基本欄位：
- `id`: 唯一識別碼
- `chineseName`: 中文名稱
- `englishName`: 英文名稱
- `category`: 分類
- `tags`: 標籤陣列
- `coordinates`: 地理座標 [緯度, 經度]
- `wikipediaUrl`: 維基百科連結
- `description`: 描述

### 歷史事件 (HistoricalEvent)
- `startYear`: 開始年份
- `endYear`: 結束年份（可選）

### 歷史人物 (HistoricalFigure)
- `startYear`: 出生年份
- `endYear`: 逝世年份

### 傳世之作 (MasterWork)
- `author`: 作者中文名
- `authorEnglish`: 作者英文名
- `year`: 創作年份 