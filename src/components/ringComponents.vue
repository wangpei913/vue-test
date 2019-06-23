<template>
  <div class="ring-view">
    <div class="demo">
      <p class="demo-title">BIG DATA</p>
      <ul>
        <li>
          <i class="iconfont icondiannao"></i>
        </li>
        <li>
          <i class="iconfont iconc22_hide"></i>
        </li>
        <li>
          <i class="iconfont iconanquandunpai"></i>
        </li>
        <li>
          <i class="iconfont iconzhibiao"></i>
        </li>
        <li>
          <i class="iconfont iconliti"></i>
        </li>
        <li>
          <i class="iconfont iconfenzi"></i>
        </li>
        <li>
          <i class="iconfont icondiqiu-copy"></i>
        </li>
        <li>
          <i class="iconfont iconyingbi"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 20
    };
  },
};
</script>
<style lang="less" scoped>
.ring-view {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  .demo {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .demo-title {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 100px;
      height: 70px;
      text-align: center;
      line-height: 40px;
      color: #ffffff;
      font-weight: 500;
    }
  }
  ul,
  li {
    margin: 0;
    list-style-type: none;
    padding: 0;
  }
  ul {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 1px #ccc solid;
    position: relative;
    -webkit-animation: spin 15s linear 1s 5 alternate;
    animation: spin 15s linear infinite;
  }
  ul:hover {
    animation-play-state: paused;
    -webkit-animation-play-state: paused; /* Safari 和 Chrome */
  }
  li {
    width: 40px;
    height: 40px;
    position: absolute;
    background-color: red;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
    left: 50%;
    margin-left: -20px;
    margin-top: -20px;
    i {
      font-size: 90%;
      color: #ffffff;
    }
  }
  li:nth-of-type(2) {
    transform: rotate(45deg);
    transform-origin: 20px 170px;
    background-color: orange;
  }
  li:nth-of-type(3) {
    transform: rotate(90deg);
    transform-origin: 20px 170px;
    background-color: #4574d0;
  }
  li:nth-of-type(4) {
    transform: rotate(135deg);
    transform-origin: 20px 170px;
    background-color: green;
  }
  li:nth-of-type(5) {
    transform: rotate(180deg);
    transform-origin: 20px 170px;
    background-color: skyblue;
  }
  li:nth-of-type(6) {
    transform: rotate(225deg);
    transform-origin: 20px 170px;
    background-color: pink;
  }
  li:nth-of-type(7) {
    transform: rotate(270deg);
    transform-origin: 20px 170px;
    background-color: violet;
  }
  li:nth-of-type(8) {
    transform: rotate(315deg);
    transform-origin: 20px 170px;
    background-color: cyan;
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
