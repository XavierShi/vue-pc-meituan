<template>
  <div class="style-container">
    <div class="index-nav-container index-nav-container-style">
      <ul>
        <li>猜你喜欢</li>
        <li class="active">为你甄选最合适的
        </li>
      </ul>
    </div>
    <div class="style-area">
      <div
        v-for="(item,index) in $store.state.index.recommends"
        :key="index"
        class="card-container"
      >
        <a
          href="https://www.meituan.com/meishi/52800270/"
          target="_blank"
        >
          <div class="recommend-card-wrapper">
            <div class="img-box">
              <img
                :src="item.imgUrl"
                alt=""
              >
            </div>
            <div class="info-box">
              <p class="title">{{ item.title }}</p>
              <p>
                <el-rate
                  v-model="item.score"
                  disabled
                  text-color="#ff9900"
                  score-template="{value}"
                  class="rete-stars"
                >
                </el-rate>
                <span class="comment-number">{{ item.comment }} 个评价</span>
              </p>
              <p class="address">{{ item.address }}</p>
              <p>
                <span class="yuan">￥</span>
                <span class="numfont">{{ item.price }}</span>
                <span class="price-desc">起</span>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stylesActive: 1,
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
@import '~assets/css/index/recommend.styl';
</style>
