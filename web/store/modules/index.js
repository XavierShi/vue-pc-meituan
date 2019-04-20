const state = () => ({
  indexSlides: '',
  styles: '',
  maoyans: '',
  zhenguos: '',
  recommends: ''
})

const mutations = {
  setIndexSlides(state, data) {
    state.indexSlides = data
  },
  setStyles(state, data) {
    state.styles = data
  },
  setMaoyans(state, data) {
    state.maoyans = data
  },
  setZhenGuos(state, data) {
    state.zhenguos = data
  },
  setRecommends(state, data) {
    state.recommends = data
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
