<template> 
  <div id="detail">
    <DetailNavbar @titleClick='titleclick' ref="nav" />
    <BetterScroll class="b-scroll" ref="scroll" @bsscroll='bScroll' :probetype=3>
      <DetailSwiper :topimages='topImages' />
      <DetailBaseInfo :goodsinfo='goodsInfo' />
      <DetailShopInfo :shop='shop' />
      <DetailGoodsInfo :detailinfo='detailInfo' @imgload='imageLoad' />
      <DetailParamsInfo :paramsinfo='paramsInfo' ref="params"></DetailParamsInfo>
      <DetailCommentInfo :commentinfo='commentInfo' ref="comment"></DetailCommentInfo>
      <DetailRecommendInfo :recommendinfo='recommendInfo' ref="recommend"></DetailRecommendInfo>
    </BetterScroll>
    <!-- 底部导航展示 -->
    <DetailBottomBar @addCart='addCart'></DetailBottomBar>
    <BackTop v-show="isShowTop" @click.native='backtop'></BackTop>
  </div>
</template>

<script>
// 共用
import BetterScroll from '../../components/common/better-scroll/BetterScroll'
import {backTopMixin} from '../../commont/mixin'

// 私有
import {getDetailData,getRecommendData,GoodsInfo,Goodsparams} from '../../network/detail'
import DetailNavbar from './children-components/DetailNavbar'
import DetailSwiper from './children-components/DetailSwiper'
import DetailBaseInfo from './children-components/DetailBaseInfo'
import DetailShopInfo from './children-components/DetailShopInfo'
import DetailGoodsInfo from './children-components/DetailGoodsInfo'
import DetailParamsInfo from './children-components/DetailParamsInfo'
import DetailCommentInfo from './children-components/DetailCommentInfo'
import DetailRecommendInfo from './children-components/DetailRecommendInfo'
import DetailBottomBar from './children-components/DetailBottomBar'



export default {
  name:'Detail',
  data(){
    return{
      iid:null,
      topImages:[],
      goodsInfo:{},
      shop:{},
      detailInfo:{},
      paramsInfo:{},
      commentInfo:{},
      recommendInfo:[],
      positionY:[],
      currentIndex:0
    }
  },
  mixins:[backTopMixin],
  components:{
   DetailNavbar,
   DetailSwiper,
   DetailBaseInfo,
   DetailShopInfo,
   DetailGoodsInfo,
   BetterScroll,
   DetailParamsInfo,
   DetailCommentInfo,
   DetailRecommendInfo,
   DetailBottomBar
  },
  created(){ //一创建的时候就拿数据
    this.iid=this.$route.params.id
    getDetailData(this.iid).then(res=>{
      // console.log(res);  //数据
      let data = res.result
      // 获取轮播图数据
      this.topImages=data.itemInfo.topImages
      // 获取商品数据
      this.goodsInfo = new GoodsInfo(data.columns,data.itemInfo,data.shopInfo)
      // 获取商家信息
      this.shop=data.shopInfo
      // 获取商品的详情展示信息
      this.detailInfo=data.detailInfo
      // 获取商品参数
      this.paramsInfo=new Goodsparams(data.itemParams.info,data.itemParams.rule)
      //获取评论数据
      if(data.rate.list){  //判断是否有评论信息
        this.commentInfo=data.rate.list[0]
      }
    })
    getRecommendData().then(res=>{
      // console.log(res);
      this.recommendInfo=res.data.list
    })
  },  
  methods:{
    imageLoad(){      
      this.$refs.scroll.bs.refresh()//refresh()重新计算BetterScroll的高度
      // 图片都加载完毕后,获取各个组件的位置位置
      this.positionY = []//防止没刷新,数据混乱
      this.positionY.push(0)
      this.positionY.push(-this.$refs.params.$el.offsetTop + 44)
      this.positionY.push(-this.$refs.comment.$el.offsetTop + 44)
      this.positionY.push(-this.$refs.recommend.$el.offsetTop + 44)
    },
    titleclick(index){
      this.$refs.scroll.bs.scrollTo(0,this.positionY[index],1000)
    },
    bScroll(position){
      let y =position.y
     
      for(let i in this.positionY){
        if(this.currentIndex != i && (y <= this.positionY[+i] && y > this.positionY[+i + 1]&&i< this.positionY.length-1 ||i==this.positionY.length-1&&y<=this.positionY[+i])){
          this.currentIndex=i
          this.$refs.nav.currentIndex=i
        }
      }
      this.getBackTopShow(position)
    },
   addCart(){
      let cartInfo={}
       cartInfo.img=this.topImages[0]
       cartInfo.title=this.goodsInfo.title
       cartInfo.desc=this.goodsInfo.desc
       cartInfo.price=this.goodsInfo.highNowPrice
       cartInfo.iid=this.iid//这个必须传递
      //  将商品加入到购物车
      this.$store.dispatch("addCart",cartInfo)

   }
  }
}
</script>

<style>
  #detail{
    position: relative;
    z-index: 9;
    background: #fff;
    height: 100vh;  /* 中间不能有空格 */
  }
  .b-scroll{
    height: calc(100% - 99px);
  }
</style>