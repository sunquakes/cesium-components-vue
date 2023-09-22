---
lang: zh-CN
title: 视图
---

::: tip 类型
Component
:::

## 天地图

### 默认颜色

<TianViewer />

::: details 点击查看代码

```vue
<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

defineProps({
  color: Cesium.Color
})

const viewer = ref(null)
const tk = 'map-world-tk' // 从天地图官网获取
const containerId = 'map'

watch(viewer, async (newValue) => {
  if (newValue !== null) {
    newValue.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    })
  }
})
</script>

<style>
.viewer {
  width: 100%;
  height: 300px;
}
</style>
```

:::

### 自定义颜色

<TianViewerCustomColor />

::: details 点击查看代码

```vue
<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId" :color="color"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const color = Cesium.Color.GREY
const viewer = ref(null)
const tk = 'map-world-tk' // Obtained from `Map World` website.
const containerId = 'map'

watch(viewer, async (newValue) => {
  if (newValue !== null) {
    newValue.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    })
  }
})
</script>

<style>
.viewer {
  width: 100%;
  height: 300px;
}
</style>
```

:::

### 属性

| Name  | Type          | Default | Description                                                                                                         |
| ----- | ------------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| value | Cesium.Viewer |         | `可选` 在组件初始化后会赋值 `Cesium.Viewer` 实例                                                                    |
| tk    | String        |         | `必选` 成为天地图开发者后从 [https://console.tianditu.gov.cn/api/key](https://console.tianditu.gov.cn/api/key) 获取 |
| color | Cesium.Color  |         | `可选` 定义地图颜色                                                                                                 |
