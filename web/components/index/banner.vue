<template>
  <div class="banner-container">
    <div class="left-banner">
      <h4>全部分类</h4>
      <ul>
        <li
          v-for="(item) in $store.state.menu.indexMenu"
          :key="item.type"
          @mouseover="showCategoryNav(item)"
          @mouseleave="showRightMenu = false"
        >
          <i
            :class="`hc-icon-`+item.type"
            class="home-category-iconfont "
          ></i>
          <span>
            <nuxt-link to="/mt">{{ item.name }}</nuxt-link>
          </span>
          <i class="el-icon-arrow-right"></i>
        </li>
      </ul>
      <div
        v-show="showRightMenu"
        class="category-nav"
        @mouseenter="showRightMenu = true"
        @mouseleave="showRightMenu = false"
      >
        <div class="category-nav-item">
          <div
            v-for="area in rightMenu.child"
            :key="area.title"
            class="item-area"
          >
            <div class="area-title">
              <a href="/meituan">{{ area.title }}</a>
              <a href="/meituan">
                更多
                <i class="el-icon-arrow-right"></i>
              </a>
            </div>
            <div class="area-content">
              <a
                v-for="(item,index) in area.child"
                :key="index"
                href="https://bj.meituan.com"
                class="link detail-text"
                target="_blank"
              >{{ item }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="right-banner">
      <div class="banner-title">
        <a href="/meituan">美团外卖</a>
        <a href="/meituan">猫眼电影</a>
        <a href="/meituan">美团酒店</a>
        <a href="/meituan">民宿/公寓</a>
        <a href="/meituan">商家入驻</a>
        <a href="/meituan">美团公益</a>
      </div>
      <div class="banner-content">
        <div class="banner-row">
          <div
            v-swiper:swiper="swiperOption"
            class="slide swiper-container"
          >
            <div class="swiper-wrapper">
              <div
                v-for="(item,index) in $store.state.index.indexSlides"
                :key="index"
                class="swiper-slide shadow"
              >
                <a
                  href="https://bj.meituan.com"
                  target="_blank"
                >
                  <img
                    v-lazy="item"
                    class="slide-item"
                    alt
                  >
                </a>
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
            <div class="swiper-button-prev">
              <i class="el-icon-arrow-left"></i>
            </div>
            <!--左箭头-->
            <div class="swiper-button-next">
              <i class="el-icon-arrow-right"></i>
            </div>
            <!--右箭头-->
          </div>
          <a
            href="https://bj.meituan.com"
            target="_blank"
          >
            <div class="pic-1 img-4 shadow"></div>
          </a>
          <div class="login-card">
            <div class="user-img">
              <img
                src="https://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg"
                alt
              >
            </div>
            <p class="user-name">Hi,你好!</p>
            <nuxt-link
              to="/login"
              class="btn-login"
            >登录</nuxt-link>
            <nuxt-link
              to="/register"
              class="btn-register"
            >注册</nuxt-link>
          </div>
        </div>
        <div class="banner-row">
          <a
            href="https://bj.meituan.com"
            target="_blank"
          >
            <div class="pic-2 img-2 shadow"></div>
          </a>
          <a
            href="https://bj.meituan.com"
            target="_blank"
          >
            <div class="pic-2 img-1 shadow"></div>
          </a>
          <a
            href="https://bj.meituan.com"
            target="_blank"
          >
            <div class="pic-1 img-3 shadow"></div>
          </a>
          <div class="download-app">
            <img
              src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
              alt="下载APP"
            >
            <p class="app-name">美团APP手机版</p>
            <p class="sl">
              <span class="red">1元起</span>
              <span class="gary">吃喝玩乐</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showRightMenu: false,
      rightMenu: {
        child: []
      },
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    showCategoryNav(item) {
      this.showRightMenu = true
      this.rightMenu = item
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/css/index/banner';
@import '~assets/css/index/font-icon.styl';
</style>
