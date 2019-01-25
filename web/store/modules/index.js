const state = () => ({
  indexSlides: '',
  styles: ''
})

const mutations = {
  setIndexSlides(state, data) {
    state.indexSlides = data
  },
  setStyles(state, data) {
    state.styles = data
  }
}

const actions = {
  setIndexSlides: ({
    commit
  }, data) => {
    commit('setIndexSlides', data)
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions
}
