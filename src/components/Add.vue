<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <student-form :student="student" studentBtnTitle="Make Student"
                         @student-is-created-updated="submitStudent"></student-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import studentservice from '@/services/studentservice'
import StudentForm from '@/components/StudentForm'

export default {
  data () {
    return {
      student: {name: 'Jim', age: 20, gender: 0, grade: 3, performance: '1', hobbies: 'Go', message: ''},
      messagetitle: ' Add a student '
    }
  },
  components: {
    'student-form': StudentForm
  },
  methods: {
    submitDonation: function (student) {
      studentservice.postStudent(student)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
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
