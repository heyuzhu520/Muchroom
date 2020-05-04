<template>
  <div class="goods">
    <GoodListitem v-for="(item,index) in goods" :key="index" :goodsitem="item"></GoodListitem>
  </div>
</template>

<script>
import GoodListitem from './GoodListitem'
export default {
  name:'GoodList',
  components:{
    GoodListitem
  },
  props:{
    goods:{
      type:Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>
  .goods{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    padding: 3px 3px 50px 3px;
  }
</style>