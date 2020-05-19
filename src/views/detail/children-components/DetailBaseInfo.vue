<template>
  <div class="base-info" v-if="Object.keys(goodsinfo).length!=0">
                        <!-- v-if="Object.keys(goodsinfo).length!=0"  解决报错 -->
    <!-- 标题 -->
    <div>{{goodsinfo.title}}</div>
    <!-- 价格 -->
    <div class="info-price">
      <span class="new-price">{{goodsinfo.newPrice}}</span>
      <span class="old-price">{{goodsinfo.oldPrice}}</span>
      <span class="discount">{{goodsinfo.discount}}</span>
    </div>
    <!--销量收藏 -->
    <div class="info-sales">
      <span>{{goodsinfo.columns[0]}}</span>
      <span>{{goodsinfo.columns[1]}}</span>
      <span>{{goodsinfo.services[goodsinfo.services.length-1].name}}</span>
    </div>
    <!-- 退换货 -->
    <div class="info-service">
      <span v-for="index in goodsinfo.services.length-1" :key='index'><!-- v-for可以遍历数字  此处不遍历全部的元素(不需要最后一个)-->
        <img :src="goodsinfo.services[index-1].icon">
        <span>{{goodsinfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  props:{
    goodsinfo:Object
  }
}
</script>

<style>
.base-info{
  padding: 0 10px;
  margin-top: 15px;
}
.info-title{
  color: #222;
}
.info-price{
  margin-top: 15px;
}
.info-price .new-price{
  font-size: 20px;
  color: hotpink;
}
.info-price .old-price{
  text-decoration: line-through;
  margin-left: 8px;
  font-size: 14px;
}
.info-price .discount{
  background: hotpink;
  color: #fff;
  border-radius: 6px;
  font-size: 12px;
  margin-left: 10px;
  padding: 4px 8px;
  position: relative;
  top: -8px;
}
.info-sales{
  margin-top:15px;
  display: flex;
  border-bottom: 1px solid rgba(100,100,100,0.3);
  padding-bottom: 10px;
  justify-content: space-between;
  font-size: 14px;
  color: rgba(100,100,100,0.3);
}
.info-service{
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #333;
  line-height: 50px;
}
.info-service img{
  height: 14px;
  width: 14px;
}
</style>