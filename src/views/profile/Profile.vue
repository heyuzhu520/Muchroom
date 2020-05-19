<template>
  <div id="profile">
    <NavBar class="nav-bar">
      <div slot="center">商城</div>
    </NavBar>
    <BScroll class="contend">
      <ProflieUser></ProflieUser>
      <ProflieLists :message='message1'></ProflieLists>
      <ProflieLists :message='message2'></ProflieLists>
    </BScroll>
  </div>
</template>

<script>
import NavBar from '../../components/common/nav-bar/Navbar'
import BScroll from '../../components/common/better-scroll/BetterScroll'

import ProflieUser from "./children-components/ProflieUser"
import ProflieLists from "./children-components/ProflieLists"

export default {
  name:"Profile",
  data(){
    return{
      message1:[
        {class1:"fa-file-powerpoint-o",name1:"我的消息"},
        {class1:"fa-shopping-bag",name1:"积分商城"},
        {class1:"fa-gift",name1:"会员卡"}
      ],
      message2:[
        {class1:"fa-stop",name1:"我的购物车"},
        {class1:"fa-google-plus-square",name1:"下载购物APP"}
      ]
    }
  },
  components:{
    NavBar,
    ProflieUser,
    ProflieLists,
    BScroll
  }
}
</script>

<style scoped>
#profile{
  height:100vh;
}
.nav-bar{
  background: hotpink;
  color: white;
  font-size: 18px;
}
.contend{
  height: calc(100% - 94px);
}
</style>