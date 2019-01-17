import Vue from 'vue'
import Vuex from 'vuex'
import URL from '@/api/url'
import {
  getCookie
} from '@/utils/index'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      counter: 0,
      user: ''
    },
    mutations: {
      increment(state) {
        state.counter++
      },
      setUser(state, user) {
        state.user = user
      }
    },
    actions: {
      async nuxtServerInit({
        commit
      }, {
        req,
        app
      }) {
        let cookie = req.headers.cookie
        let token = getCookie(cookie, 'meituan_token')
        console.log(req.headers.cookie)
        console.log(token)
        if (token === '') {
          commit('setUser', token)
        }
      }
    }
  })

export default store
