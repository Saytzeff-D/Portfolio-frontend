import MyAdmin from '../components/Administrator.vue'
import OverView from '../views/Overview.vue'
import AdminProfile from '../components/ProfileAdmin.vue'
import MyHome from '../components/Home.vue'
import AdminResume from '../components/Resume.vue'
import ProjectAdmin from '../components/ProjectAdmin.vue'
import ExploreProject  from '../pages/ExploreProject.vue'
import HireMessage from '../views/HireMessages.vue'
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
            },
            {
                path: '/portfolio/project',
                component: ProjectAdmin
            },
            {
                path: '/portfolio/getInTouch',
                component: HireMessage
            }
        ]
    },
    {
        path: '/',
        component: MyHome
    },
    {
        path: '/explore',
        component: ExploreProject
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

export default routes