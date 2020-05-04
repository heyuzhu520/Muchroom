<template>
  <div class="nav-bar">
    <div class="left"><slot name='left'></slot></div>
    <div class="center"><slot name='center'></slot></div>
    <div class="right"><slot name='right'></slot></div>
  </div>
</template>

<script>
export default {
  name:'Navbar'
}
</script>

<style>
.nav-bar{
  width: 100%;
  display: flex;
  height: 44px;/*大公司导航大多都是44px */
  line-height: 44px;
  text-align: center;
  position:sticky;/*******粘性定位(移动端项目都可用,PC端少用)(当在页面上时遵循常规流,当出现在页面之外是,就会变成固定定位,一直在页面上)   吸顶效果 ***********/
  top: 0px;
  left: 0px;
  z-index: 10;
}
.nav-bar .left,.right{
  width: 60px;
}
.nav-bar .center{
  flex: 1;
}
</style>