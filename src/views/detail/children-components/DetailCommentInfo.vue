<template>
  <div class="comment-info">
    <div class="comment-top">
      <div class="top-title">用户评价</div>
      <div class="top-more">更多&gt;</div>
    </div>
    <div class="info-user">
      <img :src="userLogo">
      <span>{{uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentinfo.content}}</p>
      <div class="info-other">
        <span>{{commentinfo.created | showDate}}</span>  <!-- 后台发过来的日期都是 时间戳格式 ,需要我们转换 -->
      </div>
    </div>
    <div class="info-imgs">
      <img :src="item" v-for='(item,index) in commentinfo.images' :key=index alt="">
    </div>
  </div>
</template>

<script>
import {dateFormat} from '../../../commont/data'  //在网上找的封装js
export default {
  name:'DetailCommentInfo',
  data(){
    return{
      userLogo:'',
      uname:''
    }
  },
  props:{
    commentinfo:Object
  },
  filters:{
    showDate(value){
      return dateFormat(new Date(value*1000),'yyyy-MM-dd')  //后台发过来的数据都是以秒为单位,的我们要传毫秒
    }
  },
  watch:{
    commentInfo(){
      this.userLogo=this.commentinfo.user.avatar
      this.uname=this.commentinfo.user.uname
    }
  }
}
</script>

<style>
.comment-info{
  border-top: 5px solid #eee;
  padding: 10px 5px;
  overflow: hidden;
}
.comment-top{
  width:100%;
  margin-bottom: 15px;
}
.comment-top .top-title{
  float: left;
  font-size: 20px;
}
.comment-top .top-more{
  float: right;
  font-size: 14px;
}
.info-detail p{
  line-height: 1.5;
}
.info-detail .info-other{
  float: right;
  font-size: 14px;
  margin-top: 5px;
}
.info-imgs{
  clear: both;
}
.info-imgs img{
  margin-top: 10px;
  width:25%;
}
</style>