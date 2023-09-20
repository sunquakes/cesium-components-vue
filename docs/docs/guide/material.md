---
lang: en-US
title: Material
---

::: tip type
Class
:::

## Polyline

### PolylineArrowsMaterial

<PolylineArrowsMaterial />

::: details Click me to view the codes

```vue
<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { PolylineArrowsMaterialProperty } from 'cesium-components-vue'

const viewer = ref(null)
const tk = 'map-world-tk' // Obtained from `Map World` website.
const containerId = 'polyline-arrows'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  if (viewer !== null) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    })

    // Add the polyline to the viewer.
    const coordinates = [
      [120.73110547619033, 31.274160096694293],
      [120.75110547619033, 31.274160096694293]
    ]
    const positions = coordinates.map((coordinate) =>
      Cesium.Cartesian3.fromDegrees(coordinate[0], coordinate[1])
    )
    const entity = new Cesium.Entity({
      polyline: {
        positions: positions,
        material: new PolylineArrowsMaterialProperty(viewer, positions, Cesium.Color.RED),
        width: 20,
        clampToGround: true
      }
    })
    viewer.entities.add(entity)
  }
})
</script>

<style>
.viewer {
  margin-top: 10px;
  width: 100%;
  height: 300px;
}
</style>
```

:::

#### Constructor Parameters

| Name      | Type                     | Default | Description                                                     |
| --------- | ------------------------ | ------- | --------------------------------------------------------------- |
| value     | Cesium.Viewer            |         | `required` `Cesium.Viewer` instance that polyline displayed in. |
| positions | Array<Cesium.Cartesian3> |         | `required` Polyline positions.                                  |
| color     | Cesium.Color             |         | `required` Defined the color of the polyline.                   |

## Ellipse

### EllipseFadeMaterial

<EllipseFadeMaterial />

::: details Click me to view the codes

```vue
<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { PolylineArrowsMaterialProperty } from 'cesium-components-vue'

const viewer = ref(null)
const tk = 'map-world-tk' // Obtained from `Map World` website.
const containerId = 'ellipse-fade'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  if (viewer !== null) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    })

    // Add the Ellipse to the viewer.
    const position = Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    const entity = new Cesium.Entity({
      position: position,
      ellipse: {
        semiMajorAxis: 1000,
        semiMinorAxis: 1000,
        material: new EllipseFadeMaterialProperty(Cesium.Color.RED, 3000)
      }
    })
    viewer.entities.add(entity)
  }
})
</script>

<style>
.viewer {
  margin-top: 10px;
  width: 100%;
  height: 300px;
}
</style>
```

:::

#### Constructor Parameters

| Name     | Type         | Default | Description                                         |
| -------- | ------------ | ------- | --------------------------------------------------- |
| color    | Cesium.Color |         | `required` Defined the color of the ellipse.       |
| duration | number       |         | `required` Animation duration, unit is millisecond. |
