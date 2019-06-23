import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import staticRoute from './staticRoute'


NProgress.configure({ showSpinner: false });

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: staticRoute,
    beforeEach: function (to, from, next) {
        NProgress.start();
        next()
    },
    afterEach: function () {
        NProgress.done()
    }
})

export default router