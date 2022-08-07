import MyAdmin from '../components/Administrator.vue'
import OverView from '../views/Overview.vue'
import AdminProfile from '../components/Profile.vue'
import MyHome from '../components/Home.vue'
import AdminResume from '../components/Resume.vue'
import NotFound  from '../views/NotFound.vue'

const routes = [
    {
        path: '/portfolio',
        component: MyAdmin,
        children: [
            {
                path: '',
                component: OverView,
            },
            {
                path: '/portfolio/profile',
                component: AdminProfile,
            },
            {
                path: '/portfolio/resume',
                component: AdminResume
            }
        ]
    },
    {
        path: '/',
        component: MyHome
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

export default routes