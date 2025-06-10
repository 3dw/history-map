<template>
  <div class="history-map-container">
    <!-- 手機版選單按鈕 -->
    <button
      class="mobile-menu-toggle"
      :class="{ active: mobileMenuOpen }"
      @click="toggleMobileMenu"
      v-if="isMobile"
    >
      ⚙️
    </button>

    <!-- 手機版設定面板 -->
    <div class="mobile-settings-panel" :class="{ open: mobileMenuOpen }" v-if="isMobile">
      <div class="mobile-settings-header">
        <h2>歷史地圖設定</h2>
        <button class="mobile-settings-close" @click="closeMobileMenu">✕</button>
      </div>
      <div class="mobile-settings-content">
        <!-- 搜尋框 -->
        <div class="search-box">
          <input
            v-model="searchKeyword"
            type="text"
            placeholder="搜尋歷史人物、事件或傳世之作..."
            class="search-input"
            @input="updateSearchResults"
          />
          <button class="search-clear" @click="clearSearch" v-if="searchKeyword">
            ✕
          </button>
        </div>

        <!-- 搜尋結果 -->
        <div class="search-results" v-if="searchKeyword && searchResults.length > 0">
          <div class="search-results-header">
            找到 {{ searchResults.length }} 個結果
          </div>
          <div class="search-result-items">
            <div
              v-for="result in searchResults"
              :key="`${result.type}-${result.data.id}`"
              class="search-result-item"
              @click="focusOnMarker(result)"
            >
              <div class="result-icon">
                {{ getResultIcon(result.type) }}
              </div>
              <div class="result-content">
                <div class="result-title">{{ result.data.chineseName }}</div>
                <div class="result-subtitle">{{ getResultSubtitle(result) }}</div>
              </div>
              <div class="result-actions">
                <button
                  class="time-machine-btn"
                  @click="goToTimeMachine(result)"
                  title="坐時光機去這個時空"
                >
                  🕰️ 坐時光機去{{ result.data.chineseName }}的時空
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 類別篩選 -->
        <div class="category-filter">
          <h3>類別篩選</h3>
          <div class="category-tags">
            <label
              v-for="category in availableCategories"
              :key="category"
              class="category-tag"
              :class="{ active: selectedCategories.includes(category) }"
            >
              <input
                type="checkbox"
                :value="category"
                v-model="selectedCategories"
                @change="updateMarkers"
              />
              {{ category }}
            </label>
          </div>
        </div>

        <!-- 標籤篩選 -->
        <!--<div class="tag-filter">
          <h3>標籤篩選</h3>
          <div class="tag-search">
            <input
              v-model="searchTag"
              type="text"
              placeholder="搜尋標籤..."
              class="tag-search-input"
            />
          </div>
          <div class="tag-tags">
            <label
              v-for="tag in filteredTags"
              :key="tag"
              class="tag-tag"
              :class="{ active: selectedTags.includes(tag) }"
            >
              <input
                type="checkbox"
                :value="tag"
                v-model="selectedTags"
                @change="updateMarkers"
              />
              {{ tag }}
            </label>
          </div>
        </div> -->

        <!-- 基本篩選控制項 -->
        <div class="filter-controls">
          <div class="filter-group">
            <label>
              <input
                v-model="showFigures"
                type="checkbox"
                @change="updateMarkers"
              />
              <span class="filter-count">
                {{ getResultIcon('figure') }}
                {{ filteredFigures.length }}
              </span>
            </label>
          </div>
          <div class="filter-group">
            <label>
              <input
                v-model="showEvents"
                type="checkbox"
                @change="updateMarkers"
              />
              <span class="filter-count">
                {{ getResultIcon('event') }}
                {{ filteredEvents.length }}
              </span>
            </label>
          </div>
          <div class="filter-group">
            <label>
              <input
                v-model="showMasterWorks"
                type="checkbox"
                @change="updateMarkers"
              />
              <span class="filter-count">
                {{ getResultIcon('masterwork') }}
                {{ filteredMasterWorks.length }}
              </span>
            </label>
          </div>
        </div>

        <!-- 時間篩選器 -->
        <div class="time-filter">
          <h3>時間範圍</h3>
          <div class="mode-switch">
            <input type="checkbox" v-model="timeMachineMode" />
            <label> 時光機模式 ({{ timeMachineMode ? '開' : '關' }})</label>
          </div>
          <input type="range" min="-3000" max="2024" step="1" v-model="timeFilter.start" /> {{ timeFilter.start }}~
          <input type="range" min="-3000" max="2024" step="1" v-model="timeFilter.end" /> {{ timeFilter.end }}
          <br/>
          <small>註：西元前請使用負值，例如西元前500年輸入 -500</small>
        </div>
      </div>
    </div>

    <!-- 搜尋區域 - 窄螢幕時在上方 -->
    <div class="search-panel search-panel-top" v-if="!isMobile">
      <div class="search-box">
        <input
          v-model="searchKeyword"
          type="text"
          placeholder="搜尋歷史人物、事件或傳世之作..."
          class="search-input"
          @input="updateSearchResults"
        />
        <button class="search-clear" @click="clearSearch" v-if="searchKeyword">
          ✕
        </button>
      </div>

      <!-- 搜尋結果 -->
      <div class="search-results" v-if="searchKeyword && searchResults.length > 0">
        <div class="search-results-header">
          找到 {{ searchResults.length }} 個結果
        </div>
        <div class="search-result-items">
          <div
            v-for="result in searchResults"
            :key="`${result.type}-${result.data.id}`"
            class="search-result-item"
            @click="focusOnMarker(result)"
          >
            <div class="result-icon">
              {{ getResultIcon(result.type) }}
            </div>
            <div class="result-content">
              <div class="result-title">{{ result.data.chineseName }}</div>
              <div class="result-subtitle">{{ getResultSubtitle(result) }}</div>
            </div>
            <div class="result-actions">
              <button
                class="time-machine-btn"
                @click="goToTimeMachine(result)"
                title="坐時光機去這個時空"
              >
                🕰️ 坐時光機去{{ result.data.chineseName }}的時空
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 地圖控制面板 -->
    <div class="map-controls" v-if="!isMobile">
      <h2 class="title">歷史地圖</h2>

      <!-- 類別篩選 -->
      <div class="category-filter">
        <h3>類別篩選</h3>
        <div class="category-tags">
          <label
            v-for="category in availableCategories"
            :key="category"
            class="category-tag"
            :class="{ active: selectedCategories.includes(category) }"
          >
            <input
              type="checkbox"
              :value="category"
              v-model="selectedCategories"
              @change="updateMarkers"
            />
            {{ category }}
          </label>
        </div>
      </div>

      <!-- 標籤篩選 -->
      <div class="tag-filter">
        <h3>標籤篩選</h3>
        <div class="tag-search">
          <input
            v-model="searchTag"
            type="text"
            placeholder="搜尋標籤..."
            class="tag-search-input"
          />
        </div>
        <div class="tag-tags">
          <label
            v-for="tag in filteredTags"
            :key="tag"
            class="tag-tag"
            :class="{ active: selectedTags.includes(tag) }"
          >
            <input
              type="checkbox"
              :value="tag"
              v-model="selectedTags"
              @change="updateMarkers"
            />
            {{ tag }}
          </label>
        </div>
      </div>


      <!-- 基本篩選控制項 -->
      <div class="filter-controls">
        <div class="filter-group">
          <label>
            <input
              v-model="showFigures"
              type="checkbox"
              @change="updateMarkers"
            />
            <!-- 用emoji顯示數量 -->
            <span class="filter-count">
              {{ getResultIcon('figure') }}
              {{ filteredFigures.length }}
            </span>
          </label>
        </div>
        <div class="filter-group">
          <label>
            <input
              v-model="showEvents"
              type="checkbox"
              @change="updateMarkers"
            />
            <span class="filter-count">
              {{ getResultIcon('event') }}
              {{ filteredEvents.length }}
            </span>
          </label>
        </div>
        <div class="filter-group">
          <label>
            <input
              v-model="showMasterWorks"
              type="checkbox"
              @change="updateMarkers"
            />
            <span class="filter-count">
              {{ getResultIcon('masterwork') }}
              {{ filteredMasterWorks.length }}
            </span>
          </label>
        </div>
      </div>

      <!-- 時間篩選器 -->
      <div class="time-filter">
        <h3>時間範圍</h3>
        <div class="mode-switch">
          <!-- 時光機模式切換 -->
          <input type="checkbox" v-model="timeMachineMode" />
          <label> 時光機模式 ({{ timeMachineMode ? '開' : '關' }})</label>
        </div>
        <input type="range" min="-3000" max="2024" step="1" v-model="timeFilter.start" /> {{ timeFilter.start }} ~
        <br/>
        <input type="range" min="-3000" max="2024" step="1" v-model="timeFilter.end" /> {{ timeFilter.end }}
        <br/>
        <small>註：西元前請使用負值，例如西元前500年輸入 -500</small>
      </div>
    </div>

    <!-- 地圖容器 -->
    <div class="map-wrapper">
      <LMap
        ref="map"
        :zoom="mapZoom"
        :center="mapCenter"
        :options="mapOptions"
        style="height: 100%; width: 100%"
        @ready="onMapReady"
      >
        <LTileLayer
          :url="tileLayerUrl"
          :attribution="attribution"
        />
      </LMap>
    </div>

    <!-- 搜尋區域 - 寬螢幕時在右側 -->
    <div class="search-panel search-panel-side" v-if="!isMobile">
      <div class="search-box">
        <input
          v-model="searchKeyword"
          type="text"
          placeholder="搜尋歷史人物、事件或傳世之作..."
          class="search-input"
          @input="updateSearchResults"
        />
        <button class="search-clear" @click="clearSearch" v-if="searchKeyword">
          ✕
        </button>
      </div>

      <!-- 搜尋結果 -->
      <div class="search-results" v-if="searchKeyword">
        <div class="search-results-header" v-if="searchResults.length > 0">
          找到 {{ searchResults.length }} 個結果
        </div>
        <div class="no-results" v-else>
          沒有找到相關結果
        </div>
        <div class="search-result-items" v-if="searchResults.length > 0">
          <div
            v-for="result in searchResults"
            :key="`${result.type}-${result.data.id}`"
            class="search-result-item"
            @click="focusOnMarker(result)"
          >
            <div class="result-icon">
              {{ getResultIcon(result.type) }}
            </div>
            <div class="result-content">
              <div class="result-title">{{ result.data.chineseName }}</div>
              <div class="result-subtitle">{{ getResultSubtitle(result) }}</div>
            </div>
            <div class="result-actions">
              <button
                class="time-machine-btn"
                @click="goToTimeMachine(result)"
                title="坐時光機去這個時空"
              >
                🕰️ 坐時光機去{{ result.data.chineseName }}的時空
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

