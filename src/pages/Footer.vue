<template>
    <div class="text-center py-3 h6 text-danger m-0" v-bind:style="{backgroundColor: layout.bgColor}">
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