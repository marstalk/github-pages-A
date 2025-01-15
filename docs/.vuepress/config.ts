import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'en-US',
  title: 'Personal Website',
  description: 'My personal website built with VuePress 2',
  
  base: '/github-pages-A/',
  
  theme: defaultTheme({
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Posts',
        link: '/posts/',
      },
    ],
    sidebar: 'auto',
  }),

  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
  ],
}) 