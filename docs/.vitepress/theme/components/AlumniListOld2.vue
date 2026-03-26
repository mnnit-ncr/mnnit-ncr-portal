<script setup>
defineProps(['alumni'])

const getPrimaryEmail = (emails) => {
  if (!emails || !Array.isArray(emails)) return null
  return emails.find(e => e.type === 'personal')?.email || 
         emails.find(e => e.type === 'work')?.email || 
         emails[0]?.email
}

// Logic to check if the person is deceased based on prefix
const isDeceased = (prefix) => prefix?.toLowerCase().includes('late')
</script>

<template>
  <div class="directory-wrapper">
    <div class="alumni-grid">
      <div v-for="person in alumni" 
           :key="person.id" 
           class="alumni-card"
           :class="{ 'is-late': isDeceased(person.prefix) }">
        
        <div class="card-header">
          <div class="header-top">
            <span class="lm-tag" v-if="person.lm_number">LM-{{ person.lm_number }}</span>
            <span class="batch-tag">Class of {{ person.batch_year }}</span>
          </div>
          
          <h3 class="name">
            <span class="prefix" v-if="person.prefix">{{ person.prefix }} </span>{{ person.name }}
          </h3>
          <p class="branch" v-if="person.branch">{{ person.branch }}</p>
        </div>
        
        <div class="card-body">
          <template v-if="person.current?.role || person.current?.company">
            <p class="job-info">
              <span class="role">{{ person.current.role }}</span>
              <span class="sep" v-if="person.current.role && person.current.company"> at </span>
              <span class="company">{{ person.current.company }}</span>
            </p>
            <p class="location" v-if="person.current?.location">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="loc-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              {{ person.current.location }}
            </p>
          </template>
          <p v-else class="status-placeholder">MNNIT Alumnus</p>
        </div>

        <div class="card-footer" v-if="!isDeceased(person.prefix)">
          <div class="contact-row">
            <a v-if="getPrimaryEmail(person.emails)" 
               :href="`mailto:${getPrimaryEmail(person.emails)}`" 
               class="email-link"
               title="Send Email">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
               {{ getPrimaryEmail(person.emails) }}
            </a>

            <a v-if="person.links?.linkedin" 
               :href="person.links.linkedin" 
               target="_blank" 
               class="linkedin-icon-btn"
               title="LinkedIn Profile">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
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
}

.alumni-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 1.5rem;
}

.alumni-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.alumni-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

/* 1. Prefix Styling - Same as Name */
.name {
  margin: 8px 0 2px 0 !important;
  font-size: 1.1rem;
  font-weight: 700;
  border: none !important;
  color: var(--vp-c-text-1);
}

.prefix {
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lm-tag {
  font-size: 0.6rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 1px 6px;
  border-radius: 4px;
}

.batch-tag {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  font-weight: 600;
}

.branch {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin: 0;
}

.card-body {
  margin: 12px 0;
  flex-grow: 1;
}

.job-info {
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
}

.role {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.company {
  color: var(--vp-c-text-2);
}

.location {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin-top: 4px;
}

/* 4. Contact Row Styling (Email & LinkedIn) */
.card-footer {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-divider);
}

.contact-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.email-link {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-family: var(--vp-font-family-mono);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.linkedin-icon-btn {
  color: #0077b5;
  display: flex;
  flex-shrink: 0;
  transition: opacity 0.2s;
}

.linkedin-icon-btn:hover {
  opacity: 0.7;
}

/* 3. Memorial / Late Style */
.alumni-card.is-late {
  filter: grayscale(1);
  opacity: 0.75;
  background: var(--vp-c-bg-mute);
  border-style: dashed;
}

.alumni-card.is-late .name {
  color: var(--vp-c-text-2);
}

.status-placeholder {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin: 0;
}

@media (max-width: 640px) {
  .alumni-grid { grid-template-columns: 1fr; }
}
</style>