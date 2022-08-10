<template>
    <div class="py-2">
        <div class="alert alert-danger" v-if="errorMsg !== ''">
        {{errorMsg}}
        </div>
        <div class="alert alert-success" v-if="successMsg !== ''">
        {{successMsg}}
        </div>
         <div class="form-row">
             <div class="form-group col-md-3 col-6">
                 <label class="font-weight-bold">Full Name</label>
                <input type="text" class="form-control" v-model="fullName" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Your Email</label>
                <input type="email" class="form-control" v-model="email" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Your Mobile</label>
                <input type="text" class="form-control" v-model="mobile" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Date of Birth</label>
                <input type="text" class="form-control" v-model="dob" />
            </div>            
        </div>

        <div class="form-row">
            <div class="form-group col-md-3">
                <label class="font-weight-bold">Bio</label>
                <textarea type="text" class="form-control" v-model="bio" ></textarea>
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Career</label>
                <input type="text" class="form-control" v-model="career" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Your Location</label>
                <input type="text" class="form-control" v-model="location" />
            </div>
            <div class="form-group col-md-3">
                <label class="font-weight-bold">Address</label>
                <input type="text" class="form-control" v-model="address" />
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Facebook </label>
                <input type="text" class="form-control" v-model="fb" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Twitter</label>
                <input type="text" class="form-control" v-model="tw" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Instagram</label>
                <input type="text" class="form-control" v-model="inst" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">GitHub</label>
                <input type="text" class="form-control" v-model="git" />
            </div>
        </div>
        <div class="d-flex">
            <button @click="saveProfile($event)" v-if="!showEditBtn && profile.length == 0" class="btn btn-danger mx-2">Save</button>
            <button v-if="showEditBtn" class="btn btn-success mx-2">Edit</button>
            <button class="btn btn-info mx-2">Preview</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AddProfile',
    computed: {
        profile (){
            return this.$store.getters.fetchProfile
        }
    },
    data(){
        return{
            fullName: '',
            email: '',
            mobile: '',
            dob: '',
            bio: '',
            career: '',
            location: '',
            address: '',
            fb: '',
            twi: '',
            inst: '',
            git: '',
            errorMsg: '',
            successMsg: '',
            showEditBtn: false
        }
    },
    methods: {
        saveProfile(e){
            this.successMsg = ''
            this.errorMsg = ''
            e.preventDefault()
            axios.post(`${this.$store.state.serverUrl}portfolio/createProfile`, this.$data).then((res)=>{
                console.log(res.data)
                this.emptyInput()
                this.successMsg = res.data.message
                this.showEditBtn = true
            }).catch(()=>{
                this.errorMsg = 'An error has occurred'
            })
        },
        emptyInput(){
            this.fullName = ''
            this.email = ''
            this.mobile = ''
            this.dob = ''
            this.bio = ''
            this.career = ''
            this.location = ''
            this.address = ''
            this.fb = ''
            this.twi = ''
            this.inst = ''
            this.git = ''
        }
    },
    mounted(){
        this.$store.dispatch('myProfile')
    }
}
</script>

<style scoped>

</style>