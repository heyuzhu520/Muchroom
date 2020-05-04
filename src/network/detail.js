import {request} from './request'

export function getDetailData(iid){

  return request({
    url:'/data/detail/'+ iid +'.json'
  })
}

export class GoodsInfo{ //创建一个类
  // 添加属性
  constructor(columns,itemInfo,shopInfo){ //传入想保存的数据 //把需要的值以属性方式添加进去
    this.title =itemInfo.title
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discount=itemInfo.discountDesc
    this.columns=columns
    this.services=shopInfo.services
  }
}
// 之后在想用的页面中 let goods=New GoodsInfo就能用了
