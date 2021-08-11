
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    INCRENENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
}from './mutaions-types' 
import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqShopGoods,
    reqShopRatings,
    reqShopInfo,
    reqSearchShops
} from '../api'                             
export default {
    async getAddress({commit,state}){
        const geohash=state.latitude+','+state.longitude
        console.log(state)
        const reslut=await reqAddress(geohash)
        console.log(reslut)
        if(reslut.code===0){
            const address=reslut.data
            commit(RECEIVE_ADDRESS,{address})
        }
            
            
      
        
    },
    async getCategorys({commit}){
        const reslut=await reqFoodCategorys()
        if(reslut.data===0){
            const categorys=reslut.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
    },
    async getShops({commit,state}){
        const {longitude,latitude}=state
        const reslut=await reqShops({longitude,latitude})
        if(reslut.data===0){
            const shops=reslut.data
            commit(RECEIVE_SHOPS,{shops})
        }
    },
    recordUser({commit,state},userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    },
    async getUserInfo({commit}){
      const result=await reqUserInfo()
      if(result.code){
          const userInfo=result.data
          commit(RECEIVE_USER_INFO,{userInfo})
      }
    },
    async logout({commit}){
        const result= await reqLogout()
        if(result.code===0){
            commit(RESET_USER_INFO)
        }
    },
    async getShopInfo({commit}){
        const result= await reqShopInfo()
        if(result.code===0){
            const info=result.data
            commit(RECEIVE_INFO,{info})
        }
    },
    async getShopGoods({commit},callback){
        const result= await reqShopGoods()
        if(result.code===0){
            const goods=result.data
            commit(RECEIVE_GOODS,{goods})
            callback&&callback()
        }
    },
    async getShopRatings({commit},callback){
        const result= await reqShopRatings()
        if(result.code===0){
            const ratings=result.data
            commit(RECEIVE_RATINGS,{ratings})
            callback&&callback()
        }
    },
    //同步更新food中的count
    updateFoodCount({commit},{isAdd,food}){
        if(isAdd){
            commit(INCRENENT_FOOD_COUNT,{food})
        }else{
            commit(DECREMENT_FOOD_COUNT,{food})
        }

    },
    clearCart({commit}){
        commit(CLEAR_CART)
    },
    async searchShops({commit,state},keyword){
        const geohash=state.latitude+','+state.longitude
        const result=await reqSearchShops({geohash,keyword})
        if(result.code===0){
            const searchShops=result.data
            commit(RECEIVE_SEARCH_SHOPS,{searchShops})
        }
    }
}