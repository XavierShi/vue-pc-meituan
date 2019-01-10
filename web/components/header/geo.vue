<template>
  <div class="m-geo">
    <i class="el-icon-location"></i>
    <span class="current-city">济南</span>
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
export default {}
</script>
<style scoped lang="stylus" >
@import '~assets/css/public/header/geo.styl';
</style>
