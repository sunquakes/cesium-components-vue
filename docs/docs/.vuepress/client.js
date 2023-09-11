import { defineClientConfig } from '@vuepress/client'
import CesiumComponentsVue from 'cesium-components-vue'

if (typeof window !== 'undefined') window.CESIUM_BASE_URL = '/Cesium'

export default defineClientConfig({
  enhance({ app }) {
    app.use(CesiumComponentsVue)
  }
})
