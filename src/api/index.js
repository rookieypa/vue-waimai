
import ajax from './ajax'

const BASE_URL="/api"
// 根据经纬度获取地理位置信息
export const reqAddress=(geohash)=>ajax(`${BASE_URL}/position/${geohash}`)
// 获取食品分类列表
export const reqFoodsCategorys=()=>ajax(`${BASE_URL}/index_category`)
// 获取商铺列表
export const reqShops=({longitude,latitude})=>ajax(`${BASE_URL}/shops`,{longitude,latitude})