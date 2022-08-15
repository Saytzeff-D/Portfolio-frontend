const myGetters = {
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
    },
    fetchProfile(state){
        return state.myProfile
    },
    getLayout(state){
        return state.webLayout
    }
}

export default myGetters