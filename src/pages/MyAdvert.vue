<template>
    <div id="contact">
        <section class="bg-dark text-center">
            <p class="font-weight-bolder text-white h2 py-4">I'm available for freelance</p>
        <div class="section container">
            <div class="row text-center">
                <div class="col-md-6 col-lg-3">
                    <div class="row ">
                        <div class="col-5 text-right text-light border-right py-3">
                            <div class="m-auto"><i class="fa fa-clock-o icon-xl"></i></div>
                        </div>
                        <div class="col-7 text-left py-3">
                            <h1 class="text-danger font-weight-bold font40">500+</h1>
                            <p class="text-light mb-1">Hours Worked</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="row">
                        <div class="col-5 text-right text-light border-right py-3">
                            <div class="m-auto"><i class="fa fa-github icon-xl"></i></div>
                        </div>
                        <div class="col-7 text-left py-3">
                            <h1 class="text-danger font-weight-bold font40">700+</h1>
                            <p class="text-light mb-1">GitHub Commits</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="row">
                        <div class="col-5 text-right text-light border-right py-3">
                            <div class="m-auto"><i class="fa fa-file-o icon-xl"></i></div>
                        </div>
                        <div class="col-7 text-left py-3">
                            <h1 class="text-danger font-weight-bold font40">40+</h1>
                            <p class="text-light mb-1">Exisiting Repository</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="row">
                        <div class="col-5 text-right text-light border-right py-3">
                            <div class="m-auto"><i class="fa fa-star-o icon-xl"></i></div>
                        </div>
                        <div class="col-7 text-left py-3">
                            <h1 class="text-danger font-weight-bold font40">15+</h1>
                            <p class="text-light mb-1">Project Stars</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="d-flex justify-content-center py-5">
                <button data-toggle="modal" data-target="#hireMe" class="btn btn-danger font-weight-bolder px-5 m-2">Hire Me</button>
                <button v-on:click="explore()" class="btn btn-outline-danger m-2">Explore My Project</button>
            </div>
    </section>

    <div class="modal fade" id="hireMe">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="h2">Hire Me</p>
                    <button class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <HireMe />
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import HireMe from './HireMe.vue';
export default {
    name: "MyAdvert",
    components: { HireMe },
    methods:{
        explore(){
            this.$router.push('/explore')
        }
    }
}
</script>

<style scoped>
.section {
  /* padding-top: 80px; */
}
.icon-xl {
  font-size: 65px;
}
</style>