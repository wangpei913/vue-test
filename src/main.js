import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import './registerServiceWorker'
import './plugins/element.js'
import './utils/rem'
import './style/main.less'
import '@/style/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
