<template>
    <div>
        <section class="section" v-bind:style="[layout.bgColor == 'black' ? {backgroundColor: layout.bgColor, color: layout.textColor} : '']" id="resume">
        <div class="container">
            <h2 class="mb-5"><span class="text-danger">My</span> Resume</h2>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="card" v-bind:class="[layout.bgColor == 'black' ? 'bg-dark' : '']">
                       <div class="card-header">
                            <div class="mt-2">
                                <h4>Expertise</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body" v-bind:class="[layout.bgColor == 'black' ? 'text-white' : '']">
                            <div class="" v-for="(each, i) in expert" :key="i">
                                <h6 class="title text-danger">{{each.duration}}</h6>
                                <p>{{each.expert}}</p>
                                <p class="subtitle">{{each.expertDesc}}</p>
                                <hr v-if="i !== expert.length - 1">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card" v-bind:class="[layout.bgColor == 'black' ? 'bg-dark' : '']">
                       <div class="card-header">
                            <div class="mt-2">
                                <h4>Education</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body" v-bind:class="[layout.bgColor == 'black' ? 'text-white' : '']">
                            <div class="" v-for="(each, i) in education" :key="i">
                                <h6 class="title text-danger">{{each.dateObtained}}</h6>
                                <p>{{each.cert}}</p>
                                <p class="subtitle">{{each.schoolObtained}}</p>
                                <hr>                            
                            </div>
                        </div>
                    </div>
                    <div class="card" v-bind:class="[layout.bgColor == 'black' ? 'bg-dark' : '']">
                       <div class="card-header">
                            <div class="pull-left">
                                <h4 class="mt-2">Languages</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body pb-2" v-bind:class="[layout.bgColor == 'black' ? 'text-white' : '']">
                            <div class="" v-for="(each, i) in language" :key="i">
                                <h6>{{each.language}}</h6>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-danger" role="progressbar" v-bind:style="{width: each.grade}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card" v-bind:class="[layout.bgColor == 'black' ? 'bg-dark' : '']">
                       <div class="card-header">
                            <div class="pull-left">
                                <h4 class="mt-2">Skills</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body pb-2"   v-bind:class="[layout.bgColor == 'black' ? 'text-white' : '']">
                            <div class="" v-for="(each, i) in skills" :key="i">
                                <h6>{{each.skill}}</h6>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-danger" role="progressbar" v-bind:style="{width: each.grade}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
    name: 'MyResume',
    props: {
       expert: Array,
       education: Array,
       skills: Array,
       language: Array
    },
    computed: {
        layout(){
            return this.$store.getters.getLayout
        }
    }
}
</script>

<style scoped>
.section {
  padding: 80px 0;
}

.section.bg-custom-gray {
  background: rgba(242, 244, 247, 0.15);
}
</style>