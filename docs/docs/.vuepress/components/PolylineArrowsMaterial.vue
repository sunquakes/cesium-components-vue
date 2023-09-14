<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { PolylineArrowsMaterialProperty } from 'cesium-components-vue'

const viewer = ref(null)
const tk = '9ff8d6599c4e570ec469d56f2cfd185c'
const containerId = 'default'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  if (viewer !== null) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    })

    // Add the polyline to the viewer.
    const coordinates = [
      [120.73110547619033, 31.274160096694293],
      [120.75110547619033, 31.274160096694293],
    ]
    const positions = coordinates.map(coordinate => Cesium.Cartesian3.fromDegrees(coordinate[0], coordinate[1]))
    const entity = new Cesium.Entity({
      polyline: {
        positions: positions,
        material: new PolylineArrowsMaterialProperty(
          viewer,
          positions,
          Cesium.Color.SKYBLUE
        ),
        width: 10,
        clampToGround: true,
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