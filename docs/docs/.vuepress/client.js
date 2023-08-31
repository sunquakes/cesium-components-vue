import { defineClientConfig } from '@vuepress/client'
await import('./public/Cesium/Cesium')
import CesiumComponentsVue from '../../../src/index'

window.CESIUM_BASE_URL = '/Cesium'

export default defineClientConfig({
  enhance({ app }) {
    app.use(CesiumComponentsVue)
  }
})
