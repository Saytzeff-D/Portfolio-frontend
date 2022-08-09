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
                    <input class="form-control" placeholder="Language" v-model="language" />
                </div>
                <div class="form-group col-md-3">
                    <input class="form-control" placeholder="Grade in Percentage" v-model="grade" />
                </div>
            </div>
            <button @click="addLang($event)" class="btn btn-danger">Add Language</button>

            <table class="table table-striped table-responsive my-2" v-if="langArray.length !== 0">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Language</th>
                        <th>Grade</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(each, i) in langArray" :key="i">
                        <td>{{i + 1}}</td>
                        <td>{{each.language}}</td>
                        <td>{{each.grade}}</td>
                        <td><button @click="deleteDetails(each._id)" class="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            <div class="alert alert-info my-2" v-if="langArray.length == 0 ">
                Table is Empty
            </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MyLanguage',
    computed: {
        langArray(){
            return  this.$store.getters.getLanguage
        }
    },
    data(){
        return{
            language: '',
            grade: '',
            errorMsg: '',
            successMsg: ''
        }
    },
    methods: {
        addLang(e){
            e.preventDefault()
            this.errorMsg = ''
            this.successMsg = ''
            axios.post(`${this.$store.state.serverUrl}resume/addLang`, this.$data).then((res)=>{
                this.successMsg = res.data.message
                this.$store.dispatch('getLang')
            }).catch(()=>{
                this.errorMsg = 'An error has occurred'
            })
        },
        deleteDetails(_id){
            let filteredItem = this.langArray.filter(each=>each._id !== _id)
            this.$store.commit('setLangTray', filteredItem)
            this.$store.dispatch('delResume', {_id, type: 'delLang'})
        }
    },
    mounted(){
        this.$store.dispatch('getLang')
    }
}
</script>