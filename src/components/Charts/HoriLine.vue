<template>
    <div class="chart-container-line">

    </div>
</template>

<script>
import echarts from 'echarts'

const option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};

export default {
    name: 'HoriLine',
    mounted () {
        const myChart = echarts.init(document.querySelector('.chart-container-line'))
        setTimeout(() => {
            // option.series.data = data
            myChart.setOption(option, true)
        }, 2000)
    }
}
</script>

<style>
    .chart-container-line {
        width: 100%;
        height: 100%;
        min-height: 425px;
    }
</style>