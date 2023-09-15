<template>
  <div class="popup">
    <div class="popup-content">
      {{ modelValue.msg }}
    </div>
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
.popup {
  border: 1px solid #b3b3b3;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  padding: 10px 10px;
  border-radius: 20px;
}

.popup-content {
  color: yellow;
  padding: 30px 20px;
  background-color: red;
  border-radius: 20px;
}
</style>