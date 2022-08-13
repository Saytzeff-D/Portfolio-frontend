<template>
    <div>
        <div class="container-fluid">
        <div id="about" class="row about-section">
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">Who am I ?</h3>
                <span class="line mb-5"></span>
                <h5 class="mb-3" v-if="profile.length !== 0">A {{profile[0].career}} Located In {{profile[0].location}}</h5>
                <p class="mt-20" v-if="profile.length !== 0" >{{profile[0].bio}}</p>
                <button class="btn btn-outline-danger"><i class="icon-down-circled2 "></i>Download My CV</button>
            </div>
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">Personal Info</h3>
                <span class="line mb-5"></span>
                <ul class="mt40 info list-unstyled" v-if="profile.length !== 0">
                    <li class="py-1 text-muted"><span class="font-weight-bold">Birthdate</span> : {{profile[0].dob}}</li>
                    <li class="py-1 text-muted"><span class="font-weight-bold">Email</span> : {{profile[0].email}}</li>
                    <li class="py-1 text-muted"><span class="font-weight-bold">Phone</span> : {{profile[0].mobile}}</li>
                    <li class="py-1 text-muted"><span class="font-weight-bold">Twitter</span> : {{profile[0].twi}} </li>
                    <li class="py-1 text-muted"><span class="font-weight-bold">Address</span> :  {{profile[0].address}}</li>
                </ul>
                <ul class="social-icons pt-3">
                    <li class="social-item"><a class="social-link text-danger" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link text-danger" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link text-danger" href="#"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link text-danger" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link text-danger" href="#"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                </ul>  
            </div>
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">My Expertise</h3>
                <span class="line mb-5"></span>
                <div class="row" v-for="(each, i) in expert" :key="i">
                    <div class="col-1 text-danger pt-1"><i class="fa fa-widget icon-lg"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>{{each.expert}}</h6>
                        <p class="subtitle">{{each.expertDesc}}</p>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
    props: {
        profile: Array,
        expert: Array
    }
}
</script>

<style scoped>
.about-section {
  border-bottom: 1px solid #dee2e6;
}

.about-section .about-card {
  padding: 60px;
  border-right: 1px solid #dee2e6;
}

.about-section .about-card:last-child {
  border-right: none;
}
.line {
  display: block;
  width: 25px;
  height: 1.5px;
  background-color: #F85C70;
}
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
</style>