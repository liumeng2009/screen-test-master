<template>
    <div id="map"></div>
</template>

<script>
import echarts from 'echarts'
import bmap from 'echarts/extension/bmap/bmap'// eslint-disable-line
import 'echarts-gl'
import { mapStyle } from './mapStyle'

export default {
    name: 'CityMap',
    mounted () {
        /*
        var lines = data.map(function (track) {
            return {
                coords: track.map(function (seg, idx) {
                    return seg.coord
                })
            }
        }) */
        const myChart = echarts.init(document.getElementById('map'))
        myChart.setOption({
            bmap: {
                center: [120.13066322374, 30.240018034923],
                zoom: 14,
                roam: true,
                mapStyleV2: {
                    styleJson: mapStyle
                }
            },
            series: [{
                type: 'lines',
                coordinateSystem: 'bmap',
                // data: lines,
                polyline: true,
                lineStyle: {
                    color: 'red',
                    opacity: 1,
                    width: 5
                }
            }]
        })
    }
}
</script>

<style lang="scss">
#map{
    width: 100%;
    height: 100%;
    background: #d1d1d1;
}

.anchorBL{
    display: none;
}
</style>
