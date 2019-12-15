<template>
  <div id="app1" class="hero">
    <h3 class="vue-title">{{messagetitle}}</h3>
    <h2 class="vue-title2">You need to login first</h2>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="submit">
            <div class="form-group" :class="{ 'form-group--error': $v.username.$error }">
              <label class="form-control-label" name="username">Username</label>
              <input class="form__input" type="string" v-model.trim="username"/>
            </div>
            <div class="error" v-if="!$v.username.required">Username is Required</div>
            <div class="error" v-show="usernameAlert">{{UsernameAlert}}</div>

            <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
              <label class="form-control-label" name="password">Password</label>
              <input data-test="password" class="form__input" type="string" v-model.trim="password"/>
            </div>
            <div class="error" v-if="!$v.password.required">Password is Required</div>
            <div class="error" v-show="passwordAlert">{{PasswordAlert}}</div>

            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Login
              </button>
            </p>

            <p class="typo__p" v-if="submitStatus === 'OK'"></p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Wait for a second...</p>
          </form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>

import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import { required } from 'vuelidate/lib/validators'
import Vue from 'vue'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'Login',
  data () {
    return {
      messagetitle: 'Login',
      username: '',
      password: '',
      user: [],
      submitStatus: null,
      usernameAlert: false,
      passwordAlert: false,
      UsernameAlert: '',
      PasswordAlert: '',
      errors: []
    }
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          if (this.username !== 'admin' || this.password !== '11') {
            this.$swal({
              title: 'Are you Administrator?',
              text: 'Only Administrator Can Login',
              type: 'warning',
              confirmButtonText: 'I Understand',
              showCloseButton: true
            })
          }
          if (this.username === 'admin' && this.password === '11') {
            localStorage.setItem('username', JSON.stringify(this.username))
            this.$router.push('/')
          }
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

  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }

  .vue-title2 {
    margin-top: 30px;
    text-align: center;
    font-size: 25pt;
    margin-bottom: 10px;
  }

  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }

  .donate-form .form-control-label.text-left {
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
    border: 1px solid silver;
    border-radius: 50px;
    width: 300px;
    font-size: x-large;
  }

  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 50px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  textarea {
    border: 1px solid silver;
    border-radius: 10px;
    background: white;
    padding: 5px 10px;
    width: 540px;
    height: 200px;
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
    background: #fb0004;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
