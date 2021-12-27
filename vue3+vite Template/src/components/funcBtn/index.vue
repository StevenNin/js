<template>
    <div class="btn-box">
        <el-button type="primary" icon="el-icon-arrow-up" @click="up"></el-button>
        <el-button type="primary" icon="el-icon-arrow-down" @click="down"></el-button>
        <el-button type="primary" icon="el-icon-arrow-left" @click="left"></el-button>
        <el-button type="primary" icon="el-icon-arrow-right" @click="right"></el-button>
    </div>
</template>

<script>
import { defineComponent ,ref } from 'vue'


export default defineComponent({
    name:'funcBtns',
    setup(props, ctx) {
        const up = ()=>{
            console.log('up')
            ctx.emit('upDo', true)
        };
        const down = ()=> {
            console.log('down')
            ctx.emit('downDo', true)
            // emit("downDo")
        };
        const left = ()=> {
            ctx.emit('leftDo', true)
        };
        const right = ()=> {
            ctx.emit('rightDo', true)
        };
        return {
            up,
            down,
            left,
            right
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