import { historicalFigures } from '@/data/historicalFigures'
import { historicalEvents } from '@/data/historicalEvents'
import { masterWorks } from '@/data/masterWorks'
import type { HistoricalFigure, HistoricalEvent, MasterWork, MarkerType, Category } from '@/types'

// 導入樣式
import '@/assets/main.css'
import '@/assets/rwd.css'

// 路由
const router = useRouter()

// 手機版相關狀態
const isMobile = ref(false)
const mobileMenuOpen = ref(false)

// 檢測是否為手機版
const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
}

// 切換手機版選單
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// 關閉手機版選單
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// 擴展 MarkerOptions 類型
declare module 'leaflet' {
  interface MarkerOptions {
    type?: 'figure' | 'event' | 'masterwork'
  }
}

// 擴展 MarkerClusterGroupOptions 類型
declare module 'leaflet.markercluster' {
  interface MarkerClusterGroupOptions {
    maxZoom?: number
  }
}

// 自定義標記類型
interface CustomMarker extends L.Marker {
  options: L.MarkerOptions & {
    type?: 'figure' | 'event' | 'masterwork'
  }
}

// 地圖參考
const map = ref<InstanceType<typeof LMap> | null>(null)

// 地圖設定
const mapOptions = {
  zoomSnap: 0.5,
  zoomDelta: 0.5,
  worldCopyJump: true, // 啟用世界地圖複製跳轉
  maxBoundsViscosity: 0.0 // 移除邊界粘性
}

