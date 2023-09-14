import CcTianViewer from './components/CcTianViewer'

// components
export default {
  install: (app) => {
    app.component('cc-tian-viewer', CcTianViewer)
  }
}

// utils
export * from './utils/popup'

// properties
export * from './properties/PolylineArrowsMaterialProperty'

