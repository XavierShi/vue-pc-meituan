<template>
  <div class="m-header-bar">
    <div class="header-content topbar">
      <div>
        <Geo />
        <User />
      </div>
      <NavBar />
    </div>
    <div class="search-bar">
      <Search>

      </Search>
    </div>
  </div>
</template>

<script>
import Geo from './geo.vue'
import User from './user.vue'
import NavBar from './nav.vue'
import Search from './search.vue'

export default {
  components: {
    Geo,
    User,
    NavBar,
    Search
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/css/public/header/topbar.styl';
</style>
