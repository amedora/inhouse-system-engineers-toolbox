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
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'C#',
        items: [
          { text: '社内SEにとってのC#とは', link: '/csharp/about' },
          { text: 'Dapper', link: '/csharp/dapper' },
          { text: 'UI Automation', link: '/csharp/winauto' }
        ]
      },
      {
        text: '設計',
        items: [
          { text: 'RDRA', link: '/design/rdra' },
        ]
      }
    ],
    socialLinks: [
    ]
  }
})
