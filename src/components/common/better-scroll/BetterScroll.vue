<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'


export default {
 name:"BetterScroll",
 data(){
   return{
     bs:null
   }
 },
 props:{
   pullupload:{
     type:Boolean,
     default:false
   },
   probetype:{
     type:Number,
     default:0
   }
 },
 mounted(){  //挂载完毕后
    // 创建better-scroll对象
    this.bs = new BScroll('.wrapper',{
      // 写入配置
      click:true, //默认是false,false时里面的click事件不生效
      pullUpLoad:this.pullupload,//上拉加载,并且实时监听数据//让用户自己决定是否需要,想用就传true
      probeType:this.probetype//实时监听数据
    })
    // 监听滚动事件
    this.bs.on("scroll",(position)=>{
      // console.log(position); 
      this.$emit('bsscroll',position)
    })
    // 监听上拉事件
    this.bs.on("pullingUp",()=>{
      // console.log("上拉监听"); 
      this.$emit('pullingup')
    })
    
  },
  methods:{
    finishpullup(){
      this.bs.finishPullUp()
    }
  }
}
</script>

<style>

</style>