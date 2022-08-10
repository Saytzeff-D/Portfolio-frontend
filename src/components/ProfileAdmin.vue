<template>
    <div class="container mt-5 p-5 text-justify">
        <p class="h2 font-weight-bold py-1">Your Profile</p>
        <div class="container">
            <ul class="nav nav-tabs">
                <li class="nav-item active">
                    <a href="#profile" class="nav-link" data-toggle="tab">
                        Profile
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#siteImg" class="nav-link" data-toggle="tab">
                        Site Images
                    </a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="profile">
                    <AddProfile />
                </div>
                <div class="tab-pane" id="siteImg">
                    <SiteImg />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddProfile from '@/views/AddProfile.vue';
import SiteImg from '../views/SiteImg.vue';
export default {
    name: "AdminProfile",
    components: { AddProfile, SiteImg },
    mounted(){
        this.$store.dispatch('myProfile')
    }
}
</script>