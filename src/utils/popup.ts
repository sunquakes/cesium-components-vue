import { createApp, type Component, type ComponentPublicInstance } from 'vue'

type Options = {
  /**
   * Popup width.
   */
  width?: number
  /**
   * Popup height.
   */
  height?: number
  /**
   * Offset the direction top or bottom from the center of the popup.
   */
  offsetX?: number
  /**
   * Offset the direction left or right from the center of the popup.
   */
  offsetY?: number
}

type Coordinate = Array<number>

interface PopupInterface {
  moveTo(coordinate: Coordinate): void
  close(): void
}

class Popup implements PopupInterface {
  /**
   * The Cesium Viewer object that the popup display in.
   */
  viewer: Cesium.Viewer

  /**
   * Popup dom id.
   */
  containerId: string

  /**
   * Popup component instance.
   */
  component: ComponentPublicInstance

  /**
   * Popup component props
   */
  props: object | {}

  /**
   * Popup style.
   */
  options: Options

  /**
   * Location of popup window display
   */
  coordinate: Coordinate

  constructor(
    viewer: Cesium.Viewer,
    containerId: string,
    component: Component,
    props: object,
    coordinate: Coordinate,
    options: Options
  ) {
    this.props = props
    this.viewer = viewer
    this.containerId = containerId || 'cc-popup'
    const defaultOptions: Options = {
      width: 0,
      height: 0,
      offsetX: 0,
      offsetY: 0
    }
    this.component = this.getComponent(containerId, component)
    this.coordinate = coordinate
    this.options = {
      ...defaultOptions,
      ...options
    }
    viewer.scene.postRender.addEventListener(this.doPrePost, this)
  }

  /**
   * Get the popup component instance.
   * @param containerId
   * @param component
   * @returns
   */
  private getComponent(containerId: string, component: Component): ComponentPublicInstance {
    if (this.component) {
      return this.component
    }
    let containerElement = document.getElementById(containerId)
    if (containerElement == undefined) {
      containerElement = document.createElement('div')
      containerElement.setAttribute('id', containerId)
      const viewerElement = this.viewer.container as HTMLElement
      viewerElement.appendChild(containerElement)
    }
    const app = createApp(component, this.props || {})
    return app.mount(`#${containerId}`)
  }

  /**
   * Get popup dom.
   * @returns
   */
  private getElement(): HTMLElement | null {
    const element = document.getElementById(this.containerId)
    return element
  }

  /**
   * Listen the postRender event and move the popup to the coordinate.
   * @returns
   */
  private doPrePost(): boolean {
    const popup = this

    if (!popup.getElement()) {
      popup.close()
      popup.viewer.scene.postRender.removeEventListener(this.doPrePost, this)
      return false
    }
    const coordinate = this.coordinate
    const cartesian3 = Cesium.Cartesian3.fromDegrees(coordinate[0], coordinate[1], coordinate[2])
    this.moveToCartesian3(cartesian3)
    return false
  }

  /**
   * Move the popup to the coordinate.
   */
  moveTo(coordinate: Coordinate): void {
    this.coordinate = coordinate
    const cartesian3 = Cesium.Cartesian3.fromDegrees(coordinate[0], coordinate[1], coordinate[2])
    this.moveToCartesian3(cartesian3)
  }

  /**
   * Move the popup to the cartesian3.
   * @param cartesian3
   */
  private moveToCartesian3(cartesian3: Cesium.Cartesian3): void {
    const coordinate = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
      this.viewer.scene,
      cartesian3
    )
    try {
      this.setLocation(coordinate.x, coordinate.y)
    } catch (e) {
      console.error(e)
    }
  }

  /**
   * Set the popup dom style.
   * @param left
   * @param top
   */
  private setLocation(left: number, top: number) {
    const element = this.getElement()
    if (element) {
      const width = this.options.width || 0,
        height = this.options.height || 0,
        offsetX = this.options.offsetX || 0,
        offsetY = this.options.offsetY || 0,
        clientWidth = element.clientWidth,
        clientHeight = element.clientHeight,
        dw = clientWidth - width,
        dh = clientHeight - height
      if (Math.abs(dh) > 1 || Math.abs(dw) > 1) {
        this.options.width = clientWidth
        this.options.height = clientHeight
      }

      const viewerElement = this.viewer.container as HTMLElement
      const viewerOffsetX = viewerElement.offsetLeft,
        viewerOffsetY = viewerElement.offsetTop

      element.style.position = 'absolute'
      element.style.zIndex = '1'
      element.style.left = viewerOffsetX + left - width * 0.5 + offsetX + 'px'
      element.style.top = viewerOffsetY + top - height * 0.5 + offsetY + 'px'
    }
  }

  /**
   * Close popup.
   */
  close() {
    const element = this.getElement()
    if (element) {
      element.style.display = 'none'
    }
  }
}

export function popup(
  viewer: Cesium.Viewer,
  containerId: string,
  component: Component,
  props: Object,
  coordinate: Coordinate,
  options: Options
) {
  return new Popup(viewer, containerId, component, props, coordinate, options)
}
