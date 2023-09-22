---
lang: en-US
title: Viewer
---

::: tip type
Component
:::

## Map World

### Default Color

<TianViewer />

::: details Click me to view the codes

```vue
<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const viewer = ref(null)
const tk = 'map-world-tk' // Obtained from `Map World` website.
const containerId = 'map-world-default'

watch(viewer, async (newValue) => {
  if (newValue !== null) {
    newValue.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    })
  }
})
</script>

<style>
.viewer {
  width: 100%;
  height: 300px;
}
</style>
```

:::

### Custom Color

<TianViewerCustomColor />

::: details Click me to view the codes

```vue
<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId" :color="color"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const color = Cesium.Color.GREY
const viewer = ref(null)
const tk = 'map-world-tk' // Obtained from `Map World` website.
const containerId = 'map-world-custom'

watch(viewer, async (newValue) => {
  if (newValue !== null) {
    newValue.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    })
  }
})
</script>

<style>
.viewer {
  width: 100%;
  height: 300px;
}
</style>
```

:::

### Props

| Name  | Type          | Default | Description                                                                                                                                           |
| ----- | ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| value | Cesium.Viewer |         | `optional` The value will be the `Cesium.Viewer` instance from `undefined` after the components mounted                                               |
| tk    | String        |         | `required` Obtained from [https://console.tianditu.gov.cn/api/key](https://console.tianditu.gov.cn/api/key) after becoming the developer of Map World |
| color | Cesium.Color  |         | `optional` Defined the color of the base layer                                                                                                        |

## Amap

### Default Color

<AmapViewer />

::: details Click me to view the codes

```vue
<template>
  <div class="viewer">
    <cc-amap-viewer v-model="viewer" :id="containerId"></cc-amap-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

typeof Cesium !== 'undefined' ??
  defineProps({
    color: Cesium.Color
  })

const viewer = ref(null)
const containerId = 'amap-default'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  if (viewer !== null) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.746468098959, 31.273148057726, 5000)
    })
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

### Custom Color

<AmapViewerCustomColor />

::: details Click me to view the codes

```vue
<template>
  <div class="viewer">
    <cc-amap-viewer v-model="viewer" :id="containerId" :color="color"></cc-amap-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

typeof Cesium !== 'undefined' ??
  defineProps({
    color: Cesium.Color
  })

const color = Cesium.Color.GREY
const viewer = ref(null)
const containerId = 'amap-custom-color'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  if (viewer !== null) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.746468098959, 31.273148057726, 5000)
    })
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

### Props

| Name  | Type          | Default | Description                                                                                             |
| ----- | ------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| value | Cesium.Viewer |         | `optional` The value will be the `Cesium.Viewer` instance from `undefined` after the components mounted |
| color | Cesium.Color  |         | `optional` Defined the color of the base layer                                                          |
| lang  | String        |         | `optional` Label language, [`zh_cn`, `en`], default `zh_cn`.                                            |
