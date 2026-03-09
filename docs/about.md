---
layout: page
title: About the Association
sidebar: false
pageClass: full-width-directory
---

<div class="vp-doc about-page">

# About the Association

<p class="intro-text">
  The <strong>MONERECO (MNNIT) Alumni Association — Delhi NCR Chapter</strong> was established in 1988–89 in Faridabad. Founded by a dedicated group of Monerecons, it serves as a vital bridge for alumni of <strong>Motilal Nehru National Institute of Technology (MNNIT), Prayagraj</strong> living and working in the National Capital Region.
</p>

<div class="stats-banner">
  <div class="stat-item">
    <span class="stat-value">1988</span>
    <span class="stat-label">Founded</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">600+</span>
    <span class="stat-label">Life Members</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">NCR</span>
    <span class="stat-label">Coverage</span>
  </div>
</div>

<div class="about-grid">
  <section class="info-card leadership-history">
    <h2>Our Leadership</h2>
    <div class="leader-list">
      <div class="leader-entry current">
        <span class="role">Current President</span>
        <span class="name">Er. M. P. Arya</span>
        <span class="batch">1975 — Mechanical</span>
      </div>
      <div class="leader-entry">
        <span class="role">Former President</span>
        <span class="name">Er. Ramesh Thakur</span>
        <span class="batch">1975 — Mechanical</span>
      </div>
      <div class="leader-entry">
        <span class="role">Former President</span>
        <span class="name">Er. R. N. Gulati</span>
        <span class="batch">1970 — Mechanical</span>
      </div>
      <div class="leader-entry founder">
        <span class="role">Founder President</span>
        <span class="name">Er. Anil Uppal</span>
        <span class="batch">1974 — Mechanical</span>
      </div>
    </div>
  </section>

  <section class="info-card activities-section">
    <h2>What We Do</h2>
    <ul class="activity-list">
      <li>
        <strong>Annual Family Get-Together</strong>
        <p>Our flagship event bringing families together for celebration.</p>
      </li>
      <li>
        <strong>Individual Alumni Meets</strong>
        <p>Held 2–3 times a year across Delhi, Noida, and Gurugram.</p>
      </li>
      <li>
        <strong>Professional Networking</strong>
        <p>Sessions focused on career growth and industrial interaction.</p>
      </li>
    </ul>
  </section>
</div>

<section class="purpose-container">
  <h2>Mission & Purpose</h2>
  <div class="purpose-grid">
    <div class="purpose-item">
      <div class="icon">🤝</div>
      <p>Maintain lifelong connections among MNNIT alumni.</p>
    </div>
    <div class="purpose-item">
      <div class="icon">💼</div>
      <p>Provide professional networking opportunities.</p>
    </div>
    <div class="purpose-item">
      <div class="icon">🏠</div>
      <p>Support alumni in personal and professional matters.</p>
    </div>
  </div>
</section>

</div>

<style scoped>
.about-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 24px;
}

.intro-text {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin-bottom: 40px;
}

/* Stats Banner */
.stats-banner {
  display: flex;
  justify-content: space-around;
  background: var(--vp-c-brand-soft);
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 40px;
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--vp-c-brand-1);
}

.stat-label {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--vp-c-text-2);
}

/* Grid Layout */
.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.info-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  padding: 30px;
  border-radius: 20px;
}

.info-card h2 {
  margin-top: 0 !important;
  border: none;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

/* Leadership Timeline Style */
.leader-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.leader-entry {
  padding-left: 15px;
  border-left: 3px solid var(--vp-c-divider);
}

.leader-entry.current {
  border-left-color: var(--vp-c-brand-1);
}

.role {
  display: block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}

.leader-entry .name {
  display: block;
  font-size: 1.1rem;
  font-weight: 700;
}

.leader-entry .batch {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

/* Activity List */
.activity-list {
  list-style: none !important;
  padding: 0 !important;
}

.activity-list li {
  margin-bottom: 20px;
}

.activity-list strong {
  color: var(--vp-c-brand-1);
  font-size: 1.1rem;
}

.activity-list p {
  margin: 4px 0 0 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

/* Purpose Section */
.purpose-container {
  text-align: center;
  margin-top: 60px;
}

.purpose-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.purpose-item {
  padding: 20px;
  background: var(--vp-c-bg-mute);
  border-radius: 16px;
}

.purpose-item .icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.purpose-item p {
  font-size: 0.95rem;
  font-weight: 600;
}

@media (max-width: 640px) {
  .stats-banner { flex-direction: column; gap: 20px; }
  .about-grid { grid-template-columns: 1fr; }
}
</style>