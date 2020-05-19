<template>
  <div class="bottom-bar">
    <div class="all-checked left">
      <CheckedButton :ischeck='ischeck' @checkCilck='allChecked'></CheckedButton>
    </div>
    <div class="left bottom-info">
      <span class="all-ch">全选</span>
      <span class="all-price">总价：￥{{allPrice}}</span>
      <span class="right buy-end">去结算({{cartCount}})</span>
    </div>
  </div>
</template>

<script>
import CheckedButton from './CheckedButton'
import {mapGetters} from 'vuex'

export default {
  name:'CartBottomBar',
  components:{
    CheckedButton
  },
  computed:{
    ...mapGetters([//获取vuex共用的计算属性
      'cartList'
    ]),
    allPrice(){
      return this.cartList.filter(item=>item.check).reduce((preValue,item)=>{
        return preValue + item.count*item.price
      },0).toFixed(2)
    },
    cartCount(){
      return  this.cartList.filter(item=>item.check).reduce((preValue,item)=>{//reduce计算
        return preValue + item.count
      },0)//默认值是0
    },
    ischeck(){
      return this.cartList.every(item=>{ //所有都为真,返回真
        return item.check
      })
    }
  },
  methods:{
    allChecked(){
      if(this.cartList.length !== 0){
        // 判断是否有未选中按钮
        let boo = this.cartList.every(item=>item.check)
        // 有未被选中,需要全部选中操作;没有未被选中的按钮,需要取消全部选中操作
        if(boo){
            this.$store.commit('clearCheck')
        }else{
          this.$store.commit('allCheck')
        }
      }
    }
  }
}
</script>

<style scoped>

.bottom-bar{
  line-height: 44px;
  width: 100%;
  height: 44px;
  background: #ddd;
  position: fixed;
  bottom: 50px;
  left: 0px;
}
.all-checked{
  width: 10%;
  line-height: 20px;
  margin: 5px 0;
  padding-left: 10px;
  position: relative;
  top: 10px;
}
.bottom-info{
  width: 90%;
}
span{
  line-height: 44px;
}
.all-ch{
  margin-right: 20px;
}
.all-price{
  font-size: 18px;

}
.buy-end{
  width:100px;
  height: 44px;
  background: #ff4500;
  color: #fff;
  text-align: center;
}
</style>