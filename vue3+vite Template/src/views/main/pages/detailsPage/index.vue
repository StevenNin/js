<template>

    <container>
        <div class="detail" v-html="content"></div>
    </container>
    <funcBtns
      @upDo="toU"
      @downDo="toD"
    />
</template>



<script >
import { defineComponent ,ref, reactive } from 'vue'
import container from '@/components/container/index.vue'
import { getArticleDetail } from '@/api/article.js'
import { useRoute } from "vue-router";
export default defineComponent({
    components: {
        container
    },
    setup() {
        const route = useRoute()
        const content = ref('')
        const scrollTop = ref(document.documentElement.scrollHeight || document.body.scrollHeght)
        getArticleDetail({id:29}).then(res=>{
            // console.log(res.data.content)
            content.value = res.data.content
        }).catch(error=>{
            console.log('错误信息',error)
        })
        // 上滚动
        const toU = ()=>{
            if(document.querySelector('.box-boder').scrollTop > 0){
                document.querySelector('.box-boder').scrollTop -=document.querySelector('.box').clientHeight
            }
        }
        // 下滚动
        const toD = ()=>{
            if(document.querySelector('.box-boder').scrollTop < document.querySelector('.box-boder').scrollHeight){
                document.querySelector('.box-boder').scrollTop +=document.querySelector('.box').clientHeight
            }
        }
        return{
            route,content,scrollTop,toU,toD
        }
    },
})
</script>

<style lang ='scss' scoped>
.detail{
    background: #FFF;
}
</style>