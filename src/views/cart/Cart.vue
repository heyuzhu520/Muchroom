<template>
  <div class="cart">
    <NavBar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <Bscroll class="bscroll">
      <CartList></CartList>
    </Bscroll>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
import NavBar from '../../components/common/nav-bar/Navbar'
import {mapGetters} from 'vuex'
import Bscroll from '../../components/common/better-scroll/BetterScroll'

import CartList from './children-components/CartList'
import CartBottomBar from './children-components/CartBottomBar'

export default {
  name:"Cart",
  components:{
    NavBar,
    CartList,
    CartBottomBar,
    Bscroll
  },
  computed:{
    ...mapGetters([//获取vuex共用的计算属性
      'cartLength',
      'cartList'
    ])

    // ...mapGetters({
    //   length:'cartLength',//可自己取名字//上面直接用length就行
    //   list:'cartList'
    // })
   
  }
}
</script>

<style scoped>
.nav-bar{
  background: hotpink;
  color: #fff;
}
.cart{
  height: 100vh;
}
.bscroll{
  height: calc(100% - 128px);
}
</style>