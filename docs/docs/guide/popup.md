---
lang: en-US
title: Popup
---

## Example

<PopupDefault />

### Parent component

::: details Click me to view the codes

```vue
<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId" :color="color"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { popup } from 'cesium-components-vue'
import PopupComponent from './PopupComponent.vue'

defineProps({
  color: Cesium.Color
})

const viewer = ref(null)
const tk = '9ff8d6599c4e570ec469d56f2cfd185c'
const containerId = 'map'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  if (viewer !== null) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    })
    // Add the popup to the viewer.
    popup(viewer, 'cc-popup', PopupComponent, [120.74210547619033, 31.275160096694293, 0], {})
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

### Child component

::: details Click me to view the codes

```vue
<template>
  <div class="cc-popup">Hello World</div>
</template>

<style>
.cc-popup {
  font-weight: bold;
  padding: 10px 10px;
  color: white;
  background-color: aqua;
}
</style>
```

:::

## Update Popup Content

## Methods

<!-- prettier-ignore -->
| method | return | Description |
| ------ | ------ | ----------- |
| moveTo(coordinate: Coordinate) | `void` | type `Coordinate` = `Array<number>`, Move to the coordinate. |
| moveToCartesian3(cartesian3: Cesium.Cartesian3) | `void` | Move to the cartesian3.  |
| getComponentInstance() | `ComponentPublicInstance` | Get the popup component instance. |
| close() | `void` | Close the popup. |
