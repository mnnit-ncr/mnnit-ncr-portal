---
layout: page
title: Alumni by Graduation Batch
pageClass: full-width-directory
---

<script setup>
import { data as years } from './index.data.ts'

// Logic to group years into decades
const groupedDecades = years.reduce((acc, batch) => {
  const yearNum = Number(batch.year);
  const decadeStart = Math.floor(yearNum / 10) * 10;
  const decadeLabel = `${decadeStart}s`;
  
  if (!acc[decadeLabel]) {
    acc[decadeLabel] = [];
  }
  acc[decadeLabel].push(batch);
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
      <a v-for="batch in groupedDecades[decade]" 
         :key="batch.year" 
         :href="'/alumni/by-batch/' + batch.year" 
         class="batch-item">
        <span class="batch-year">{{ batch.year }}</span>
        <span class="batch-count">
          {{ batch.memberCount }} {{ batch.memberCount === 1 ? 'member' : 'members' }}
        </span>
      </a>
    </div>
  </div>
</div>

</div>



<style>
.batch-links {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
}

.batch-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: center;
  min-height: 66px;
  padding: 10px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease, background-color 0.2s ease;
  text-align: center;
}

.batch-item:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-alt);
  transform: translateY(-1px);
}

.batch-year {
  color: var(--vp-c-text-1);
  font-size: 0.98rem;
  font-weight: 700;
  line-height: 1.2;
}

.batch-count {
  color: var(--vp-c-text-2);
  font-size: 0.72rem;
  line-height: 1.2;
}

@media (min-width: 1280px) {
  .batch-links {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
}

@media (max-width: 1279px) {
  .batch-links {
    grid-template-columns: repeat(auto-fit, minmax(116px, 1fr));
  }
}
</style>
