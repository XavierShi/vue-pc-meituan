<template>
  <div class="page-content">
    <banner></banner>
    <style-c></style-c>
  </div>
</template>

<script>
import Banner from '@/components/index/banner'
import StyleC from '@/components/index/style'
import { GetIndexMenu } from '@/api/menu'
import { GetHotPlace } from '@/api/poi'
import { GetIndexSlides, GetStyles } from '@/api/index'
export default {
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {
    try {
      let slides = await GetIndexSlides()
      store.commit('setIndexSlides', slides.msg.slide)
      let data = await GetIndexMenu()
      store.commit('setIndexMenu', data.msg)
      let hotplace = await GetHotPlace()
      store.commit('setHotPlace', hotplace.msg)
      let styles = await GetStyles()
      store.commit('setStyles', styles.msg)
    } catch (error) {
      console.log(error)
    }
  },
  components: {
    Banner,
    StyleC
  },
  middleware: ['auth']
}
</script>

<style lang="stylus" scoped>
@import '~assets/css/index/font-icon.styl';
</style>
