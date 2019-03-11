<template>
  <div class="m-user">
    <template v-if="$store.state.user.user._id">
      <span class="username">{{ $store.state.user.user.userName }}</span>
      <span
        class="logout"
        @click.prevent.stop="SignOut"
      >
        退出
      </span>
    </template>
    <template v-else>
      <nuxt-link
        to="/login"
        class="login"
      >立即登录</nuxt-link>
      <nuxt-link
        to="/register"
        class="register"
      >注册</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      username: ''
    }
  },
  methods: {
    SignOut() {
      this.$store.commit('setUser', {})
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/css/public/header/user';
</style>
