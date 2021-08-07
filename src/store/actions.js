
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
}from './mutaions-types' 
import {
    reqAddress,
    reqFoodsCategorys,
    reqShops
} from '../api'                             
export default {
    async getAddress({commit,state}){
        const geohash=state.latitude+','+state.longitude
        const reslut=await reqAddress(geohash)
        if(reslut.data===0){
            const address=result.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    async getCategorys({commit}){
        const reslut=await reqFoodsCategorys()
        if(reslut.data===0){
            const categorys=result.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
    },
    async getShops({commit,state}){
        const {longitude,latitude}=state
        const reslut=await reqShops({longitude,latitude})
        if(reslut.data===0){
            const shops=result.data
            commit(RECEIVE_SHOPS,{shops})
        }
    }
}