---
layout: page
title: Alumni Directory · New2
pageClass: new2-route
sidebar: false
aside: false
navbar: false
footer: false
---
<script setup>
import { data as alumni } from '../../alumni/by-lm/index.data.ts'
import New2Portal from '../../.vitepress/theme/components/New2Portal.vue'
</script>
<New2Portal page="alumni" :alumni="alumni" />
