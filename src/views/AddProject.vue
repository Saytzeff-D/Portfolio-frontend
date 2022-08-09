<template>
    <div>
        <form action="" class="p-5 border border-danger">
            <div class="alert alert-success" v-if="successMsg !== ''">
                {{successMsg}}
            </div>
            <div class="alert alert-danger" v-if="errorMsg !== ''">
                {{errorMsg}}
            </div>
            <div class="form-row">
                <div class="form-group col-md-8">
                    <label>Project Name</label>
                    <input class="form-control" placeholder="Project Name" v-model="projectName" />
                </div>
                <div class="form-group col-md-4">
                    <label>Mode</label>
                    <select class="form-control" v-model="mode">
                        <option selected value="">Mode</option>
                        <option>Development Mode</option>
                        <option>Production Mode</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-12">
                    <label>Project Desc</label>
                    <textarea class="form-control" placeholder="Project Desc" v-model="projectDesc"></textarea>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Repository Link</label>
                    <input class="form-control" placeholder="GitHub Link" v-model="repoLink" />
                </div>
                <div class="form-group col-md-6">
                    <label>Deployed Link</label>
                    <input class="form-control" placeholder="Deployed Link" v-model="deployedLink" />
                </div>
            </div>
            <button class="btn btn-danger btn-block" v-on:click="addProject($event)" >Add Project</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AddProject',
    data(){
        return{
            projectName: '',
            projectDesc: '',
            mode: '',
            repoLink: '',
            deployedLink: '',
            errorMsg: '',
            successMsg: ''
        }
    },
    methods: {
        addProject(e){
            e.preventDefault()
            axios.post(`${this.$store.state.serverUrl}addProject`, this.$data).then((res)=>{
                console.log(res.data)
                if(res.data.message == 'Success'){
                    this.emptyInput()
                    this.$store.dispatch('getAllProject')
                    this.successMsg = 'Project Added Successfully'
                }else{
                    this.errorMsg = res.data.message
                }
            }).catch((err)=>{
                console.log(err)
                this.errorMsg = 'An error has occured'
            })
        },
        emptyInput(){
            this.projectName = ''
            this.projectDesc = ''
            this.mode = ''
            this.repoLink = ''
            this.deployedLink = ''
        }
    }
}
</script>