<script setup lang="ts">
import events from '../../../data/past-events.json'

const eventTokenLabels: Record<string, string> = {
  aai: 'AAI', apr: 'Apr', aug: 'Aug', avi: 'AVI', csoi: 'CSOI', dec: 'Dec', delhi: 'Delhi',
  feb: 'Feb', family: 'Family', gurgaon: 'Gurgaon', individual: 'Individual', indv: 'Indv',
  faridabad: 'Faridabad', delite: 'Delite', jan: 'Jan', jul: 'Jul', jun: 'Jun', may: 'May',
  noida: 'Noida', nov: 'Nov', oct: 'Oct',
  powergrid: 'Powergrid', psoi: 'PSOI', sep: 'Sep'
}

const legacyEventLabel = (id: string) => id
  .split('-')
  .map((token) => eventTokenLabels[token] ?? token)
  .join('-')

const alumniEpisodes = [
  {
    title: 'Episode-1: in 2021, Er. Shashi Bansal (69-E), owner of spiritual TV channels, multiple industries in Delhi & Haryana.',
    note: "Recording (link) of this session isn't available"
  },
  {
    title: 'Episode-2: 4th Jul 2021 - Er. Narendra Singh (68-C), President, Institution of Engineers, India',
    href: 'https://youtu.be/Bx6VoNtHGMw'
  },
  {
    title: 'Episode-3: 16th Oct 2021 - Er. Govind Gupta (89-CS), IPS, ADGP Rajasthan',
    href: 'https://youtu.be/HFY7vQS4czI'
  },
  {
    title: 'Episode-4: 23rd Oct 2021 - Dr. P. K. Sinha (80-CS), Director IIIT Naya Raipur (Chhattisgarh)',
    href: 'https://youtu.be/CyP8CqpOV5g'
  }
]
</script>

