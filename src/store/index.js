import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


Vue.use(Vuex)

let state = {
  cartList:[]
}

let store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store

// // 推荐这种写法(方便后期管理)
// let store = new Vuex.Store({
//   state:{
//     cartList:[]
//   },
//   mutations:{ 
//     // 这里推荐每一个方法尽量只去做一件事
//     addToCart(state,payload){
//       state.cartList.push(payload)
//     },
//     addCount(state,payload){
//       payload.count++
//     }
    
//   },
//   actions:{
//     // 这里写方法判断....
//     addCart(context,payload){
//       let oldcartInfo=context.state.cartList.find((item)=>item.iid==payload.iid)

//       if(oldcartInfo){
//         context.commit('addCount',oldcartInfo)
//       }else{
//         payload.count=1  
//         context.commit('addToCart',payload)
//       }
//     }
//   }
// })


// let store = new Vuex.Store({
//   state:{
//     cartList:[]
//   },
//   mutations:{ 
//     addCart(state,payload){
//       // let cartInfo1 = null
//       // for(let item of state.cartList){
//       //   if(item.iid==payload.iid){//判断是否传入过相同物件
//       //     cartInfo1=item
//       //   }
//       // }
//       let cartInfo1=state.cartList.find((item)=>item.iid==payload.iid)
      
//       if(cartInfo1){
//         cartInfo1.count++
//       }else{
//         payload.count=1
//         state.cartList.push(payload)
//       }
//     }
//   }
// })


