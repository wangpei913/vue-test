<template>
    <div class="header-nav">
        <div class="logo-box">
            <img class="logo-img" src="../assets/img/logo.jpg" alt="logo" srcset="">
            太智大数据平台
        </div>
        <div class="menu-box">
            <NavMenu v-if="isFix === 'horizontal'"></NavMenu>
        </div>
        <div class="operation-box">
            <div class="search-box">
                <!-- <p class="input-sapn">
                    <el-input size="mini"></el-input>
                </p>
                <i class="el-icon-search hover-search"></i> -->
                <ShrinkInput />
            </div>
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
import ShrinkInput from '@/components/shrinkInput';
import NavMenu from '@/components/navMenu'
export default {
    components: {
        ShrinkInput,
        NavMenu
    },
    data () {
        return {
            isSearch: false
        }
    },
    computed: {
        isFix() {
            return this.$store.state.app.isFixed;
        },
        userName () {
            return this.$store.state.login.isToken.name;
        }
    },
    methods: {
        handleCommand(command) {
            if (command === 'a') {
                this.$store.commit('login/setToken', '');
                this.$router.push('/login')
            }
        },
        clickSearchIcon () {
            this.isSearch = !this.isSearch;
        }
    }
}
</script>

<style lang="less">
.header-nav{
    height: 100%;
    display: flex;
    .logo-box{
        float: left;
        .logo-img{
            float: left;
            max-width: 50px;
            min-height: 100%;
        }
    }
    .menu-box{
        flex: 1;
        .el-menu.el-menu--horizontal{
            height: 40px;
            .el-menu-item{
                height: 40px;
                line-height: 40px;
            }
        }
    }
    .operation-box{
        float: right;
        .el-dropdown-menu{
            top: 25px !important;
        }
        .search-box {
            float: left;
            // padding: 0 10px;
            position: relative;
            .input-sapn{
                display: inline-block;
                width: 0px;
                transition:width 2s;
                -moz-transition:width 2s; /* Firefox 4 */
                -webkit-transition:width 2s; /* Safari and Chrome */
                -o-transition:width 2s; /* Opera */
                .el-input{
                    width: 0;
                    height: 0;
                    .el-input__inner{
                        width: 0;
                        height: 0;
                        padding: 0;
                        margin: 0;
                        border: none;
                        line-height: 0;
                        color: transparent;
                        background-color: transparent;
                    }
                }
            }
        }
        .search-box:hover .input-sapn {
            width: 200px;
            .el-input{
                width: 100%;
                height: 30px;
                .el-input__inner{
                    width: 100%;
                    height: 30px;
                    border: 1px #f66 solid;
                    padding: 0;
                }
            }
        }
    }
}
</style>
