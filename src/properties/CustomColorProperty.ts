export class CustomColorProperty implements Cesium.Property {
  readonly definitionChanged: Cesium.Event = new Cesium.Event()

  readonly isConstant: boolean = false

  // Define any necessary properties or attributes here
  private readonly color: Cesium.Color

  constructor(color: Cesium.Color) {
    this.color = color
  }

  // Implement the `getValue` method to return the Cesium.Color
  getValue(time: Cesium.JulianDate, result?: Cesium.Color): Cesium.Color {
    return this.color
  }

  getType(): string {
    return 'CustomColorProperty'
  }

  equals(other?: any): boolean {
    return this === other
  }
}
