<template>
  <div class="cc-popup">
    {{ modelValue.msg }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: Object,
    default: () => {
      return {
        msg: 'Hello World'
      }
    }
  }
})
</script>

<style>
.cc-popup {
  font-weight: bold;
  padding: 10px 10px;
  color: white;
  background-color: aqua;
}
</style>