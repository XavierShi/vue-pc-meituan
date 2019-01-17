import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      counter: 0,
      user: {}
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
        // console.log(req, app)
        let data = await app.$axios.get('/home/2')
        console.log(data.data)
      }
    }
  })

export default store
