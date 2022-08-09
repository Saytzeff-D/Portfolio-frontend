<template>
    <div>
        <div class="alert alert-danger" v-if="errorMsg !== ''">
        {{errorMsg}}
        </div>
        <div class="alert alert-success" v-if="successMsg !== ''">
        {{successMsg}}
        </div>
        <div class="form-row">
                <div class="form-group col-md-6">
                    <input class="form-control" placeholder="Certificate" v-model="cert" />
                </div>
                <div class="form-group col-md-6">
                    <input class="form-control" placeholder="Date Obtained" v-model="dateObtained" />
                </div>
            </div>
            <button class="btn btn-danger" v-on:click="saveDetails($event)" >Save</button>

            <table class="table table-dark table-striped table-md-responsive my-2" v-if="education.length !== 0">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Certificate</th>
                        <th>Date Obtained</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(each, i) in education" :key="i">
                        <td>{{i + 1}}</td>
                        <td>{{each.cert}}</td>
                        <td>{{each.dateObtained}}</td>
                        <td><button @click="deleteDetails(each._id)" class="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            <div class="alert alert-info my-2" v-if="education.length == 0 && error == ''">
                Table is Empty
            </div>
            <div class="alert alert-danger my-2" v-if="education.length == 0 && error !== ''">
                {{error}}
            </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MyEducation',
    computed: {
        education (){
            return this.$store.getters.getEduTray
        },
        error(){
            return this.$store.getters.getEduError
        }
    },
    data(){
        return {
            cert: '',
            dateObtained: '',
            errorMsg: '', 
            successMsg: ''
        }
    },
    methods: {
        saveDetails(e){
            console.log(this.education)
            e.preventDefault()
            this.errorMsg = ''
            this.successMsg = ''
            axios.post(`${this.$store.state.serverUrl}resume/education`, this.$data).then((res)=>{
                this.successMsg = res.data.message
                this.$store.dispatch('fetchEduArray')
            }).catch(()=>{
                this.errorMsg = 'An error has occured'
            })
        },
        deleteDetails(_id){
            let filteredEdu = this.education.filter(each=>each._id !== _id)
            this.$store.commit('setEduArray', filteredEdu)
            this.$store.dispatch('delResume', {_id, type: 'delEdu'})
        }
    },
    mounted(){
        this.$store.dispatch('fetchEduArray')
    }
}
</script>