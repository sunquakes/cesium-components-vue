const type = 'PolylineArrowsMaterial'

const image = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADICAYAAADGFbfiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA1LTEyVDA5OjU4OjM5KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wOC0xMlQxMDo0NzowMSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wOC0xMlQxMDo0NzowMSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1YmFkODBjYS0xY2ZkLWQ5NGUtODJjMS0wODEwODMzNjI1MWEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5ZjY4ZWQxZS01MTU5LTc0NGItYTYyYi1iYjVmYzQ5MmYwZDciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZDEyZmZlZi1mYmEwLTY1NDgtOTlmMy0yNjlkY2I1ZGRkYmIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjNkMTJmZmVmLWZiYTAtNjU0OC05OWYzLTI2OWRjYjVkZGRiYiIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0xMlQwOTo1ODozOSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjNlYzQ0Ny1jZWQ1LTVlNDctYjFiZC01MzU1M2UyMGUxNTkiIHN0RXZ0OndoZW49IjIwMjMtMDgtMTFUMDk6NDc6MDcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWJhZDgwY2EtMWNmZC1kOTRlLTgyYzEtMDgxMDgzMzYyNTFhIiBzdEV2dDp3aGVuPSIyMDIzLTA4LTEyVDEwOjQ3OjAxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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`

export default class PolylineArrowsMaterialProperty implements Cesium.MaterialProperty {
  readonly definitionChanged = new Cesium.Event()

  readonly isConstant = false

  /**
   * Cesium Viewer object.
   */
  viewer: Cesium.Viewer

  /**
   * Polyline length.
   */
  cartesian3s: Array<Cesium.Cartesian3>

  /**
   * Polyline color.
   */
  color: Cesium.ColorMaterialProperty

  /**
   * Polyline length.
   */
  length: Number

  constructor(
    viewer: Cesium.Viewer,
    cartesian3s: Array<Cesium.Cartesian3>,
    color: Cesium.ColorMaterialProperty
  ) {
    this.color = color
    this.cartesian3s = cartesian3s
    this.length = getLength(cartesian3s)
    this.viewer = viewer
  }

  getValue(time: Cesium.JulianDate, result: any) {
    if (!Cesium.defined(result)) {
      result = {}
    }
    result.color = result.image = image
    result.length = this.length
    result.scale = 0.05 / getPixelDistance(this.viewer)
    return result
  }

  getType(time?: Cesium.JulianDate): string {
    return type
  }

  equals(other?: Cesium.Property): boolean {
    return this === other
  }
}

// @ts-ignore
Cesium.Material._materialCache.addMaterial(type, {
  fabric: {
    type: type,
    uniforms: {
      color: new Cesium.Color(255.0, 255.0, 255.0, 1),
      image: image,
      length: 0,
      scale: 0
    },
    source: `czm_material czm_getMaterial(czm_materialInput materialInput)
      {
        czm_material material = czm_getDefaultMaterial(materialInput);
        vec2 st = materialInput.st;
        vec4 colorImage = texture(image, vec2(fract(st.s * length * scale / 2.0), fract(st.t)));
        if (colorImage.a > 0.0) {
          material.alpha = colorImage.a;
          material.diffuse = colorImage.rgb;
        } else {
          material.alpha = color.a;
          material.diffuse = color.rgb;
        }
        return material;
      }`,
    components: {
      alpha: 'color.a',
      diffuse: 'color.rgb'
    }
  },
  translucent: function (material?: Cesium.Material) {
    return true
  }
})

/**
 * Get the polyline length.
 * @param cartesian3s
 * @returns
 */
function getLength(cartesian3s: Array<Cesium.Cartesian3>): Number {
  let distance = 0
  for (let i = 0; i < cartesian3s.length - 1; i++) {
    const startPoint = Cesium.Cartographic.fromCartesian(cartesian3s[i]),
      endPoint = Cesium.Cartographic.fromCartesian(cartesian3s[i + 1])
    const geodesic = new Cesium.EllipsoidGeodesic()
    geodesic.setEndPoints(startPoint, endPoint)
    let s = geodesic.surfaceDistance
    s = Math.sqrt(Math.pow(s, 2) + Math.pow(endPoint.height - startPoint.height, 2))
    distance = distance + s
  }
  return distance
}

/**
 * Get the viewer pixel distance.
 * @param viewer
 * @returns
 */
function getPixelDistance(viewer: Cesium.Viewer): number {
  const scene = viewer.scene
  const width = viewer.canvas.clientWidth
  const height = viewer.canvas.clientHeight

  const left = scene.camera.getPickRay(new Cesium.Cartesian2((width / 2) | 0, height - 1))
  const right = scene.camera.getPickRay(new Cesium.Cartesian2((1 + width / 2) | 0, height - 1))
  if (!left || !right) {
    return 1
  }

  const globe = scene.globe
  const leftPosition = globe.pick(left, scene)
  const rightPosition = globe.pick(right, scene)
  if (!leftPosition || !rightPosition) {
    return 1
  }

  const geodesic = new Cesium.EllipsoidGeodesic()
  const leftCartographic = globe.ellipsoid.cartesianToCartographic(leftPosition)
  const rightCartographic = globe.ellipsoid.cartesianToCartographic(rightPosition)

  geodesic.setEndPoints(leftCartographic, rightCartographic)
  const pixelDistance = geodesic.surfaceDistance
  return pixelDistance
}
