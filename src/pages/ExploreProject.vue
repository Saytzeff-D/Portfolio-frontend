<template>
    <Header :profile="profile" />
    <NavBar :profile="profile" />
    <div class="container-fluid py-4" v-bind:style="[layout.bgColor == 'black' ? {backgroundColor: layout.bgColor, color: layout.textColor} : '']">
        <p class="py-5 h2">My Projects</p>
        <div>
            <span class="spinner-border" v-if="projectError == '' && projects.length == 0" v-bind:class="[layout.bgColor == 'black' ? 'text-white' : 'text-dark']"></span>
        </div>
        <div class="row mb-4 w-100 mx-auto" v-if="projects.length !== 0">
            <div class="card-deck mx-auto col-md-6 col-lg-4 mb-4" v-for="(each, i) in projects" :key="i">
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
        },
        projectError(){
            return this.$store.getters.projectError
        }
    },
    components: { Header, NavBar },
    mounted(){
        this.$store.dispatch('myProfile')
        this.$store.dispatch('getAllProject')
    }
}
</script>

<style scoped>
.title {
  font-size: calc(15px + (20 - 15) * ((100vw - 300px) / (1300 - 300)));
}
.subtitle {
  font-weight: 500;
  opacity: 1;
  color: #fff;
}
</style>
