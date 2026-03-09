---
layout: page
title: Alumni by Graduation Batch
pageClass: full-width-directory
---

<script setup>
import { data as years } from './index.data.ts'

// Logic to group years into decades
const groupedDecades = years.reduce((acc, year) => {
  const yearNum = Number(year);
  const decadeStart = Math.floor(yearNum / 10) * 10;
  const decadeLabel = `${decadeStart}s`;
  
  if (!acc[decadeLabel]) {
    acc[decadeLabel] = [];
  }
  acc[decadeLabel].push(year);
  return acc;
}, {});

// Sort decades descending (2020s, 2010s, etc.)
const sortedDecades = Object.keys(groupedDecades).sort((a, b) => b.localeCompare(a));
</script>

<div class="vp-doc">

# Alumni Directory (By Batch)

<a href="/alumni" class="back-link">← Back to Directory</a>

<p class="subtitle">Select a graduation year to view the batch members:</p>

<div class="batch-container">
  <div v-for="decade in sortedDecades" :key="decade" class="decade-section">
    <h2 class="decade-title">{{ decade }}</h2>
    <div class="batch-links">
      <a v-for="year in groupedDecades[decade]" 
         :key="year" 
         :href="'/alumni/by-batch/' + year" 
         class="batch-item">
        {{ year }}
      </a>
    </div>
  </div>
</div>

</div>

<style scoped>
/* Unlock VitePress constraints */
.full-width-directory .container {
  max-width: 100% !important;
}
.full-width-directory .content {
  max-width: 100% !important;
}

.full-width-directory .vp-doc {
  margin: 0 auto;
  max-width: 1100px;
  padding: 40px 24px !important;
  width: 100%;
}

.decade-section {
  margin-bottom: 48px;
}

.decade-title {
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 12px;
  margin-bottom: 24px;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

.batch-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 16px;
}

.batch-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  font-weight: 700;
  color: var(--vp-c-text-1) !important;
  text-decoration: none !important;
  transition: all 0.25s ease;
}

.batch-item:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
}

.subtitle {
  color: var(--vp-c-text-2);
  margin-bottom: 32px;
  font-size: 1.1rem;
}
</style>