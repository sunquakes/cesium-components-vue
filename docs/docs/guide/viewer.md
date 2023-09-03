---
lang: en-US
title: Viewer
---

## Map World

### Default Color

<TianViewer></TianViewer>

::: details Click me to view the codes

```vue
<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

defineProps({
  color: Cesium.Color
})

const viewer = ref(null)
const tk = 'map-world-tk' // Obtained from `Map World` website.
const containerId = 'map'

watch(viewer, async (newValue) => {
  if (newValue !== null) {
    newValue.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    });
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

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| value | Cesium.Viewer |  | `optional` The value will be the `Cesium.Viewer` instance from `undefined` after the components mounted |
| tk | String |  | `required` Obtained from [https://console.tianditu.gov.cn/api/key](https://console.tianditu.gov.cn/api/key) after becoming the developer of Map World |
| color | Cesium.Color |  | `optional` Defined the color of the base layer |
