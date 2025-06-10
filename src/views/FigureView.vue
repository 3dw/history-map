<template>
  <div class="figure-view">
    <div v-if="figure" class="figure-container">
      <!-- 返回按鈕 -->
      <div class="back-button">
        <router-link to="/" class="back-link">
          ← 返回地圖
        </router-link>
      </div>

      <!-- 主要人物信息 -->
      <div class="figure-main-content">
        <div class="figure-header">
          <h1 class="figure-name">{{ figure.chineseName }}({{ figure.englishName }})</h1>
          <div class="figure-meta">
            <span class="figure-years">{{ figure.startYear}} - {{ figure.endYear || '現今' }}</span>
            <span class="figure-category">{{ figure.category }}</span>
          </div>
          <div class="figure-tags">
            <span v-for="tag in figure.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>

        <!-- 人物描述 -->
        <div v-if="figure.description" class="figure-description">
          <p>{{ figure.description }}
            <a :href="figure.wikipediaUrl" target="_blank" class="wikipedia-link">維基百科</a>
          </p>
        </div>
      </div>

      <!-- 同時代的人物和事件 -->
      <div class="contemporaries-section">
        <h3>同時代的人物與事件</h3>

        <!-- 同時代人物 -->
        <div v-if="contemporaries.figures.length > 0" class="contemporaries-group">
          <h4>同時代人物 ({{ contemporaries.figures.length }})</h4>
          <div class="contemporaries-grid">
            <div
              v-for="contemporary in contemporaries.figures"
              :key="contemporary.id"
              class="contemporary-card"
              @click="navigateToFigure(contemporary.id)"
            >
              <h5>{{ contemporary.chineseName }}</h5>
              <p class="contemporary-english">{{ contemporary.englishName }}</p>
              <p class="contemporary-years">{{ contemporary.startYear }} - {{ contemporary.endYear || '現今' }}</p>
              <p class="contemporary-category">{{ contemporary.category }}</p>
              <div class="contemporary-tags">
                <span v-for="tag in contemporary.tags.slice(0, 3)" :key="tag" class="mini-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 同時代事件 -->
        <div v-if="contemporaries.events.length > 0" class="contemporaries-group">
          <h4>同時代事件 ({{ contemporaries.events.length }})</h4>
          <div class="contemporaries-grid">
            <div
              v-for="event in contemporaries.events"
              :key="event.id"
              class="contemporary-card event-card"
            >
              <h5>{{ event.chineseName }}</h5>
              <p class="contemporary-english">{{ event.englishName }}</p>
              <p class="contemporary-years">{{ event.startYear }} - {{ event.endYear || '現今' }}</p>
              <p class="contemporary-category">{{ event.category }}</p>
              <div class="contemporary-tags">
                <span v-for="tag in event.tags.slice(0, 3)" :key="tag" class="mini-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 同時代作品 -->
        <div v-if="contemporaries.masterWorks.length > 0" class="contemporaries-group">
          <h4>同時代作品 ({{ contemporaries.masterWorks.length }})</h4>
          <div class="contemporaries-grid">
            <div
              v-for="work in contemporaries.masterWorks"
              :key="work.id"
              class="contemporary-card work-card"
            >
              <h5>{{ work.chineseName }}</h5>
              <p class="contemporary-english">{{ work.englishName }}</p>
              <p class="contemporary-author">作者: {{ work.author }}</p>
              <p v-if="work.year" class="contemporary-years">{{ work.year }}</p>
              <p class="contemporary-category">{{ work.category }}</p>
              <div class="contemporary-tags">
                <span v-for="tag in work.tags.slice(0, 3)" :key="tag" class="mini-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 無同時代內容時的提示 -->
        <div v-if="!hasContemporaries" class="no-contemporaries">
          <p>暫無同時代的人物、事件或作品資料。</p>
        </div>

        <!-- 載入中狀態 -->
        <div v-else-if="loading" class="loading">
          <p>載入中...</p>
        </div>
      </div>
    </div>

    <!-- 找不到人物時的錯誤頁面 -->
    <div v-if="!figure" class="not-found">
      <h2>找不到該人物</h2>
      <p>抱歉，找不到名為 "{{ $route.params.name }}" 的人物。</p>
      <router-link to="/" class="back-link">返回地圖</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { historicalFigures, historicalEvents, masterWorks } from '@/data'
import type { HistoricalFigure } from '@/types'

const route = useRoute()
const router = useRouter()

const loading = ref(true)
const figure = ref<HistoricalFigure | null>(null)

// 計算同時代的人物、事件和作品
const contemporaries = computed(() => {
  if (!figure.value) return { figures: [], events: [], masterWorks: [] }

  const figureStartYear = figure.value.startYear
  const figureEndYear = figure.value.endYear || figureStartYear + 100

  // 定義同時代的時間範圍（前後50年）
  const timeRange = 50
  const startRange = Math.min(figureStartYear, figureEndYear) - timeRange
  const endRange = Math.max(figureStartYear, figureEndYear) + timeRange

  // 篩選同時代的人物（排除自己）
  const contemporaryFigures = historicalFigures.filter(f =>
    f.id !== figure.value!.id &&
    f.startYear >= startRange &&
    f.startYear <= endRange
  )

  // 篩選同時代的事件
  const contemporaryEvents = historicalEvents.filter(e =>
    e.startYear >= startRange &&
    e.startYear <= endRange
  )

  // 篩選同時代的作品
  const contemporaryMasterWorks = masterWorks.filter(w =>
    w.year && w.year >= startRange && w.year <= endRange
  )

  return {
    figures: contemporaryFigures,
    events: contemporaryEvents,
    masterWorks: contemporaryMasterWorks
  }
})

