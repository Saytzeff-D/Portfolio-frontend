<template>
    <div class="text-justify mt-5 p-5">
        <p class="h2 font-weight-bold">Your Resume</p>
        <div class="container">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a href="#expertise" class="nav-link active" data-toggle="tab">
                        Expertise
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#education" class="nav-link" data-toggle="tab">
                        Education
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#skills" class="nav-link" data-toggle="tab">
                        Skills
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#language" class="nav-link" data-toggle="tab">
                        Language
                    </a>
                </li>
            </ul>

            <div class="tab-content">
                <div id="expertise" class="container tab-pane active py-2">
                    <p class="font-weight-bold">What are your expertise?</p>
                    <MyExpertise />
                </div>
                <div id="education" class="container tab-pane py-2">
                    <p class="font-weight-bold">Education History</p>
                    <MyEducation />
                </div>
                <div id="skills" class="container tab-pane py-2">
                    <p class="font-weight-bold">Skills</p>
                    <MySkills />
                </div>
                <div id="language" class="container tab-pane py-2">
                    <p class="font-weight-bold">Language</p>
                    <MyLanguage />
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
import MyExpertise from '../views/Expertise.vue'
import MyEducation from '../views/Education.vue'
import MySkills from '../views/Skills.vue'
import MyLanguage from '../views/Language.vue'
export default {
    components: { MyExpertise, MyEducation, MySkills, MyLanguage },
    name: 'AdminResume'
}
</script>