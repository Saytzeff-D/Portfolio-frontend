<template>
    <div>
        <table class="table table-danger table-responsive table-striped" v-if="projects.length !== 0">
            <thead>
                <tr>
                    <td>S/N</td>
                    <td>Project Name</td>
                    <td>Project Desc</td>
                    <td>Project Mode</td>
                    <td>Repository Link</td>
                    <td>Deployed Link</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(each, i) in projects" :key="i" >
                    <td>{{i + 1}}</td>
                </tr>
            </tbody>
        </table>
        <div class="alert alert-danger" v-if="error !== '' && projects.length == 0">
        {{error}}
        </div>
        <p class="h5" v-if="projects.length == 0 && error == ''">
            No Project Uploaded yet
        </p>
    </div>
</template>

<script>
export default {
    name: 'ProjectList',
    data(){
        return{
            
        }
    },
    computed: {
        projects (){
            return this.$store.getters.allMyProjects
        },
        error(){
            return this.$store.getters.projectError
        }
    },
    mounted () {
        this.$store.dispatch('getAllProject')
    }
}
</script>