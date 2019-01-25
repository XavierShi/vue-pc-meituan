const state = () => ({
  user: '',
  userToken: ''
})

const mutations = {
  setUser(state, data) {
    state.user = data
  },
  setUserToken(state, data) {
    state.userToken = data
  }
}

const actions = {
  setUser: ({
    commit
  }, data) => { commit('setUser', data) },
}

export default {
  namespaced: false,
  state,
  mutations,
  actions
}
