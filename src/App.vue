<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">Management System</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/students"><i class="fa fa-list" style="padding: 5px"> Manage Students</i></b-nav-item>
          <b-nav-item data-test="addbtn" to="/add"><i class="fa fa-money" style="padding: 5px"> Add a Student</i></b-nav-item>
          <b-nav-item to="/teachers"><i class="fa fa-list" style="padding: 5px"> Manage Teachers</i></b-nav-item>
          <b-nav-item to="/add1"><i class="fa fa-money" style="padding: 5px"> Add a Teacher</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-list" style="padding: 5px"> Map</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px"> Contact Us</i></b-nav-item>
          <b-nav-item><i class="fa fa-sign-in" style="padding: 5px"> Login </i></b-nav-item>
          <b-nav-item @click="logout"><i class="fa fa-sign-out" style="padding: 5px"> Logout </i></b-nav-item>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout () {
      /* 删除cookie */
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 20px;
  background: url("./assets/homerGreen.png") repeat center top;
}
.VueTables__sortable {
  cursor: pointer;
}
</style>
