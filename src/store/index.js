import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return{
            serverUrl: 'http://localhost:2020/portfolio/',
            project: [],
            projectError: ''
        }
    },
    mutations: {
        allProject(state, project){
            state.project = project
        },
        projectError (state, payload){
            state.projectError = payload
        }
    },
    getters: {
        allMyProjects(state){
            return state.project
        },
        projectError (state){
            return state.projectError
        }
    },
    actions: {
        getAllProject(context){
            axios.get(`${context.state.serverUrl}allProject`).then((res)=>{
                context.commit('allProject', res.data.project)
            }).catch((err)=>{
                context.commit('projectError', err.name)
            })
        }
    }
})

export default store