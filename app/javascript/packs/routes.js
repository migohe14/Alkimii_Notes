import Vue from 'vue'
import Router from 'vue-router'
import Notes from './components/notes.vue'
import CreateNote from './components/createnote'
import UpdateNote from './components/updatenote'
import DeleteNote from './components/deletenote'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Notes',
      component: Notes
    },
    {                         
    path: '/createnote',
    name: 'CreateNote',
    component: CreateNote
   },
   {                         
    path: '/deletenote',
    name: 'DeleteNote',
    props: true,
    component: DeleteNote
   },
   {                         
    path: '/updatenote',
    name: 'UpdateNote',
    props: true,
    component: UpdateNote
   }
  ]
})