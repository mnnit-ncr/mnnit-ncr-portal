---
layout: page
title: Alumni Directory (Life Membership Number)
pageClass: full-width-directory
---

<div class="vp-doc">

# Alumni Directory (Life Membership Number)

<a href="/alumni" class="back-link">← Back to Directory</a>

<script setup>
import { data as alumni } from './index.data.ts'
import AlumniList from '../../.vitepress/theme/components/AlumniList.vue'
</script>

<AlumniList :alumni="alumni" />

</div>


<style>
</style>