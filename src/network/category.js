import {request} from './request'

export function getCategoryData(){
  return request({
    url:"/data/category/category.json"
  })
}

export function getSubCategoryData(num){
  return request({
    url:"/data/category/subcategory/"+num+".json"
  })
}