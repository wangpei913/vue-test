const Layout = () => import('../layout');

const staticRoute = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: 'login' */ '../views/Login')
    },
    {
        path: '/register',
        component: () => import(/* webpackChunkName: 'login' */ '../views/Register')
    },
    {
        path: '/home',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'home' */ '../views/Home'),
            }
        ]
    },
    {
        path: '/dashboard',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'home' */ '../views/Dashboard'),
            }
        ]
    },
    {
        path: '/charts',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'home' */ '../views/Charts'),
            }
        ]
    },
    {
        path: '/elementui',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'home' */ '../views/ElementUI'),
            }
        ]
    },
    {
        path: '/setting',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'home' */ '../views/Setting'),
            }
        ]
    },
]

export default staticRoute;