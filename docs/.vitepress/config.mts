import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MNNIT Alumni - NCR Chapter",
  description: "Delhi NCR chapter of MNNIT Alumni association",
  rewrites: {
    'about.md': 'new/about.md',
    'community.md': 'new/community.md',
    'executive-body.md': 'new/executive-body.md',
    'alumni/index.md': 'new/alumni/index.md',
    'alumni/by-lm/index.md': 'new/alumni/by-lm/index.md',
    'alumni/by-name/index.md': 'new/alumni/by-name/index.md',
    'alumni/by-batch/index.md': 'new/alumni/by-batch/index.md',
    'alumni/by-batch/:year.md': 'new/alumni/by-batch/:year.md',
    'past-events/index.md': 'new/past-events/index.md',
    'upcoming-events/index.md': 'new/upcoming-events/index.md',
    'legacy/alumni/by-lm/index.md': 'alumni/by-lm/index.md',
    'legacy/alumni/by-name/index.md': 'alumni/by-name/index.md',
    'legacy/alumni/by-batch/index.md': 'alumni/by-batch/index.md',
    'legacy/executive-body.md': 'executive-body.md'
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon_io/android-chrome-512x512.png' }] 
  ],
  themeConfig: {
    logo: '/MNNIT-logo-png.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Classic Home', link: '/' },
      { text: 'Home', link: '/new/' },
      { text: 'Executive Body', link: '/new/executive-body' },
      { text: 'Alumni', link: '/new/alumni' },
      { text: 'Past Events', link: '/new/past-events' },
      { text: 'Upcoming Events', link: '/new/upcoming-events' },

      { text: 'Community', link: '/new/community' },
      { text: 'About', link: '/new/about' }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  cleanUrls: true
})
