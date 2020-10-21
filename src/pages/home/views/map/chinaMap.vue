<template>
  <div id="map" style="width:100%;height:100%"></div>
</template>

<script>
import { Scene } from '@antv/l7'
import { DrillDownLayer } from '@antv/l7-district'
import { Mapbox } from '@antv/l7-maps'
export default {
  data () {
    return {}
  },
  methods: {
    initMap () {
      const scene = new Scene({
        id: 'map',
        map: new Mapbox({
          center: [116.2825, 39.9],
          pitch: 0,
          style: 'blank',
          zoom: 3,
          minZoom: 2,
          maxZoom: 6
        })
      })
      scene.on('loaded', () => {
        /* eslint-disable no-new */
        new DrillDownLayer(scene, {
          data: [],
          depth: 1,
          fill: {
            color: {
              field: 'NAME_CHN',
              values: [
                '#feedde',
                '#fdd0a2',
                '#fdae6b',
                '#fd8d3c',
                '#e6550d',
                '#a63603'
              ]
            }
          },
          popup: {
            enable: true,
            Html: props => {
              return `<span>${props.NAME_CHN}</span>`
            }
          }
        })
      })
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style lang="less" scoped>
#map {
  position: relative;
}
</style>
