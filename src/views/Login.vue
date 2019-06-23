<template>
    <div class="login-view">
        <div class="top-title">太智大数据平台</div>
        <ul class="circle-box">
            <li>
                <RingCom />
            </li>
            <li>
                <LandingMode />
            </li>
        </ul>
    </div>
</template>
<script>
import RingCom from '@/components/ringComponents';
import LandingMode from '@/components/landingMode'
export default {
    components: {
        RingCom,
        LandingMode
    },
    data () {
        return {}
    }
}
</script>
<style lang="less">
.login-view{
    height: 100%;
    background: linear-gradient(to bottom,#0070c4,#a1d2ea);
    .top-title{
        width: 90%;
        line-height: 60px;
        margin: 0 auto;
        text-align: center;
        font-family: cursive;
        color: #ffffff;
    }
    .circle-box{
        display: flex;
        width: 95%;
        height: calc(~'100% - 80px');
        margin: 10px auto;
        li{
            flex: 1;
            &:nth-child(2){
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
</style>
