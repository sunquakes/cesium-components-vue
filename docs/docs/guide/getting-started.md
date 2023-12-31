---
lang: en-US
title: Getting Started
---

## Introduce

Experience the seamless fusion of `Vue 3`'s cutting-edge capabilities and the immersive geospatial features of `CesiumJS` through cesium-components-vue. Our library empowers you to effortlessly integrate dynamic geospatial elements into your `Vue 3` projects, delivering captivating interactive experiences.

## Install Cesium

### Downloading Release Package 

- Download cesium from github [https://github.com/CesiumGS/cesium/releases](https://github.com/CesiumGS/cesium/releases)

- Move Cesium folder to the /public.

- Import Cesium js and css file in index.html.

```html
<script type="text/javascript" src="/Cesium/Cesium.js"></script>
<link rel="stylesheet" href="/Cesium/Widgets/widgets.css" />
```

### Using CDN

- Import Cesium js and css file in index.html.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/cesium/1.108.0/Cesium.js" integrity="sha512-x4px4C+PHoAP0tAGI1XA1164gN+pT88gY5wpP4j4Nokmg75f5RJ9HOyzLNx6usrbtmzZFaGbPxdYgeEnptqbqA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cesium/1.108.0/Widgets/widgets.min.css" integrity="sha512-B5b+YSvAqAIXLgYMg42Tc9KmdoYyGQt2G13igHZaDPitOzeO6hUsMkz8uhNg24eRbPcTivMcQ55/FhyxzcCFVQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```

## Getting Started

- Install `cesium-components-vue` via pnpm or yarn or npm

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

- Import the desired components from `cesium-components-vue` to embark on creating your next-generation geospatial applications.

```js:no-line-numbers
import CesiumComponentsVue from 'cesium-components-vue'
Vue.use(CesiumComponentsVue)
```

- Dive into our in-depth documentation and practical examples to unlock the full potential of cesium-components-vue in your `Vue 3` projects.

## Features

- Unified `Vue 3` Integration

cesium-components-vue seamlessly bridges the world of `Vue 3` with the geospatial power of CesiumJS, enabling you to enrich your Vue applications with interactive geospatial components.

- Reactive Geospatial Components

Develop highly responsive geospatial applications that adapt to user interactions and dynamic data changes using `Vue 3`'s powerful reactivity system.

- Versatile Component Suite

Choose from a diverse collection of components including maps, markers, polygons, imagery layers, and more, each thoughtfully designed to elevate your geospatial projects.

- Customization and Flexibility

Leverage `Vue 3`'s composability and templating to effortlessly customize the appearance and behavior of your geospatial components according to your application's unique requirements.

- Performance Harmony

Benefit from the optimized performance of `CesiumJS` while maintaining `Vue 3`'s efficient rendering and reactivity, delivering smooth and engaging geospatial experiences.

- In-Depth Documentation

Our comprehensive documentation and real-world examples guide you through the process of seamlessly integrating cesium-components-vue into your `Vue 3` projects.
