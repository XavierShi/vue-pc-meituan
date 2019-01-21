import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import url from '@/api/url'
import geo from './modules/geo'
import user from './modules/user'

import {
  getCookie
} from '@/utils/index'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: {
      geo,
      user
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
              commit('setUserTokne', token)
            } else {
              // 获取用户信息

            }
          }
          let {
            data
          } = await axios.get(`${url.Api}/geo/GetPosition`)
          commit('setPosition', data.data.data)
        } catch (error) {
          throw new Error('获取预设信息错误！')
        }
      }
    }
  })

export default store
