
// ## 目录：
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
// [5、获取一次性验证码](#5获取一次性验证码)<br/>
// [6、用户名密码登陆](#6用户名密码登陆)<br/>
// [7、发送短信验证码](#7发送短信验证码)<br/>
// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
import ajax from './ajax'

const BASE_URL="/api"
// 1、根据经纬度获取位置详情
export const reqAddress=(geohash)=>ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys=()=>ajax(`${BASE_URL}/index_category`)
// 3、根据经纬度获取商铺列表
export const reqShops=({longitude,latitude})=>ajax(`${BASE_URL}/shops`,{longitude,latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShops=({geohash,keyword})=>ajax(`${BASE_URL}/serach_shops`,{geohash,keyword})
// 5、获取一次性验证码
export const reqCaptcha=()=>ajax(`${BASE_URL}/captcha`)
// 6、用户名密码登陆
export const reqLoginPwd=({name,pwd,captcha})=>ajax(`${BASE_URL}/login_pwd`,{name,pwd,captcha},"POST")
// 7、发送短信验证码
export const reqSendCode=(phone)=>ajax(`${BASE_URL}/sendcode`,phone)
// 8、手机号验证码登陆
export const reqLoginSms=(phone,code)=>ajax(`${BASE_URL}/login_sms`,{phone,code},"POST")
// 9、根据会话获取用户信息
export const reqAutoLogin=()=>ajax(`${BASE_URL}/auto_login`)
// 10、获取用户信息
export const reqUserInfo=()=>ajax(`${BASE_URL}/userinfo`)
// 11、用户登出
export const reqLogout=()=>ajax(`${BASE_URL}/logout`)


// mock商家商品数据信息
export const reqShopGoods=()=>ajax('/goods')

// mock商家评价数组
export const reqShopRatings=()=>ajax("/ratings")

//mock商家信息
export const reqShopInfo=()=>ajax('/info')