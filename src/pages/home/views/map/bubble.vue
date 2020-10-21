<template>
  <div id="map" style="width:100%;height:100%"></div>
</template>

<script>
import { Scene } from '@antv/l7'
import { CountryLayer } from '@antv/l7-district'
import { Mapbox } from '@antv/l7-maps'
import { ProvinceData } from '../../js/ProvinceData'
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
          minZoom: 0,
          maxZoom: 10
        })
      })

      scene.on('loaded', () => {
        /* eslint-disable no-new */
        new CountryLayer(scene, {
          data: ProvinceData,
          joinBy: ['NAME_CHN', 'name'],
          depth: 1,
          fill: {
            color: '#ccc'
          },
          bubble: {
            enable: true,
            size: {
              field: 'value',
              values: [3, 20]
            }
          },
          popup: {
            enable: true,
            Html: props => {
              return `<span>${props.NAME_CHN}:</span><span>${props.value}</span>`
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
