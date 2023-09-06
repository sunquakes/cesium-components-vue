<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId" :color="color"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

defineProps({
  color: Cesium.Color
})

const viewer = ref(null)
const tk = '9ff8d6599c4e570ec469d56f2cfd185c'
const containerId = 'tian-viewer'

watch(viewer, async (newValue) => {
  const viewer =  newValue as Cesium.Viewer
  if (viewer !== null) {
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