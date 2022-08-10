<template>
    <div class="w3-top">
        <Header />
    </div>
</template>

<script>
import Header from '@/pages/Header.vue';
export default {
    name: "MyHome",
    components: {Header },
    mounted(){
        this.$store.dispatch('myProfile')
    }
}
</script>