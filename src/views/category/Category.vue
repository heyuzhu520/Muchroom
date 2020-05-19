<template>
  <div id="category">
    <NavBar class="nav-bar">
      <div slot="center">商品分类</div>
    </NavBar>
    <div class="category-main">
      <CategoryLeftList class="category-left" :leftlist="leftlist" @clickindex='clickindex'></CategoryLeftList>
      <CategoryRight class="category-right" :list='this.numdata.list'></CategoryRight>
    </div>

  </div>
</template>

<script>
import NavBar from '../../components/common/nav-bar/Navbar'

import {getCategoryData,getSubCategoryData} from '../../network/category'
import CategoryLeftList from './children-conponents/CategoryLeftList'
import CategoryRight from './children-conponents/CategoryRight'

export default {
  name:"Category",
  components:{
    NavBar,
    CategoryLeftList,
    CategoryRight,
  },
  data(){
    return{
      leftlist:[],
      numdata:{num:3627,list:[]},
      currIndex:0
    }
  },
  created(){
    this.getCategoryData()
    this.getSubCategoryData(this.numdata.num)
  },
  methods:{
    getCategoryData(){
      getCategoryData().then(res=>{
        // console.log(res);
        this.leftlist=res.data.category.list
      })
    },
    getSubCategoryData(num){
      getSubCategoryData(num).then(res=>{
        this.numdata.list=[]
        // console.log(res);
        this.numdata.list.push(...res.data.list)
      })
    },
    clickindex(index){
      this.numdata.num=this.leftlist[index].maitKey
      this.getSubCategoryData(this.numdata.num)
    },
  }
}
</script>

<style scoped>
.nav-bar{
  width: 100%;
  background: hotpink;
  color: white;
  font-size: 18px;
}
.category-main{
  display: flex;
}
</style>