<template>
    <div class="logintab-view">
        <el-row :gutter="20" class="login-box">
            <el-col>
                系统登录
            </el-col>
            <el-col>
                <el-row :gutter="24">
                    <el-col :span="8" :xs="10">用户名:</el-col>
                    <el-col :span="16" :xs="14"><el-input size="mini" v-model="ruleForm.name" /></el-col>
                </el-row>
            </el-col>
            <el-col>
                <el-row :gutter="24">
                    <el-col :span="8">密码:</el-col>
                    <el-col :span="16"><el-input size="mini" type="password" v-model="ruleForm.pass" /></el-col>
                </el-row>
            </el-col>
            <el-col>&nbsp;</el-col>
            <el-col>
                <el-row :gutter="24">
                    <el-col :span="20">
                        <span class="login-span" @click="submitLogin">登录</span>
                    </el-col>
                    <el-col :span="4">
                        <span class="reg-span" @click="goRegister">注册</span>
                    </el-col>
                </el-row>
            </el-col>
            <el-col>
                <el-row :gutter="24">
                    <el-col>
                        <el-divider content-position="center">第三方登录</el-divider>
                    </el-col>
                    <el-col :span="8">
                        <i class="iconfont iconxiangmulan-weixinhao"></i>
                    </el-col>
                    <el-col :span="8">
                        <i class="iconfont iconQQ"></i>
                    </el-col>
                    <el-col :span="8">
                        <i class="iconfont iconweibo"></i>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { loginUser } from '@/api/index';
export default {
    data() {
        return {
            ruleForm: {
                pass: "",
                name: ""
            }
        };
    },
    methods: {
        goRegister () {
            this.$router.push('/register');
        },
        submitLogin () {
            const { pass, name } = this.ruleForm;
            if (!pass || !name) {
                this.$message({
                    message: '用户名或者密码不能为空',
                    type: 'warning'
                });
            } else {
                let params = {
                    name: name,
                    password: pass
                }
                loginUser(params).then(res => {
                    const { data: {status, msg, result} } = res;
                    if (status === 200) {
                        this.$message({
                            message: msg,
                            type: 'success'
                        });
                        this.$store.commit('login/setToken', result);
                        this.$router.push('/dashboard');
                    } else {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
};
</script>
<style lang="less" scoped>
.logintab-view {
    flex: 1;
    .login-box {
        width: 80%;
        min-height: 200px;
        font-size: 12px;
        border-radius: 10px;
        background: #ffffff;
        padding: 10px 20px;
        .el-col{
            line-height: 30px;
            text-align: center;
            margin-bottom: 5px;
            .reg-span{
                text-decoration: underline;
                color: #409eff;
                cursor: pointer;
            }
            .login-span{
                display: block;
                width: 50%;
                margin: 0 auto;
                border-radius: 5px;
                background: skyblue;
                cursor: pointer;
            }
            i{
                font-size: 20px;
            }
        }
    }
}
</style>
