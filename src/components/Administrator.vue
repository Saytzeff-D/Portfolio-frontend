<template>
    <div class="adminPage">
        <Sidenav />
            <div class="w3-main pageContent">
                <router-view></router-view>
            </div>
    </div>
</template>

<script>
import Sidenav from './Sidenav.vue'
export default {
  components: { Sidenav },
    name: 'MyAdmin'
}
</script>

<style scoped>
    .pageContent{
        margin-left: 200px;
        margin-top: 43px;
    }
    .adminPage{
        /* position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0; */
        background-color: gainsboro;
    }
</style>