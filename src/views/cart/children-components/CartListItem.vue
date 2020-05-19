<template>
  <div class="list-item">
    <div class="item-button">
      <CheckedButton :ischeck='item.check' @checkCilck='changeChecked'></CheckedButton>
    </div>
    <div class="item-img">
      <img :src="item.img" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">商品描述：{{item.desc}}</div>
      <div class="item-bottom">
        <div class="item-price left">￥{{item.price}}</div>
        <div class="item-count right">x{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckedButton from './CheckedButton'
export default {
  name:"CartListItem",
  props:{
    item:Object
  },
  data(){
    return {
      ischeck:this.item.check
    }
  },
  components:{
    CheckedButton
  },
  methods:{
    changeChecked(){
      this.$store.commit('changeCheck',this.item)
    }
  }
}
</script>

<style scoped> /**scoped 样式仅对本页面有效 */
.list-item{
  width: 100%;
  display: flex;
  padding:10px 5px;
  border-bottom :1px solid #ccc ;
}
.item-button{
  padding: 5px;
  position: relative;
  top: 40px;
  left: -2px;
}
.item-img img{
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.item-info{
  font-size: 18px;
  color:#333;
  padding: 5px 10px;
  overflow: hidden;
}
.item-title,.item-desc{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info .item-desc{
  font-size: 14px;
  color: #666;
  line-height: 40px;
  height: 40px;
}
.item-bottom{
  margin-top: 10px;
} 
.item-bottom .item-price{
  color:#ff4500;
}
</style>