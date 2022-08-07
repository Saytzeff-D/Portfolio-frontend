<template>
    <div class="container mt-5 p-5 text-justify">
        <p class="h4 font-weight-bold py-1">Add Your Profile Details</p>
        <div class="form-row">
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Portfolio Banner</label>
                <input type="file" class="form-control" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Your Picture</label>
                <input type="file" class="form-control" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Full Name</label>
                <input type="text" class="form-control" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Career Prospect</label>
                <input type="text" class="form-control" />
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Your Email</label>
                <input type="email" class="form-control" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Your Mobile</label>
                <input type="text" class="form-control" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Date of Birth</label>
                <input type="text" class="form-control" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Address</label>
                <input type="text" class="form-control" />
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Facebook </label>
                <input type="text" class="form-control" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Twitter</label>
                <input type="text" class="form-control" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">Instagram</label>
                <input type="text" class="form-control" />
            </div>
            <div class="form-group col-md-3 col-6">
                <label class="font-weight-bold">GitHub</label>
                <input type="text" class="form-control" />
            </div>
        </div>

        <div class="d-flex">
            <button class="btn btn-danger mx-2">Save</button>
            <button class="btn btn-info mx-2">Go to Preview</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminProfile'
}
</script>