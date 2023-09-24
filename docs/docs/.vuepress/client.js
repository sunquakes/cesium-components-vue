import { defineClientConfig } from '@vuepress/client'
import CesiumComponentsVue from 'cesium-components-vue'

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') window.CESIUM_BASE_URL = '/Cesium'
} else {
  if (typeof window !== 'undefined') window.CESIUM_BASE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/cesium/1.109.0'
}

export default defineClientConfig({
  enhance({ app }) {
    app.use(CesiumComponentsVue)
  }
})
