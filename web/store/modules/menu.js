const state = () => ({
  indexMenu: ''
})

const mutations = {
  setIndexMenu(state, data) {
    state.indexMenu = data
  }
}

const actions = {
  setPosition: ({
    commit
  }, data) => {
    commit('setIndexMenu', data)
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions
}
