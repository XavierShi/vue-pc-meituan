<template>
  <div class="style-container">
    <div class="index-nav-container index-nav-container-style">
      <ul>
        <li>猫眼电影</li>
        <li
          v-for="(item,index) in $store.state.index.maoyans"
          :key="index"
          :class="stylesActive == index?'active':''"
          @mouseenter="stylesActive = index"
        >{{ item.title }}
        </li>
      </ul>
    </div>
    <div
      v-swiper:swiper="swiperOption"
      class="slide swiper-container"
    >
      <div
        v-if="stylesActive == 0"
        class="swiper-wrapper style-area"
      >
        <div class="swiper-slide">
          <div
            v-for="(item,index) in $store.state.index.maoyans[0].item1"
            :key="index"
            class="slider-item-film"
          >
            <a href="https://p1.meituan.net/movie/a4e27101e4e4890ccc495b676c74c690183262.jpg@214w_297h_1e_1c">
              <img
                :src="item.imgUrl"
                alt=""
              >
              <span class="score">观众评 <b>{{ item.score }}</b></span>
              <span class="title">
                {{ item.title }}
              </span>
              <span
                class="buy-ticket"
                @click.prevent
              >购票</span>
            </a>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            v-for="(item,index) in $store.state.index.maoyans[0].item2"
            :key="index"
            class="slider-item-film"
          >
            <a href="https://p1.meituan.net/movie/a4e27101e4e4890ccc495b676c74c690183262.jpg@214w_297h_1e_1c">
              <img
                :src="item.imgUrl"
                alt=""
              >
              <span class="score">观众评 <b>{{ item.score }}</b></span>
              <span class="title">
                {{ item.title }}
              </span>
              <span
                class="buy-ticket"
                @click.prevent
              >购票</span>
            </a>
          </div>
        </div>
      </div>
      <div
        v-if="stylesActive == 1"
        class="swiper-wrapper style-area"
      >
        <div class="swiper-slide">
          <div
            v-for="(item,index) in $store.state.index.maoyans[1].item1"
            :key="index"
            class="slider-item-film"
          >
            <a href="https://p1.meituan.net/movie/a4e27101e4e4890ccc495b676c74c690183262.jpg@214w_297h_1e_1c">
              <img
                :src="item.imgUrl"
                alt=""
              >
              <span class="score"><b>{{ item.score }}</b>人想看</span>
              <span class="title">
                {{ item.title }}
              </span>
              <span
                class="buy-ticket"
                @click.prevent
              >购票</span>
            </a>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            v-for="(item,index) in $store.state.index.maoyans[1].item2"
            :key="index"
            class="slider-item-film"
          >
            <a href="https://p1.meituan.net/movie/a4e27101e4e4890ccc495b676c74c690183262.jpg@214w_297h_1e_1c">
              <img
                :src="item.imgUrl"
                alt=""
              >
              <span class="score"><b>{{ item.score }}</b>人想看</span>
              <span class="title">
                {{ item.title }}
              </span>
              <span
                class="buy-ticket"
                @click.prevent
              >购票</span>
            </a>
          </div>
        </div>
      </div>
      <div
        class="swiper-button-prev"
        @click.prevent
      >
        <i class="el-icon-arrow-left"></i>
      </div>
      <!--左箭头-->
      <div
        class="swiper-button-next"
        @click.prevent
      >
        <i class="el-icon-arrow-right"></i>
      </div>
      <!--右箭头-->
    </div>
    <!-- <div
      v-for="(item,index) in $store.state.index.maoyans"
      v-show="stylesActive == index"
      :key="index"
      class="style-area clearfix"
    >
    </div> -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      stylesActive: '',
      showRightMenu: false,
      rightMenu: {
        child: []
      },
      swiperOption: {
        loop: false,
        autoplay: false,
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
@import '~assets/css/index/scenes.styl';
@import '~assets/css/index/maoyan.styl';
</style>
