<template>
    <div class="text-center py-3 h6 text-danger" v-bind:style="{backgroundColor: layout.bgColor}">
        &copy; 2022 | Saytzeff-D | Full Stack Developer | DavifyRx
    </div>
</template>

<script>
export default {
    name: 'PageFooter',
    computed: {
        layout(){
            return this.$store.getters.getLayout
        }
    }
}
</script>