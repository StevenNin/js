<template>
    <div class="btn-box">
        <el-image
            style="width: 73px; height: 79px"
            @click="home"
            :src="homeImg"
            :fit="fit">
        </el-image>
        <el-image
            style="width: 73px; height: 79px; margin-top:4px;"
            @click="returnTo"
            :src="returnImg"
            :fit="fit">
        </el-image>
    </div>
</template>

<script>
import { defineComponent ,ref } from 'vue'

import { useRoute, useRouter } from 'vue-router'


export default defineComponent({
    name:'homeReturn',
    setup(props, ctx) {
        const route = useRoute()
        const router = useRouter()
        router.push('/dashboard')
        console.log(route) // 路由对象信息
        const homeImg = ref(
            '../../../../../src/assets/images/home.png'
        )
        const returnImg = ref(
            '../../../../../src/assets/images/return.png'
        )
        const home = ()=> {
            // ctx.emit('homeDo', true)
            router.push('/dashboard')
            console.log('home')
        };
        const returnTo = ()=>{
            router.back()
            console.log('return')
            // ctx.emit('returnDo', true)
        };
        return {
            home,
            returnTo,
            homeImg,
            returnImg
        }
    },
})
</script>

<style lang="scss" scoped>
    .btn-box{
        position: fixed;
        display: flex;
        flex-direction: column;
        bottom: 200px;
        right: 0;
        z-index: 40;
    }
</style>
