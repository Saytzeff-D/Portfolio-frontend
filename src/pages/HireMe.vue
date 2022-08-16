<template>
    <div class="">
        <form action="" class="" >
            <div class="alert alert-danger" v-if="errorMsg !== ''">
                <strong><i class="fa fa-exclamation-triangle"></i> Error</strong> {{errorMsg}}
            </div>
            <div class="alert alert-success" v-if="successMsg !== ''">
                <strong><i class="fa fa-check-square-o"></i> Success</strong> {{successMsg}}
            </div>
            <div class="form-row">
                <div class="form-group col-6">
                    <input type="text" class="form-control m-1" v-model="fname" required placeholder="First Name" />
                </div>
                <div class="form-group col-6">
                    <input type="text" class="form-control m-1" v-model="lname" required placeholder="Last Name" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <input type="email" class="form-control m-1" v-model="email" required placeholder="Your E-Mail" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <textarea type="text" class="form-control m-1" v-model="message" rows="5" required placeholder="Your Message" ></textarea>
                </div>
            </div>
            <button v-on:click="sendMessage($event)" class="btn btn-danger btn-block" v-bind:disabled="isLoading" >Send Message</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';


export default{
    name: "HireMe",
    computed: {
        profile(){
            return this.$store.getters.fetchProfile
        }
    },
    data() {
        return {
            fname: "",
            lname: "",
            email: "",
            message: "",
            errorMsg: "",
            successMsg: "",
            isLoading: false
        };
    },
    methods:{
        sendMessage(e){
            this.errorMsg = ''
            this.successMsg = ''
            if(this.fname !== '' && this.lname !== '' && this.email !== '' && this.message !== ''){
                this.isLoading = true
                e.preventDefault()
                axios.post(`${this.$store.state.serverUrl}hire/sendMessage`, this.$data).then((res)=>{
                    res.status 
                    ? 
                    (this.successMsg = 'Your message has been sent, the developer will reach out to you in no time. Thanks...')
                    :
                    (this.errorMsg = 'Sorry, the server could not process your request, kindly give it another try, Thanks...')
                    this.isLoading = false
                    this.emptyInput()
                }).catch((err)=>{
                    console.log(err)
                    this.isLoading = false
                    this.errorMsg = 'An error has occurred'
                })
            }else{
                console.log('Incomplete Form')
            }
        },
        emptyInput(){
            this.fname = ''
            this.lname = ''
            this.email = ''
            this.message = ''
        }
    },
    mounted(){
        this.$store.dispatch('myProfile')
    }
}
</script>