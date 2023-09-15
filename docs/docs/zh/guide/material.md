---
lang: zh-CN
title: 材料
---

::: tip 类型
Class
:::

## 折线

### PolylineArrowsMaterial

<PolylineArrowsMaterial />

::: details 点击查看代码

```vue
<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { PolylineArrowsMaterialProperty } from 'cesium-components-vue'

const viewer = ref(null)
const tk = 'map-world-tk' // 从天地图官网获取
const containerId = 'default'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  if (viewer !== null) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    })

    // 添加折线到视图
    const coordinates = [
      [120.73110547619033, 31.274160096694293],
      [120.75110547619033, 31.274160096694293]
    ]
    const positions = coordinates.map((coordinate) =>
      Cesium.Cartesian3.fromDegrees(coordinate[0], coordinate[1])
    )
    const entity = new Cesium.Entity({
      polyline: {
        positions: positions,
        material: new PolylineArrowsMaterialProperty(viewer, positions, Cesium.Color.RED),
        width: 20,
        clampToGround: true
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
```

:::

#### 构造函数参数

| Name      | Type                     | Default | Description                      |
| --------- | ------------------------ | ------- | -------------------------------- |
| value     | Cesium.Viewer            |         | `required` 展示折线的视图实例    |
| positions | Array<Cesium.Cartesian3> |         | `required` 折线的positions属性值 |
| color     | Cesium.Color             |         | `required` 折线的颜色            |
