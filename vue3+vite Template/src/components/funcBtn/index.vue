<template>
    <div class="btn-box">
        <el-button type="primary" icon="el-icon-arrow-up" @click="up"></el-button>
        <el-button type="primary" icon="el-icon-arrow-down" @click="down"></el-button>
    </div>
</template>

<script>
import { defineComponent ,ref } from 'vue'


export default defineComponent({
    name:'funcBtns',
    setup(props, ctx) {
        const up = ()=>{
            console.log('up')
            // context.emit("upDo",'something')
            ctx.emit('upDo', false)
            // emits('up', '111')
        };
        const down = ()=> {
            console.log('down')
            ctx.emit('downDo', false)
            // emit("downDo")
        };
        return {
            up,
            down
        }
    },
})
</script>

<style lang="scss" scoped>
    .btn-box{
        position: fixed;
        bottom: 5%;
        right: 5%;
    }
</style>
