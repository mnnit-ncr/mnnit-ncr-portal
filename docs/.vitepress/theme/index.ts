// https://vitepress.dev/guide/custom-theme
import { defineComponent, h, onBeforeUnmount, onMounted } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'

const OpenLinksInNewTabLayout = defineComponent({
  name: 'OpenLinksInNewTabLayout',
  setup() {
    let observer: MutationObserver | undefined

    const updateLinks = () => {
      document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
        const href = link.getAttribute('href')?.trim()

        if (!href || href.startsWith('#')) {
          return
        }

        link.setAttribute('target', '_blank')
        link.setAttribute('rel', 'noopener noreferrer')
      })
    }

    onMounted(() => {
      updateLinks()

      observer = new MutationObserver(() => {
        updateLinks()
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['href']
      })
    })

    onBeforeUnmount(() => {
      observer?.disconnect()
    })

    return () => h(DefaultTheme.Layout)
  }
})

export default {
  extends: DefaultTheme,
  Layout: OpenLinksInNewTabLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
