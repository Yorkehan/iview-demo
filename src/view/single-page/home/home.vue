<template>
  <div >
    <v-chart :options="map"/>
    <div class="demo-spin-col">
      <v-chart :options="polar"/>
      <Spin fix>
        <Icon type="ios-loading" size=60 class="demo-spin-icon-load"></Icon>
      </Spin>
    </div>
  </div>
</template>

<script>

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import map from './map'
// Map of China
import chinaMap from 'echarts/map/json/china'
// registering map data
ECharts.registerMap('china', chinaMap)
export default {
  name: 'home',
  data () {
    let data = []
    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }
    return {

      polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      },
      map
    }
  },
  mounted () {

    // $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);

  }

}
</script>

<style>
  .echarts {
    width: 100%;
    height: 800px;
  }
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  .demo-spin-col {
    position: relative;
  }
  .ivu-spin-fix {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 8;
    width: 100%;
    height: 100%;
    background-color: rgba(245, 247, 249, 0.9);
  }
</style>
