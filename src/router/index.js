import * as VueRouter from 'vue-router'
import MyAdmin from '../components/Administrator.vue'

const routes = [
    {
        path: '/admin',
        component: MyAdmin
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

export default router