const mapZoom = ref(2)
const mapCenter = ref<[number, number]>([0, 0])

const tileLayerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const attribution = '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'

// 過濾控制
const showFigures = ref(true)
const showEvents = ref(true)
const showMasterWorks = ref(true)
const timeFilter = ref({
  start: -3000, // 西元前3000年
  end: 2024     // 西元2024年
})

// 時光機模式
const timeMachineMode = ref(false)

// 搜尋功能
const searchKeyword = ref('')
const searchResults = ref<Array<{ type: MarkerType; data: HistoricalFigure | HistoricalEvent | MasterWork }>>([])

// 處理跨越國際換日線的座標
const normalizeCoordinates = (coordinates: [number, number]): [number, number] => {
  const [lat, lng] = coordinates

  // 將經度標準化到 -180 到 180 範圍內
  let normalizedLng = lng
  while (normalizedLng > 180) {
    normalizedLng -= 360
  }
  while (normalizedLng < -180) {
    normalizedLng += 360
  }

  return [lat, normalizedLng]
}

// 創建帶標籤的圖標函數
const createLabeledIcon = (type: 'figure' | 'event' | 'masterwork', name: string, ageOrYears?: number) => {
  const iconMap = {
    figure: '👤',
    event: '⚡',
    masterwork: '📚'
  }
  let label = name
  if (type === 'figure' && typeof ageOrYears === 'number' && ageOrYears >= 0) {
    label += `（${ageOrYears}歲）`
  }
  if (type === 'event' && typeof ageOrYears === 'number' && ageOrYears >= 0) {
    label += `（已進行${ageOrYears}年）`
  }

  // 根據設備類型調整圖標大小
  const isMobileDevice = window.innerWidth < 1024
  const iconWidth = isMobileDevice ? 160 : 140  // 手機版更寬
  const iconHeight = isMobileDevice ? 50 : 45   // 手機版更高
  const anchorX = iconWidth / 2
  const anchorY = iconHeight / 2

  return L.divIcon({
    html: `
      <div class="labeled-marker">
        <div class="custom-marker ${type}-marker">${iconMap[type]}</div>
        <div class="marker-label">${label}</div>
      </div>
    `,
    className: 'custom-div-icon-labeled',
    iconSize: [iconWidth, iconHeight],
    iconAnchor: [anchorX, anchorY]
  })
}

