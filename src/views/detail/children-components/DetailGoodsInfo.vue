<template>
  <div class="go-info" v-if="Object.keys(detailinfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailinfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">
      {{detailinfo.detailImage[0].key}}
    </div>
    <div class="info-list">
      <img v-for="(item,index) in detailinfo.detailImage[0].list" :key="index" :src="item" @load='imageLoad'>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailGoodsInfo',
  data(){
    return {
      imgLength:0,
      num:0
    }
  },
  props:{
    detailinfo:Object
  },
  methods:{
    imageLoad(){
      this.num++
      if(this.num===this.imgLength){
        this.$emit('imgload')
      }
    }
  },
  watch:{
    detailinfo(){
      this.imgLength=this.detailinfo.detailImage[0].list.length
    }
  }
}
</script>

<style>
.go-info{
   border-top: 5px solid #eee;
   padding: 10px 5px 0;
}
.info-list img{
  width: 100%;
}
</style>