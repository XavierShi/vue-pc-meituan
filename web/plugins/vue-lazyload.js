import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  error: '/lazy-bg.png',
  loading: '/lazy-bg.png'
})