// 類別和標籤篩選
const selectedCategories = ref<Category[]>([])
const selectedTags = ref<string[]>([])
const searchTag = ref('')

// 獲取所有可用的類別和標籤
const availableCategories = computed(() => {
  const categories = new Set<Category>()
  ;[historicalFigures, historicalEvents, masterWorks].forEach(items => {
    items.forEach(item => categories.add(item.category))
  })
  return Array.from(categories).sort()
})

const availableTags = computed(() => {
  const tags = new Set<string>()
  ;[historicalFigures, historicalEvents, masterWorks].forEach(items => {
    items.forEach(item => item.tags.forEach(tag => tags.add(tag)))
  })
  return Array.from(tags).sort()
})

// 過濾標籤列表
const filteredTags = computed(() => {
  if (!searchTag.value) return []
  return availableTags.value.filter(tag =>
    tag.toLowerCase().includes(searchTag.value.toLowerCase())
  )
})

// 更新過濾邏輯
const filteredFigures = computed(() => {
  if (!showFigures.value) return []

  return historicalFigures.filter(figure => {
    const yearMatch = figure.startYear <= timeFilter.value.end &&
                     (figure.endYear || new Date().getFullYear()) >= timeFilter.value.start
    const categoryMatch = selectedCategories.value.length === 0 ||
                         selectedCategories.value.includes(figure.category)
    const tagMatch = selectedTags.value.length === 0 ||
                    selectedTags.value.some(tag => figure.tags.includes(tag))

    return yearMatch && categoryMatch && tagMatch
  })
})

