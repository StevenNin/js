<template>
    <div :id="id" :class="className" :style="{height:height, width:width}"></div>
</template>

<script>
import tdTheme from './theme.json'
import '../map/fujian.js'

export default ({
    name:'echart',
    props: {
        className: {
            type: String,
            default: 'chart'
        },
        id: {
            type: String,
            default: 'chart'
        },
        width: {
            type: String,
            default: '100%'
        },
        heght: {
            type: String,
            default: '2.5rem'
        },
        options: {
            type: Object,
            default: () =>({})
        }
    },
    data() {
        return{
            chart: null
        }
    },
    watch: {
        options: {
            handler (options) {
                // 清除缓存的， true
                this.chart.setOption(options, true)
            },
            deep: true
        }
    },
    mouted() {
        this.$echarts.registerTheme('tdTheme', tdTheme);
        this.initChart()
    },
    methods:{
        initChart() {
            this.chart = this.$echarts.init(this.$el, 'thTheme')
            this.chart.setOption(this.options, true)
        }
    }
    
})
</script>


<style scoped>

</style>