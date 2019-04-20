import request from './request'

const url = {
  GetIndexSlides: '/index/GetIndexSlides',
  GetStyles: '/index/GetStyles',
  GetMaoyans: '/index/GetMaoyans',
  GetZhenGuos: '/index/GetZhenGuos',
  GetRecommends: '/index/GetRecommends'
}

// 获取首页轮播图
export function GetIndexSlides(params) {
  return request({
    url: url.GetIndexSlides,
    method: 'get',
    params
  })
}

//  获取有格调数据
export function GetStyles(params) {
  return request({
    url: url.GetStyles,
    method: 'get',
    params
  })
}

//  获取猫眼电影数据
export function GetMaoyans(params) {
  return request({
    url: url.GetMaoyans,
    method: 'get',
    params
  })
}

//  获取榛果民宿数据
export function GetZhenGuos(params) {
  return request({
    url: url.GetZhenGuos,
    method: 'get',
    params
  })
}

//  获取猜你喜欢数据
export function GetRecommends(params) {
  return request({
    url: url.GetRecommends,
    method: 'get',
    params
  })
}