// 檢查是否有同時代內容
const hasContemporaries = computed(() => {
  return contemporaries.value.figures.length > 0 ||
         contemporaries.value.events.length > 0 ||
         contemporaries.value.masterWorks.length > 0
})

// 導航到其他人物頁面
const navigateToFigure = (figureId: string) => {
  const targetFigure = historicalFigures.find(f => f.id === figureId)
  if (targetFigure) {
    router.push(`/figure/${targetFigure.chineseName}`)
  }
}

// 根據路由參數查找人物
const findFigureByName = (name: string): HistoricalFigure | null => {
  return historicalFigures.find(f => f.chineseName === name) || null
}

onMounted(() => {
  const figureName = route.params.name as string
  figure.value = findFigureByName(figureName)
  loading.value = false
})
</script>

<style scoped>
.figure-view {
  width: 100vw;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 20;
}

.back-link {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.back-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.figure-container {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
}

.figure-header {
  text-align: center;
  margin-bottom: 40px;
}

.figure-name {
  font-size: 3rem;
  margin: 0 0 10px 0;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.figure-english-name {
  font-size: 1.5rem;
  margin: 0 0 20px 0;
  opacity: 0.8;
  font-weight: 300;
}

.figure-meta {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.figure-years, .figure-category {
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
}

.figure-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 12px;
  backdrop-filter: blur(5px);
}

.figure-description {
  margin: 40px 0;
  text-align: center;
}

.figure-description h3 {
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.figure-description p {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 100%;
  margin: 0 auto;
}

.figure-links {
  text-align: center;
  margin: 30px 0;
}

.wikipedia-link {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  transition: all 0.3s ease;
}

.wikipedia-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.contemporaries-section {
  margin-top: 50px;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 10px;
}

/* 自定義滾動條樣式 */
.contemporaries-section::-webkit-scrollbar {
  width: 8px;
}

.contemporaries-section::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.contemporaries-section::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  transition: background 0.3s ease;
}

.contemporaries-section::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.contemporaries-section h3 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  position: sticky;
  top: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px 0;
  margin-top: 0;
  z-index: 10;
}

.contemporaries-group {
  margin-bottom: 40px;
}

.contemporaries-group h4 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #ffd700;
}

.contemporaries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

/* 寬螢幕上的左右分欄佈局 */
@media (min-width: 1024px) {
  .figure-container {
    flex-direction: row;
    align-items: flex-start;
    gap: 50px;
    padding-top: 80px; /* 為返回按鈕留出空間 */
  }

  .figure-main-content {
    flex: 1;
    max-width: 50%;
  }

  .contemporaries-section {
    flex: 1;
    max-width: 50%;
    margin-top: 0;
    max-height: 80vh;
  }

  .contemporaries-section h3 {
    position: static;
    background: none;
    padding: 0 0 20px 0;
  }

  .contemporaries-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }
}

.contemporary-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contemporary-card:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.contemporary-card h5 {
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  color: #ffd700;
}

.contemporary-english {
  margin: 5px 0;
  opacity: 0.8;
  font-size: 0.9rem;
}

.contemporary-years {
  margin: 5px 0;
  font-weight: 600;
  color: #87ceeb;
}

.contemporary-author {
  margin: 5px 0;
  font-style: italic;
  opacity: 0.9;
}

.contemporary-category {
  margin: 8px 0;
  font-size: 0.8rem;
  opacity: 0.7;
}

.contemporary-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
}

.mini-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 10px;
}

.event-card {
  border-left: 4px solid #ff6b6b;
}

.work-card {
  border-left: 4px solid #4ecdc4;
}

.no-contemporaries {
  text-align: center;
  padding: 40px;
  opacity: 0.7;
}

.loading, .not-found {
  text-align: center;
  padding: 100px 20px;
}

.not-found h2 {
  color: #ff6b6b;
  margin-bottom: 20px;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .figure-view {
    padding: 10px;
  }

  .figure-container {
    padding: 20px;
    flex-direction: column;
    gap: 30px;
    padding-top: 60px; /* 為返回按鈕留出空間 */
  }

  .back-button {
    top: 15px;
    left: 15px;
  }

  .figure-main-content {
    max-width: 100%;
  }

  .figure-name {
    font-size: 2rem;
  }

  .figure-english-name {
    font-size: 1.2rem;
  }

  .contemporaries-grid {
    grid-template-columns: 1fr;
  }

  .figure-meta {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .contemporaries-section {
    max-height: 50vh;
    margin-top: 0;
    max-width: 100%;
  }

  .contemporaries-section h3 {
    font-size: 1.5rem;
    padding: 15px 0;
    position: sticky;
    top: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin-top: 0;
    z-index: 10;
  }
}
</style>
