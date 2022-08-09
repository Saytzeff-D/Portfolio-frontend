import { createStore } from 'vuex'
import asyncAction from './actions'

const store = createStore({
    state() {
        return{
            serverUrl: 'http://localhost:2020/',
            project: [],
            projectError: '',
            expertiseTray: [],
            eduTray: [],
            eduError: '',
            skillTray: [],
            langTray: []
        }
    },
    mutations: {
        allProject(state, project){
            state.project = project
        },
        projectError (state, payload){
            state.projectError = payload
        },
        setExpertiseTray(state, tray){
            state.expertiseTray = tray
        },
        setEduArray(state, payload){
            state.eduTray = payload
        },
        setEduError(state, payload){
            state.eduError = payload
        },
        setSkillTray(state, payload){
            state.skillTray = payload
        },
        setLangTray(state, payload){
            state.langTray = payload
        }
    },
    getters: {
        allMyProjects(state){
            return state.project
        },
        projectError (state){
            return state.projectError
        },
        getExpertiseTray(state){
            return state.expertiseTray
        },
        getEduTray(state){
            return state.eduTray
        },
        getEduError(state){
            return state.eduError
        },
        getSkill(state){
            return state.skillTray
        },
        getLanguage(state){
            return state.langTray
        }
    },
    actions: asyncAction
})

export default store