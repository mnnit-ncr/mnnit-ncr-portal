import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MNNIT Alumni - NCR Chapter",
  description: "Delhi NCR chapter of MNNIT Alumni association",
  head: [
    ['link', { rel: 'icon', href: '/favicon_io/android-chrome-512x512.png' }] 
  ],
  themeConfig: {
    logo: '/MNNIT-logo-png.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Executive Body', link: '/executive-body' },
      { text: 'Alumni', link: '/alumni' },
      { text: 'Past Events', link: '/past-events' },
      { text: 'Upcoming Events', link: '/upcoming-events' },

      { text: 'Community', link: '/community' },
      { text: 'About', link: '/about' }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  cleanUrls: true
})
