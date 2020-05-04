<template>
  <div>
    <Swiper class="swiper-image">
      <SwiperItem v-for="(item,index) in topimages" :key='index'>
        <img :src="item" class="top-img">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'

export default {
  name:'DetailSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topimages:Array
  }
}
</script>

<style>
.swiper-image{
  height: 300px;
  overflow: hidden;
}
</style>