<template>
  <div class="m-nav">
    <ul class="list">
      <li class="list-item">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <ul>
          <li>
            <nuxt-link to="/my">
              我的订单
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/my">
              我的收藏
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/my">
              抵用券
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/my">
              账户设置
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li class="list-item">
        <nuxt-link to="/my">手机APP</nuxt-link>
      </li>
      <li class="list-item">
        <nuxt-link to="/my">商家中心</nuxt-link>
        <ul>
          <li>
            <nuxt-link to="/my">
              登录商家中心
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/my">
              美团智能收银
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/my">
              我想合作
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/my">
              手机免费开店
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/my">
              餐饮代理商招募
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/my">
              商家代理商招募
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/my">
              免费合作美团排队
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li class="list-item">
        <nuxt-link to="/my">网站导航</nuxt-link>
        <div class="header-nav-second">
          <dl class="header-hotel header-nav-third">
            <dt>酒店旅游</dt>
            <dd>
              <nuxt-link to="/my">
                国际机票
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                火车票
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                榛果名宿
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                经济型酒店
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                主题酒店
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                上午酒店
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                公寓
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                豪华酒店
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                客栈
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                青年旅社
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                度假酒店
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                别墅
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                农家院
              </nuxt-link>
            </dd>
          </dl>
          <dl class="header-food header-nav-third">
            <dt>吃美食</dt>
            <dd>
              <nuxt-link to="/my">
                烤鱼
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                特色小吃
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                烧烤
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                自助餐
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                火锅
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                代金券
              </nuxt-link>
            </dd>
          </dl>
          <dl class="header-movie header-nav-third">
            <dt>看电影</dt>
            <dd>
              <nuxt-link to="/my">
                热映电影
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                热门影院
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                热映电影口碑榜
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                最受期待电影
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                国内票房榜
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                北美票房榜
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                电影排行榜
              </nuxt-link>
            </dd>
          </dl>
          <dl class="header-app header-nav-third">
            <dt>手机应用</dt>
            <dd>
              <nuxt-link to="/my">
                <img
                  class="appicon"
                  src="~assets/img/meituan.png"
                  alt=""
                >
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                <img
                  class="appicon"
                  src="~assets/img/waimai.png"
                  alt=""
                >
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                <img
                  class="appicon"
                  src="~assets/img/zhenguo.png"
                  alt=""
                >
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                <img
                  class="appicon"
                  src="~assets/img/dianping.png"
                  alt=""
                >
              </nuxt-link>
            </dd>
            <dd>
              <nuxt-link to="/my">
                <img
                  class="appicon"
                  src="~assets/img/maoyan.png"
                  alt=""
                >
              </nuxt-link>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
@import '~assets/css/public/header/nav.styl';
</style>
