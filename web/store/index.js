import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import url from '@/api/url'
import geo from './modules/geo'
import user from './modules/user'
import menu from './modules/menu'
import poi from './modules/poi'
import index from './modules/index'

import {
  getCookie
} from '@/utils/index'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: {
      geo,
      user,
      menu,
      poi,
      index
    },
    actions: {
      async nuxtServerInit({
        commit
      }, {
        req,
        app
      }) {
        try {
          let cookie = req.headers.cookie
          if (cookie) {
            let token = getCookie(cookie, 'meituan_token')
            if (token === '') {
              // 用户信息设置为空
              commit('setUserToken', token)
            } else {
              // 获取用户信息
              // 不是很清楚原因 这个的地方的axios携带的是上一次的token 
              // 第一次刷新 请求接口会触发code:-99 单点登录错误
              // 第二次没问题 这个地方再设置一遍就ok了
              axios.defaults.headers.Authorization = token
              let {
                data
              } = await axios.get(`${url.Api}/user/GetAuth`)
              commit('setUser', data.data.msg[0])
              commit('setUserToken', token)
            }
          }
          let {
            data
          } = await axios.get(`${url.Api}/geo/GetPosition`)
          commit('setPosition', data.data.data)
        } catch (error) {
          console.log(error);
          throw new Error('获取预设信息错误！')
        }
      }
    }
  })

export default store
