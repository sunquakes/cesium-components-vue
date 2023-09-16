English | [🇨🇳中文](README_ZH.md)

# Cesium Components Vue

<p align="center">
    <a href="https://cesium.sunquakes.com/" target="_blank" rel="noopener noreferrer">
        <img width="200" src="https://cesium.sunquakes.com/images/logo.png" alt="cesium-components-vue logo">
    </a>
</p>
<p align="center">
    <img src="https://img.shields.io/badge/node-%3E=20.5.1-brightgreen.svg?maxAge=2592000" alt="Node">
    <img alt="GitHub" src="https://img.shields.io/github/license/sunquakes/cesium-components-vue?color=blue">
    <img alt="cesium-components-vue" src="https://img.shields.io/github/v/release/sunquakes/cesium-components-vue">
</p>

## Documentation

Visit [cesium.sunquakes.com](https://cesium.sunquakes.com).

## Install

- Import Cesium js and css file in index.html.

```html
<script type="text/javascript" src="/path/to/Cesium.js"></script>
<link rel="stylesheet" href="/path/to/Widgets/widgets.css" />
```

- Install `cesium-components-vue`

```bash
pnpm install cesium-components-vue
```

## Getting Started

- Use it in `Vue 3`.

```ts
<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const viewer = ref(null)
const tk = 'map-world-tk' // Obtained from `Map World` website.
const containerId = 'default'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
  })
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

## Example

<div>
    <a target="_blank" href="https://cesium.sunquakes.com/guide/viewer.html#default-color">
        <img width="49%" src="images/map-world.png" />
    </a>
    <a target="_blank" href="https://cesium.sunquakes.com/guide/popup.html#example">
        <img width="49%" src="images/popup.png" />
    </a>
</div>
<div>
    <a target="_blank" href="https://cesium.sunquakes.com/guide/material.html#polyline">
        <img width="49%" src="images/polyline-arrors.png" />
    </a>
</div>

## License

[Apache-2.0 license](/LICENSE)
