<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <teacher-form :teacher="teacher" teacherBtnTitle="Update Teacher"
                          @teacher-is-created-updated="updateTeacher"></teacher-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import studentservice from '@/services/studentservice'
import TeacherForm from '@/components/TeacherForm'
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
      teacher: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Edit Teacher '
    }
  },
  components: {
    'teacher-form': TeacherForm
  },
  created () {
    this.getTeacher()
  },
  methods: {
    getTeacher: function () {
      studentservice.fetchTeacher(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.teacher = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting Teacher in Edit: ' + JSON.stringify(this.teacher, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateTeacher: function (teacher) {
      studentservice.editTeacher(this.$router.params, teacher)
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
          this.getTeacher()
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
