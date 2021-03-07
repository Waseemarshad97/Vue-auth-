<template>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <h3 class="text-center m-4">Register</h3>
      <div class="login-border">
        <div class="form-group">
          <input class="form-control"
                 id="input-1"
                 type="email"
                 v-model="email"
                 placeholder="Enter email"
                 required
          />
        </div>
        <div class="form-group">
          <input class="form-control"
                 id="name"
                 v-model="name"
                 placeholder="Enter name"
                 required
          />
        </div>
        <div class="form-group">
          <input class="form-control"
                 id="password"
                 v-model="password"
                 type="password"
                 placeholder="Enter Your Password"
                 required
          />
        </div>
        <div v-if="password.length >1 && password.length <4" class="text-danger text-center pb-1">Password too short
        </div>

        <div class="form-group">
          <input class="form-control"
                 id="reenterpassword"
                 type="password"
                 v-model="reenterpassword"
                 placeholder="Re-enter Your Password"
                 required
          />
        </div>
        <div v-if="password != reenterpassword" class="text-danger text-center pb-1">Password Dont match</div>
        <div class="justify-content-center row">
          <b-button @click="register" class="mr-md-5 col-4" type="submit" variant="primary">Submit</b-button>
          <b-button class="col-4" type="reset" variant="danger">Reset</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import firebase from 'firebase';
import db from "../main.js";

export default {
  name: "register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      reenterpassword: "",
    };
  },
  methods: {
    register: function (e) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            // Signed in
            console.log(user.user);
            if (user) {
              console.log('added to db')
              db.collection("users").doc(user.user.uid).set({
                userId: user.user.uid,
                name: user.user.displayName,
                email: user.user.email,
              })
            }
            this.$router.push('dashboard');
          })
          .catch(function (error) {
            alert("Unable to register" + error.message);
            // ..
          });
      e.preventDefault();
    }
  }
};
</script>
<style scoped>
.login-border {
  box-shadow: 1px 1px 10px 1px #8080807a;
  padding: 20px;
  border-radius: 12px;
}
</style>

