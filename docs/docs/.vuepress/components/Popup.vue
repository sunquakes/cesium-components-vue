<template>
  <div class="cc-popup">
    {{ content }}
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return { content: 'Hello World' }
  }
}
</script>

<style>
.cc-popup {
  font-weight: bold;
  padding: 10px 10px;
  color: white;
  background-color: aqua;
}
</style>