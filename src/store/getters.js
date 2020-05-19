export default{
  // 共用的计算属性
  cartLength(state){
    return state.cartList.length
  },
  cartList(state){
    return state.cartList
  }
}