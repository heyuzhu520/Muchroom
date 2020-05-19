<template>
  <div class="proflie-user">
    <!-- 用户登录信息 -->
    <div class="user-message">
      <!-- 头像 -->
      <div class="message-img">
        <img src="../../../assets/img/common/placeholder.png" class="message-img">
      </div>
      <!-- 用户名称 -->
      <div class="message-text">
        <div class="message-name">登录/注册</div>
        <div class="message-phone">
          <div class="fa fa-mobile"></div>
          <div class="phone-num">暂无绑定手机号</div>
        </div>
      </div>
    </div>
    <!-- 用户账户优惠 -->
    <div class="user-money">
      <!-- 余额 -->
      <div class="money money-surplus">
        <div class="money-count"><span>0.00</span>元</div>
        <div class="money-text">我的余额</div>
      </div>
      <!-- 优惠 -->
      <div class="money money-discount">
        <div class="money-count"><span>0</span>个</div>
        <div class="money-text">我的优惠</div>
      </div>
      <!-- 积分 -->
      <div class="money money-integral">
        <div class="money-count"><span>0</span>分</div>
        <div class="money-text">我的积分</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"ProflieUser"
}
</script>

<style scoped>
@import '../../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css';


.user-message{
  height: 90px;
  background: hotpink;
  display: flex;
}
.message-img{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 5px 10px;
}
.message-text{
  color: #fff;
  margin: 20px 15px;
}
.message-name{
  height: 25px;
  line-height: 25px;
}
.message-phone{
  display: flex;
}
.message-phone .fa-mobile{
  font-size: 26px;
}
.message-phone .phone-num{
  font-size: 14px;
  padding-left: 3px;
}
/* 用户账户优惠 */
.user-money{
  display: flex;
}
.money{
  flex:1;
  height: 90px;
  text-align: center;
  padding: 20px;
  border-right: 1px #eee solid;
  font-size: 14px;
  line-height: 24px;
}
.money:last-of-type{
  border-right: none;
}
.money .money-count span{
  font-size: 26px;
  color:hotpink;
  font-weight: bold;
}
</style>