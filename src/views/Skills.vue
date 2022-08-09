<template>
    <div>
        <div class="alert alert-danger" v-if="errorMsg !== ''">
        {{errorMsg}}
        </div>
        <div class="alert alert-success" v-if="successMsg !== ''">
        {{successMsg}}
        </div>
        <div class="form-row">
                <div class="form-group col-md-5">
                    <input class="form-control" placeholder="Skills" v-model="skill" />
                </div>
                <div class="form-group col-md-3">
                    <input class="form-control" placeholder="Grade in Percentage" v-model="grade" />
                </div>
            </div>
            <button @click="addSkill($event)" class="btn btn-danger">Add Skill</button>

            <table class="table table-dark table-striped table-md-responsive my-2 text-center" v-if="skillArray.length !== 0">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Skill</th>
                        <th>Grade in Percentage</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(each, i) in skillArray" :key="i">
                        <td>{{i + 1}}</td>
                        <td>{{each.skill}}</td>
                        <td>{{each.grade}}</td>
                        <td><button @click="deleteDetails(each._id)" class="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            <div class="alert alert-info my-2" v-if="skillArray.length == 0 ">
                Table is Empty
            </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MySkills',
    computed: {
        skillArray() {
            return this.$store.getters.getSkill
        }
    },
    data(){
        return{
            skill: '',
            grade: '',
            errorMsg: '',
            successMsg: ''
        }
    },
    methods: {
        addSkill (e){
            e.preventDefault()
            this.errorMsg = ''
            this.successMsg = ''
            axios.post(`${this.$store.state.serverUrl}resume/addSkill`, this.$data).then((res)=>{
                console.log(res.data)
                this.$store.dispatch('getSkill')
                this.successMsg = res.data.message
            }).catch(()=>{
                this.errorMsg = 'An error has occured'
            })
        },
        deleteDetails(_id){
            let filteredTray = this.skillArray.filter(each=>each._id !== _id)
            this.$store.commit('setSkillTray', filteredTray)
            this.$store.dispatch('delResume', {_id, type: 'delSkill'})
        }
    },
    mounted() {
        this.$store.dispatch('getSkill')
    }
}
</script>