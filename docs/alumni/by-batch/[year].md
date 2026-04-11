---
layout: page
pageClass: full-width-directory
---

<div class="vp-doc">

# Batch of {{ $params.year }}

<a href="./" class="back-link">← Back to Directory</a>

<script setup>
import { useData } from 'vitepress'
import AlumniList from '../../.vitepress/theme/components/AlumniList.vue'

const { params } = useData()
const alumniData = params.value.alumni 
</script>

<AlumniList :alumni="alumniData" />

</div>

<style>
/* 1. Unlock VitePress constraints */
.full-width-directory .container {
  max-width: 100% !important;
}

.full-width-directory .content {
  max-width: 100% !important;
}

/* 2. Match the 1300px width of your other directory pages */
.full-width-directory .vp-doc {
  margin: 0 auto;
  max-width: 1300px; 
  padding: 40px 24px !important;
  width: 100%;
}

.full-width-directory h1 {
  margin-top: 20px;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 20px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
}
</style>