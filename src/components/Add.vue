<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <student-form :student="student" studentBtnTitle="Add a Student"
                         @student-is-created-updated="submitStudent"></student-form>
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
      student: {name: 'Jim', age: 22, gender: 'Boy', grade: 3, performance: 'Good', hobbies: 'Go'},
      messagetitle: ' Add a student '
    }
  },
  components: {
    'student-form': StudentForm
  },
  methods: {
    submitStudent: function (student) {
      studentservice.postStudent(student)
        .then(response => {
          this.$toast('Success!', {
            duration: 1000,
            location: 'center',
            toastStyle: {
              height: '200px',
              width: '300px'
            }
          })
          console.log(response)
        })
    }
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
