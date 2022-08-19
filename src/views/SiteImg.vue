<template>
        <div class="alert alert-danger" v-if="errorMsg !== ''">
        {{errorMsg}}
        </div>
        <div class="alert alert-success" v-if="successMsg !== ''">
        {{successMsg}}
        </div>
    <div class="form-row">
        <div class="form-group col-md-3">
                <label class="font-weight-bold">Portfolio Banner</label>
                <input @change="onInputFileChange($event, 'headerImg')" type="file" class="form-control" />
                <button @click="uploadHeaderImg()" class="btn btn-danger my-1">Upload Header Banner</button>
                <img v-if="profile.length !== 0 && profile[0].headerImg" :src="profile[0].headerImg" class="img-fluid rounded-lg" />
            </div>
            <div class="form-group col-md-3">
                <label class="font-weight-bold">Your Picture</label>
                <input @change="onInputFileChange($event, 'photo')" type="file" class="form-control" />
                <button @click="uploadPhoto()" class="btn btn-danger my-1">Upload your Picture</button>
                <img v-if="profile.length !== 0 && profile[0].photo" :src="profile[0].photo" class="img-fluid rounded-lg" />
            </div>
            <div class="form-group col-md-3">
                <label class="font-weight-bold">Footer Banner</label>
                <input @change="onInputFileChange($event, 'footerImg')" type="file" class="form-control" />
                <button @click="uploadFooterImg()" class="btn btn-danger my-1">Upload Footer Banner</button>
                <img v-if="profile.length !== 0 && profile[0].footerImg" :src="profile[0].footerImg" class="img-fluid rounded-lg" />
            </div>
            <div class="form-group col-md-3">
                <label class="font-weight-bold">Your Resume/CV</label>
                <input @change="onInputFileChange($event, 'myCv')" type="file" class="form-control" />
                <button @click="uploadMyCv()" class="btn btn-danger my-1">Upload your Resume</button>
                <p class="h4" v-if="profile.length !== 0 && profile[0].myCv">
                Resume Uploaded
                </p>
            </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SiteImg',
    computed: {
        profile(){
            return this.$store.getters.fetchProfile
        }
    },
    data(){
        return{
            headerImg: '',
            photo: '',
            footerImg: '',
            myCv: '',
            successMsg: '',
            errorMsg: ''
        }
    },
    methods: {
        uploadHeaderImg(){
            this.errorMsg = ''
            this.successMsg = ''
            let obj = { _id: this.profile[0]._id, headerImg: this.headerImg }
            console.log(obj)
            axios.post(`${this.$store.state.serverUrl}portfolio/uploadHeader`, obj).then((res)=>{
                this.successMsg = res.data.message
                this.$store.dispatch('myProfile')
                this.headerImg = ''
            }).catch(()=>{
                this.errorMsg = 'An error has occurred'
            })
        },
        uploadPhoto(){
            this.errorMsg = ''
            this.successMsg = ''
            let obj = { _id: this.profile[0]._id, photo: this.photo }
            console.log(obj)
            axios.post(`${this.$store.state.serverUrl}portfolio/uploadPhoto`, obj).then((res)=>{
                this.successMsg = res.data.message
                this.$store.dispatch('myProfile')
                this.photo = ''
            }).catch(()=>{
                this.errorMsg = 'An error has occurred'
            })
        },
        uploadFooterImg(){
            this.errorMsg = ''
            this.successMsg = ''
            let obj = { _id: this.profile[0]._id, footerImg: this.footerImg }
            console.log(obj)
            axios.post(`${this.$store.state.serverUrl}portfolio/uploadFooter`, obj).then((res)=>{
                this.successMsg = res.data.message
                this.$store.dispatch('myProfile')
                this.footerImg = ''
            }).catch(()=>{
                this.errorMsg = 'An error has occurred'
            })
        },
        uploadMyCv(){
            this.errorMsg = ''
            this.successMsg = ''
            let obj = { _id: this.profile[0]._id, myCv: this.myCv }
            console.log(obj)
            axios.post(`${this.$store.state.serverUrl}portfolio/uploadCv`, obj).then((res)=>{
                this.successMsg = res.data.message
                this.$store.dispatch('myProfile')
                this.myCv = ''
            }).catch(()=>{
                this.errorMsg = 'An error has occurred'
            })
        },
        onInputFileChange(e, type){
            const this_ = this
            const file = e.target.files[0]
            console.log(file, type)
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = function(){
                switch (type) {
                    case 'headerImg':
                        return this_.headerImg = reader.result
                    case 'photo':
                        return this_.photo = reader.result
                    case 'footerImg':
                        return this_.footerImg = reader.result
                    case 'myCv':
                        return this_.myCv = reader.result
                
                    default:
                        console.log(reader.result)
                }
            }
        }
    }
}
</script>

<style>

</style>