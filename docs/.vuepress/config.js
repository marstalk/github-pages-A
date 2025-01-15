const { defaultTheme } = require('@vuepress/theme-default')
const { viteBundler } = require('@vuepress/bundler-vite')

module.exports = {
  bundler: viteBundler(),
  theme: defaultTheme({
    // theme configuration
  }),
  title: 'My VuePress Site',
  description: 'A simple VuePress site hosted on GitHub Pages',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ]
  }
} 