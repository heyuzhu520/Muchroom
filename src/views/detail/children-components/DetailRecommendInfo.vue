<template>
  <div class="recommend-info">
    <div class="info-head">热门推荐</div>
    <div class="goods">
    <GoodsListItem v-for="(item,index) in recommendinfo" :key="index" :goodsitem='item'></GoodsListItem>
    </div>
  </div>
</template>

<script>
import GoodsListItem from '../../../components/content/goods/GoodListitem'
export default {
  name:'DetailRecommendInfo',
  props:{
    recommendinfo:Array
  },
  components:{
    GoodsListItem
  }
}
</script>

<style>
.recommend-info{
  border-top: 5px solid #eee;
}
.info-head{
  padding: 5px;
  font-size: 20px;
}
.goods{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  padding: 3px 3px 55px 3px;
}
</style>