const filteredEvents = computed(() => {
  if (!showEvents.value) return []

  return historicalEvents.filter(event => {
    const yearMatch = event.startYear <= timeFilter.value.end &&
                     (event.endYear || event.startYear) >= timeFilter.value.start
    const categoryMatch = selectedCategories.value.length === 0 ||
                         selectedCategories.value.includes(event.category)
    const tagMatch = selectedTags.value.length === 0 ||
                    selectedTags.value.some(tag => event.tags.includes(tag))

    return yearMatch && categoryMatch && tagMatch
  })
})

const filteredMasterWorks = computed(() => {
  if (!showMasterWorks.value) return []

  return masterWorks.filter(work => {
    const yearMatch = !work.year ||
                     (work.year >= timeFilter.value.start && work.year <= timeFilter.value.end)
    const categoryMatch = selectedCategories.value.length === 0 ||
                         selectedCategories.value.includes(work.category)
    const tagMatch = selectedTags.value.length === 0 ||
                    selectedTags.value.some(tag => work.tags.includes(tag))

    return yearMatch && categoryMatch && tagMatch
  })
})

// 顯示的標記（考慮搜尋結果）
const displayedFigures = computed(() => {
  if (!searchKeyword.value) return filteredFigures.value

  const searchResultIds = searchResults.value
    .filter(r => r.type === 'figure')
    .map(r => r.data.id)

  return filteredFigures.value.filter(figure => searchResultIds.includes(figure.id))
})

const displayedEvents = computed(() => {
  if (!searchKeyword.value) return filteredEvents.value

  const searchResultIds = searchResults.value
    .filter(r => r.type === 'event')
    .map(r => r.data.id)

  return filteredEvents.value.filter(event => searchResultIds.includes(event.id))
})

const displayedMasterWorks = computed(() => {
  if (!searchKeyword.value) return filteredMasterWorks.value

  const searchResultIds = searchResults.value
    .filter(r => r.type === 'masterwork')
    .map(r => r.data.id)

  return filteredMasterWorks.value.filter(work => searchResultIds.includes(work.id))
})

// 群集相關
const markerClusterGroup = ref<L.MarkerClusterGroup | null>(null)

// 搜尋功能
const updateSearchResults = () => {
  if (!searchKeyword.value.trim()) {
    searchResults.value = []
    return
  }

  const keyword = searchKeyword.value.toLowerCase()
  const results: Array<{ type: MarkerType; data: HistoricalFigure | HistoricalEvent | MasterWork }> = []

  // 搜尋歷史人物
  if (showFigures.value) {
    filteredFigures.value.forEach(figure => {
      if (
        figure.chineseName.toLowerCase().includes(keyword) ||
        figure.englishName.toLowerCase().includes(keyword)
      ) {
        results.push({ type: 'figure', data: figure })
      }
    })
  }

  // 搜尋重大事件
  if (showEvents.value) {
    filteredEvents.value.forEach(event => {
      if (
        event.chineseName.toLowerCase().includes(keyword) ||
        event.englishName.toLowerCase().includes(keyword)
      ) {
        results.push({ type: 'event', data: event })
      }
    })
  }

  // 搜尋傳世之作
  if (showMasterWorks.value) {
    filteredMasterWorks.value.forEach(work => {
      if (
        work.chineseName.toLowerCase().includes(keyword) ||
        work.englishName.toLowerCase().includes(keyword) ||
        work.author.toLowerCase().includes(keyword) ||
        work.authorEnglish.toLowerCase().includes(keyword)
      ) {
        results.push({ type: 'masterwork', data: work })
      }
    })
  }

  searchResults.value = results
}

const clearSearch = () => {
  searchKeyword.value = ''
  searchResults.value = []
}

const getResultIcon = (type: MarkerType): string => {
  switch (type) {
    case 'figure': return '👤'
    case 'event': return '⚡'
    case 'masterwork': return '📚'
    default: return '📍'
  }
}

const getResultSubtitle = (result: { type: MarkerType; data: HistoricalFigure | HistoricalEvent | MasterWork }): string => {
  switch (result.type) {
    case 'figure':
      const figure = result.data as HistoricalFigure
      return `${formatYear(figure.startYear)} - ${figure.endYear ? formatYear(figure.endYear) : '？'}`
    case 'event':
      const event = result.data as HistoricalEvent
      return `${formatYear(event.startYear)}${event.endYear && event.endYear !== event.startYear ? ' - ' + formatYear(event.endYear) : ''}`
    case 'masterwork':
      const work = result.data as MasterWork
      return `${work.author} ${work.year ? formatYear(work.year) : ''}`
    default:
      return ''
  }
}

