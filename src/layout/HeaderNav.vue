<template>
    <div class="header-nav">
        <div class="logo-box">
            <img class="logo-img" src="../assets/img/logo.jpg" alt="logo" srcset="">
            太智大数据平台
        </div>
        <div class="operation-box">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">注销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    computed: {
        userName () {
            return this.$store.state.login.isToken;
        }
    },
    methods: {
      handleCommand(command) {
          if (command === 'a') {
              this.$store.commit('login/setToken', '');
              this.$router.push('/login')
          }
      }
    }
}
</script>

<style lang="less">
.header-nav{
    height: 100%;
    .logo-box{
        float: left;
        .logo-img{
            float: left;
            max-width: 50px;
            min-height: 100%;
        }
    }
    .operation-box{
        float: right;
        .el-dropdown-menu{
            top: 25px !important;
        }
    }
}
</style>
