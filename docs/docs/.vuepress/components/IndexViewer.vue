<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const viewer = ref(null)
const tk = '9ff8d6599c4e570ec469d56f2cfd185c'
const containerId = 'index'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  if (viewer !== null) {
    const tileset = await Cesium.Cesium3DTileset.fromUrl(
      "/3dtiles/tileset.json"
    );
    tileset.style = new Cesium.Cesium3DTileStyle({
      color: "color('rgba(255, 255, 255, 0.9)')",
    });
    viewer.scene.primitives.add(tileset);
    viewer.camera.lookAt(Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 0), new Cesium.HeadingPitchRange(Cesium.Math.toRadians(0.0), Cesium.Math.toRadians(-35.0), 1200))
  }
})
</script>

<style scoped>
.viewer {
  margin-top: 10px;
  width: 100%;
  height: 100%;
}
</style>