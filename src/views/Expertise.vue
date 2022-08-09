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
                    <input class="form-control" placeholder="Duration" v-model="duration" />
                </div>
                <div class="form-group col-md-6">
                    <input class="form-control" placeholder="Expert Career" v-model="expert" />
                </div>
            </div>
            <button class="btn btn-danger" v-on:click="addExpertise($event)" >Add Expertise</button>

        <!-- <div class="my-2" v-if="expertTray === Array"> -->
            <table class="table table-dark table-striped table-md-responsive my-2" v-if="expertTray.length !== 0">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Expert</th>
                        <th>Duration</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(each, i) in expertTray" :key="i">
                        <td>{{i + 1}}</td>
                        <td>{{each.expert}}</td>
                        <td>{{each.duration}}</td>
                        <td><button @click="deleteDetails(each._id)" class="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        <!-- </div> -->
            <div class="alert alert-info my-2" v-if="expertTray.length == 0">
                Table is Empty
            </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'MyExpertise',
    data(){
        return{
            duration: '',
            expert: '',
            successMsg: '',
            errorMsg: ''
        }
    },
    computed: {
        expertTray(){
            return this.$store.getters.getExpertiseTray
        }
    },
    methods: {
        addExpertise(e){
            e.preventDefault()
            axios.post(`${this.$store.state.serverUrl}resume/addExpertise`, this.$data).then((res)=>{
                this.$store.dispatch('getExpertise')
                this.successMsg = res.data.message
                this.emptyInput()
            }).catch(()=>{
                this.errorMsg = 'An error has occured'
            })
        },
        emptyInput(){
            this.duration = ''
            this.expert = ''
        },
        deleteDetails(_id){
            let filteredItem = this.expertTray.filter(each=>each._id !== _id)
            this.$store.commit('setExpertiseTray', filteredItem)
            this.$store.dispatch('delResume', {_id, type: 'delExpert'})
        }
    },
    mounted(){
        this.$store.dispatch('getExpertise')
    }
}
</script>