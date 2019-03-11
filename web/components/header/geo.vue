<template>
  <div class="m-geo">
    <i class="el-icon-location"></i>
    <span
      class="current-city"
      @click="test"
    >{{ $store.state.geo.position.city }}</span>
    <nuxt-link
      class="change-city"
      to="/changeCity"
    >
      切换城市
    </nuxt-link>
    <div class="near-citys">
      [
      <nuxt-link to="/near-city">
        山东
      </nuxt-link>
      <nuxt-link to="/near-city">
        济南
      </nuxt-link>
      <nuxt-link to="/near-city">
        历城
      </nuxt-link>
      ]
    </div>
  </div>
</template>
<script>
import { Test } from '@/api/user'
export default {
  methods: {
    test() {
      Test().then(({ data }) => {
        console.log(data)
      })
    }
  }
}
</script>
<style scoped lang="stylus" >
@import '~assets/css/public/header/geo.styl';
</style>
