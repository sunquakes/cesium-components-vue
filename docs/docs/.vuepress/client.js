import { defineClientConfig } from '@vuepress/client'
import CesiumComponentsVue from '../../../src/index'

export default defineClientConfig({
  enhance({ app }) {
    app.use(CesiumComponentsVue)
  }
})
