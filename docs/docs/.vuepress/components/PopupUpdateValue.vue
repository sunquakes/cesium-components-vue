<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { popup } from 'cesium-components-vue'
import Popup from './Popup.vue'

defineProps({
  modelValue: String
})

const viewer = ref(null)
const tk = '9ff8d6599c4e570ec469d56f2cfd185c'
const containerId = 'update-value'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  if (viewer !== null) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    })
    // Add the popup to the viewer.
    const value = reactive({
      msg: 'Hello World'
    })
    const props = {
      modelValue: value
    }
    popup(viewer, 'update-value-popup', Popup, props, [120.74210547619033, 31.275160096694293, 0], {})
    value.msg = 'Hello China'
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