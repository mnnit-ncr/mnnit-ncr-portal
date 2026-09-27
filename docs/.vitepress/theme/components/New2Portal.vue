<script setup lang="ts">
import { computed, ref } from 'vue'
import events from '../../../data/past-events.json'
import upcomingEvents from '../../../data/upcoming-events.json'
import executive from '../../../data/executive-body.json'

type Alumnus = {
  id: string | number
  lm_number?: number
  prefix?: string
  name: string
  batch_year?: number
  branch?: string
  emails?: { email?: string }[]
  current?: { role?: string; company?: string; location?: string }
}

const props = withDefaults(defineProps<{ page?: string; alumni?: Alumnus[] }>(), {
  page: 'home',
  alumni: () => []
})

const query = ref('')
const batch = ref('')
const branch = ref('')

const batches = computed(() => [...new Set(props.alumni.map((person) => person.batch_year).filter(Boolean))]
  .sort((a, b) => Number(b) - Number(a)))
const branches = computed(() => [...new Set(props.alumni.map((person) => person.branch).filter(Boolean))].sort())
const filteredAlumni = computed(() => {
  const needle = query.value.trim().toLowerCase()
  return props.alumni.filter((person) => {
    const searchable = `${person.prefix ?? ''} ${person.name} ${person.lm_number ?? ''} ${person.branch ?? ''}`.toLowerCase()
    return (!needle || searchable.includes(needle))
      && (!batch.value || String(person.batch_year) === batch.value)
      && (!branch.value || person.branch === branch.value)
  })
})

const leaders = [
  { role: 'Patron', ...executive.leadership.patron },
  { role: 'President', ...executive.leadership.president },
  { role: 'General Secretary', ...executive.leadership.generalSecretary },
  { role: 'Treasurer', ...executive.leadership.treasurer }
]

const nav = [
  { key: 'home', label: 'Home', href: '/new2/' },
  { key: 'alumni', label: 'Directory', href: '/new2/alumni/' },
  { key: 'events', label: 'Memories', href: '/new2/past-events/' },
  { key: 'executive', label: 'Leadership', href: '/new2/executive-body' },
  { key: 'community', label: 'Community', href: '/new2/community' },
  { key: 'about', label: 'Our Story', href: '/new2/about' }
]

const formatDate = (date: string) => new Intl.DateTimeFormat('en-IN', {
  day: 'numeric', month: 'short', year: 'numeric'
}).format(new Date(`${date}T00:00:00`))

const primaryEmail = (person: Alumnus) => person.emails?.find(({ email }) => email)?.email
const fullName = (person: Alumnus) => [person.prefix, person.name].filter(Boolean).join(' ')
</script>

