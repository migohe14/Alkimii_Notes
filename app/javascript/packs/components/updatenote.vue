<template>
    <div class="row">
       <div class="col-sm-6">
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
                                :placeholder="this.title">
                    </b-form-input>
                </b-form-group>
                 <b-form-group>
                    <b-form-input 
                                type="date"
                                v-model="date"
                                required
                                :placeholder="this.date">
                    </b-form-input>
                </b-form-group>
            
                <b-button  v-on:click="updateNote()" variant="primary">Update</b-button>
                </b-form>
                <div class=" mt-5" v-if="showAlert === true">
                    <b-alert show variant="success">
                    <h4 class="alert-heading">Note updated with success!</h4>
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
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['note'],
    data() {
        return {
            title: this.$props.note.title,
            date: this.$props.note.date,
            
        showAlert: false,
        showIncompleted: false
        }
    },
    methods:{
        updateNote() {
            if(this.title !== null && this.date !== null) {
                axios.put('/api/v1/notes/' + this.$props.note.id, {
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
            } else {
                this.showIncompleted = true
            }
            // this.title = null
            // this.date = null
                            
        },
    }
}
</script>