import CcTianViewer from './components/CcTianViewer'
import CcAmapViewer from './components/CcAmapViewer'

// components
export default {
  install: (app) => {
    app.component('cc-tian-viewer', CcTianViewer)
    app.component('cc-amap-viewer', CcAmapViewer)
  }
}

// utils
export * from './utils/popup'

// properties
export * from './properties/PolylineArrowsMaterialProperty'
export * from './properties/EllipseFadeMaterialProperty'

