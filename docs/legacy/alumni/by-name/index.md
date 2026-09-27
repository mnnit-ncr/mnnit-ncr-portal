---
layout: page
title: Life Member Details sorted by Name
pageClass: legacy-directory-route
sidebar: false
aside: false
navbar: false
---

<script setup>
import { data as alumni } from '../../../alumni/by-name/index.data.ts'
import LegacyAlumniTable from '../../../.vitepress/theme/components/LegacyAlumniTable.vue'
</script>

<LegacyAlumniTable
  :alumni="alumni"
  title="Life Member Details sorted by Name"
/>
