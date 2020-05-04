<template>
  <div id="detail">
    <DetailNavbar/>
    <DetailSwiper :topimages='topImages' />
    <DetailBaseInfo :goodsinfo='goodsInfo' />
  </div>
</template>

<script>

// 私有
import {getDetailData,GoodsInfo} from '../../network/detail'
import DetailNavbar from './children-components/DetailNavbar'
import DetailSwiper from './children-components/DetailSwiper'
import DetailBaseInfo from './children-components/DetailBaseInfo'



export default {
  name:'Detail',
  data(){
    return{
      iid:null,
      topImages:[],
      goodsInfo:{}
    }
  },
  components:{
   DetailNavbar,
   DetailSwiper,
   DetailBaseInfo
  },
  created(){ //一创建的时候就拿数据
    this.iid=this.$route.params.id
    getDetailData(this.iid).then(res=>{
      // console.log(res);  //数据
      let data = res.result
      // 获取轮播图数据
      this.topImages=data.itemInfo.topImages
      // 获取商品数据
      this.goodsInfo = new GoodsInfo(data.columns,data.itemInfo,data.shopInfo)
      console.log(new GoodsInfo(data.columns,data.itemInfo,data.shopInfo));
    })
  }
}
</script>

<style>

</style>