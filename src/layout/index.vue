<template>
  <div class="layout-view">
    <el-container v-if="isFix === 'vertical'">
      <el-header>
          <HeaderNav />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <NavMenu />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import HeaderNav from "./HeaderNav";
import NavMenu from '@/components/navMenu'
export default {
  components: {
    HeaderNav,
    NavMenu
  },
  data() {
    return {};
  },
  computed: {
    isFix() {
      return this.$store.state.app.isFixed;
    }
  },
  mounted () {
    console.log(this.$router)
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
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
        aside{
          padding: 5px;
          margin-bottom: 0;
        }
    }
}
</style>

