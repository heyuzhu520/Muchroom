<template>
  <div>
    <div id="tab-bar">
      <!-- 留一个插槽,代表里面内容可以随意 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"Tabbar"
}
</script>

<style scoped>
#tab-bar{
    position: fixed;
    bottom: 0px;
    left: 0px;
    background: #eee;
    height: 50px;  /* 大多软件的底部都是49px-50px,是视觉最佳比例 */
    display: flex;
    width: 100%;
    font-size: 14px;
  }
  

  
</style>