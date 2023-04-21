import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/inhouse-system-engineers-toolbox/',
  description: "社内SEとして働くあなたの損耗を可能な限り減らすためのヒントとツール集",
  lang: 'ja',
  title: "社内SEの道具箱",
  themeConfig: {
    docFooter: {
      prev: '前の記事',
      next: '次の記事'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
