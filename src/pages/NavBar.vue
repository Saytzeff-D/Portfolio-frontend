<template>
    <div v-bind:class="[isSticky ? stickyClass : '']">
        <nav class="navbar navbar-expand-lg shadow-lg" v-bind:class="[layout.bgColor == 'black' ? 'navbar-dark bg-dark' : 'navbar-light bg-white']" data-spy="affix" data-offset-top="510">
        <div class="container">
            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a href="/" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">About</a>
                    </li>
                </ul>
                <ul class="navbar-nav brand">
                    <img v-if="profile.length !== 0" :src="profile[0].photo" alt="" class="brand-img">
                    <li class="brand-txt" v-if="profile.length !== 0">
                        <h5 v-bind:class="[layout.bgColor == 'black' ? 'text-light' : '']">{{profile[0].fullName}}</h5>
                        <div class="brand-subtitle">{{profile[0].career}}</div>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                     <li class="nav-item">
                        <a href="#resume" class="nav-link">Resume</a>
                    </li>
                    <li class="nav-item last-item">
                        <a href="#contact" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        profile: Array
    },
    computed: {
      layout(){
        return this.$store.getters.getLayout
      }
    },
    data(){
        return{
            isSticky: false,
            stickyClass: 'sticky-top',
            scrollPosition: 0
        }
    },
    methods: {
        handleScroll(){
            this.scrollPosition = window.scrollY
            this.scrollPosition >= 513 ? this.isSticky = true : this.isSticky = false
        }
    },
    mounted(){
        // this.$store.dispatch('myProfile')
    },
    created(){
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
.navbar .brand .brand-img {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -weblit-transform: translate(-50%, -50%);
  border: 10px solid white;
  -webkit-transition: .5s !important;
  transition: .5s !important;
  -weblit-transition: .5s !important;
  z-index: 2;
  box-shadow: 0 5px 1px rgba(128, 128, 128, 0.13);
  width: 170px;
  border-radius: 50%;
}
.navbar {
  box-shadow: 0 1px 10px rgba(54, 54, 54, 0.18);
  -webkit-box-shadow: 0 1px 10px rgba(54, 54, 54, 0.18);
}

.navbar .navbar-nav:first-child .nav-item:first-child .nav-link {
  padding-left: 0;
}

.navbar .navbar-nav:last-child .nav-item:last-child .nav-link {
  padding-right: 0;
}

.navbar .nav-link {
  font-weight: bold;
  font-family: "Dosis","Open Sans",sans-serif;
}

.navbar .nav-link.active {
  color: #F85C70 !important;
}

.navbar .brand {
  text-align: center;
}

.navbar .brand .brand-txt {
  position: relative;
  bottom: -20px;
  opacity: 0;
  -webkit-transition: 1s;
  transition: 1s;
  -weblit-transition: 1s;
  z-index: 1;
}

.navbar .brand .brand-txt .brand-subtitle {
  font-size: 13px;
  color: #888;
}

@media (max-width: 991.98px) {
  .navbar .brand {
    display: none;
  }
}

.navbar.affix .brand-txt {
  bottom: 0;
  opacity: 1;
}
.sticky-top {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1020;
    -webkit-animation: .95s ease-in-out 0s normal none 1 running fadeInDown;
    animation: .95s ease-in-out 0s normal none 1 running fadeInDown;
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.navbar.affix .brand-img {
  top: -10px;
  opacity: 0;
}
</style>