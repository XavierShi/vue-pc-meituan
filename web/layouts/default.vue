<template>
  <el-container>
    <el-header
      height="197px"
      class="m-header"
    >
      <MTHeader />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <div>
      <MTFooter>
      </MTFooter>
    </div>
  </el-container>
</template>
<script>
import MTHeader from '@/components/header/index.vue'
import MTFooter from '@/components/footer/index.vue'
export default {
  components: {
    MTHeader,
    MTFooter
  }
}
</script>
<style scoped lang="stylus">
@import '~assets/css/layout/default.styl';
</style>
