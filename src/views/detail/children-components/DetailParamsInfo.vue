<template>
  <div class="param-info" v-if="Object.keys(paramsinfo).length !== 0">
    <table v-for="(item,index) in paramsinfo.size" :key='index' class="info-size">
      <tr v-for="(tr,index1) in item" :key="index1">
        <td v-for="(td,index2) in tr" :key='index2'>{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item,index) in paramsinfo.info" :key='index'>
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramsinfo.img.length !== 0">
      <img :src="paramsinfo.img">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailParamsInfo',
  props:{
    paramsinfo:Object
  }
}
</script>

<style>
.param-info{
  border-top: 5px solid #eee;
  padding: 10px 5px;
}
.info-size,.info-param{
  width: 100%;
  margin-top: 10px;
}
.info-size tr{
  display: flex;
  height: 30px;
}
.info-size tr td{
  color: hotpink;
  flex: 1;
  text-align: center;
}
.info-param tr td{
  color: hotpink;
  padding: 10px 0;
}
.info-size tr td:first-of-type{
  color: #555;
}
.info-param tr td:first-of-type{
  color: #555;
  width: 60px;
  text-align: center;
}
.info-img img{
  width: 100%;
}
</style>