const focusOnMarker = (result: { type: MarkerType; data: HistoricalFigure | HistoricalEvent | MasterWork }) => {
  const leafletMap = map.value?.leafletObject
  if (leafletMap) {
    const coordinates = result.data.coordinates
    leafletMap.setView(coordinates, 8)
  }
}

// 時光機功能
const goToTimeMachine = (result: { type: MarkerType; data: HistoricalFigure | HistoricalEvent | MasterWork }) => {
  // 切換到時光機模式
  timeMachineMode.value = true

  // 清空搜尋內容
  searchKeyword.value = ''
  searchResults.value = []

  // 根據項目類型設定時間
  let targetYear: number

  switch (result.type) {
    case 'figure':
      const figure = result.data as HistoricalFigure
      // 使用人物的出生年份，如果沒有則使用開始年份
      targetYear = figure.startYear
      break
    case 'event':
      const event = result.data as HistoricalEvent
      // 使用事件的開始年份
      targetYear = event.startYear
      break
    case 'masterwork':
      const work = result.data as MasterWork
      // 使用著作的年份
      targetYear = work.year || 0
      break
    default:
      targetYear = 0
  }

  // 設定時間篩選器到目標年份
  timeFilter.value.start = targetYear
  timeFilter.value.end = targetYear

  // 延遲聚焦到地圖位置，確保狀態更新完成
  nextTick(() => {
    setTimeout(() => {
      focusOnMarker(result)
    }, 100)
  })
}

// 格式化年份顯示
const formatYear = (year: number): string => {
  if (year < 0) {
    return `西元前${Math.abs(year)}年`
  }
  return `西元${year}年`
}

// 監聽過濾條件的變化
watch([showFigures, showEvents, showMasterWorks, timeFilter, selectedCategories, selectedTags], () => {
  updateMarkers()
}, { deep: true })

// 監聽搜尋結果的變化
watch(searchResults, () => {
  updateMarkers()
})

// 監聽時光機模式
watch(timeMachineMode, () => {
  if (timeMachineMode.value) {
    timeFilter.value.end = timeFilter.value.start
  } else {
    timeFilter.value.start = -3000
    timeFilter.value.end = new Date().getFullYear()
  }

  // 延遲更新標記，確保狀態變更完成
  nextTick(() => {
    updateMarkers()
  })
})

watch(timeFilter, (newVal) => {
  if (timeMachineMode.value) {
    timeFilter.value.end = newVal.start
  }

  // 延遲更新標記，確保狀態變更完成
  nextTick(() => {
    updateMarkers()
  })
}, { deep: true })

const onMapReady = () => {
  console.log('地圖已準備就緒')

  // 確保地圖尺寸正確並初始化標記
  nextTick(() => {
    const mapInstance = map.value?.leafletObject
    if (mapInstance) {
      // 設定地圖的無限滾動
      mapInstance.setMinZoom(1)

      // 啟用世界地圖複製功能
      mapInstance.on('drag', () => {
        const center = mapInstance.getCenter()
        const zoom = mapInstance.getZoom()

        // 當經度超出正常範圍時，自動調整到對應的世界地圖位置
        if (center.lng > 180) {
          mapInstance.setView([center.lat, center.lng - 360], zoom, { animate: false })
        } else if (center.lng < -180) {
          mapInstance.setView([center.lat, center.lng + 360], zoom, { animate: false })
        }
      })

      // 添加地圖點擊事件監聽器
      mapInstance.on('click', () => {
        // 如果是手機版且設定面板是開啟的，則關閉它
        if (isMobile.value && mobileMenuOpen.value) {
          // 延遲一點時間確保不是點擊標記
          setTimeout(() => {
            closeMobileMenu()
          }, 100)
        }
      })

      setTimeout(() => {
        mapInstance.invalidateSize()
        // 初始化標記
        updateMarkers()
      }, 100)
    }
  })
}

