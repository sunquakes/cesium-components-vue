<template>
  <div class="viewer">
    <cc-tian-viewer :tk="'9ff8d6599c4e570ec469d56f2cfd185c'"></cc-tian-viewer>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Object, default: undefined }
  },
}
</script>

<style>
.viewer {
  width: 100%;
  height: 300px;
}
</style>