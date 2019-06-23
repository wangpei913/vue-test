<template>
  <div class="layout-view">
    <el-container v-if="isFix === 'vertical'">
      <el-header>
          <HeaderNav />
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>1111</el-main>
      </el-container>
    </el-container>
    <!-- <el-container class="container-parent" v-else>
      <el-header class="container-header">Header</el-header>
      <el-main>2222</el-main>
      <el-footer>Footer</el-footer>
    </el-container> -->
  </div>
</template>
<script>
import HeaderNav from "./HeaderNav";
export default {
  components: {
    HeaderNav
  },
  data() {
    return {};
  },
  computed: {
    isFix() {
      return this.$store.state.app.isFixed;
    }
  }
};
</script>
<style lang="less">
.layout-view {
  height: 100%;
  font-size: 12px;
  .el-container{
      height: 100%;
      .el-header{
          height: 40px !important;
          line-height: 40px;
      }
  }
}
</style>

