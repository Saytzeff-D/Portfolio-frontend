<template>
    <div class="mt-5 p-5">
        <div class="container text-justify">
            <p class="h1">Projects</p>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a href="#addProject" data-toggle="tab" class="nav-link active">Add your Project</a>
                </li>
                <li class="nav-item">
                    <a href="#viewProject" data-toggle="tab" class="nav-link">View Project</a>
                </li>
            </ul>

            <div class="tab-content">
                <div id="addProject" class="container tab-pane active py-2">
                    <p class="font-weight-bold">Add a Project</p>
                    <AddProject />
                </div>
                <div id="viewProject" class="container tab-pane py-2" >
                    <p class="font-weight-bold">All Projects</p>
                    <ProjectList />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddProject from "../views/AddProject.vue";
import ProjectList from "@/views/ProjectList.vue";
export default {
    name: "ProjectAdmin",
    components: { AddProject, ProjectList }
}
</script>