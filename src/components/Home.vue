<template>
    <div>
        <Header :profile="profile" />
        <NavBar :profile="profile" />
        <button @click="switchMode()" class="font-weight-bold" v-bind:class="[layout.bgColor == 'black' ? 'btn btn-light btn-component' : 'btn btn-dark btn-component']" data-spy="affix" data-offset-top="400">
        <span v-if="layout.bgColor == 'black'"><i class="fa fa-eye pr-3"></i> Light Mode </span>
        <span v-if="layout.bgColor !== 'black'" ><i class="fa fa-eye-slash pr-3"></i> Dark Mode </span>
         </button>
        <AboutMe :profile="profile" :expert="expert" />
        <MyResume :expert="expert" :education="education" :skills="skills" :language="language" />
        <MyAdvert />
        <Footer />
    </div>
</template>

<script>
import Header from '@/pages/Header.vue';
import NavBar from '@/pages/NavBar.vue';
import AboutMe from '@/pages/About.vue';
import MyResume from '@/pages/MyResume.vue';
import MyAdvert from '@/pages/MyAdvert.vue';
import Footer from '@/pages/Footer.vue'
export default {
    name: "MyHome",
    components: { Header, NavBar, AboutMe, MyResume, MyAdvert, Footer },
    computed: {
        profile(){
            return this.$store.getters.fetchProfile
        },
        expert(){
            return this.$store.getters.getExpertiseTray
        },
        education(){
            return this.$store.getters.getEduTray
        },
        skills(){
            return this.$store.getters.getSkill
        },
        language(){
            return this.$store.getters.getLanguage
        },
        layout(){
            return this.$store.getters.getLayout
        }
    },
    methods: {
        switchMode(){
            this.layout.bgColor == 'black' ? this.$store.commit('modifyWebLayout', 'white') : this.$store.commit('modifyWebLayout', 'black')
            console.log(this.layout)
        }
    },
    mounted(){
        this.$store.dispatch('myProfile')
        this.$store.dispatch('getExpertise')
        this.$store.dispatch('fetchEduArray')
        this.$store.dispatch('getSkill')
        this.$store.dispatch('getLang')
    }
}
</script>

<style scoped>
.btn-component {
  position: fixed;
  top: 140px;
  right: -225px;
  z-index: 9999;
  -webkit-transition: .4s;
  transition: .4s;
  padding: 8px 12px;
  border-radius: 3px 0 0 3px;
  font-weight: 100;
}

.btn-component.affix {
  right: -115px;
}

.btn-component i {
  position: relative;
  display: inline-block;
  margin-right: 20px;
  -webkit-transition: .4s;
  transition: .4s;
}

.btn-component:hover {
  right: 0;
}

.btn-component:hover i {
  -webkit-transform: translateX(10px);
      -ms-transform: translateX(10px);
          transform: translateX(10px);
  margin-right: -20px;
  opacity: 0;
}
</style>