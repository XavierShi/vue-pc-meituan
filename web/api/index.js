import request from './request'

const url = {
  GetIndexSlides: '/index/GetIndexSlides',
  GetStyles: '/index/GetStyles'
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
