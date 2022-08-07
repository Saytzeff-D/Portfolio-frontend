<template>
    <div class="text-justify mt-5 p-5">
        <p class="h2 font-weight-bold">Your Resume</p>
        <div class="container">
            <p class="font-weight-bold">What are your expertise?</p>
            <div class="form-row">
                <div class="form-group col">
                    <input class="form-control" placeholder="Duration" />
                </div>
                <div class="form-group col">
                    <input class="form-control" placeholder="Expert Career" />
                </div>
            </div>
            <button class="btn btn-danger">Add Expertise</button>
        </div>
        <div class="container">
            <p class="font-weight-bold">Education History</p>
            <div class="form-row">
                <div class="form-group col">
                    <input class="form-control" placeholder="Certificate" />
                </div>
                <div class="form-group col">
                    <input class="form-control" placeholder="Date Obtained" />
                </div>
            </div>
            <button class="btn btn-danger">Save</button>
        </div>
        <div class="container">
            <p class="font-weight-bold">Skills</p>
            <div class="form-row">
                <div class="form-group col-5">
                    <input class="form-control" placeholder="Skills" />
                </div>
                <div class="form-group col-3">
                    <input class="form-control" placeholder="Grade in Percentage" />
                </div>
            </div>
            <button class="btn btn-danger">Add Skill</button>
        </div>
        <div class="container">
            <p class="font-weight-bold">Language</p>
            <div class="form-row">
                <div class="form-group col-5">
                    <input class="form-control" placeholder="Language" />
                </div>
                <div class="form-group col-3">
                    <input class="form-control" placeholder="Grade in Percentage" />
                </div>
            </div>
            <button class="btn btn-danger">Add Language</button>
        </div>
        <hr/>
    </div>
</template>

<script>
export default {
    name: 'AdminResume'
}
</script>