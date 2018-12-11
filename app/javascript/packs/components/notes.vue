<template>
 <div>
   <div class="row">
    <div class="col mb-3">
      <b-form>
          <b-form-group>
              <!-- <b-form-select v-model="title" class="mb-3">
              </b-form-select> -->
          </b-form-group> 
      </b-form>
  </div>
   <div class="col mb-3">
        <router-link :to="{name:'CreateNote'}">
          <button class="btn btn-primary">Create note</button>
        </router-link>
   </div>
 
  </div>
  <table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Date</th>
      </tr>
    </thead>
    <tbody v-for="note in notes" :key="note.id">
      <tr>
        <td>{{ note.title }}</td>
        <td>{{ note.date }}</td>     
      </tr>
      <tr>
        <router-link :to="{ name: 'DeleteNote', params: {note: note } }">
           <td><button class="btn btn-danger">Delete</button></td>
        </router-link>
        <router-link :to="{ name: 'UpdateNote', params: {note: note } }">
          <td><button class="btn btn-success">Update</button></td>
        </router-link>
      </tr>

    </tbody>
  </table>
 </div>
</template>

<script>
import axios from 'axios'
export default {
 data() {
  return {
   notes: [],
  }
 },
 created() {
  axios.get('/api/v1/notes/') 
  .then(response => {
    this.notes = response.data
   console.log(response.data)
   })
 .catch(e => {
     console.log(e)
  })
 },
 methods: {
   
 }
}
</script>