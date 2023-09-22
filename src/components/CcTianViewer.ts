import { defineComponent, h } from 'vue'
import { newInstance } from '../utils/viewer'

export default defineComponent({
  render() {
    return h('div', { id: this.id, style: { width: '100%', height: '100%' } })
  },
  props: {
    modelValue: {
      type: typeof Cesium !== 'undefined' ? Cesium.Viewer : undefined
    },
    id: {
      type: String,
      default: 'map'
    },
    tk: {
      type: String,
      required: true
    },
    color: {
      type: typeof Cesium !== 'undefined' ? Cesium.Color : undefined
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const vec = new Cesium.UrlTemplateImageryProvider({
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        url: `https://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${this.tk}`,
        maximumLevel: 18
      })

      const viewer = newInstance(this.id, vec, this.color)

      this.$emit('update:modelValue', viewer)
    }
  }
})
