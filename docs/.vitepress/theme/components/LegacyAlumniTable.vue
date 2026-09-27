<script setup lang="ts">
type Email = { email?: string }
type Alumnus = {
  id: number | string
  lm_number?: number | string
  prefix?: string
  name: string
  batch_year?: number | string
  branch?: string
  emails?: Email[]
}

defineProps<{
  alumni: Alumnus[]
  title: string
}>()

const displayName = (person: Alumnus) => [person.prefix, person.name].filter(Boolean).join(' ')

const displayBranch = (branch?: string) => branch
  ?.replace(' Engineering', '')
  .replace('Electronics & Communication', 'Electronics') ?? ''

const displayEmails = (emails?: Email[]) => emails
  ?.map(({ email }) => email?.trim())
  .filter(Boolean)
  .join(', ') ?? ''
</script>

<template>
  <div class="legacy-directory-page">
    <div class="legacy-directory-switch">
      <span><strong>You are viewing the classic website.</strong></span>
      <a href="/new2/">Try the new design →</a>
    </div>

    <nav class="legacy-directory-nav" aria-label="Classic website navigation">
      <a href="/"><img src="/legacy/homeicon_1.gif" alt=""> Home</a>
      <span>|</span>
      <a href="/alumni/by-lm/">Membership wise</a>
      <span>|</span>
      <a href="/alumni/by-batch/">Batch wise</a>
      <span>|</span>
      <a href="/alumni/by-name/">Name wise</a>
    </nav>

    <div class="legacy-table-scroll">
      <table class="legacy-member-table">
        <caption>{{ title }}</caption>
        <thead>
          <tr>
            <th scope="col">&nbsp;NAME</th>
            <th scope="col">&nbsp;BATCH&nbsp;</th>
            <th scope="col">&nbsp;BRANCH&nbsp;</th>
            <th scope="col">&nbsp;LM&nbsp;No.&nbsp;</th>
            <th scope="col">&nbsp;E-MAIL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in alumni" :key="person.id" valign="top">
            <td>{{ displayName(person) }}</td>
            <td class="numeric-cell">{{ person.batch_year }}</td>
            <td>{{ displayBranch(person.branch) }}</td>
            <td class="numeric-cell">{{ person.lm_number }}</td>
            <td>{{ displayEmails(person.emails) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
:global(.legacy-directory-route .VPContent) { padding: 0 !important; }
:global(.legacy-directory-route .VPLocalNav) { display: none !important; }
:global(.legacy-directory-route .VPContent > .container) {
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}
:global(.legacy-directory-route .VPContent .content) {
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}
:global(.legacy-directory-route .vp-doc) {
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.legacy-directory-page {
  min-height: 100vh;
  padding-bottom: 20px;
  color: #000;
  background: #fff;
  font-family: "Times New Roman", Times, serif;
}

.legacy-directory-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 9px 16px;
  color: #fff;
  background: #142f57;
  border-bottom: 3px solid #f6d84a;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}

.legacy-directory-switch a {
  padding: 6px 12px;
  color: #142f57;
  background: #ffff66;
  border-radius: 3px;
  font-weight: 700;
  text-decoration: none;
}

.legacy-directory-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 7px 10px;
  background: #ffff00;
  border-bottom: 1px solid #c6c600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
}

.legacy-directory-nav a {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #0000ee;
  text-decoration: underline;
}

.legacy-directory-nav img { width: 16px; height: 20px; }

.legacy-table-scroll {
  width: 100%;
  overflow-x: auto;
}

.legacy-member-table {
  width: 100%;
  min-width: 720px;
  border: 1px solid #777;
  border-collapse: collapse;
  border-spacing: 0;
  background: #fff;
}

.legacy-member-table caption {
  padding: 5px 8px;
  color: brown;
  background: #e7eefe;
  border: 1px solid #777;
  border-bottom: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  text-align: center;
}

.legacy-member-table th {
  padding: 4px 5px;
  color: brown;
  background: #fff;
  border: 1px solid #777;
  font-family: "Times New Roman", Times, serif;
  font-size: 16px;
  text-align: left;
}

.legacy-member-table td {
  padding: 2px 5px;
  color: #d2691e;
  background: #fff;
  border: 1px solid #d0d7e5;
  font-family: Calibri, Arial, sans-serif;
  font-size: 15px;
  line-height: 1.2;
}

.legacy-member-table th:nth-child(1) { width: 24%; }
.legacy-member-table th:nth-child(2) { width: 8%; }
.legacy-member-table th:nth-child(3) { width: 16%; }
.legacy-member-table th:nth-child(4) { width: 8%; }
.legacy-member-table th:nth-child(5) { width: 44%; }
.numeric-cell { text-align: center; }

@media (max-width: 640px) {
  .legacy-directory-switch {
    align-items: stretch;
    flex-direction: column;
    gap: 7px;
    text-align: center;
  }

  .legacy-directory-switch a { text-align: center; }
  .legacy-member-table caption { font-size: 20px; }
}
</style>
