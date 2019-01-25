import request from './request'

const url = {
  GetIndexMenu: '/menu/GetIndexMenu'
}

// 获取首页菜单
export function GetIndexMenu(params) {
  return request({
    url: url.GetIndexMenu,
    method: 'get',
    params
  })
}
