<template>
    <div class="setting-views">
        <ul>
            <li>
                <span style="padding-right: 10px;">菜单位置切换:</span>
                <span>
                    <el-select v-model="menuType" placeholder="请选择位置类型" size="mini" @change="changeMenuType">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            options: [
                {
                    value: 'horizontal',
                    label: '横向'
                }, {
                    value: 'vertical',
                    label: '竖向'
                }
            ],
            menuType: 'vertical'
        }
    },
    methods: {
        changeMenuType (e) {
            this.menuType = e;
            this.$store.commit('app/setDriection', e)
        }
    }
}
</script>

<style lang="less" scoped>
.setting-views{
    width: 100%;
    height: 100%;
    padding: 10px 0;
}
</style>
