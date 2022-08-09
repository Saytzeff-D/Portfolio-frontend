<template>
    <div>
        <div class="form-row">
                <div class="form-group col">
                    <input class="form-control" placeholder="Duration" v-model="duration" />
                </div>
                <div class="form-group col">
                    <input class="form-control" placeholder="Expert Career" />
                </div>
            </div>
            <button class="btn btn-danger">Add Expertise</button>
    </div>
</template>

<script>
export default {
    name: 'MyExpertise',
    data(){
        return{
            duration: '',
            expert: ''
        }
    }
}
</script>