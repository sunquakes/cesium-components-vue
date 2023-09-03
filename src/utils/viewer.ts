export function newInstance(containerId: string, baseLayer: Cesium.ImageryProvider): Cesium.Viewer {
  const viewer = new Cesium.Viewer(containerId, {
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    vrButton: false,
    homeButton: false,
    infoBox: false,
    sceneModePicker: false,
    selectionIndicator: false,
    sceneMode: Cesium.SceneMode.SCENE3D,
    navigationHelpButton: false,
    shouldAnimate: true,
    baseLayer: new Cesium.ImageryLayer(baseLayer, {})
  })

  const animationContainer = viewer.animation.container as HTMLElement
  animationContainer.style.display = 'none'
  const timelineContainer = viewer.timeline.container as HTMLElement
  timelineContainer.style.display = 'none'
  const creditContainer = viewer.cesiumWidget.creditContainer as HTMLElement
  creditContainer.style.display = 'none'

  return viewer
}