<template>
  <div class="legacy-site">
    <aside class="new-site-banner" aria-label="Try the new website">
      <div>
        <strong>Our new website is ready for you to explore.</strong>
        <span>Please try the new design and share your feedback in the alumni WhatsApp group.</span>
      </div>
      <a href="/new/">Try the new design <span aria-hidden="true">→</span></a>
    </aside>

    <header class="legacy-header">
      <img class="legacy-logo maa-logo" src="/legacy/maa_logo.jpg" alt="MONERECO Alumni Association logo">
      <a class="institute-logo-link" href="https://www.mnnit.ac.in/" aria-label="Visit the MNNIT website">
        <img class="legacy-logo institute-logo" src="/legacy/mnnit_logo.jpg" alt="MNNIT logo">
      </a>
      <a class="group-photo-link" href="https://photos.app.goo.gl/fSX5V2Q5D2cWewBeA" aria-label="View executive working group photographs">
        <img class="group-photo" src="/legacy/Exe-Wrk-Grp.jpg" alt="Executive working group">
      </a>
      <div class="legacy-title">
        <span><mark>MONERECO (MNNIT)</mark> Alumni Association</span>
        <span>Delhi-NCR</span>
      </div>
      <nav class="legacy-utility" aria-label="Homepage links">
        <a href="/"><img src="/legacy/homeicon_1.gif" alt=""> <strong>Home</strong></a>
        <span aria-hidden="true">|</span>
        <a href="/new/"><strong>New Website</strong></a>
      </nav>
    </header>

    <main>
      <section class="legacy-introduction">
        <p>
          <strong>MONERECO (MNNIT) ALUMNI ASSOCIATION- Delhi NCR</strong> was formed in the year
          1988-89 in Faridabad by fellow monerecons / executive committee members.
        </p>
        <p>
          -&nbsp;Er. Anil Uppal (74-M) served as its founder President till Sep'14, followed by
          Er. R. N. Gulati (70-M) till Nov'23, Er. Ramesh Thakur (75-M) till Jan'26, and is
          currently presided over by Er. M. P. Arya (75-M). Today it is a strong family of
          600+ life members.
        </p>
        <p class="legacy-italic">
          -&nbsp;We meet in Delhi / Faridabad / Noida / Gurgaon 2-3 times for individual meets
          and once a year for a gala annual family get-together with games and cultural events,
          followed by cocktail-lunch / dinner.<br>
          -&nbsp;The Association provides a platform to fellow monerecons in the Delhi NCR Region
          to stay connected and to help each other in individual / collective capacity.<br>
          -&nbsp;To become a life member one has to pay Rs. 2000 (non-refundable), by cash or
          account payee cheque in favour of 'MONERECO ALUMNI ASSOCIATION' at one of the get-togethers.<br>
          -&nbsp;Non-life members are requested to become life members at the earliest to strengthen
          the Association.
        </p>
        <p>
          <strong>WhatsApp Groups:</strong>
          <small>We earlier had four groups (G1, G2, G3, G4) when group capacity was limited to
          256. We now retain G1 for life members and G4 for non-life members. “Only Admins can post”
          settings are applied to avoid generic forwards.</small>
        </p>
        <p>
          <strong>Google Group:</strong>
          <small>'MNNIT (Monereco) Alumni Association - Delhi NCR'. Group email-id is:
          <b>mnnit-delhi-ncr@googlegroups.com</b>. The group is configured to receive emails only
          from group members.</small>
        </p>
      </section>

      <div class="legacy-announcement" role="status">
        Sincere thanks to all the Motis / Pearls for making the Get-together Enjoyable and
        Memorable. A hearty welcome to new life members becoming an integral part of the
        Monereco-NCR family.
      </div>

      <div class="legacy-summary-grid">
        <section class="legacy-panel">
          <h2><img src="/legacy/announcement.gif" alt=""> Announcements / Events</h2>
          <div class="legacy-rule"></div>
          <p class="legacy-link-row">
            <a href="/executive-body"><strong><em>Executive Body</em></strong></a>
            <a href="/membership-form.docx" download><strong><em>Membership Form</em></strong></a>
          </p>
        </section>

        <section class="legacy-panel">
          <h2><img src="/legacy/new_joinees_icon.jpg" alt=""> Member Details</h2>
          <div class="legacy-rule"></div>
          <p class="legacy-link-row">
            <a href="/alumni/by-lm/"><strong><em>Membership wise</em></strong></a>
            <a href="/alumni/by-batch/"><strong><em>Batch wise</em></strong></a>
            <a href="/alumni/by-name/"><strong><em>Name wise</em></strong></a>
          </p>
        </section>
      </div>

      <section class="legacy-panel legacy-wide-panel">
        <h2><img src="/legacy/fun_corner_icon.jpg" alt=""> <u>Past Events Snapshots</u></h2>
        <div class="legacy-event-grid">
          <a
            v-for="event in events"
            :key="event.id"
            :href="event.gallery_link.trim()"
            class="legacy-list-link"
          >
            <span aria-hidden="true">◆</span>
            <strong><em>{{ legacyEventLabel(event.id) }}</em></strong>
          </a>
        </div>
      </section>

      <section class="legacy-panel legacy-wide-panel alumni-stories">
        <h2>
          <img src="/legacy/new_joinees_icon.jpg" alt="">
          <span><u>Know Your Alumni</u> <small>An initiative by some active Senior Motis</small></span>
        </h2>
        <p class="legacy-panel-note">
          Dedicated interactive Zoom sessions with a distinguished Alumnus / Alumna to hear
          directly about their journey from college to professional life (and personal life too).
        </p>
        <div class="legacy-episode-grid">
          <div v-for="episode in alumniEpisodes" :key="episode.title" class="legacy-episode">
            <a v-if="episode.href" :href="episode.href"><strong><em>{{ episode.title }}</em></strong></a>
            <strong v-else><em>{{ episode.title }}</em></strong>
            <small v-if="episode.note">{{ episode.note }}</small>
          </div>
        </div>
      </section>
    </main>

    <footer class="legacy-footer">
      <span>© 2013 <mark><strong>Monereco (MNNIT)</strong></mark> Alumni Association - Delhi NCR. All rights reserved.</span>
      <a href="mailto:nareshg007@yahoo.com"><img src="/legacy/email_link.jpg" alt=""> Feedback/Suggestions</a>
    </footer>
  </div>
</template>

<style scoped>
:global(body) { margin: 0; }

.legacy-site {
  min-height: 100vh;
  color: #000;
  background: #fff;
  font-family: "Times New Roman", Times, serif;
  font-size: 16px;
  line-height: 1.25;
}

