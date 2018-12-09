<template>
<div>
    <div v-if="showConfirm == true">
        <p>Confirm?</p>
        <button v-on:click="deleteNote()" class="btn">Delete</button>
        <router-link :to="{ name: 'Notes'}">
             <button class="btn btn-primary">Back</button>
        </router-link>
    </div>
    
            <div class=" mt-5" v-if="showConfirm == false">
                    <b-alert show variant="success">
                    <h4 class="alert-heading">Note deleted with success!</h4>
                    <p>
                        Now, you can see it in the notes table
                    </p>
                    </b-alert>
            </div>
        <router-link :to="{ name: 'Notes'}">
             <button v-if="showConfirm == false" class="btn btn-primary">Back</button>
        </router-link>

</div>
</template>
<script>
import axios from 'axios'
export default {
    props: ['note'],
    data() {
        return {
            showConfirm: true
        }
    },
  
    methods:{
        deleteNote() {
            axios.delete('/api/v1/notes/' + this.$props.note.id, {
        })
        .then(function (response) {
                //update the employees table (better use socket.io)
        
                })
            .catch(function (error) {
                    console.log(error);
                });
        this.showConfirm = false
   },
    }
    
}
</script>