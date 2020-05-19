<template>
  <div id="home">
    <Navbar class="nav-bar">
      <div slot="center">蘑菇街</div>
    </Navbar>
    <!-- 解决吸顶效果消失的问题 -->
    <TabControl :titles='["流行","新款","精选"]' class="tab-control" @tabclick="tabClick" v-show='isTabFixed' ref='tabFixed'></TabControl>
    <BetterScroll :pullupload='true' :probetype=3 class="better-scroll" ref="scroll" @bsscroll='homeScroll' @pullingup='loadMore'>
      <HomeSwiper :banners="banners"></HomeSwiper>
      <HomeRecommend :recommend="recommend"></HomeRecommend>
      <HomePopular/>  
      <!-- 里面不需要加内有可以加单标签 -->
      <TabControl :titles='["流行","新款","精选"]' class="tab-control" @tabclick="tabClick" v-show='!isTabFixed' ref='tabContent'></TabControl><!-- 上面的出现时这个隐藏 -->
      <GoodList :goods='goods[currentType].list'></GoodList>
    </BetterScroll>
    <BackTop v-show="isShowTop" @click.native='backtop'></BackTop>
  </div>
</template>

<script>
// 公共组件
import Navbar from '../../components/common/nav-bar/Navbar'
import TabControl from '../../components/content/tabControl/TabControl'
import GoodList from '../../components/content/goods/GoodList'
import BetterScroll from '../../components/common/better-scroll/BetterScroll'
import {backTopMixin} from '../../commont/mixin'


// home的私有子组件
import HomeSwiper from './children-components/HomeSwiper'
import {getHomeMultidata,getHomeGoods} from '../../network/home'
import HomeRecommend from './children-components/HomeRecommend'
import HomePopular from './children-components/HomePopular'


export default {
  name:"Home",
  data(){
    return{
      banners:[],
      recommend:[],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currentType:'pop',
      isShowTop:false,
      isTabFixed:false
    }
  },
  mixins:[backTopMixin],
  components:{
    Navbar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
    GoodList,
    BetterScroll
  },
  created(){
   this.getHomeMultidata()
   this.getHomeGoods('pop')
   this.getHomeGoods('new')
   this.getHomeGoods('sell')
  },
  methods:{
    // 网络请求相关的方法
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list
        this.recommend=res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1//type是变量,找goods里的type属性
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
        this.$refs.scroll.finishpullup()
      }).catch(res=>{
        this.$refs.scroll.finishpullup()
      })
    },
    // 常规事件处理的方法
    tabClick(index){
      switch(index){
        case 0:this.currentType='pop'
          break
        case 1:this.currentType='new'
          break
        case 2:this.currentType='sell'
      }
      //让两个组件的数据同步
      this.$refs.tabFixed.currentIndex=index
      this.$refs.tabContent.currentIndex=index

    },
    homeScroll(position){
      // if(position.y < -800){
      //   this.isShowTop=true
      // }else{
      //   this.isShowTop=false
      // }
      this.isTabFixed= position.y < -704
      this.getBackTopShow(position)

    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    }
  }
}
</script>

<style scoped>
#home{
  height: 100vh;  /* height: 100vh整个页面的高 */
}
.nav-bar{
  background: hotpink;
  color: white;
  font-size: 18px;
  font-weight: bold;
}
.tab-control{
  position: sticky;
  top: 44px;
  background: #fff;
  z-index: 10;
}
.better-scroll{
  height: calc(100% - 94px);  /*这里 - 两边必须留空格 ,不然不识别 */
  overflow: hidden;
}
</style>
