<template>
  <div class="shop-info">
    <!-- 店铺名 -->
    <div class="shop-top">
      <img :src="shop.shopLogo" alt="">
      <span class="shop-title">{{shop.name}}</span>
    </div>
    <!-- 店铺详情 -->
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.cSells | sellfilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-all">
          <div class="all-count">
            {{shop.cGoods}}
          </div>
          <div class="all-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key='index'>
            <td>{{item.name}}</td>
            <td :class="{col3:true,col4:item.isBetter}">{{item.score}}</td>
            <td class="tdc" :class="{col1:true,col2:item.isBetter}">{{item.isBetter?'高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailShopInfo',
  props:{
    shop:{
      type:Object
    }
  },
  filters:{ //过滤器
    sellfilter(value){
      if(value<10000){
        return value
      }//小于一万的就直接显示
      return (value/10000).toFixed(1)+'万'//大于一万就保留一位小数...
    }
  }
}
</script>

<style>
.shop-info{
  padding: 10px;
  border-top: 5px solid #eee;
}
.shop-top{
  height: 60px;
  line-height: 60px;
}
.shop-top img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #ccc;
  vertical-align: middle;
}
.shop-top .shop-title{
 vertical-align: middle;
 margin-left: 10px;
}
.shop-middle{
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.shop-middle .shop-middle-left{
  border-right: 1px solid #ddd;
  width: 50%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
.shop-middle .shop-middle-right{
  width: 50%;
  text-align: center;
}
.shop-middle-left .info-sells,.info-all{
  text-align: center;
  width: 50%;
  color: #333;
  
}
.sells-count,.all-count{
  font-size: 20px;
}
.sells-text,.all-text{
  font-size: 14px;
}
.shop-middle-right{
  color:#333;
  font-size: 14px;
}
.shop-bottom{
  width: 100%;
  padding: 10px;
}
.shop-bottom .enter-shop{
  color: #333;
  background: #ccc;
  width: 160px;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  text-align: center;
  margin: 0 auto;
}
.shop-middle-right tr td{
  padding:3px;
}
.tdc{
  display: block;
  color: #fff;
  font-size: 12px;
}
.col1{
  background: #0f0;
}
.col2{
  background:#f00;
}
.col3{
  color: #0f0;
}
.col4{
  
  color: #f00;
}
</style>