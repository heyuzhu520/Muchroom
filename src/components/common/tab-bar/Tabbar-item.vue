<template>
      <div class="tab-list" @click="listClick" :class="{active:isActive}">
        <div v-if="!isActive"><slot name="tab-icon"></slot></div>
        <div v-else><slot name="tab-icon-active"></slot></div><!-- 点击时替换的插槽 -->
        <div :style="styleColor"><slot name="tab-text"></slot></div>
      </div>
</template>

<script>
export default {
  name:"Tabbar-item",
  data(){
    return {
     
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!=-1
    },
    styleColor(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  methods:{
    // 事件动态路径
    listClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
/* template中的class名出现在哪,就在哪个页面写样式 */
.tab-list{
    flex:1;
    text-align: center;
  }
  .tab-list .fa{
    font-size: 24px;
    margin-top: 3px;
  }
  .active{
    /* 这里可以设置可变的颜色 */
    color: red;
  }
</style>