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
/* 1. Unlock the VitePress theme constraints for this page */
.full-width-directory .container {
  max-width: 100% !important;
}

.full-width-directory .content {
  max-width: 100% !important;
}

/* 2. Center the content block and match the 1300px width of the cards */
.full-width-directory .vp-doc {
  margin: 0 auto;
  max-width: 1300px; 
  padding: 40px 24px !important;
  width: 100%;
}

/* 3. Ensure the title stays within the centered bounds */
.full-width-directory h1 {
  margin-top: 20px;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 20px;
}

/* 4. Professional Back Link styling */
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