// 更新標記（用於觸發重新渲染）
const updateMarkers = () => {
  const leafletMap = map.value?.leafletObject
  if (!leafletMap) return

  // 安全地清除現有的群集
  if (markerClusterGroup.value) {
    try {
      // 檢查群集是否仍然存在於地圖上
      if (leafletMap.hasLayer(markerClusterGroup.value as unknown as L.Layer)) {
        leafletMap.removeLayer(markerClusterGroup.value as unknown as L.Layer)
      }
      // 清理群集內的所有標記
      markerClusterGroup.value.clearLayers()
      markerClusterGroup.value = null
    } catch (error) {
      console.warn('清理標記群集時出現錯誤:', error)
      markerClusterGroup.value = null
    }
  }

  // 創建新的群集組
  markerClusterGroup.value = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    spiderLegPolylineOptions: { weight: 1.5, color: '#222', opacity: 0.5 },
    chunkedLoading: true,
    clusterPane: 'markerPane',
    // 使用動態的 maxClusterRadius 來確保重疊的標記始終保持群集
    maxClusterRadius: (zoom) => {
      // 根據縮放級別和設備類型動態調整群集半徑
      const isMobileDevice = window.innerWidth < 1024
      const baseRadius = isMobileDevice ? 120 : 100  // 手機版更大的群集半徑
      const zoomFactor = Math.max(1, zoom - 1) * 10
      return Math.max(baseRadius, baseRadius - zoomFactor)
    },
    iconCreateFunction: (cluster) => {
      const markers = cluster.getAllChildMarkers() as CustomMarker[]
      const figureCount = markers.filter(m => m.options.type === 'figure').length
      const eventCount = markers.filter(m => m.options.type === 'event').length
      const workCount = markers.filter(m => m.options.type === 'masterwork').length

      // 根據群集大小調整圖標大小
      const isMobileDevice = window.innerWidth < 1024
      const baseSize = isMobileDevice ? 50 : 45
      const size = Math.min(baseSize + (markers.length * 3), isMobileDevice ? 80 : 70)

      return L.divIcon({
        html: `
          <div class="marker-cluster" style="width: ${size}px; height: ${size}px;">
            <div class="cluster-count">${markers.length}</div>
            <div class="cluster-details">
              ${figureCount ? `<span class="figure-count">👤${figureCount}</span>` : ''}
              ${eventCount ? `<span class="event-count">⚡${eventCount}</span>` : ''}
              ${workCount ? `<span class="work-count">📚${workCount}</span>` : ''}
            </div>
          </div>
        `,
        className: 'custom-cluster',
        iconSize: L.point(size, size)
      })
    }
  })

  // 添加標記到群集
  if (showFigures.value) {
    displayedFigures.value.forEach(figure => {
      const normalizedCoords = normalizeCoordinates(figure.coordinates)
      const age = timeMachineMode.value ? (timeFilter.value.start - figure.startYear) : undefined
      const marker = L.marker(normalizedCoords, {
        icon: createLabeledIcon('figure', figure.chineseName, (typeof age === 'number' && age >= 0) ? age : undefined),
        type: 'figure' as const
      })

      // 創建彈出窗口內容
      const popupContent = document.createElement('div')
      popupContent.className = 'marker-popup figure-popup'
      popupContent.innerHTML = `
        <h4>${figure.chineseName}</h4>
        <p class="english-name">${figure.englishName}</p>
        <div class="dates">
          <span class="date-range">
            ${formatYear(figure.startYear)} - ${figure.endYear ? formatYear(figure.endYear) : '？'}
          </span>
        </div>
        <div class="category">
          ${figure.category}
        </div>
        <div class="tags">
          ${figure.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="description">
          ${figure.description}
        </div>
        <div class="popup-actions">
          <button class="detail-btn" data-figure-name="${figure.chineseName}">
            👤 查看詳情
          </button>
          <a href="${figure.wikipediaUrl}" target="_blank" class="wiki-link">
            📖 維基百科
          </a>
        </div>
      `

      // 綁定彈出窗口
      marker.bindPopup(popupContent)

      // 監聽彈出窗口打開事件
      marker.on('popupopen', () => {
        const detailBtn = popupContent.querySelector('.detail-btn')
        if (detailBtn) {
          detailBtn.addEventListener('click', () => {
            router.push(`/figure/${figure.chineseName}`)
          })
        }
      })

      markerClusterGroup.value?.addLayer(marker)
    })
  }

  if (showEvents.value) {
    displayedEvents.value.forEach(event => {
      const normalizedCoords = normalizeCoordinates(event.coordinates)
      const eventYears = timeMachineMode.value ? (timeFilter.value.start - event.startYear) : undefined
      const marker = L.marker(normalizedCoords, {
        icon: createLabeledIcon('event', event.chineseName, (typeof eventYears === 'number' && eventYears >= 0) ? eventYears : undefined),
        type: 'event' as const
      })
      marker.bindPopup(`
        <div class="marker-popup event-popup">
          <h4>${event.chineseName}</h4>
          <p class="english-name">${event.englishName}</p>
          <div class="dates">
            <span class="date-range">
              ${formatYear(event.startYear)}${event.endYear && event.endYear !== event.startYear ? ' - ' + formatYear(event.endYear) : ''}
            </span>
          </div>
          <div class="category">
            ${event.category}
          </div>
          <div class="tags">
            ${event.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="description">
            ${event.description}
          </div>
          <a href="${event.wikipediaUrl}" target="_blank" class="wiki-link">
            📖 維基百科
          </a>
        </div>
      `)
      markerClusterGroup.value?.addLayer(marker)
    })
  }

  if (showMasterWorks.value) {
    displayedMasterWorks.value.forEach(work => {
      const normalizedCoords = normalizeCoordinates(work.coordinates)
      const marker = L.marker(normalizedCoords, {
        icon: createLabeledIcon('masterwork', work.chineseName),
        type: 'masterwork' as const
      })
      marker.bindPopup(`
        <div class="marker-popup masterwork-popup">
          <h4>${work.chineseName}</h4>
          <p class="english-name">${work.englishName}</p>
          <div class="author-info">
            <span class="author">作者：${work.author}</span>
            <span class="author-english">${work.authorEnglish}</span>
          </div>
          ${work.year ? `
            <div class="dates">
              <span class="date-range">
                ${formatYear(work.year)}
              </span>
            </div>
          ` : ''}
          <div class="category">
            ${work.category}
          </div>
          <div class="tags">
            ${work.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="description">
            ${work.description}
          </div>
          <a href="${work.wikipediaUrl}" target="_blank" class="wiki-link">
            📖 維基百科
          </a>
        </div>
      `)
      markerClusterGroup.value?.addLayer(marker)
    })
  }

  // 安全地將群集添加到地圖
  try {
    if (markerClusterGroup.value) {
      leafletMap.addLayer(markerClusterGroup.value as unknown as L.Layer)
    }
  } catch (error) {
    console.warn('添加標記群集到地圖時出現錯誤:', error)
  }
}

onMounted(() => {
  // 修復 Leaflet 預設圖標問題
  delete (L.Icon.Default.prototype as unknown as { _getIconUrl: unknown })._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  })

  // 初始化手機版檢測
  checkMobile()

  // 監聽視窗大小變化
  const handleResize = () => {
    if (map.value?.leafletObject) {
      map.value.leafletObject.invalidateSize()
    }
    checkMobile()

    // 重新更新標記以調整圖標大小
    setTimeout(() => {
      updateMarkers()
    }, 100)
  }

  window.addEventListener('resize', handleResize)

  // 組件卸載時清理事件監聽器和標記群集
  return () => {
    window.removeEventListener('resize', handleResize)

    // 清理標記群集
    if (markerClusterGroup.value) {
      try {
        const leafletMap = map.value?.leafletObject
        if (leafletMap && leafletMap.hasLayer(markerClusterGroup.value as unknown as L.Layer)) {
          leafletMap.removeLayer(markerClusterGroup.value as unknown as L.Layer)
        }
        markerClusterGroup.value.clearLayers()
        markerClusterGroup.value = null
      } catch (error) {
        console.warn('清理標記群集時出現錯誤:', error)
      }
    }
  }
})
</script>
