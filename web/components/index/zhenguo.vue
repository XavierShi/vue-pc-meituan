<template>
  <div class="style-container">
    <div class="index-nav-container index-nav-container-style">
      <ul>
        <li>推荐民宿</li>
        <li
          v-for="(item,index) in $store.state.index.zhenguos"
          :key="index"
          :class="stylesActive == index?'active':''"
          @mouseenter="stylesActive = index"
        >{{ item.title }}
        </li>
      </ul>
    </div>
    <div
      v-for="(item,index) in $store.state.index.zhenguos"
      v-show="stylesActive == index"
      :key="item.title"
      class="style-area"
    >
      <div
        v-for="(item1,index1) in item.item"
        :key="index1"
        class="minsu-item"
      >
        <a
          href="https://phoenix.meituan.com/housing/6501745/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend"
          target="_blank"
        >
          <div class="product-card-header">
            <img
              :src="item1.imgUrl"
              class="product-image"
              alt=""
            >
            <img
              :src="item1.headUrl"
              class="header-image"
              alt=""
            >
          </div>
          <div class="product-info">
            <p class="product-title">{{ item1.title }}</p>
            <p class="sub-title">
              <span
                v-for="(item2,index2) in item1.subTitle"
                :key="item2"
              >
                {{ item2 }}
                <b v-show="index2 != item1.subTitle.length-1">·</b>
              </span>
              <span>| {{ item1.address }}</span>
            </p>
            <p class="price">
              <span class="price-icon">￥</span>
              {{ item1.price }}
            </p>
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
@import '~assets/css/index/zhenguo.styl';
</style>
