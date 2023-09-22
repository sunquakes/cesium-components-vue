import { defineClientConfig } from '@vuepress/client'
import CesiumComponentsVue from '../../../src/index'

if (typeof window !== 'undefined') window.CESIUM_BASE_URL = '/Cesium'

export default defineClientConfig({
  enhance({ app }) {
    app.use(CesiumComponentsVue)
  }
})
