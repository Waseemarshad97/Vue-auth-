<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/home">Doctune</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->

        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <router-link v-if="!isLoggedIn" class="mx-1 nav-link btn btn-outline-light new-register" to="/register"
                         href="#">Register
            </router-link>
            <router-link v-if="!isLoggedIn" class="mx-1 nav-link btn btn-primary" to="/login">LogIn</router-link>
            <router-link v-if="isLoggedIn" class="mx-1 nav-link btn btn-primary" to="/dashboard">dashboard</router-link>
            <button v-on:click="logout" v-if="isLoggedIn" class="mx-1 btn btn-primary nav-link">Logout</button>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "logout",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.isLoggedIn = !!user;
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
  },

  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
            this.$router.push('/login');
          }
      );
    }
  }
}
</script>

<style scoped>

.new-register {
  border-radius: 10px;
}

.new-register:hover {
  color: blue !important;
}
</style>