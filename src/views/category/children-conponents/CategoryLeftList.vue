<template>
  <div class="category-leftlist">
    <div v-for="(item,index) in leftlist" :key="index" class="leftlist-item" @click='acticlick(index)' :class='{active:index==currentIndex}'>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"CategoryLeftList",
  data(){
    return{
      currentIndex:0
    }
  },
  props:{
    leftlist:Array
  },
  methods:{
    acticlick(index){
      this.currentIndex=index
      // console.log(index);
      this.$emit('clickindex',index)
    }
  }
}
</script>

<style scoped>
.category-leftlist{
  width: 25%;
  background: #eee;
  font-size: 14px;
}
.leftlist-item{
  text-align: center;
  height: 48px;
  line-height: 48px;
}
.active{
  background: #fff;
  border-left:hotpink 3px solid;
  color: hotpink;
  font-weight: bold;
}
</style>