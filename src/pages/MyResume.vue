<template>
    <div></div>
</template>

<script>
export default {
    name: 'MyResume',
    computed: {
        profile(){
            return this.$store.getters.fetchProfile
        }
    }
}
</script>