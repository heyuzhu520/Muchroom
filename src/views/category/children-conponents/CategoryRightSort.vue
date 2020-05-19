<template>
  <div class="category-sort left">
    <img :src="listitem.image">
    <div>{{listitem.title}}</div>
  </div>
</template>

<script>
export default {
  name:"CategoryRightSort",
  props:{
    listitem:Object
  }
}
</script>

<style scoped>
.category-sort{
  text-align: center;
  width:25%;
  margin: 10px 4.1%;
}
.category-sort img{
  width: 100%;
}
.category-sort div{
  margin-top: 10px;
  font-size: 14px;
}
</style>