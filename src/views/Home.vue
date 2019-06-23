<template>
  <div class="home-view">
    <!-- <el-container class="container-parent" v-if="isFix === 'vertical'">
      <el-header class="container-header">Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <el-button @click="clickDirection('horizontal')">改变方向</el-button>
        </el-main>
      </el-container>
    </el-container>
    <el-container class="container-parent" v-else>
      <el-header class="container-header">Header</el-header>
      <el-main>
        <el-button @click="clickDirection('vertical')">改变方向</el-button>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container> -->
    home
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    isFix () {
      const v = this.$store.state.app.isFixed;
      return v;
    }
  },
  mounted () {},
  methods: {
    clickDirection (val) {
      this.$store.commit('app/setDriection', val)
    }
  }
};
</script>
<style lang="less">
.home-view {
  height: 100%;
  .container-parent{
    height: 100%;
    .container-header{
      border: 1px #f66 solid;
    }
  }
}
</style>
