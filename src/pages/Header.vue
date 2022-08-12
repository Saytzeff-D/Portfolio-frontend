<template>
    <header class="header text-justify mt-0" v-if="profile.length !== 0" v-bind:style="{backgroundImage: 'url(' + profile[0].headerImg + ')'}" >
        <div class="container">
            <ul class="social-icons pt-3">
                <li class="social-item"><a target="_blank" class="social-link text-light" href="https://facebook.com/Saytzeff.D/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li class="social-item"><a target="_blank" class="social-link text-light" href="https://twitter.com/DavifyRx"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li class="social-item"><a target="_blank" class="social-link text-light" href="mailto:ololadedavid15@gmail.com"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                <li class="social-item"><a target="_blank" class="social-link text-light" href="https://instagram.com/saytzeff_d"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li class="social-item"><a target="_blank" class="social-link text-light" href="https://github.com/Saytzeff-D"><i class="fa fa-github" aria-hidden="true"></i></a></li>
            </ul>  
            <div class="header-content">
                <h4 class="header-subtitle" >Hello, I am</h4>
                <h1 class="header-title"> {{profile[0].fullName}} </h1>
                <h6 class="header-mono" > {{profile[0].career}} </h6>
                <button class="btn btn-primary btn-rounded"><i class="ti-printer pr-2"></i>Print Resume</button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'PageHeader',
    computed: {
        profile(){
            return this.$store.getters.fetchProfile
        }
    }
}
</script>

<style scoped>
.social-icons {
  list-style-type: none;
  padding-left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  max-width: 180px;
}

.social-icons .social-link {
  font-size: 18px;
}

.social-icons .social-link:hover {
  color: #F85C70;
}
.header {
  position: relative;
  height: 80vh;
  min-height: 600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #fff;
}
.header .container {
  position: relative;
  height: 100%;
}

.header .header-content {
  width: 100%;
  position: absolute;
  left: 0;
  top: 55%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  color: #fff;
}

.header .header-content .header-subtitle {
  font-weight: 200;
  font-size: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
}

.header .header-content .header-title {
  font-size: calc(40px + (120 - 40) * ((100vw - 300px) / (1600 - 300)));
  font-weight: bold;
  line-height: .7;
  margin-bottom: 25px;
  color: inherit;
}

.header .header-content .header-mono {
  letter-spacing: 5px;
  font-weight: 500;
  font-size: calc(12px + (19 - 12) * ((100vw - 300px) / (1600 - 300)));
  margin-bottom: 40px;
}
@media (max-width: 767.98px) {
  .header {
    height: 500px;
    min-height: 500px;
  }
  .header .social-icons {
    margin: auto;
  }
  .header .header-content {
    padding: 20px;
  }
  .header .header-content .header-mono {
    letter-spacing: 2px;
  }
}

.header-title {
  font-size: 2.4rem;
  font-weight: bold;
  opacity: .8;
  color: #212529;
}

.header-mini {
  min-height: 24rem;
  height: 24rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  text-align: center;
  padding: 1rem;
  background: #fcbec6;
}

</style>