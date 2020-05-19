<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="getimage">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">￥{{goodsitem.price}}</span>
      <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodListitem',
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    itemClick(){
      // console.log(this.goodsitem);
      this.$router.push('./detail/'+this.goodsitem.iid)
    }
  },
  computed:{
    getimage(){
      return this.goodsitem.image || this.goodsitem.show.img
    }
  }
}
</script>

<style>
.goods-list-item{
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}
.goods-list-item img{
  width: 100%;
}
.goods-info{
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
}
.goods-info p{
  /* 设置文字省略 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  margin-bottom: 5px;
}
.goods-info .price{
  margin-right: 20px;
  color:#f00;
}
.goods-info .cfav{
  position: relative;
}
.goods-info .cfav::before{
  position: absolute;
  left: -14px;
  top: 0;
  content: "";
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>