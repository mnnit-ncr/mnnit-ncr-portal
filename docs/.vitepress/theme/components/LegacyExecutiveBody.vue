<script setup lang="ts">
import data from '../../../data/executive-body.json'

const leaders = [
  { role: 'Patron', ...data.leadership.patron },
  { role: 'President', ...data.leadership.president },
  { role: 'General Secretary', ...data.leadership.generalSecretary },
  { role: 'Treasurer', ...data.leadership.treasurer }
]
</script>

<template>
  <div class="legacy-executive-page">
    <div class="legacy-executive-switch">
      <strong>You are viewing the classic website.</strong>
      <a href="/new/">Try the new design →</a>
    </div>

    <header class="legacy-executive-header">
      <img src="/legacy/maa_logo.jpg" alt="MONERECO Alumni Association logo">
      <img src="/legacy/mnnit_logo.jpg" alt="MNNIT logo">
      <div><mark>MONERECO (MNNIT)</mark> Alumni Association<br>Delhi-NCR</div>
      <a href="/"><img src="/legacy/homeicon_1.gif" alt=""> <strong>Home</strong></a>
    </header>

    <main>
      <table class="legacy-executive-table leadership-table">
        <tbody>
          <tr class="section-title"><th :colspan="leaders.length">Executive Body</th></tr>
          <tr>
            <th v-for="leader in leaders" :key="leader.role">{{ leader.role }}</th>
          </tr>
          <tr>
            <td v-for="leader in leaders" :key="leader.role">
              <strong>{{ leader.name }}</strong><br>
              <span>{{ leader.batch }}</span><br>
              <a v-if="leader.email" :href="`mailto:${leader.email}`">{{ leader.email }}</a><br v-if="leader.email">
              <span v-if="leader.phone">{{ leader.phone }}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="legacy-executive-table">
        <thead><tr class="section-title"><th colspan="3">Executive Committee Members</th></tr></thead>
        <tbody>
          <tr v-for="member in data.executiveCommittee" :key="member.name">
            <td><strong>{{ member.name }}</strong></td>
            <td>{{ member.batch }}</td>
            <td><a :href="`mailto:${member.email}`">{{ member.email }}</a><span v-if="member.phone"> · {{ member.phone }}</span></td>
          </tr>
        </tbody>
      </table>

      <table class="legacy-executive-table">
        <thead><tr class="section-title"><th colspan="3">Working Committee Members</th></tr></thead>
        <tbody>
          <tr v-for="member in data.workingCommittee" :key="member.name">
            <td><strong>{{ member.name }}</strong></td>
            <td>{{ member.batch }}</td>
            <td><a :href="`mailto:${member.email}`">{{ member.email }}</a><span v-if="member.phone"> · {{ member.phone }}</span></td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<style scoped>
:global(html), :global(body) { margin: 0; background: #fff; }
:global(.legacy-executive-route .VPContent) { padding: 0 !important; }
:global(.legacy-executive-route .VPContent > .container),
:global(.legacy-executive-route .VPContent .content),
:global(.legacy-executive-route .vp-doc) {
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.legacy-executive-page { min-height: 100vh; color: #000; background: #fff; font-family: "Times New Roman", Times, serif; }
.legacy-executive-page a { color: #0000ee; text-decoration: underline; }

.legacy-executive-switch {
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

.legacy-executive-switch a { padding: 6px 12px; color: #142f57; background: #ffff66; border-radius: 3px; font-weight: 700; text-decoration: none; }

.legacy-executive-header {
  display: grid;
  grid-template-columns: 80px 80px 1fr 80px;
  align-items: center;
  gap: 12px;
  padding: 3px 10px;
  background: #ffff00;
}

.legacy-executive-header > img { width: 72px; height: 72px; border: 1px solid #555; object-fit: contain; background: #fff; }
.legacy-executive-header div { text-align: center; font-size: clamp(24px, 3vw, 38px); line-height: 1.05; }
.legacy-executive-header mark { background: #ffff66; }
.legacy-executive-header > a { display: flex; align-items: center; gap: 4px; font-family: Arial, Helvetica, sans-serif; font-size: 13px; }
.legacy-executive-header > a img { width: 16px; height: 20px; }

.legacy-executive-page main { padding: 12px 1%; }
.legacy-executive-table { width: 100%; margin-bottom: 14px; border: 1px solid #777; border-collapse: collapse; }
.legacy-executive-table th, .legacy-executive-table td { padding: 7px; border: 1px solid #d0d7e5; }
.legacy-executive-table th { color: brown; }
.legacy-executive-table td { color: #d2691e; font-family: Calibri, Arial, sans-serif; }
.legacy-executive-table td:nth-child(1) { width: 30%; }
.legacy-executive-table td:nth-child(2) { width: 12%; text-align: center; }
.section-title th { color: brown; background: #e7eefe; font-family: Arial, Helvetica, sans-serif; font-size: 23px; text-align: center; }
.leadership-table th, .leadership-table td { width: 25%; text-align: center; }

@media (max-width: 640px) {
  .legacy-executive-switch { align-items: stretch; flex-direction: column; gap: 7px; text-align: center; }
  .legacy-executive-header { grid-template-columns: 1fr 1fr; }
  .legacy-executive-header div { grid-column: 1 / -1; grid-row: 2; font-size: 25px; }
  .legacy-executive-header > a { grid-column: 1 / -1; justify-content: center; }
  .legacy-executive-header > img { margin: auto; }
  .legacy-executive-table { display: block; overflow-x: auto; }
  .leadership-table { min-width: 680px; }
}
</style>
