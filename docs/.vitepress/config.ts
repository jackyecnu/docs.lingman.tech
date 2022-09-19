import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '灵曼科技 🌐',
  lang: 'zh-CN',
  lastUpdated: true,
  head: [
    ['meta', { name: 'viewport', content: '"width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no' }],
    ["script", { src: "https://198401.oss-cn-shanghai.aliyuncs.com/static/jquery/jquery-vitepress.js" }],

  ],
  themeConfig: {

    nav: [
      { text: "当下学习", link: "javascript:currentStudy()" },
      { text: "刷新🔃", link: "javascript:location.reload()" }
    ],
    editLink: {
      pattern: 'https://github.com/jackyecnu/docs.lingman.tech/edit/main/docs/:path',
      text: '在GitHub中编辑'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.dev/jackyecnu/docs.lingman.tech' },
    ],

    algolia: {
      appId: 'YBTDBGHO4R',
      apiKey: '27f98b9818ccfdd420d7301ec38794fe',
      indexName: 'lingman',
      // debug: false,
    },
    lastUpdatedText: '上次更新于',
  },
})
