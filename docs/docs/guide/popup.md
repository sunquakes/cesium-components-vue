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
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { popup } from 'cesium-components-vue'
import Popup from './Popup.vue'

const viewer = ref(null)
const tk = 'map-world-tk'
const containerId = 'default'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  if (viewer !== null) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    })
    // Add the popup to the viewer.
    popup(viewer, 'default-popup', Popup, {}, [120.74210547619033, 31.275160096694293, 0], {})
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

## Update Popup Value

<PopupUpdateValue />

```ts
// Init the props
const value = reactive({
  msg: 'Hello World'
})
const props = {
  modelValue: value
}
popup(viewer, 'update-value-popup', Popup, props, [120.74210547619033, 31.275160096694293, 0], {})
// Update the props
value.msg = 'Hello China'
```

## Move Popup

<PopupMoveTo />

```ts
const p = popup(viewer, 'move-to-popup', Popup, {}, [120.74210547619033, 31.275160096694293, 0], {})
// Move to another coordinate.
setTimeout(() => {
  p.moveTo([120.75210547619033, 31.275160096694293, 0])
}, 5000)
```

## Get Popup Instance

```ts
popup(viewer, 'default-popup', Popup, props, [120.74210547619033, 31.275160096694293, 0], {})
```

### Params

| name        | type            | description                                                                                |
| ----------- | --------------- | ------------------------------------------------------------------------------------------ |
| viewer      | `Cesium.Viewer` | The Cesium Viewer object that the popup display in.                                        |
| containerId | `string`        | Popup dom id.                                                                              |
| component   | `Component`     | Popup component.                                                                           |
| props       | `object`        | Popup component props.                                                                     |
| coordinate  | `Coordinate`    | Location of popup window display, it is a three number Array(longitude, latitude, height). |
| options     | `Options`       | Popup options, contain `width`,`height`,`offsetX`,`offsetY` props.                         |

### Return

`Popup Instance`

## Popup Methods

| method                                          | return | description                                                  |
| ----------------------------------------------- | ------ | ------------------------------------------------------------ |
| moveTo(coordinate: Coordinate)                  | `void` | type `Coordinate` = `Array<number>`, Move to the coordinate. |
| moveToCartesian3(cartesian3: Cesium.Cartesian3) | `void` | Move to the cartesian3.                                      |
| close()                                         | `void` | Close the popup.                                             |
