<template>
  <div class="proflie-lists">
    <div v-for="(item,index) in message" :key="index" class="lists-item">
      <div class="fa list-img" :class="item.class1"></div>
      <div class="lists-text">{{item.name1}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"ProflieLists",
  props:{
    message:Array
  }
}
</script>

<style scoped>
@import '../../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css';

.proflie-lists{
  border-top: 10px #eee solid;
}
.lists-item{
  display: flex;
  height: 50px;
}
.lists-item .list-img{
  font-size: 20px;
  margin: 15px;
}
.lists-item .lists-text{
  line-height: 50px;
  flex: 1;
  border-bottom: 1px #eee solid;
}

</style>