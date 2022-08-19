<template>
<div class="mt-5 pt-5 px-3">
    <p class="h2">Hire Me Messages</p>
    <div class="row">
        <div class="card-deck col-md-4" v-for="(each, i) in messageTray" :key="i">
            <div class="card p-2">
                <p class="card-title h4 font-italic">{{each.fname}} {{each.lname}}</p>
                <p class="card-text">{{each.email}}</p>
                <p class="card-text text-danger font-weight-bold">{{each.message}}</p>
                <a v-bind:href="'mailto:'+each.email" class="card-link btn btn-secondary">Mail Now</a>
            </div>
        </div>        
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name:' HireMessage',
    data(){
        return {
            messageTray: []
        }
    },
    mounted(){
        axios.get(`${this.$store.state.serverUrl}hire/message`).then((res)=>{
            this.messageTray = res.data.result
            console.log(res.data)
        })
    }
}
</script>