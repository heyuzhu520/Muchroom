<template>
  <div>
    <router-view></router-view>
    <Tabbar>
      <TabbarItem path="/home" activeColor="blue">
        <div class="fa fa-home" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div><!-- 点击时替换的图标 -->
        <div slot="tab-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category" activeColor="orange">
        <div class="fa fa-list" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/cart" activeColor="green">
        <div class="fa fa-shopping-cart" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile" activeColor="red">
        <div class="fa fa-user" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import TabbarItem from './Tabbar-item'
import Tabbar from './Tabbar'
export default {
  name:'MainTabbar',
  components:{
    Tabbar,
    TabbarItem
  }
}
</script>

<style>

</style>