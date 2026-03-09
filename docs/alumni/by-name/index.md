---
layout: page
title: Alumni Directory (Name-wise)
pageClass: full-width-directory
---

<div class="vp-doc">

# Alumni Directory (Name-wise)

[← Back to Directory](/alumni)

<script setup>
import { data as alumni } from './index.data.ts'
import AlumniList from '../../.vitepress/theme/components/AlumniList.vue'
</script>

<AlumniList :alumni="alumni" />

</div>


<style>
/* This reaches out to the VitePress layout specifically for this page class */
.full-width-directory .container {
  max-width: 100% !important;
}

.full-width-directory .content {
  max-width: 100% !important;
  padding: 40px 60px !important; /* Give it some nice side breathing room */
}

/* Ensure the title and back link stay aligned with the start of the grid */
.full-width-directory .vp-doc {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.full-width-directory h1 {
  margin-top: 20px;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 20px;
}

/* Make your Back link look more like a professional button */
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
}

/* 1. Center the entire document container */
.full-width-directory .vp-doc {
  margin: 0 auto;
  max-width: 1300px; /* Match the directory-wrapper max-width */
  padding: 0 24px;   /* Match the directory-wrapper gutter */
  width: 100%;
}

/* 2. Adjust the title alignment */
.full-width-directory h1 {
  margin-top: 20px;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 20px;
  text-align: left; /* Keeps text left-aligned but within the 1300px centered box */
}

/* 3. Style the back link to align with the grid start */
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
}
</style>
