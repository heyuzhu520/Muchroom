<template>
  <div class="bottom-bar">
    <div class="bar-left bar-item">
      <div>
        <span class="icon service"></span>
        <span class="text">客服</span>
      </div>
      <div>
        <span class="icon shop"></span>
        <span class="text">店铺</span>
      </div>
      <div>
        <span class="icon select"></span>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right bar-item">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailBottomBar",
  methods:{
    addToCart(){
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  position: fixed;
  bottom:0;
  left: 0;
  width: 100%;
  background: #fff;
  height: 55px;
  display: flex;
  text-align: center;
}
.bar-item{
  flex: 1;
  display: flex;
}
.bar-item div{
  flex: 1;
}
.bar-left .text{
  font-size: 14px;
}
.bar-left .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 2px;
  background: url('../../../assets/img/detail/detail_bottom.png') 0 0/100%;
}
.bar-left .service{
  background-position:0 -52px;
}
.bar-left .shop{
  background-position:0 -98px;
}
.bar-left .select{
  background-position:0 2px;
}
.bar-right{
  line-height: 55px;
}
.bar-right .cart{
  background: #ffe818;
  color: #333;
}
.bar-right .buy{
  background: #ff6799;
  color: #fff;
}

</style>