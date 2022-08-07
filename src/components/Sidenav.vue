<template>
        <div class="w3-bar w3-top w3-pink w3-large header">
                <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" @click="openSideBar()" ><i class="fa fa-bars"></i></button>
                <span class="w3-bar-item w3-left font-weight-bold py-3">My Portfolio Admin</span>
                <span data-toggle='modal' data-target='#logoutModal' class='w3-right p-2 w3-hide-small font-weight-bold'>Logout <i class='fa fa-power-off'></i></span>
            </div>
            <!-- {/* SideNav Menu */} -->
            <nav class="w3-sidebar w3-collapse w3-white w3-animate-left mySideBar" id="mySideBar" >
                <!-- <br /> -->
                <div class="w3-container w3-row">
                    <div class="w3-col s12 pt-3 w3-bar">
                        <span>Welcome, <strong>User</strong></span><br />
                        <a href="/" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i></a>
                        <a href="/" className="w3-bar-item w3-button"><i className="fa fa-user"></i></a>
                        <a href="/" className="w3-bar-item w3-button"><i className="fa fa-cog"></i></a>
                        <br/><br/>
                    </div>
                </div>                
                <hr>
                <div class="w3-container">
                    <h5>Dashboard</h5>
                </div>
                <div class="w3-bar-block">
                    <router-link :to="{path: '/portfolio/'}" active-class="active" class="w3-bar-item w3-button w3-padding"><i class="fa fa-users fa-fw"></i> Overview </router-link>
                    <router-link :to="{path: '/portfolio/profile'}" active-class="active" class="w3-bar-item w3-button w3-padding"><i class="fa fa-users fa-fw"></i> Your Profile </router-link>
                    <router-link :to="{path: '/portfolio/resume'}" active-class="active" class="w3-bar-item w3-button w3-padding"><i class="fa fa-calendar fa-fw"></i>  Your Resume </router-link>
                    <router-link :to="{path: '/portfolio/project'}" active-class="active" class="w3-bar-item w3-button w3-padding"><i class="fa fa-users fa-fw"></i>  Your Projects </router-link>
                    <router-link :to="{path: '/portfolio/testimonial'}" active-class="active" class="w3-bar-item w3-button w3-padding"><i class="fa fa-ambulance fa-fw"></i>  Add Tesimonial </router-link>
                    <router-link :to="{path: '/portfolio/getInTouch'}" active-class="active" class="w3-bar-item w3-button w3-padding"><i class="fa fa-comment fa-fw"></i> Hired & Contacts </router-link>
                    <p data-toggle='modal' data-target='#logoutModal' class="w3-bar-item w3-button w3-padding w3-hide-large"><i class="fa fa-power-off fa-fw"></i>  Logout</p> 
                </div>
            </nav>

            <!-- {/* Overlay Effect when openong sidebar */} -->
            <div class="w3-overlay w3-hide-large w3-animate-opacity sideBarOverLay" @click="openSideBar()" title="close side menu" id="overlay"></div>

</template>

<script>
  export default {
    name: 'SideNav',
    data(){
        return{
            count: 0            
        }
    },
    methods: {
        openSideBar(){
            if(this.count % 2 == 0){
                document.getElementById('mySideBar').style.display = 'block'
                document.getElementById('overlay').style.display = 'block'
                this.count += 1
            }else{
                document.getElementById('mySideBar').style.display = 'none'
                document.getElementById('overlay').style.display = 'none'
                this.count += 1
            }
        }
    }
}
</script>

<style>
  .header{
        z-index: 4;
    }
    .mySideBar{
        z-index: 3;
        margin-top: 50px;
        /* width: 300px; */
    }
    .sideBarOverLay{
        cursor: pointer;
    }
    .active{
      background-color: red;
      color: white;
    }
    a {
      text-decoration: none;
    }
</style>