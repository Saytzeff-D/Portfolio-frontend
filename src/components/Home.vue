<template>
    <div>
        <Header />
        <NavBar />
        <AboutMe />
    </div>
</template>

<script>
import Header from '@/pages/Header.vue';
import NavBar from '@/pages/NavBar.vue';
import AboutMe from '@/pages/About.vue';
export default {
    name: "MyHome",
    components: { Header, NavBar, AboutMe },
    mounted(){
        // this.$store.dispatch('myProfile')
    }
}
</script>