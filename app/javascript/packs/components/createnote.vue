<template>
    <div>
        <div class="mb-3">
            <router-link :to="{name:'Notes'}">
                 <button class="btn btn-secondary">Show notes</button>
            </router-link>
        </div>
            <b-form>
                <b-form-group>
                    <b-form-input 
                                type="text"
                                v-model="title"
                                required
                                placeholder="Title">
                    </b-form-input>
                </b-form-group>
                <b-form-group>
                    <b-form-input 
                                type="date"
                                v-model="date"
                                required
                                placeholder="Date">
                    </b-form-input>
                </b-form-group>
               
                <b-button  v-on:click="createNote()" variant="primary">Create</b-button>
                </b-form>
                <div class=" mt-5" v-if="showAlert === true">
                    <b-alert show variant="success">
                    <h4 class="alert-heading">Note created with success!</h4>
                    <p>
                        Now, you can see it in the notes table
                    </p>
                    </b-alert>
                </div>
                <div class=" mt-5" v-if="showIncompleted === true">
                    <b-alert show variant="danger">
                    <h4 class="alert-heading">Incompleted!</h4>
                    <p>
                        it's necessary to fill in all the data
                    </p>
                    </b-alert>
                </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            title: null,
            date: null,
           
        showAlert: false,
        showIncompleted: false
        }
    },
    methods:{
        createNote() {
            if(this.note !== null && this.date !== null) {
                axios.post('/api/v1/notes/', {
                    title: this.title,
                    date: this.date, 
                    })
                    .then(function (response) {
                        
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                this.showAlert = true
                this.showIncompleted = false
            } else {
                this.showIncompleted = true
                this.showAlert = false
            }
            this.title = null
            this.date = null                  
        },
    }
}
</script>