.legacy-site a { color: #0000ee; text-decoration: underline; }

.new-site-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 11px 24px;
  color: #fff;
  background: #142f57;
  border-bottom: 3px solid #f6d84a;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}

.new-site-banner div { display: flex; flex-wrap: wrap; gap: 4px 10px; }

.new-site-banner a {
  flex: none;
  padding: 7px 13px;
  color: #142f57;
  background: #ffff66;
  border: 1px solid #fff3a1;
  border-radius: 3px;
  font-weight: 700;
  text-decoration: none;
}

.legacy-header {
  display: grid;
  grid-template-columns: 84px 84px 108px minmax(300px, 1fr) 150px;
  min-height: 76px;
  align-items: center;
  gap: 10px;
  padding: 2px 8px;
  background: #ffff00;
  border: 1px solid #ffff00;
}

.legacy-logo {
  display: block;
  width: 72px;
  height: 72px;
  margin: 0 auto;
  border: 1px solid #555;
  object-fit: cover;
}

.institute-logo { object-fit: contain; background: #fff; }
.institute-logo-link, .group-photo-link { display: block; }

.group-photo {
  display: block;
  width: 96px;
  height: 72px;
  margin: 0 auto;
  object-fit: cover;
}

.legacy-title { text-align: center; font-size: clamp(25px, 3vw, 38px); line-height: 1.06; }
.legacy-title span { display: block; }
.legacy-title mark, .legacy-footer mark { padding: 0 3px; background: #ffff66; }

.legacy-utility {
  align-self: stretch;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 6px;
  padding: 0 4px 8px 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
}

.legacy-utility a { display: inline-flex; align-items: center; gap: 4px; }
.legacy-utility img { width: 16px; height: 20px; }

.legacy-introduction { padding: 10px 8px 8px; background: #00ffff; font-size: 18px; }
.legacy-introduction p { margin: 0 0 13px; }
.legacy-introduction p:last-child { margin-bottom: 0; }
.legacy-introduction small { font-size: 15px; }
.legacy-italic { font-style: italic; }

.legacy-announcement {
  padding: 5px 20px;
  color: #ffff00;
  background: #6789ab;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
}

.legacy-summary-grid {
  display: grid;
  grid-template-columns: 43fr 49fr;
  gap: 3%;
  padding: 17px 1% 0;
}

.legacy-panel {
  position: relative;
  margin: 0;
  padding: 17px 18px 18px;
  background: url('/legacy/top_line.jpg') repeat-x top, url('/legacy/bottom_line.jpg') repeat-x bottom, #fff;
  border-right: 1px solid #b5b5b5;
  border-left: 1px solid #b5b5b5;
  box-shadow: inset 0 0 0 1px #ededed;
}

.legacy-panel::before, .legacy-panel::after {
  position: absolute;
  top: 0;
  width: 18px;
  height: 19px;
  content: '';
  background-repeat: no-repeat;
}

.legacy-panel::before { left: -1px; background-image: url('/legacy/left_top.jpg'); }
.legacy-panel::after { right: -1px; background-image: url('/legacy/right_top.jpg'); }

.legacy-panel h2 {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  border: 0;
  color: #000;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  line-height: 1.2;
}

.legacy-panel h2 img { width: 28px; height: 28px; object-fit: contain; }
.legacy-panel h2 small { font-size: 13px; text-decoration: none; }
.legacy-rule { height: 1px; margin: 3px 0 15px 36px; background: #000; }
.legacy-link-row { display: flex; flex-wrap: wrap; gap: 8px 22px; margin: 0; font-size: 18px; }
.legacy-wide-panel { margin: 14px 1% 0; }

.legacy-event-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 7px 16px;
  margin-top: 15px;
}

.legacy-list-link {
  display: grid;
  grid-template-columns: 10px 1fr;
  gap: 5px;
  align-items: start;
  font-size: 17px;
}

.legacy-list-link span { margin-top: 5px; font-size: 6px; color: #111; }
.legacy-panel-note { margin: 3px 0 13px 36px; font-size: 12px; font-weight: 700; }
.legacy-episode-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 15px; }
.legacy-episode { padding-left: 14px; font-size: 17px; }

.legacy-episode::before {
  float: left;
  margin: 6px 0 0 -13px;
  color: #111;
  font-size: 6px;
  content: '◆';
}

.legacy-episode small { display: block; margin-top: 3px; font-size: 11px; }

.legacy-footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 16px;
  padding: 5px 8px;
  background: #e7eefe;
  font-size: 14px;
}

.legacy-footer a { display: inline-flex; align-items: center; gap: 5px; }
.legacy-footer img { width: 18px; height: 17px; }

@media (max-width: 900px) {
  .legacy-header { grid-template-columns: 72px 72px 94px 1fr; }
  .legacy-logo { width: 62px; height: 62px; }
  .group-photo { width: 86px; height: 62px; }
  .legacy-utility { grid-column: 1 / -1; justify-content: center; min-height: 25px; padding-bottom: 3px; }
  .legacy-event-grid, .legacy-episode-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 640px) {
  .new-site-banner { align-items: stretch; flex-direction: column; gap: 8px; padding: 10px 12px; }
  .new-site-banner a { text-align: center; }
  .legacy-header { grid-template-columns: repeat(3, 1fr); gap: 4px; padding-top: 6px; }
  .legacy-title { grid-column: 1 / -1; grid-row: 2; padding: 5px; font-size: 25px; }
  .legacy-utility { grid-row: 3; }
  .legacy-introduction { font-size: 16px; }
  .legacy-introduction small { font-size: 14px; }
  .legacy-announcement { font-size: 16px; }
  .legacy-summary-grid { grid-template-columns: 1fr; gap: 14px; }
  .legacy-event-grid, .legacy-episode-grid { grid-template-columns: 1fr; }
  .legacy-footer { align-items: flex-start; flex-direction: column; }
}
</style>
