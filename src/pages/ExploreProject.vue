<template>
    <Header :profile="profile" />
    <NavBar :profile="profile" />
    <div class="container-fluid" v-bind:style="[layout.bgColor == 'black' ? {backgroundColor: layout.bgColor, color: layout.textColor} : '']">
        <p class="py-5 h2">My Projects</p>
        <div>
            <span class="spinner-border" v-if="projectError == '' && projects.length == 0" v-bind:class="[layout.bgColor == 'black' ? 'text-white' : 'text-dark']"></span>
        </div>
        <div class="row mx-0 w-100 card-deck mb-4" v-if="projects.length !== 0">
            <div class="col-md-6 col-lg-3" v-for="(each, i) in projects" :key="i">
                    <div class="card" v-bind:class="[layout.bgColor == 'black' ? 'bg-dark text-white' : '']">
                       <div class="card-header">
                            <div class="mt-2">
                                <h4>{{each.projectName}}</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body" v-bind:class="[layout.bgColor == 'black' ? 'text-white' : '']">
                            <div class="" >
                                <h6 class="title text-danger">{{each.majorLang}}</h6>
                                <p>{{each.projectDesc}}</p>
                                <div class="subtitle d-flex justify-content-between">
                                    <a v-bind:href="each.repoLink" class="btn btn-dark">GitHub</a>
                                    <a v-if="each.deployedLink !== ''" v-bind:href="each.deployedLink" class="btn btn-dark">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import NavBar from './NavBar.vue'

export default{
    name: "ExploreProject",
    computed: {
        profile(){
            return this.$store.getters.fetchProfile
        },
        projects (){
            return this.$store.getters.allMyProjects
        },
        layout(){
            return this.$store.getters.getLayout
        }
    },
    components: { Header, NavBar },
    mounted(){
        this.$store.dispatch('myProfile')
        this.$store.dispatch('getAllProject')
    }
}
</script>