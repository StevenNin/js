<template>
    <div>
        <Echart
        :options="options"
        id="centerLeft1Chart"
        height="220px"
        width="260px"
        ></Echart>
    </div>
</template>

<script>
    import Echart from "@/common/echart";
export default {
    data() {
        return{
            options: {}
        }
    },
    components: {
        Echart,
    },
    props: {
        cdata:{
            type: Object,
            default: ()=>{}
        },
    },
    watch: {
        cdata: {
            handler (newData) {
                this.options = {
                    color:[

                    ],
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/> {b} : {c} ({d}%)"
                    },
                    toolbox: {
                        show:true
                    },
                }
            }
        }
    }
}
</script>