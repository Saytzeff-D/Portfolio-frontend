<template>
    <div>
        <div class="w3-bar w3-top w3-pink w3-large header">
                <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" @click="openSideBar()" ><i class="fa fa-bars"></i></button>
                <span class="w3-bar-item w3-left font-weight-bold py-3">My Portfolio Admin</span>
                <span data-toggle='modal' data-target='#logoutModal' class='w3-right p-2 w3-hide-small font-weight-bold'>Logout <i class='fa fa-power-off'></i></span>
            </div>
            <!-- {/* SideNav Menu */} -->
            <nav class="w3-sidebar w3-collapse w3-grey w3-animate-left mySideBar" id="mySideBar" >
                <!-- <br /> -->
                <div class="w3-container w3-row">
                    <div class="w3-col s4">
                        <img alt='pic'/>
                    </div>
                    <div class="w3-col s8 w3-bar">
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
                    <a href='/patient/dashboard' class="w3-bar-item w3-button w3-padding"><i class="fa fa-users fa-fw"></i> Overview</a> 
                    <a href='/patient/appointment' class="w3-bar-item w3-button w3-padding"><i class="fa fa-calendar fa-fw"></i>  My Appointments</a> 
                    <a href='/patient/pharmacy' class="w3-bar-item w3-button w3-padding"><i class="fa fa-users fa-fw"></i>  Pharmacy</a> 
                    <a href='/patient/ambulance' class="w3-bar-item w3-button w3-padding"><i class="fa fa-ambulance fa-fw"></i>  Ambulance</a> 
                    <a href='/patient/liveChat' class="w3-bar-item w3-button w3-padding"><i class="fa fa-comment-o fa-fw"></i> Live Chat</a>
                    <p data-toggle='modal' data-target='#logoutModal' class="w3-bar-item w3-button w3-padding w3-hide-large"><i class="fa fa-power-off fa-fw"></i>  Logout</p> 
                </div>
            </nav>

            <!-- {/* Overlay Effect when openong sidebar */} -->
            <div class="w3-overlay w3-hide-large w3-animate-opacity sideBarOverLay" @click="openSideBar()" title="close side menu" id="overlay"></div>

            <!-- {/* Page Content */} -->
            <div class="w3-main pageContent"></div>
    </div>
</template>

<script>
export default {
    name: 'MyAdmin',
    data(){
        return{
            
        }
    },
    methods: {
        openSideBar(){
            let count = 0
            if(count % 2 == 0){
                document.getElementById('mySideBar').style.display = 'block'
                document.getElementById('overlay').style.display = 'block'
                count++
            }else{
                document.getElementById('mySideBar').style.display = 'none'
                document.getElementById('overlay').style.display = 'none'
                count++
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
        width: 300px;
    }
    .pageContent{
        margin-left: 300px;
        margin-top: 43px
    }
    .sideBarOverLay{
        cursor: pointer;
    }
</style>