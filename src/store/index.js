import { createStore } from 'vuex'
import asyncAction from './actions'
import myGetters from './getters'
import storeMutator from './mutations'

const store = createStore({
    state() {
        return{
            serverUrl: 'https://davify-server.onrender.com/',
            webLayout: {bgColor: 'black', textColor: 'white'},
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
