<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label">Name</label>
      <input class="form_input" type="text" v-model="name"/>
    </div>
    <div class="error" v-if="!$v.name.minLength">Name is too short</div>
    <div class="error" v-if="!$v.name.required">Name is required</div>
    <div class="form-group">
      <label class="form-label">Select Gender</label>
      <select id="gender" name="gender" class="form-control"
              type="text" v-model="gender">
        <option value="null" selected disabled hidden>Choose Gender</option>
        <option value="Man">Man</option>
        <option value="Woman">Woman</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Select Rank</label>
      <select id="rank" name="rank" class="form-control"
              type="text" v-model="rank">
        <option value="null" selected disabled hidden>Evaluate Rank</option>
        <option value="Lecture">Lecture</option>
        <option value="Associate Professor">Associate Professor</option>
        <option value="Professor">Professor</option>
      </select>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
      <label class="form-control-label" name="age">Age (Enter a number between 22 and 80)</label>
      <input class="form__input" type="decimal" v-model.trim="age"/>
    </div>
    <div class="error" v-if="!$v.age.between">Age must be between 22 and 80</div>
    <div class="error" v-if="!$v.age.required">Age is required</div>
    <div class="form-group">
      <label class="form-label">Select Grade</label>
      <select id="grade" name="grade" class="form-control"
              type="text" v-model="grade">
        <option value="null" selected disabled hidden>Choose Grade</option>
        <option value="1">Grade 1</option>
        <option value="2">Grade 2</option>
        <option value="3">Grade 3</option>
        <option value="4">Grade 4</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Hobbies</label>
      <input class="form_input" type="text" v-model="hobbies"/>
    </div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ teacherBtnTitle }}</button>
    </p>
    <p>
      <a href="#/teachers" class="btn btn-primary btn1" role="button">Manage Teachers</a>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Success</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Try again.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Waiting...</p>
  </form>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, between, minLength } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'FormData',
  props: ['teacherBtnTitle', 'teacher'],
  data () {
    return {
      messagetitle: ' Add a Teacher ',
      name: this.teacher.name,
      age: this.teacher.age,
      gender: this.teacher.gender,
      grade: this.teacher.grade,
      rank: this.teacher.rank,
      hobbies: this.teacher.hobbies,
      upvotes: 0,
      submitStatus: null
    }
  },
  validations: {
    age: {
      required,
      between: between(22, 80)
    },
    name: {
      required,
      minLength: minLength(2)
    }
  },
  methods: {
    submit () {
      console.log('Success')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var teacher = {
            name: this.name,
            age: this.age,
            gender: this.gender,
            grade: this.grade,
            rank: this.rank,
            hobbies: this.hobbies,
            upvotes: this.upvotes
          }
          this.teacher = teacher
          console.log('Submitting in TeacherForm : ' +
                            JSON.stringify(this.teacher, null, 5))
          this.$emit('teacher-is-created-updated', this.teacher)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .add-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
