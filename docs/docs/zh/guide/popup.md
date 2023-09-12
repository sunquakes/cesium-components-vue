---
lang: zh-CN
title: 弹框
---

::: tip 类型
Function
:::

## 样例

<PopupDefault />

### 父组件

::: details 点击查看代码

```vue
<template>
  <div class="viewer">
    <cc-tian-viewer v-model="viewer" :tk="tk" :id="containerId"></cc-tian-viewer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { popup } from 'cesium-components-vue'
import Popup from './Popup.vue'

const viewer = ref(null)
const tk = 'map-world-tk'
const containerId = 'default'

watch(viewer, async (newValue) => {
  const viewer = newValue as Cesium.Viewer
  if (viewer !== null) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(120.74210547619033, 31.275160096694293, 5000)
    })
    // 添加弹框到视图
    popup(viewer, 'default-popup', Popup, {}, [120.74210547619033, 31.275160096694293, 0], {})
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

### 子组件

::: details 点击查看代码

```vue
<template>
  <div class="cc-popup">Hello World</div>
</template>

<style>
.cc-popup {
  font-weight: bold;
  padding: 10px 10px;
  color: white;
  background-color: aqua;
}
</style>
```

:::

## 更新弹框值

<PopupUpdateValue />

```ts
// 初始化属性
const value = reactive({
  msg: 'Hello World'
})
const props = {
  modelValue: value
}
popup(viewer, 'update-value-popup', Popup, props, [120.74210547619033, 31.275160096694293, 0], {})
// 更新属性
value.msg = 'Hello China'
```

## 移动弹框

<PopupMoveTo />

```ts
const p = popup(viewer, 'move-to-popup', Popup, {}, [120.74210547619033, 31.275160096694293, 0], {})
// 将弹框移动到另一个坐标
setTimeout(() => {
  p.moveTo([120.75210547619033, 31.275160096694293, 0])
}, 5000)
```

## 获取弹框实例

```ts
popup(viewer, 'default-popup', Popup, props, [120.74210547619033, 31.275160096694293, 0], {})
```

### 参数

| name        | type            | description                                                |
| ----------- | --------------- | ---------------------------------------------------------- |
| viewer      | `Cesium.Viewer` | 展示弹框的视图                                             |
| containerId | `string`        | 弹框dom的id                                                |
| component   | `Component`     | 弹框组件                                                   |
| props       | `object`        | 弹框组件的属性                                             |
| coordinate  | `Coordinate`    | 弹框展示的坐标, 是一个包含经度、纬度和高度的数组           |
| options     | `Options`       | 弹框选项，包含 `width`,`height`,`offsetX`,`offsetY` 等属性 |

### 返回值

`Popup 实例`

## 弹框对象的方法

| method                         | return | description                                         |
| ------------------------------ | ------ | --------------------------------------------------- |
| moveTo(coordinate: Coordinate) | `void` | 类型 `Coordinate` = `Array<number>`，移动到某个坐标 |
| close()                        | `void` | 关闭弹框                                            |
