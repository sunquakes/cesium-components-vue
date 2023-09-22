const type = 'EllipseFadeMaterial'

export class EllipseFadeMaterialProperty {
  readonly definitionChanged = new Cesium.Event()

  readonly isConstant = false

  color: Cesium.Color

  time: number

  duration: number

  constructor(color: Cesium.Color, duration: number) {
    this.color = color
    this.time = new Date().getTime()
    this.duration = duration
  }

  getValue(time: Cesium.JulianDate, result?: any) {
    if (!Cesium.defined(result)) {
      result = {}
    }
    result.color = this.color
    result.time = ((new Date().getTime() - this.time) % this.duration) / this.duration
    return result
  }

  getType(time?: Cesium.JulianDate): string {
    return type
  }

  equals(other?: any): boolean {
    return this === other
  }
}

if (typeof Cesium !== 'undefined') {
  // @ts-ignore
  Cesium.Material._materialCache.addMaterial(type, {
    fabric: {
      type: type,
      uniforms: {
        color: Cesium.Color.SKYBLUE,
        time: 0
      },
      source: `czm_material czm_getMaterial(czm_materialInput materialInput)
      {
        czm_material material = czm_getDefaultMaterial(materialInput);
        material.diffuse = 1.5 * color.rgb;
        vec2 st = materialInput.st;
        float dis = distance(st, vec2(0.5, 0.5));
        float per = fract(time);
        if (dis > per * 0.5) {
          material.alpha = 0.0;
          discard;
        } else {
          material.alpha = color.a * dis / per / 1.0;
        }
        return material;
      }`
    },
    translucent: (material?: Cesium.Material) => true
  })
}
