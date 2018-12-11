<template>
 <div>
   <div class="row">
    <div class="col mb-3">

       <div>
         <input type="text" v-model="noteSearched" placeholder="Search title.."/>
      </div>
 
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
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody v-for="note in  filteredList">
      <tr>
        <td>{{ note.title }}</td>
        <td>{{ note.date }}</td> 
        <td>
          <router-link :to="{ name: 'DeleteNote', params: {note: note } }">
           <button class="btn btn-danger">Delete</button>
        </router-link>
        
        <router-link :to="{ name: 'UpdateNote', params: {note: note } }">
          <button class="btn btn-success">Update</button>
        </router-link>
          
        </td>   
          
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
   noteSearched: '',
  }
 },
 created() {
  axios.get('/api/v1/notes/') 
  .then(response => {
    this.notes = response.data
   })
 .catch(e => {
     console.log(e)
  })
 },
   computed: {
    filteredList() {

      return this.notes.filter(note => {
        return note.title.toLowerCase().includes(this.noteSearched.toLowerCase())
      })
    }
  },
 methods: {
   
 }
}
</script>