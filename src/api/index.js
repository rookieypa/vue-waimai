
import ajax from './ajax'
// 根据经纬度获取地理位置信息
export const reqAddress=(geohash)=>ajax(`/position/${geohash}`)
// 获取食品分类列表
export const reqFoodsType=()=>ajax(`/index_category`)
// 获取商铺列表
export const reqShops=(longitude,latitude)=>ajax(`/shops`,{longitude,latitude})