import * as VueRouter from 'vue-router'
import MyAdmin from '../components/Administrator.vue'
import OverView from '../views/Overview.vue'

const routes = [
    {
        path: '/portfolio',
        component: MyAdmin,
        children: [
            {
                path: '',
                component: OverView
            }
        ]
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

export default router