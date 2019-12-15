<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="teachers" :options="options">
        <a slot="upvote" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="upvote(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editTeacher(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteTeacher(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import studentservice from '@/services/studentservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
import {Alert, Confirm, Toast, Loading} from 'wc-messagebox'
import 'wc-messagebox/style.css'
Vue.use(Alert)
Vue.use(Loading)
Vue.use(Confirm)
Vue.use(Toast)

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Teachers',
  data () {
    return {
      messagetitle: 'Teachers List ',
      teachers: [],
      props: ['_id'],
      columns: ['_id', 'name', 'age', 'gender', 'grade', 'rank', 'hobbies', 'upvotes', 'upvote', 'edit', 'remove'],
      options: {
        perPage: 6,
        filterable: ['name', 'age', 'gender', 'grade', 'rank', 'hobbies', 'upvotes'],
        sortable: ['upvotes'],
        headings: {
          _id: 'ID',
          name: 'Name',
          age: 'Age',
          gender: 'Gender',
          grade: 'Grade',
          rank: 'Rank',
          hobbies: 'Hobbies',
          upvotes: 'Upvotes'
        }
      }
    }
  },
  created () {
    this.loadTeachers()
  },
  methods: {
    loadTeachers: function () {
      studentservice.fetchTeachers()
        .then(response => {
          this.teachers = response.data
          console.log(this.teachers)
        })
    },
    upvote: function (id) {
      studentservice.upvoteTeacher(id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.loadTeachers()
          console.log(response)
        })
    },
    editTeacher: function (id) {
      this.$toast('Welcome to the Edit Page', {
        duration: 1000,
        location: 'center',
        toastStyle: {
          height: '200px',
          width: '300px'
        }
      })
      this.$router.params = id
      this.$router.push('/edit1')
    },
    deleteTeacher: function (id) {
      console.log(id)
      studentservice.deleteTeacher(id)
        .then(response => {
          this.loadTeachers()
          this.$alert({
            title: 'Alert',
            content: 'Delete Successfully',
            btnText: 'OK'
          })
          this.$router.push({path: '#/teachers'})
        })
    }
    // deleteStudent: function (id) {
    //   this.$swal({
    //     title: 'Are you totaly sure?',
    //     text: 'You can\'t Undo this action',
    //     type: 'warning',
    //     showCancelButton: true,
    //     confirmButtonText: 'OK Delete it',
    //     cancelButtonText: 'Cancel',
    //     showCloseButton: true
    //     // showLoaderOnConfirm: true
    //   }).then((result) => {
    //     console.log('SWAL Result : ' + result.value)
    //     if (result.value === true) {
    //       studentservice.deleteStudent(id)
    //         .then(response => {
    //           // JSON responses are automatically parsed.
    //           this.message = response.data
    //           console.log(this.message)
    //           this.loadStudents()
    //           // Vue.nextTick(() => this.$refs.vuetable.refresh())
    //           this.$swal('Deleted', 'You successfully deleted this Student ' + JSON.stringify(response.data, null, 5), 'success')
    //         })
    //         .catch(error => {
    //           this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
    //           this.errors.push(error)
    //           console.log(error)
    //         })
    //     } else {
    //       console.log('SWAL Else Result : ' + result.value)
    //       this.$swal('Cancelled', 'Your Student still Counts!', 'info')
    //     }
    //   })
    // }
  }
}
</script>

<style scoped>
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
