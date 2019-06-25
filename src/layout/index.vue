<template>
  <div class="layout-view">
    <el-container v-if="isFix === 'vertical'">
      <el-header>
          <HeaderNav />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
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

