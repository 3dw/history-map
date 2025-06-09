<template>
  <div class="history-map-container">
    <!-- 地圖控制面板 -->
    <div class="map-controls">
      <h2 class="title">歷史地圖</h2>
      <div class="filter-controls">
        <div class="filter-group">
          <label>
            <input
              v-model="showFigures"
              type="checkbox"
              @change="updateMarkers"
            />
            顯示歷史人物 ({{ historicalFigures.length }})
          </label>
        </div>
        <div class="filter-group">
          <label>
            <input
              v-model="showEvents"
              type="checkbox"
              @change="updateMarkers"
            />
            顯示重大事件 ({{ historicalEvents.length }})
          </label>
        </div>
        <div class="filter-group">
          <label>
            <input
              v-model="showMasterWorks"
              type="checkbox"
              @change="updateMarkers"
            />
            顯示傳世之作 ({{ masterWorks.length }})
          </label>
        </div>
      </div>

      <!-- 時間篩選器 -->
      <div class="time-filter">
        <h3>時間範圍篩選</h3>
        <div class="time-inputs">
          <div>
            <label>開始年份：</label>
            <input
              v-model.number="timeFilter.start"
              type="number"
              placeholder="例：-500"
              @input="updateMarkers"
            />
          </div>
          <div>
            <label>結束年份：</label>
            <input
              v-model.number="timeFilter.end"
              type="number"
              placeholder="例：2000"
              @input="updateMarkers"
            />
          </div>
        </div>
        <small>註：西元前請使用負值，例如西元前500年輸入 -500</small>
      </div>
    </div>

    <!-- 地圖容器 -->
    <div class="map-wrapper">
      <LMap
        ref="map"
        :zoom="3"
        :center="[35, 105]"
        :options="mapOptions"
        style="height: 100%; width: 100%"
        @ready="onMapReady"
      >
        <LTileLayer
          :url="tileLayerUrl"
          :attribution="attribution"
        />

        <!-- 歷史人物標記 -->
        <LMarker
          v-for="figure in filteredFigures"
          :key="`figure-${figure.id}`"
          :lat-lng="figure.coordinates"
          :options="{ icon: figureIcon }"
        >
          <LPopup>
            <div class="marker-popup figure-popup">
              <h4>{{ figure.chineseName }}</h4>
              <p class="english-name">{{ figure.englishName }}</p>
              <div class="dates">
                <span class="date-range">
                  {{ formatYear(figure.startYear) }} - {{ figure.endYear ? formatYear(figure.endYear) : '？' }}
                </span>
              </div>
              <a :href="figure.wikipediaUrl" target="_blank" class="wiki-link">
                📖 維基百科
              </a>
            </div>
          </LPopup>
        </LMarker>

        <!-- 重大事件標記 -->
        <LMarker
          v-for="event in filteredEvents"
          :key="`event-${event.id}`"
          :lat-lng="event.coordinates"
          :options="{ icon: eventIcon }"
        >
          <LPopup>
            <div class="marker-popup event-popup">
              <h4>{{ event.chineseName }}</h4>
              <p class="english-name">{{ event.englishName }}</p>
              <div class="dates">
                <span class="date-range">
                  {{ formatYear(event.startYear) }}{{ event.endYear && event.endYear !== event.startYear ? ' - ' + formatYear(event.endYear) : '' }}
                </span>
              </div>
              <a :href="event.wikipediaUrl" target="_blank" class="wiki-link">
                📖 維基百科
              </a>
            </div>
          </LPopup>
        </LMarker>

        <!-- 傳世之作標記 -->
        <LMarker
          v-for="work in filteredMasterWorks"
          :key="`work-${work.id}`"
          :lat-lng="work.coordinates"
          :options="{ icon: masterWorkIcon }"
        >
          <LPopup>
            <div class="marker-popup masterwork-popup">
              <h4>{{ work.chineseName }}</h4>
              <p class="english-name">{{ work.englishName }}</p>
              <div class="author-info">
                <span class="author">作者：{{ work.author }}</span>
                <span class="author-english">{{ work.authorEnglish }}</span>
              </div>
              <div class="dates" v-if="work.year">
                <span class="date-range">
                  {{ formatYear(work.year) }}
                </span>
              </div>
              <a :href="work.wikipediaUrl" target="_blank" class="wiki-link">
                📖 維基百科
              </a>
            </div>
          </LPopup>
        </LMarker>
      </LMap>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import { historicalFigures } from '@/data/historicalFigures'
import { historicalEvents } from '@/data/historicalEvents'
import { masterWorks } from '@/data/masterWorks'

// 地圖參考
const map = ref<InstanceType<typeof LMap> | null>(null)

// 地圖設定
const mapOptions = {
  zoomSnap: 0.5,
  zoomDelta: 0.5
}

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

// 自定義圖標
const figureIcon = L.divIcon({
  html: '<div class="custom-marker figure-marker">👤</div>',
  className: 'custom-div-icon',
  iconSize: [30, 30],
  iconAnchor: [15, 15]
})

const eventIcon = L.divIcon({
  html: '<div class="custom-marker event-marker">⚡</div>',
  className: 'custom-div-icon',
  iconSize: [30, 30],
  iconAnchor: [15, 15]
})

