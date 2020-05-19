export default{
  // 这里写方法判断....
  addCart(context,payload){
    let oldcartInfo=context.state.cartList.find((item)=>item.iid==payload.iid)
    if(oldcartInfo){
      context.commit('addCount',oldcartInfo)
    }else{
      payload.count=1
      context.commit('addToCart',payload)
    }
  }
}