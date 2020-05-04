<template>
  <div>
    <div id="tab-bar">
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
    height: 50px; 
    display: flex;
    width: 100%;
    font-size: 14px;
  }
  

  
</style>