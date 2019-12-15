<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <teacher-form :teacher="teacher" teacherBtnTitle="Add a Teacher"
                        @teacher-is-created-updated="submitTeacher"></teacher-form>
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
      teacher: {name: 'Lucy', age: 28, gender: 'Woman', grade: 4, rank: 'Lecture', hobbies: 'Reading'},
      messagetitle: ' Add a teacher '
    }
  },
  components: {
    'teacher-form': TeacherForm
  },
  methods: {
    submitTeacher: function (teacher) {
      studentservice.postTeacher(teacher)
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
