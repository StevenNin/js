<template>
  <div class="full">
    <div class="left">
      <category  ref="list"/>
    </div>
    <div class="content">
      <my-table />
    </div>
    <div>
      <funcBtns  @upDo='upClick' @downDo='downClick' @leftDo='leftClick' @rightDo='rightClick' />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, provide } from 'vue'
import Category from './category.vue'
import myTable from './my-table.vue'
import funcBtns from '@/components/funcBtn/index.vue'
export default defineComponent({
  name: 'categoryTable',
  components: {
    Category,
    myTable,
    funcBtns,
  },
  setup() {
    let active = ref({})
    provide('active', active)
    const list =ref()
    const upClick =()=>{
      list.value.toUp()
    }
    const downClick  = ()=>{
      list.value.toDown()
    }
    const leftClick  = ()=>{
      list.value.toRight()
    }
    const rightClick  = ()=>{
      list.value.toLeft()
    }

    return {
      list,
      active,
      upClick,
      downClick,
      leftClick,
      rightClick
    }
  }
})
</script>

<style lang="scss" scoped>
  .full {
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    .left {
      width: 250px;
    }
    .content {
      flex: 1;
      width: calc(100% - 250px);
      height: 100%;
    }
  }
</style>