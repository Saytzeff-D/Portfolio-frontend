import { createStore } from 'vuex'
import asyncAction from './actions'
import myGetters from './getters'
import storeMutator from './mutations'

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
            langTray: [],
            myProfile: []
        }
    },
    mutations
        : storeMutator,
    getters
        : myGetters,
    actions
        : asyncAction
})

export default store