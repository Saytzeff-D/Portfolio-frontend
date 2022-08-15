const storeMutator = {
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
    },
    setProfile(state, payload){
        state.myProfile = payload
    },
    modifyWebLayout(state, payload){
        payload == 'black' ? state.webLayout = {bgColor: 'black', textColor: 'white'} : state.webLayout = {bgColor: 'white', textColor: 'black'}
    }
}

export default storeMutator