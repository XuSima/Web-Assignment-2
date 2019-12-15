<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <student-form :student="student" studentBtnTitle="Update Student"
                          @student-is-created-updated="updateStudent"></student-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import studentservice from '@/services/studentservice'
import StudentForm from '@/components/StudentForm'
import Vue from 'vue'
import {Alert, Confirm, Toast, Loading} from 'wc-messagebox'
import 'wc-messagebox/style.css'
Vue.use(Alert)
Vue.use(Loading)
Vue.use(Confirm)
Vue.use(Toast)

export default {
  data () {
    return {
      student: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Edit Student '
    }
  },
  components: {
    'student-form': StudentForm
  },
  created () {
    this.getStudent()
  },
  methods: {
    getStudent: function () {
      studentservice.fetchStudent(this.$router.params)
        .then(response => {
          // this.student = response.data
          this.temp = response.data
          this.student = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting Student in Edit: ' + JSON.stringify(this.student, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateStudent: function (student) {
      studentservice.editStudent(this.$router.params, student)
        .then(response => {
          this.$toast('Success!', {
            duration: 1000,
            location: 'center',
            toastStyle: {
              height: '200px',
              width: '300px'
            }
          })
          // JSON responses are automatically parsed.
          this.getStudent()
          console.log(response)
        })
    }

    // updateStudent: function (student) {
    //   console.log('Before PUT ' + JSON.stringify(student, null, 5))
    //   studentservice.putStudent(this.$router.params, student)
    //     .then(response => {
    //       console.log(response)
    //       console.log('AFTER PUT ' + JSON.stringify(student, null, 5))
    //     })
    //     .catch(error => {
    //       this.errors.push(error)
    //       console.log(error)
    //     })
    // }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
