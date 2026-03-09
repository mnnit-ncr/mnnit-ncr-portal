---
title: Alumni Directory
layout: home
---

<script setup>
const cards = [
  {
    title: "Name-wise",
    subtitle: "Alphabetical Order",
    description: "Easily locate old friends and colleagues by their full names.",
    link: "/alumni/by-name/",
    icon: "👤"
  },
  {
    title: "Life Members",
    subtitle: "Permanent Community",
    description: "Access the exclusive registry of our verified Life Members.",
    link: "/alumni/by-lm/",
    icon: "🆔"
  },
  {
    title: "Graduation Batch",
    subtitle: "Year-by-Year",
    description: "Revisit your roots and browse alumni by their passing year.",
    link: "/alumni/by-batch/",
    icon: "🎓"
  }
]
</script>

<div class="portal-wrapper">
  <div class="portal-bg-glow"></div>
  
  <header class="portal-header">
    <span class="badge">Alumni Network</span>
    <h1>Connect with the MNNIT Community</h1>
    <p>Search, filter, and reconnect. The directory is your gateway to thousands of shared stories and professional connections.</p>
  </header>

  <div class="portal-grid">
    <div v-for="card in cards" :key="card.title" class="portal-card">
      <div class="icon-wrapper">{{ card.icon }}</div>
      <div class="card-body">
        <span class="card-category">{{ card.subtitle }}</span>
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
      </div>
      <a :href="card.link" class="portal-btn">
        Browse Now
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</div>

<style scoped>
/* Full-width container since sidebar is gone */
.portal-wrapper {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  overflow: hidden;
}

/* Subtle background glow for depth */
.portal-bg-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  height: 400px;
  background: radial-gradient(circle at 50% 0%, var(--vp-c-brand-soft) 0%, transparent 70%);
  z-index: -1;
  opacity: 0.5;
}

.portal-header {
  text-align: center;
  max-width: 800px;
  margin-bottom: 80px;
}

.badge {
  display: inline-block;
  padding: 6px 16px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.portal-header h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin: 0 0 24px 0;
  border: none;
  background: linear-gradient(to bottom, var(--vp-c-text-1) 60%, var(--vp-c-text-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.portal-header p {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
}

.portal-grid {
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  flex-wrap: wrap;
}

.portal-card {
  flex: 1;
  min-width: 320px;
  max-width: 380px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  padding: 48px 36px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  backdrop-filter: blur(10px);
}

.portal-card:hover {
  transform: translateY(-12px);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-mute);
  box-shadow: 0 30px 60px -12px rgba(0,0,0,0.25);
}

.icon-wrapper {
  font-size: 40px;
  margin-bottom: 30px;
}

.card-category {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.portal-card h3 {
  font-size: 1.75rem;
  margin: 10px 0 16px 0 !important;
  border: none !important;
}

.portal-card p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 40px;
  flex-grow: 1;
}

.portal-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 24px;
  background: var(--vp-c-brand-1);
  color: white !important;
  border-radius: 16px;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.3s ease;
}

.portal-btn:hover {
  background: var(--vp-c-brand-2);
  gap: 15px;
}

@media (max-width: 1000px) {
  .portal-wrapper { padding-top: 60px; }
  .portal-grid { flex-direction: column; align-items: center; }
  .portal-card { width: 100%; max-width: 500px; }
}

</style>