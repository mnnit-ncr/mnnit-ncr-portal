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



<style>
</style>