<template>
  <div class="m-search-content">
    <div class="header-title-module">
      <div>
        <nuxt-link to="/meituan">
          <img
            src="~assets/img/logo.png"
            alt=""
          >
        </nuxt-link>
      </div>
    </div>
    <div class="m-search-module">
      <div class="m-search-block">
        <input
          v-model="searchVal"
          type="text"
          class="m-search-input"
          placeholder="搜索商家或地点"
          @focus="isFocus = true"
          @blur="isFocus = false"
        >
        <button class="m-search-btn">
          <i class="el-icon-search"></i>
        </button>
      </div>
      <div
        v-show="isFocus"
        class="m-search-suggest"
      >
        <div
          v-show="!showSearchList"
          class="m-search-noinput"
        >
          <div class="m-search-history">
            <h6>最近搜索</h6>
            <span class="m-search-clean">删除搜索历史</span>
            <ul></ul>
          </div>
          <h6>热门搜索</h6>
          <div class="m-search-hotword">
            <nuxt-link to="/a">
              北京故宫博物馆
            </nuxt-link>
            <nuxt-link to="/a">
              北京故宫博物馆
            </nuxt-link>
            <nuxt-link to="/a">
              北京故宫博物馆
            </nuxt-link>
            <nuxt-link to="/a">
              北京故宫博物馆
            </nuxt-link>
            <nuxt-link to="/a">
              北京故宫博物馆
            </nuxt-link>
            <nuxt-link to="/a">
              北京故宫博物馆
            </nuxt-link>
            <nuxt-link to="/a">
              北京故宫博物馆
            </nuxt-link>
          </div>
        </div>
        <div
          v-show="showSearchList"
          class="m-search-hasinput"
        >
          <ul>
            <li>
              <nuxt-link to="/a">
                北京故宫博物馆
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/a">
                北京故宫博物馆
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/a">
                北京故宫博物馆
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/a">
                北京故宫博物馆
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/a">
                北京故宫博物馆
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/a">
                北京故宫博物馆
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="m-search-hotword">
        <nuxt-link to="/a">
          北京故宫博物馆
        </nuxt-link>
        <nuxt-link to="/a">
          北京故宫博物馆
        </nuxt-link>
        <nuxt-link to="/a">
          北京故宫博物馆
        </nuxt-link>
        <nuxt-link to="/a">
          北京故宫博物馆
        </nuxt-link>
        <nuxt-link to="/a">
          北京故宫博物馆
        </nuxt-link>
        <nuxt-link to="/a">
          北京故宫博物馆
        </nuxt-link>
        <nuxt-link to="/a">
          北京故宫博物馆
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch',
  data() {
    return {
      searchVal: '',
      isFocus: false
    }
  },
  computed: {
    showSearchList() {
      return this.isFocus && this.searchVal != ''
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/css/public/header/search.styl';
</style>
