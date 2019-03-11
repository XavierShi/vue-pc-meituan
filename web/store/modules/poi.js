const state = () => ({
  hotPlace: {}
})

const mutations = {
  setHotPlace(state, data) {
    state.hotPlace = data
  }
}

const actions = {
  setHotPlace: ({
    commit
  }, data) => { commit('setHotPlace', data) }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions
}