<template>
  <div class="n2-site">
    <header class="n2-header">
      <a class="n2-brand" href="/new2/">
        <img src="/MNNIT-logo-png.png" alt="MNNIT emblem">
        <span><b>MONERECO</b><small>MNNIT Alumni · Delhi NCR</small></span>
      </a>
      <nav aria-label="New2 navigation">
        <a v-for="item in nav" :key="item.key" :href="item.href" :class="{ active: page === item.key }">{{ item.label }}</a>
      </nav>
      <a class="compare-link" href="/new/">Compare Version 1 ↗</a>
    </header>

    <main>
      <template v-if="page === 'home'">
        <section class="n2-hero">
          <div class="hero-copy">
            <span class="eyebrow">Delhi NCR chapter · Together since 1988</span>
            <h1>Where MNNIT memories meet <em>what’s next.</em></h1>
            <p>A home for Monerecons across Delhi, Noida, Gurugram and Faridabad—to reconnect, celebrate and help one another move forward.</p>
            <div class="hero-actions">
              <a class="button primary" href="/new2/alumni/">Find an alumnus</a>
              <a class="button secondary" href="/new2/community">Join the community</a>
            </div>
          </div>
          <div class="hero-collage" aria-label="Photographs from alumni gatherings">
            <img class="photo-main" src="/family-csoi-21-feb-26.jpg" alt="Recent MNNIT alumni family gathering">
            <img class="photo-small one" src="/indv-powergrid-gurgaon-26-jul-25.jpg" alt="MNNIT alumni gathering in Gurugram">
            <img class="photo-small two" src="/family-csoi-25-feb-24.jpg" alt="MNNIT alumni family gathering">
            <span class="photo-note">600+<small>life members</small></span>
          </div>
        </section>

        <section class="n2-stats" aria-label="Association facts">
          <div><strong>38+</strong><span>years together</span></div>
          <div><strong>600+</strong><span>life members</span></div>
          <div><strong>4</strong><span>NCR cities</span></div>
          <div><strong>2–3×</strong><span>meets every year</span></div>
        </section>

        <section class="n2-section intro-section">
          <div class="section-heading">
            <span class="eyebrow">More than a directory</span>
            <h2>A community that still feels like campus.</h2>
          </div>
          <div class="value-grid">
            <article><span>01</span><h3>Reconnect</h3><p>Find batchmates and fellow Monerecons across generations and disciplines.</p></article>
            <article><span>02</span><h3>Gather</h3><p>Family reunions and focused meetups bring the NCR chapter together.</p></article>
            <article><span>03</span><h3>Support</h3><p>A trusted network for professional guidance and personal connection.</p></article>
          </div>
        </section>

        <section class="n2-section memory-section">
          <div class="section-heading row-heading"><div><span class="eyebrow">From the album</span><h2>Recent memories</h2></div><a href="/new2/past-events/">Explore all gatherings →</a></div>
          <div class="memory-grid">
            <a v-for="event in events.slice(0, 3)" :key="event.id" :href="event.gallery_link.trim()" class="memory-card">
              <img :src="event.image" :alt="event.title">
              <span>{{ formatDate(event.date) }}</span><h3>{{ event.title }}</h3><p>{{ event.location }}</p>
            </a>
          </div>
        </section>

        <section class="n2-cta">
          <span class="eyebrow">Life membership</span>
          <h2>Your chapter. Your people. Your place in the story.</h2>
          <p>Become a life member with a one-time contribution of ₹2,000.</p>
          <a class="button light" href="/membership-form.docx" download>Download membership form</a>
        </section>
      </template>

      <template v-else-if="page === 'alumni'">
        <section class="page-hero directory-hero"><span class="eyebrow">The MONERECO network</span><h1>Find your people.</h1><p>Search the Delhi NCR alumni community by name, membership number, batch or branch.</p></section>
        <section class="directory-section">
          <div class="directory-controls">
            <label class="search-box"><span>⌕</span><input v-model="query" type="search" placeholder="Search name or LM number…"></label>
            <select v-model="batch" aria-label="Filter by batch"><option value="">All batches</option><option v-for="year in batches" :key="year" :value="String(year)">{{ year }}</option></select>
            <select v-model="branch" aria-label="Filter by branch"><option value="">All branches</option><option v-for="item in branches" :key="item" :value="item">{{ item }}</option></select>
          </div>
          <div class="result-count"><strong>{{ filteredAlumni.length }}</strong> alumni found</div>
          <div class="people-grid">
            <article v-for="person in filteredAlumni" :key="person.id" class="person-card">
              <div class="person-initial">{{ person.name.charAt(0) }}</div>
              <div class="person-copy"><span>LM {{ person.lm_number || '—' }} · {{ person.batch_year }}</span><h3>{{ fullName(person) }}</h3><p>{{ person.branch || 'MNNIT alumnus' }}</p><small v-if="person.current?.role">{{ person.current.role }}<template v-if="person.current.company"> · {{ person.current.company }}</template></small></div>
              <a v-if="primaryEmail(person)" :href="`mailto:${primaryEmail(person)}`" aria-label="Send email">✉</a>
            </article>
          </div>
        </section>
      </template>

      <template v-else-if="page === 'events'">
        <section class="page-hero"><span class="eyebrow">A living archive</span><h1>Gatherings worth remembering.</h1><p>Family celebrations, alumni meets and decades of friendships across NCR.</p></section>
        <section class="event-gallery">
          <a v-for="event in events" :key="event.id" :href="event.gallery_link.trim()" class="event-tile">
            <img :src="event.image" :alt="event.title"><div><span>{{ formatDate(event.date) }}</span><h2>{{ event.title }}</h2><p>{{ event.location }} · View gallery ↗</p></div>
          </a>
        </section>
      </template>

      <template v-else-if="page === 'upcoming'">
        <section class="page-hero"><span class="eyebrow">Save the date</span><h1>Come meet the family.</h1><p>Upcoming Delhi NCR chapter gatherings and registration details.</p></section>
        <section class="empty-state" v-if="!upcomingEvents.length"><span>✦</span><h2>The next gathering is being planned.</h2><p>Important announcements are shared in the alumni WhatsApp groups.</p><a class="button primary" href="/new2/community">Stay connected</a></section>
      </template>

      <template v-else-if="page === 'executive'">
        <section class="page-hero"><span class="eyebrow">Stewards of the chapter</span><h1>Leadership grounded in service.</h1><p>Alumni volunteering their time to keep the Delhi NCR community connected.</p></section>
        <section class="leadership-section"><div class="leader-grid"><article v-for="leader in leaders" :key="leader.role" class="leader-card"><span>{{ leader.role }}</span><h2>{{ leader.name }}</h2><p>{{ leader.batch }}</p><a :href="`mailto:${leader.email}`">{{ leader.email }}</a></article></div><h2 class="subhead">Executive committee</h2><div class="committee-grid"><article v-for="member in executive.executiveCommittee" :key="member.name"><h3>{{ member.name }}</h3><span>{{ member.batch }}</span><a :href="`mailto:${member.email}`">{{ member.email }}</a></article></div><h2 class="subhead">Working committee</h2><div class="committee-grid"><article v-for="member in executive.workingCommittee" :key="member.name"><h3>{{ member.name }}</h3><span>{{ member.batch }}</span><a :href="`mailto:${member.email}`">{{ member.email }}</a></article></div></section>
      </template>

      <template v-else-if="page === 'community'">
        <section class="page-hero"><span class="eyebrow">Belong here</span><h1>Stay close, wherever life took you.</h1><p>Join the chapter, receive announcements and take part in alumni initiatives.</p></section>
        <section class="community-layout"><article class="membership-card"><span class="eyebrow">Life membership</span><h2>One contribution.<br>A lifelong connection.</h2><div class="price">₹2,000 <small>one time</small></div><p>Payable by cash or account-payee cheque in favour of MONERECO ALUMNI ASSOCIATION.</p><a class="button primary" href="/membership-form.docx" download>Download the form</a></article><div class="channel-list"><article><span>WhatsApp</span><h2>G1 · Life members</h2><p>Essential announcements for registered life members.</p></article><article><span>WhatsApp</span><h2>G4 · Alumni community</h2><p>Important chapter communication for the wider NCR network.</p></article><article><span>Google Group</span><h2>mnnit-delhi-ncr@googlegroups.com</h2><p>Email communication for registered group members.</p></article></div></section>
      </template>

      <template v-else-if="page === 'about'">
        <section class="page-hero"><span class="eyebrow">Our story</span><h1>Built by friendship. Sustained by belonging.</h1><p>The Delhi NCR chapter has connected Monerecons across generations since 1988–89.</p></section>
        <section class="story-section"><div class="story-copy"><h2>From a small gathering in Faridabad to a 600+ member family.</h2><p>Founded by fellow Monerecons and executive committee members, the Association became a trusted bridge for MNNIT alumni living and working across the National Capital Region.</p><p>We gather two or three times each year for alumni meets and once for a gala family get-together—with games, cultural events and the unmistakable warmth of old friendships.</p></div><div class="timeline"><article><span>1988–89</span><h3>Chapter formed</h3><p>The Delhi NCR alumni association begins in Faridabad.</p></article><article><span>2014</span><h3>A new generation of leadership</h3><p>Founder President Er. Anil Uppal is honoured as lifetime Patron.</p></article><article><span>Today</span><h3>600+ life members</h3><p>A thriving family across Delhi, Noida, Gurugram and Faridabad.</p></article></div></section>
      </template>
    </main>

    <footer class="n2-footer"><div class="n2-brand"><img src="/MNNIT-logo-png.png" alt=""><span><b>MONERECO</b><small>MNNIT Alumni · Delhi NCR</small></span></div><p>Connecting campus memories with lifelong community.</p><div><a href="mailto:nareshg007@yahoo.com">Feedback</a><a href="/new/">Compare Version 1</a></div></footer>
  </div>