const masterWorkIcon = L.divIcon({
  html: '<div class="custom-marker masterwork-marker">📚</div>',
  className: 'custom-div-icon',
  iconSize: [30, 30],
  iconAnchor: [15, 15]
})

// 計算過濾後的資料
const filteredFigures = computed(() => {
  if (!showFigures.value) return []

  return historicalFigures.filter(figure => {
    const figureStart = figure.startYear
    const figureEnd = figure.endYear || new Date().getFullYear()

    return figureStart <= timeFilter.value.end && figureEnd >= timeFilter.value.start
  })
})

const filteredEvents = computed(() => {
  if (!showEvents.value) return []

  return historicalEvents.filter(event => {
    const eventStart = event.startYear
    const eventEnd = event.endYear || event.startYear

    return eventStart <= timeFilter.value.end && eventEnd >= timeFilter.value.start
  })
})

const filteredMasterWorks = computed(() => {
  if (!showMasterWorks.value) return []

  return masterWorks.filter(work => {
    if (!work.year) return true // 如果沒有年份資訊，顯示所有

    return work.year >= timeFilter.value.start && work.year <= timeFilter.value.end
  })
})

// 格式化年份顯示
const formatYear = (year: number): string => {
  if (year < 0) {
    return `西元前${Math.abs(year)}年`
  }
  return `西元${year}年`
}

// 更新標記（用於觸發重新渲染）
const updateMarkers = () => {
  // 這個函數主要是為了確保響應式更新
  console.log('更新標記:', {
    figures: filteredFigures.value.length,
    events: filteredEvents.value.length,
    masterWorks: filteredMasterWorks.value.length
  })
}

const onMapReady = () => {
  // 處理地圖 ready 事件
  console.log('地圖已準備就緒')

  // 確保地圖尺寸正確
  nextTick(() => {
    if (map.value?.leafletObject) {
      setTimeout(() => {
        map.value!.leafletObject.invalidateSize()
      }, 100)
    }
  })
}

onMounted(() => {
  // 修復 Leaflet 預設圖標問題
  delete (L.Icon.Default.prototype as unknown as { _getIconUrl: unknown })._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  })

  // 監聽視窗大小變化
  const handleResize = () => {
    if (map.value?.leafletObject) {
      map.value.leafletObject.invalidateSize()
    }
  }

  window.addEventListener('resize', handleResize)

  // 組件卸載時清理事件監聽器
  return () => {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<style scoped>
.history-map-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.map-controls {
  width: 320px;
  min-width: 320px;
  background: #f8f9fa;
  border-right: 1px solid #dee2e6;
  padding: 20px;
  overflow-y: auto;
  flex-shrink: 0;
}

.title {
  margin: 0 0 20px 0;
  color: #333;
  font-size: 24px;
}

.filter-controls {
  margin-bottom: 30px;
}

.filter-group {
  margin-bottom: 15px;
}

.filter-group label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
}

.filter-group input[type="checkbox"] {
  margin-right: 10px;
  transform: scale(1.2);
}

.time-filter {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.time-filter h3 {
  margin: 0 0 15px 0;
  color: #495057;
  font-size: 18px;
}

.time-inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.time-inputs > div {
  display: flex;
  flex-direction: column;
}

.time-inputs label {
  font-weight: 600;
  margin-bottom: 5px;
  color: #495057;
}

.time-inputs input {
  padding: 8px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 14px;
}

.time-inputs input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
}

.time-inputs small {
  margin-top: 10px;
  color: #6c757d;
  font-size: 12px;
}

.map-wrapper {
  flex: 1;
  position: relative;
  height: 100vh;
  min-height: 100vh;
}

/* 自定義標記樣式 */
:global(.custom-marker) {
  background: white;
  border: 2px solid #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

:global(.figure-marker) {
  border-color: #007bff;
  background: #e3f2fd;
}

:global(.event-marker) {
  border-color: #dc3545;
  background: #ffebee;
}

:global(.masterwork-marker) {
  border-color: #28a745;
  background: #e8f5e8;
}

/* 彈出視窗樣式 */
.marker-popup {
  min-width: 200px;
  font-family: inherit;
}

.marker-popup h4 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 18px;
  font-weight: 600;
}

.english-name {
  margin: 0 0 12px 0;
  color: #666;
  font-style: italic;
  font-size: 14px;
}

.author-info {
  margin-bottom: 12px;
}

.author {
  display: block;
  font-weight: 600;
  color: #495057;
  margin-bottom: 4px;
}

.author-english {
  display: block;
  color: #666;
  font-style: italic;
  font-size: 14px;
}

.dates {
  margin-bottom: 15px;
}

.date-range {
  background: #f8f9fa;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #495057;
}

.figure-popup .date-range {
  background: #e3f2fd;
  color: #1565c0;
}

.event-popup .date-range {
  background: #ffebee;
  color: #c62828;
}

.masterwork-popup .date-range {
  background: #e8f5e8;
  color: #1b5e20;
}

.wiki-link {
  display: inline-block;
  background: #007bff;
  color: white !important;
  padding: 6px 12px;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.wiki-link:hover {
  background: #0056b3;
}
</style>
