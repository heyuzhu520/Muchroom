import {request} from './request'

export function getHomeMultidata(){
  return request({
    url:'api/data/home/multidata/multidata.json'//api可以不写
    
  })
}

export function getHomeGoods(type,page){
  return request({
    url:'/data/home/data/'+type+'/'+page+'.json'
  })
}