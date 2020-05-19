<template>
  <div class="nav-bar">
    <Narbar>
      <div slot="left" class="back-image" @click='backHome'>
        <img src="../../../assets/img/common/back.svg">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title" :key='index' class="title-item" :class="{active:index==currentIndex}"
         @click='itemClick(index)'>{{item}}</div>
      </div>
    </Narbar>
  </div>
</template>

<script>
import Narbar from '../../../components/common/nav-bar/Navbar'

export default {
  name:"DetailNavbar",
  components:{
    Narbar
  },
  data(){
    return{
      title:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
      this.$emit('titleClick',index)
    },
    backHome(){
      this.$router.back() 
    }
  }
}
</script>

<style>
.nav-bar{
  background: #fff;
}
.title{
  display: flex;
}
.title-item{
  flex: 1;
}
.back-image img{
  margin-top: 12px;
}
.active{
  color: hotpink;
}
</style>