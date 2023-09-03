import CcTianViewer from './components/CcTianViewer'

export default {
  install: (app) => {
    app.component('cc-tian-viewer', CcTianViewer)
  }
}

export * from './utils/popup'