</template>

<style scoped>
:global(.new2-route .VPContent) { padding: 0 !important; }
:global(.new2-route .VPContent > .container), :global(.new2-route .VPContent .content), :global(.new2-route .vp-doc) { max-width: none !important; margin: 0 !important; padding: 0 !important; }
.n2-site { --navy:#0b233f; --gold:#d69c2f; --cream:#f8f5ee; --teal:#0e6c70; --ink:#17202a; min-height:100vh; color:var(--ink); background:var(--cream); font-family:Inter,ui-sans-serif,system-ui,-apple-system,sans-serif; }
.n2-site * { box-sizing:border-box; }
.n2-site a { color:inherit; text-decoration:none; }
.n2-header { position:sticky; top:0; z-index:20; display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:28px; padding:14px clamp(20px,4vw,64px); color:#fff; background:rgba(11,35,63,.96); border-bottom:1px solid rgba(255,255,255,.12); backdrop-filter:blur(14px); }
.n2-brand { display:flex; align-items:center; gap:10px; }.n2-brand img{width:42px;height:42px;object-fit:contain}.n2-brand span{display:flex;flex-direction:column;line-height:1}.n2-brand b{font-family:Georgia,serif;letter-spacing:.06em}.n2-brand small{margin-top:5px;font-size:10px;letter-spacing:.06em;text-transform:uppercase;opacity:.72}
.n2-header nav { display:flex; justify-content:center; gap:25px; }.n2-header nav a{padding:8px 0;font-size:13px;font-weight:650;opacity:.72;border-bottom:2px solid transparent}.n2-header nav a:hover,.n2-header nav a.active{opacity:1;border-color:var(--gold)}.compare-link{font-size:12px;font-weight:700;color:#ffe39a!important}
.n2-hero { display:grid; grid-template-columns:1.05fr .95fr; gap:clamp(35px,6vw,90px); align-items:center; min-height:680px; padding:80px clamp(24px,7vw,110px); overflow:hidden; color:#fff; background:radial-gradient(circle at 78% 18%,rgba(14,108,112,.72),transparent 30%),linear-gradient(125deg,#0b233f 0%,#123d59 58%,#0e6c70 100%); }
.eyebrow{display:block;color:var(--gold);font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}.hero-copy h1,.page-hero h1{max-width:720px;margin:18px 0 24px;border:0;color:inherit;font-family:Georgia,'Times New Roman',serif;font-size:clamp(46px,6vw,84px);font-weight:500;line-height:.98;letter-spacing:-.045em}.hero-copy h1 em{color:#f2c963;font-weight:400}.hero-copy p{max-width:650px;color:#d8e5e8;font-size:19px;line-height:1.65}.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}.button{display:inline-flex;align-items:center;justify-content:center;padding:13px 20px;border-radius:999px;font-size:14px;font-weight:750}.button.primary{color:#fff;background:var(--gold)}.button.secondary{color:#fff;border:1px solid rgba(255,255,255,.35)}.button.light{color:var(--navy);background:#fff}
.hero-collage{position:relative;min-height:480px}.hero-collage img{position:absolute;display:block;object-fit:cover;border:8px solid rgba(255,255,255,.9);box-shadow:0 30px 70px rgba(0,0,0,.28)}.photo-main{top:0;right:0;width:76%;height:68%;transform:rotate(2deg)}.photo-small{width:43%;height:42%}.photo-small.one{bottom:0;left:0;transform:rotate(-4deg)}.photo-small.two{right:2%;bottom:-2%;transform:rotate(5deg)}.photo-note{position:absolute;left:5%;top:8%;display:flex;flex-direction:column;padding:18px 20px;color:var(--navy);background:#f2c963;border-radius:50%;font-family:Georgia,serif;font-size:26px;text-align:center;transform:rotate(-7deg)}.photo-note small{font-family:Inter,sans-serif;font-size:9px;font-weight:800;text-transform:uppercase}
.n2-stats{display:grid;grid-template-columns:repeat(4,1fr);padding:0 clamp(24px,7vw,110px);background:#fff;border-bottom:1px solid #e6e0d5}.n2-stats div{display:flex;flex-direction:column;padding:28px;border-right:1px solid #e6e0d5}.n2-stats div:last-child{border:0}.n2-stats strong{color:var(--navy);font-family:Georgia,serif;font-size:35px}.n2-stats span{font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#6f746f}
.n2-section{padding:100px clamp(24px,7vw,110px)}.section-heading{max-width:720px}.section-heading h2,.n2-cta h2{margin:14px 0 0;border:0;color:var(--navy);font-family:Georgia,serif;font-size:clamp(35px,4vw,56px);font-weight:500;line-height:1.08}.value-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:48px}.value-grid article{padding:32px;background:#fff;border:1px solid #e4ded2;border-radius:6px}.value-grid article>span{color:var(--gold);font-family:Georgia,serif;font-size:32px}.value-grid h3{margin:30px 0 10px;border:0;color:var(--navy);font-family:Georgia,serif;font-size:27px}.value-grid p{color:#68706f;line-height:1.6}.memory-section{background:#eee8dc}.row-heading{display:flex;max-width:none;align-items:end;justify-content:space-between}.row-heading>a{color:var(--teal);font-size:14px;font-weight:750}.memory-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:42px}.memory-card{overflow:hidden;background:#fff;border-radius:6px}.memory-card img{width:100%;height:250px;object-fit:cover}.memory-card span,.memory-card h3,.memory-card p{display:block;margin-left:22px;margin-right:22px}.memory-card span{margin-top:18px;color:var(--gold);font-size:11px;font-weight:800;text-transform:uppercase}.memory-card h3{margin-top:7px;margin-bottom:5px;border:0;color:var(--navy);font-family:Georgia,serif;font-size:23px}.memory-card p{margin-top:0;margin-bottom:22px;color:#747a78}.n2-cta{padding:90px clamp(24px,12vw,190px);color:#fff;text-align:center;background:var(--teal)}.n2-cta .eyebrow{color:#f2c963}.n2-cta h2{max-width:850px;margin:14px auto;color:#fff}.n2-cta p{margin-bottom:28px;color:#dbe9e7}
.page-hero{padding:90px clamp(24px,10vw,150px);color:#fff;background:linear-gradient(120deg,var(--navy),#164d63)}.page-hero h1{font-size:clamp(46px,5vw,72px)}.page-hero p{max-width:680px;color:#d4e3e6;font-size:18px;line-height:1.6}.directory-section,.leadership-section,.story-section,.community-layout{padding:55px clamp(20px,6vw,90px) 100px}.directory-controls{display:grid;grid-template-columns:1fr 190px 230px;gap:12px}.search-box{display:flex;align-items:center;gap:10px;padding:0 15px;background:#fff;border:1px solid #dcd5c9;border-radius:6px}.search-box input,.directory-controls select{width:100%;padding:14px;border:0;background:#fff;color:var(--ink);font:inherit;outline:0}.directory-controls select{border:1px solid #dcd5c9;border-radius:6px}.result-count{margin:24px 0 15px;color:#707673;font-size:13px}.people-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.person-card{display:grid;grid-template-columns:48px 1fr auto;gap:14px;align-items:start;padding:20px;background:#fff;border:1px solid #e2dcd0;border-radius:6px}.person-initial{display:grid;width:48px;height:48px;place-items:center;color:#fff;background:var(--teal);border-radius:50%;font-family:Georgia,serif;font-size:22px}.person-copy span{color:var(--gold);font-size:10px;font-weight:800;text-transform:uppercase}.person-copy h3{margin:5px 0 4px;border:0;color:var(--navy);font-family:Georgia,serif;font-size:19px}.person-copy p,.person-copy small{margin:0;color:#737977;font-size:12px}.person-card>a{color:var(--teal)}
.event-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding:55px clamp(20px,6vw,90px) 100px}.event-tile{overflow:hidden;background:#fff;border-radius:6px}.event-tile img{width:100%;height:230px;object-fit:cover}.event-tile div{padding:20px}.event-tile span,.leader-card>span{color:var(--gold);font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.event-tile h2{margin:8px 0 5px;border:0;color:var(--navy);font-family:Georgia,serif;font-size:24px}.event-tile p{margin:0;color:#727876;font-size:13px}.empty-state{max-width:700px;margin:80px auto;padding:70px;text-align:center;background:#fff;border:1px solid #ded7cb}.empty-state>span{color:var(--gold);font-size:35px}.empty-state h2{border:0;color:var(--navy);font-family:Georgia,serif;font-size:36px}
.leader-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.leader-card{padding:28px;background:var(--navy);color:#fff;border-radius:6px}.leader-card h2{margin:22px 0 6px;border:0;color:#fff;font-family:Georgia,serif;font-size:25px}.leader-card p{color:#b9cbd2}.leader-card a{font-size:12px;color:#f2c963}.subhead{margin:60px 0 18px;border:0;color:var(--navy);font-family:Georgia,serif;font-size:34px}.committee-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #d8d1c5}.committee-grid article{display:flex;flex-direction:column;padding:20px 12px;border-bottom:1px solid #d8d1c5}.committee-grid h3{margin:0 0 5px;border:0;color:var(--navy);font-family:Georgia,serif;font-size:19px}.committee-grid span{color:var(--gold);font-size:11px;font-weight:800}.committee-grid a{margin-top:8px;color:var(--teal);font-size:12px}
.community-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:40px}.membership-card{padding:45px;color:#fff;background:var(--navy);border-radius:6px}.membership-card h2{margin:16px 0;border:0;color:#fff;font-family:Georgia,serif;font-size:40px}.membership-card p{color:#cad6dc;line-height:1.6}.price{margin:32px 0;color:#f2c963;font-family:Georgia,serif;font-size:50px}.price small{font-family:Inter,sans-serif;font-size:12px;text-transform:uppercase}.channel-list article{padding:26px 0;border-bottom:1px solid #d9d2c6}.channel-list span{color:var(--gold);font-size:10px;font-weight:800;text-transform:uppercase}.channel-list h2{margin:7px 0;border:0;color:var(--navy);font-family:Georgia,serif;font-size:25px}.channel-list p{color:#707673}.story-section{display:grid;grid-template-columns:1fr 1fr;gap:70px}.story-copy h2{margin-top:0;border:0;color:var(--navy);font-family:Georgia,serif;font-size:40px;line-height:1.15}.story-copy p{color:#606866;font-size:17px;line-height:1.75}.timeline article{padding:0 0 28px 30px;border-left:2px solid #d8d1c5}.timeline span{color:var(--gold);font-size:12px;font-weight:800}.timeline h3{margin:6px 0;border:0;color:var(--navy);font-family:Georgia,serif;font-size:25px}.timeline p{color:#707673}
.n2-footer{display:grid;grid-template-columns:1fr 1fr auto;align-items:center;gap:30px;padding:42px clamp(24px,5vw,80px);color:#fff;background:#071a2d}.n2-footer p{color:#93a5ad;font-size:13px}.n2-footer>div:last-child{display:flex;gap:20px;font-size:12px;color:#f2c963}
@media(max-width:1000px){.n2-header{grid-template-columns:1fr auto}.n2-header nav{grid-column:1/-1;order:3;justify-content:flex-start;overflow-x:auto}.n2-hero{grid-template-columns:1fr;padding-top:60px}.hero-collage{min-height:430px}.people-grid,.event-gallery{grid-template-columns:repeat(2,1fr)}.leader-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:700px){.compare-link{display:none}.n2-header{gap:10px;padding:10px 16px}.n2-header nav{flex-wrap:wrap;gap:6px 18px;overflow:visible}.n2-header nav a{padding:5px 0}.n2-hero{min-height:auto;padding:55px 20px 70px}.hero-copy h1{font-size:48px}.hero-collage{min-height:330px}.n2-stats{grid-template-columns:repeat(2,1fr);padding:0}.n2-stats div:nth-child(2){border-right:0}.value-grid,.memory-grid,.people-grid,.event-gallery,.leader-grid,.committee-grid,.community-layout,.story-section{grid-template-columns:1fr}.row-heading{align-items:flex-start;flex-direction:column;gap:18px}.directory-controls{grid-template-columns:1fr}.event-gallery{padding-left:18px;padding-right:18px}.n2-footer{grid-template-columns:1fr}.n2-footer>div:last-child{flex-direction:column}.person-card{grid-template-columns:42px 1fr auto}.person-initial{width:42px;height:42px}.photo-note{left:0}.page-hero{padding:65px 22px}.directory-section,.leadership-section,.story-section,.community-layout{padding-left:18px;padding-right:18px}}
</style>
