<template>
  <div class="style-container">
    <div class="index-nav-container index-nav-container-style">
      <ul>
        <li>有格调</li>
        <li
          v-for="(item,index) in $store.state.index.styles"
          :key="index"
          :class="stylesActive == index?'active':''"
          @mouseenter="stylesActive = index"
        >{{ item.title }}
        </li>
      </ul>
    </div>
    <div
      v-for="(item,index) in $store.state.index.styles"
      v-show="stylesActive == index"
      :key="index"
      class="style-area clearfix"
    >
      <a
        v-for="(item1,index1) in item.item"
        :key="index1"
        href="//www.meituan.com/meishi/165293570/"
        class="link quality-card"
        target="_blank"
      >
        <div class="quality-img">
          <img
            v-lazy="item1.imgUrl"
            class="image"
          >
        </div>
        <div class="poi-info">
          <div
            :title="item1.title"
            class="title"
          >{{ item1.title }}</div>
          <div
            v-show="stylesActive != 3"
            :title="item1.subTitle"
            class="sub-title "
          >{{ item1.subTitle }}</div>
          <div
            v-show="stylesActive == 3"
            class="sub-title tags"
          >
            <div
              v-for="(item2,index2) in item1.tags"
              :key="index2"
              class="tag"
            >{{ item2 }}</div>
          </div>
          <div class="price-info">
            <span
              v-show="stylesActive != 2"
              class="current-price-wrapper"
            >
              <span class="price-symbol numfont">¥</span>
              <span class="current-price numfont">{{ item1.price }}</span>
            </span>
            <span
              v-show="stylesActive != 2 && stylesActive != 3"
              class="old-price"
            >门市价¥{{ item1.oldPrice }}</span>
            <span class="sold bottom-right-info">{{ item1.address }}</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stylesActive: ''
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/css/index/scenes.styl';
@import '~assets/css/index/style.styl';
</style>
