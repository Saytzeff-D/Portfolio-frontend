import axios from 'axios'

const asyncAction = {
    getAllProject(context){
        axios.get(`${context.state.serverUrl}project/allProject`).then((res)=>{
            context.commit('allProject', res.data.project)
        }).catch((err)=>{
            context.commit('projectError', err.name)
        })
    },
    getExpertise(context){
        axios.get(`${context.state.serverUrl}resume/expertise`).then((res)=>{
            console.log(res.data)
            context.commit('setExpertiseTray', res.data.result)
        }).catch((err)=>{
            context.commit('setExpertiseTray', err.name)
        })
    },
    fetchEduArray(context){
        axios.get(`${context.state.serverUrl}resume/getEducation`).then((res)=>{
            console.log(res.data)
            context.commit('setEduArray', res.data.result)
        }).catch((err)=>{
            console.log(err)
            context.commit('setEduError', 'An error has occured')
        })
    },
    getSkill({commit, state}){
        axios.get(`${state.serverUrl}resume/skill`).then((res)=>{
            commit('setSkillTray', res.data.result)
        })
    },
    getLang({commit, state}){
        axios.get(`${state.serverUrl}resume/lang`).then((res)=>{
            commit('setLangTray', res.data.result)
        })
    },
    delResume({state}, payload){
        axios.post(`${state.serverUrl}resume/${payload.type}`, {_id: payload._id}).then((res)=>{
            console.log(res.data)
        })
    },
    myProfile(context){
        axios.get(`${context.state.serverUrl}portfolio/profile`).then((res)=>{
            context.commit('setProfile', res.data.result)
        }).catch((err)=>{
            console.log(err)
            context.commit('setProfile', 'An error has occurred')
        })
    }
}

export default asyncAction