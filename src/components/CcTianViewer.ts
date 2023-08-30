import { defineComponent, h } from 'vue'

export default defineComponent({
  render() {
    return h('div', { id: 'map', style: { width: '100%', height: '100%' } })
  },
  props: {
    value: Object,
    tk: String
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
        url: `http://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${this.tk}`,
        maximumLevel: 18
      })

      const viewer = new Cesium.Viewer('map', {
        baseLayer: new Cesium.ImageryLayer(vec, {})
      })

      this.$emit('input', viewer)
    }
  }
})
