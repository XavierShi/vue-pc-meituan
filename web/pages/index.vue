<template>
  <div class="page-content">
    <banner></banner>
  </div>
</template>

<script>
import Banner from '@/components/index/banner'
export default {
  components: {
    Banner
  },
  middleware: ['auth']
}
</script>

<style lang="stylus" scoped>
</style>
