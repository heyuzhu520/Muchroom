<template>
  <div class="back-top">
    <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop'
}
</script>

<style>
.back-top{
  position: fixed;
  bottom: 55px;
  right: 15px;
  z-index: 100;
}
.back-top img{
  width: 50px;
  opacity: 0.7;
}
</style>