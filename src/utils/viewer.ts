import { ImageryColorTheme } from '../themes/ImageryColorTheme'

export function newInstance(
  containerId: string,
  ImageryProvider: Cesium.ImageryProvider,
  color?: Cesium.Color
): Cesium.Viewer {
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
    baseLayer: new Cesium.ImageryLayer(ImageryProvider, {})
  })

  const animationContainer = viewer.animation.container as HTMLElement
  animationContainer.style.display = 'none'
  const timelineContainer = viewer.timeline.container as HTMLElement
  timelineContainer.style.display = 'none'
  const creditContainer = viewer.cesiumWidget.creditContainer as HTMLElement
  creditContainer.style.display = 'none'

  if (color != undefined) {
    const theme = new ImageryColorTheme({
      color: color,
      alpha: 0.5,
      invert: true,
      preMultiplyAlpha: true
    })

    const baseLayer = viewer.imageryLayers.get(0)
    // @ts-ignore
    const _createTextureWebGL = baseLayer._createTextureWebGL
    // @ts-ignore
    baseLayer._createTextureWebGL = function (context: any, imagery: any) {
      const texture = _createTextureWebGL.bind(this)(context, imagery)
      const textureProcessed = theme.processTexture(context, texture)
      return textureProcessed || texture
    }
  }

  return viewer
}
