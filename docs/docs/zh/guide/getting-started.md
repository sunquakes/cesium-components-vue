---
lang: zh-CN
title: 开始
---

## 介绍

通过 `cesium-components-vue` 融合 `Vue 3` 的先进功能与 `CesiumJS` 的沉浸式地理可视化特性。`cesium-components-vue` 能够轻松地将动态地理空间元素无缝集成到 `Vue 3` 项目中，呈现出引人入胜的交互式体验。

## 安装Cesium

### 下载包

- 从github下载Cesium [https://github.com/CesiumGS/cesium/releases](https://github.com/CesiumGS/cesium/releases)。

- 解压后将Cesium目录拷贝到/public目录。

- 将Cesium的js和css文件引入到index.html。

```html
<script type="text/javascript" src="/Cesium/Cesium.js"></script>
<link rel="stylesheet" href="/Cesium/Widgets/widgets.css" />
```

### 用CDN资源

- 将Cesium的js和css文件引入到index.html。

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/cesium/1.108.0/Cesium.js" integrity="sha512-x4px4C+PHoAP0tAGI1XA1164gN+pT88gY5wpP4j4Nokmg75f5RJ9HOyzLNx6usrbtmzZFaGbPxdYgeEnptqbqA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cesium/1.108.0/Widgets/widgets.min.css" integrity="sha512-B5b+YSvAqAIXLgYMg42Tc9KmdoYyGQt2G13igHZaDPitOzeO6hUsMkz8uhNg24eRbPcTivMcQ55/FhyxzcCFVQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```

## 开始使用

- 通过 `pnpm` 、`yarn` 或 `npm` 安装 `cesium-components-vue`

:::: code-group
::: code-group-item PNPM

```bash:no-line-numbers
pnpm install cesium-components-vue
```

:::
::: code-group-item YARN

```bash:no-line-numbers
yarn add cesium-components-vue
```

:::
::: code-group-item NPM

```bash:no-line-numbers
npm install cesium-components-vue
```

:::
::::

- 从 `cesium-components-vue` 导入所需组件，开始构建下一代地理空间应用。

```js:no-line-numbers
import CesiumComponentsVue from 'cesium-components-vue'
Vue.use(CesiumComponentsVue)
```

- 通过深入的文档和实际示例，探索如何在 `Vue 3` 项目中充分发挥 `cesium-components-vue` 的潜力。

## 特点

- 统一的 `Vue 3` 集成

`cesium-components-vue` 紧密连接 `Vue 3` 与 `CesiumJS` 的功能，使您能够将交互式地理空间组件融入到 Vue 应用中。

- 响应式地理空间组件

借助 `Vue 3` 强大的响应性系统，开发高度响应式的地理空间应用，适应用户交互和动态数据变化。

- 多功能组件套件

从地图、标记、多边形、影像图层等多样组件中选择，每个组件都经过精心设计，提升您的地理空间项目。

- 定制和灵活性

利用 `Vue 3` 的组合能力和模板语法，轻松定制地理空间组件的外观和行为，以满足您应用的独特需求。

- 性能协同

在享受 `CesiumJS` 优化的性能的同时，保持 `Vue 3` 高效的渲染和响应性，呈现出流畅而引人入胜的地理可视化体验。

- 全面的文档支持

详尽的文档和实际示例将引导您轻松将 `cesium-components-vue` 无缝集成到 `Vue 3` 项目中。
