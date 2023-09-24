import { defineClientConfig } from '@vuepress/client'
import CesiumComponentsVue from 'cesium-components-vue'

export default defineClientConfig({
  enhance({ app }) {
    app.use(CesiumComponentsVue)
  }
})
