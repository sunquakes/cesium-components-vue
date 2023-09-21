<template>
  <div class="viewer">
    <cc-amap-viewer v-model="viewer" :id="containerId"></cc-amap-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

typeof Cesium !== 'undefined' ?? defineProps({
  color: Cesium.Color
})

const viewer = ref(null)
const containerId = 'amap-default'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  if (viewer !== null) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.746468098959, 31.273148057726, 5000)
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