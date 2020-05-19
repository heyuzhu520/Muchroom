<template>
  <div class="click-button" :class="{clickactive:ischeck}" @click='checkCilck'>
    <img src="../../../assets/img/cart/tick.svg">
  </div>
</template>

<script>
export default {
  name:"CheckedButton",
  props:{
    ischeck:Boolean
  },
  methods:{
    checkCilck(){
      this.$emit('checkCilck')
    }
  }
  
}
</script>

<style scoped>
.click-button{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;/**鼠标小抓手样式 */
  background: #fff;
}
.click-button img{
  margin:1.5px 0 0 0.5px;
}
.clickactive{
  background: hotpink;
  border: 1px solid hotpink;
}
</style>