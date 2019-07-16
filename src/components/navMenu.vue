<template>
  <div class="navmenu-views">
    <el-menu
      router
      ref="navbar"
      :default-active="defActive"
      :mode="navMode"
      menu-trigger="click"
      @select="selectMenu"
      @open="openMenu"
      @close="closeMenu"
      unique-opened
    >
      <nav-bar-item v-for="(item, n) in menu" :item="item" :navIndex="String(n)" :key="n"></nav-bar-item>
    </el-menu>
  </div>
</template>
<script>
import { userMenu } from "@/api/index";
import NavBarItem from "./navbarItem";
export default {
  components: {
    NavBarItem
  },
  data() {
    return {
      menu: []
    };
  },
  computed: {
    defActive() {
      return this.$route.path;
    },
    navMode() {
      return this.$store.state.app.isFixed;
    }
  },
  mounted() {
    this.getUserMenu();
  },
  watch: {
    // 当通过TagNav来激活页面时也执行一次selectMenu
    $route() {
      let path = this.$route.path;
      let indexPath = this.$refs.navbar.items[path].indexPath;
      this.selectMenu(path, indexPath);
    }
  },
  methods: {
    getUserMenu() {
      const p = {
        id: this.$store.state.login.isToken.type.toString()
      };
      userMenu(p)
        .then(res => {
          const {
            data: { status, result }
          } = res;
          if (status === 200) {
            this.menu = result;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // eslint-disable-next-line
    selectMenu(index, indexPath) {
      /**
       * 在选择父级菜单时自动关闭其下所有子菜单
       * 选择时获取点击菜单的父级index，并计算得到该index在已打开菜单中的索引值，
       * 关闭位于当前打开菜单中该索引值之后的全部菜单
       */
      let openedMenus = this.$refs.navbar.openedMenus;
      let openMenuList;
      // 如果点击的是二级菜单，则获取其后已经打开的菜单
      if (indexPath.length > 1) {
        let parentPath = indexPath[indexPath.length - 2];
        openMenuList = openedMenus.slice(openedMenus.indexOf(parentPath) + 1);
      } else {
        openMenuList = openedMenus;
      }

      // 关闭菜单
      openMenuList = openMenuList.reverse();
      openMenuList.forEach(ele => {
        this.$refs.navbar.closeMenu(ele);
      });
      if (this.navMode == "horizontal") {
        this.navBgShow = false;
      }
    },
    openMenu() {
      if (this.navMode == "horizontal") {
        this.navBgShow = true;
      }
    },
    closeMenu() {
      if (this.navMode == "horizontal") {
        this.navBgShow = false;
      }
    },
    closeAll() {
      let openMenu = this.$refs.navbar.openedMenus.concat([]);
      openMenu = openMenu.reverse();
      openMenu.forEach(ele => {
        this.$refs.navbar.closeMenu(ele);
      });
      if (this.navMode == "horizontal") {
        this.navBgShow = false;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.navmenu-views {
  width: 100%;
  height: 100%;
}
</style>
