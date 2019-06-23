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
        path: '/home',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'home' */ '../views/Home'),
            }
        ]
    },
]

export default staticRoute;