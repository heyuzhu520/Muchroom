<template>
  <div class="category-right">
    <div class="clear-fix">
      <CategoryRightSort class="cright-sort" v-for="(item,index) in list" :key='index' :listitem='item'></CategoryRightSort>
    </div>
    <TabControl :titles='["综合","新品","销量"]' class="tab-control" ref='tabContent'></TabControl>
    <!-- <GoodList :goods='goods[currentType].list'></GoodList> -->
  </div>
</template>

<script>
import CategoryRightSort from './CategoryRightSort'
import TabControl from '../../../components/content/tabControl/TabControl'
import GoodList from '../../../components/content/goods/GoodList'

export default {
  name:'CategoryRight',
  data(){
    return{
      // currentType:'pop'
    }
  },
  components:{
    CategoryRightSort,
    TabControl,
    GoodList
  },
  props:{
    list:Array
  },
  methods:{
    // tabClick(index){
    //   switch(index){
    //     case 0:this.currentType='pop'
    //       break
    //     case 1:this.currentType='new'
    //       break
    //     case 2:this.currentType='sell'
    //   }
    //   //让两个组件的数据同步
    //   this.$refs.tabFixed.currentIndex=index
    //   this.$refs.tabContent.currentIndex=index

    // },
  }
}
</script>

<style scoped>
.category-right{
  width: 75%;
  padding-top: 15px;
}
.tab-control{
  margin-top: 20px;
}

</style>