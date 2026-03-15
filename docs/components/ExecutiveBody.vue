<script setup>
import data from '../data/executive-body.json'
</script>

<template>
  <div class="executive-page">

    <h1><align="centre">Executive Body</h1>

    <!-- Leadership -->
    <div class="leadership-grid">
      <div class="card">
        <h3>Patron</h3>
        <p><strong>{{ data.leadership.patron.name }}&nbsp;"("&nbsp;
        {{ data.leadership.patron.batch }}&nbsp;")"</strong></p>
        <p>{{ data.leadership.patron.email }}</p>
      </div>

      <div class="card">
        <h3>President</h3>
        <p><strong>{{ data.leadership.president.name }}</strong></p>
        <p>{{ data.leadership.president.batch }}</p>
        <p>{{ data.leadership.president.phone }}</p>
        <p>{{ data.leadership.president.email }}</p>
      </div>

      <div class="card">
        <h3>General Secretary</h3>
        <p><strong>{{ data.leadership.generalSecretary.name }}</strong></p>
        <p>{{ data.leadership.generalSecretary.batch }}</p>
        <p>{{ data.leadership.generalSecretary.phone }}</p>
        <p>{{ data.leadership.generalSecretary.email }}</p>
      </div>

      <div class="card">
        <h3>Treasurer</h3>
        <p><strong>{{ data.leadership.treasurer.name }}</strong></p>
        <p>{{ data.leadership.treasurer.batch }}</p>
        <p>{{ data.leadership.treasurer.phone }}</p>
        <p>{{ data.leadership.treasurer.email }}</p>
      </div>
    </div>

    <!-- Executive Committee -->
    <h2>Executive Committee Members</h2>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Batch</th>
          <th>Mobile</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(m, i) in data.executiveCommittee" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ m.name }}</td>
          <td>{{ m.batch }}</td>
          <td>{{ m.phone }}</td>
          <td>{{ m.email }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Working Committee -->
    <h2>Working Committee Members</h2>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Batch</th>
          <th>Mobile</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(m, i) in data.workingCommittee" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ m.name }}</td>
          <td>{{ m.batch }}</td>
          <td>{{ m.phone }}</td>
          <td>{{ m.email }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style scoped>

.executive-page {
  max-width: 1000px;
  margin: auto;
}

.leadership-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
  gap: 20px;
  margin-bottom: 40px;
  margin-top: 20px;
}

.card {
  padding: 18px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
}

th, td {
  padding: 10px;
  border-bottom: 1px solid var(--vp-c-divider);
  text-align: left;
}

th {
  background: var(--vp-c-bg-soft);
}

.alumni-grid {
  display: grid;
  /* On wide screens, this will allow 4 or 5 columns instead of just 2-3 */
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); 
  gap: 20px;
}

</style>
