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
      type: Cesium.Color
    },
    lang: {
      type: String,
      default: 'zh_cn' 
    },
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
        subdomains: ['1', '2', '3', '4'],
        url: `https://webrd0{s}.is.autonavi.com/appmaptile?lang=${this.lang}&size=1&scale=1&style=8&x={x}&y={y}&z={z}`,
        maximumLevel: 18
      })

      const viewer = newInstance(this.id, vec, this.color)

      this.$emit('update:modelValue', viewer)
    }
  }
})
