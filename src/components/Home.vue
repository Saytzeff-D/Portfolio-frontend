<template>
    <div>
        <Header :profile="profile" />
        <NavBar :profile="profile" />
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