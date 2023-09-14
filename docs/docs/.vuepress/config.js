import { defineUserConfig, defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path, fs } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  title: 'Cesium Components Vue',
  description: 'A vue3.x component library of CesiumJS.',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['link', { rel: 'stylesheet', href: '/Cesium/Widgets/widgets.css' }]
  ],
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'sunquakes/cesium-components-vue',
    editLinks: true,
    locales: {
      '/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        selectLanguageAriaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        navbar: [{ text: 'Guide', link: '/guide/getting-started' }],
        sidebar: {
          '/guide/': [
            {
              children: ['/guide/getting-started.md', '/guide/viewer.md', '/guide/popup.md', '/guide/material.md']
            }
          ]
        }
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        navbar: [{ text: '指南', link: '/zh/guide/getting-started' }],
        sidebar: {
          '/zh/guide/': [
            {
              children: ['/zh/guide/getting-started.md', '/zh/guide/viewer.md', '/zh/guide/popup.md']
            }
          ]
        }
      }
    }
  }),
  locales: {
    '/': {
      lang: 'English',
      title: 'Cesium Components Vue',
      description: 'A vue3.x component library of CesiumJS.'
    },
    '/zh/': {
      lang: '简体中文',
      title: 'Cesium Components Vue',
      description: '一个CesiumJS的vue3.x组件库。'
    }
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ],
  templateDev: path.resolve(__dirname, './templates/dev.html'),
  templateBuild: path.resolve(__dirname, './templates/build.html')
})
