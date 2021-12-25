<template>
  <div class="box">
    我是首页
    <funcBtns />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import funcBtns from '@/components/funcBtn/index.vue'
export default defineComponent({
  name:'dashBoard',
  components: {
    funcBtns,
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  .box {
    padding: 15px;
  }
</style>