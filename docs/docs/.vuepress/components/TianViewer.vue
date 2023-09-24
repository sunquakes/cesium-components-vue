<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

typeof Cesium !== 'undefined' ?? defineProps({
  color: Cesium.Color
})

const viewer = ref(null)
// const tk = '9ff8d6599c4e570ec469d56f2cfd185c'
const tk = '499d95c1e003e3c7d7ff038f7d5f5666'
const containerId = 'tian-viewer'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  if (viewer !== null) {
    const tileset = await Cesium.Cesium3DTileset.fromUrl(
      "/3dtiles/tileset.json"
    );
    viewer.scene.primitives.add(tileset);

    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    });
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