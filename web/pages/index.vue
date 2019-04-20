<template>
  <div class="page-content">
    <banner></banner>
    <style-c></style-c>
    <maoyan></maoyan>
    <zhenguo></zhenguo>
    <recommend></recommend>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import Banner from '@/components/index/banner'
import StyleC from '@/components/index/style'
import Maoyan from '@/components/index/Maoyan'
import Zhenguo from '@/components/index/zhenguo'
import Recommend from '@/components/index/recommend'
import bottomNav from '@/components/index/bottomNav'
import { GetIndexMenu } from '@/api/menu'
import { GetHotPlace } from '@/api/poi'
import {
  GetIndexSlides,
  GetStyles,
  GetMaoyans,
  GetZhenGuos,
  GetRecommends
} from '@/api/index'
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
      let maoyans = await GetMaoyans()
      store.commit('setMaoyans', maoyans.msg)
      let zhenguos = await GetZhenGuos()
      store.commit('setZhenGuos', zhenguos.msg)
      let recommends = await GetRecommends()
      store.commit('setRecommends', recommends.msg)
    } catch (error) {
      console.log(error)
    }
  },
  components: {
    Banner,
    StyleC,
    Maoyan,
    Zhenguo,
    Recommend,
    bottomNav
  },
  middleware: ['auth']
}
</script>

<style lang="stylus" scoped>
@import '~assets/css/index/font-icon.styl';
</style>
