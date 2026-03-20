---
layout: page
title: Alumni Directory (Name-wise)
pageClass: full-width-directory
---

<div class="vp-doc">

# Alumni Directory (Name-wise)

[← Back to Directory](../)

<script setup>
import { data as alumni } from './index.data.ts'
import AlumniList from '../../.vitepress/theme/components/AlumniList.vue'
</script>

<AlumniList :alumni="alumni" />

</div>


<style>
</style>