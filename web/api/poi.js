import request from './request'

const url = {
  GetIndexMenu: '/poi/GetHotPlace'
}

// 获取首页热门地址
export function GetHotPlace(params) {
  return request({
    url: url.GetIndexMenu,
    method: 'get',
    params
  })
}
