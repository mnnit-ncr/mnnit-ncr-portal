<script setup>
defineProps(['alumni'])

/**
 * Extracts the primary email from the array.
 * Prioritizes personal emails over work/others.
 */
const getPrimaryEmail = (emails) => {
  if (!emails || !Array.isArray(emails)) return null
  return emails.find(e => e.type === 'personal')?.email || 
         emails.find(e => e.type === 'work')?.email || 
         emails[0]?.email
}
</script>

<template>
  <div class="directory-wrapper">
    <div class="alumni-grid">
      <div v-for="person in alumni" :key="person.id" class="alumni-card">
        
        <div class="card-header">
          <div class="header-main">
            <span class="lm-tag" v-if="person.lm_number">LM-{{ person.lm_number }}</span>
            <h3 class="name">
              <span class="prefix" v-if="person.prefix">{{ person.prefix }}</span>
              {{ person.name }}
            </h3>
          </div>
          <div class="batch-info">
            <span class="year">Class of {{ person.batch_year }}</span>
            <span class="branch" v-if="person.branch">{{ person.branch }}</span>
          </div>
        </div>
        
        <div class="card-body">
          <template v-if="person.current?.role || person.current?.company">
            <p class="role">{{ person.current.role }}</p>
            <p class="company">{{ person.current.company }}</p>
            <p class="location" v-if="person.current?.location">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="loc-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              {{ person.current.location }}
            </p>
          </template>
          <p v-else class="status-placeholder">MNNIT Alumnus</p>
        </div>

        <div class="card-footer">
          <div class="contact-area">
            <a v-if="person.links?.linkedin" 
               :href="person.links.linkedin" 
               target="_blank" 
               class="linkedin-btn">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               LinkedIn Profile
            </a>
            
            <div v-if="getPrimaryEmail(person.emails)" class="email-field">
              <span class="label">Email</span>
              <span class="value">{{ getPrimaryEmail(person.emails) }}</span>
            </div>

            <div v-if="!person.links?.linkedin && !getPrimaryEmail(person.emails)" class="no-contact-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lock-icon"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <span>Contact info hidden</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.directory-wrapper {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
}

.alumni-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 2rem;
}

.alumni-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.alumni-card:hover {
  transform: translateY(-5px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 12px 24px -8px rgba(0,0,0,0.2);
}

/* Subtle corner accent */
.alumni-card::before {
  content: "";
  position: absolute;
  top: 0; right: 0;
  width: 80px; height: 80px;
  background: radial-gradient(circle at top right, var(--vp-c-brand-soft), transparent 70%);
  opacity: 0.4;
  pointer-events: none;
}

.lm-tag {
  font-size: 0.65rem;
  font-weight: 800;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 2px 8px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.name {
  margin: 10px 0 0 0 !important;
  font-size: 1.35rem;
  font-weight: 800;
  border: none !important;
  color: var(--vp-c-text-1);
  line-height: 1.2;
}

.prefix {
  font-weight: 400;
  color: var(--vp-c-text-3);
  font-size: 1.1rem;
}

.batch-info {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.year {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
}

.branch {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

.card-body {
  margin: 24px 0;
  flex-grow: 1;
}

.role {
  font-weight: 700;
  margin: 0;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.company {
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
  margin: 2px 0;
}

.location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  margin-top: 10px;
}

.status-placeholder {
  font-style: italic;
  color: var(--vp-c-text-3);
  font-size: 0.9rem;
}

.card-footer {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
}

.contact-area {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.linkedin-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #0077b5;
  color: white !important;
  padding: 8px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: opacity 0.2s;
}

.email-field {
  background: var(--vp-c-bg-mute);
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.email-field .label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--vp-c-text-3);
  font-weight: 700;
}

.email-field .value {
  font-size: 0.85rem;
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-mono);
  word-break: break-all;
}

.no-contact-box {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-mute);
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px dashed var(--vp-c-divider);
}

.lock-icon {
  opacity: 0.5;
}

@media (max-width: 640px) {
  .directory-wrapper { padding: 0 16px; }
  .alumni-grid { grid-template-columns: 1fr; }
}
</style>