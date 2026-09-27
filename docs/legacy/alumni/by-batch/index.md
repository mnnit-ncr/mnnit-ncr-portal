---
layout: page
title: Life Member Details sorted by Batch
pageClass: legacy-directory-route
sidebar: false
aside: false
navbar: false
---

<script setup>
import { computed } from 'vue'
import { data as allAlumni } from '../../../alumni/by-lm/index.data.ts'
import LegacyAlumniTable from '../../../.vitepress/theme/components/LegacyAlumniTable.vue'

const alumni = computed(() => [...allAlumni].sort((a, b) => {
  const batchCompare = Number(a.batch_year) - Number(b.batch_year)
  if (batchCompare !== 0) return batchCompare
  return a.name.localeCompare(b.name)
}))
</script>

<LegacyAlumniTable
  :alumni="alumni"
  title="Life Member Details sorted by Batch"
/>
