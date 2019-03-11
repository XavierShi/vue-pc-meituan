const state = () => ({
  position: {}
})

const mutations = {
  setPosition(state, data) {
    state.position = data
  }
}

const actions = {
  setPosition: ({
    commit
  }, data) => {
    commit('setPosition', data)
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions
}
