<template>
  <div class="row">
    <div class="col-md-4">

    </div>
    <div class="col-md-4">
      <div>
        <h3 class="text-center m-4">Log In</h3>
        <div class="login-border">
          <b-form-group
              label="Email address:"
              description="We'll never share your email with anyone else."
          >
            <b-form-input
                id="email"
                type="email"
                v-model="email"
                placeholder="Enter email"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Password">
            <b-form-input
                id="password"
                type="password"
                v-model="password"
                placeholder="Enter Your Password"
                required
            ></b-form-input>
          </b-form-group>
          <div class="justify-content-center row">
            <b-button @click="login" class="col-4" type="submit" variant="primary">Login</b-button>
          </div>
        </div>
      </div>


    </div>
    <div class="col-md-4">

    </div>
  </div>
</template>
<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data() {
    return {
      isLoggedIn: true,
      email: "",
      password: "",
    };
  },
  methods: {
    login: function (e) {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            // Signed in
            console.log(user.user);
            this.$router.push('/dashboard')
          })
          .catch(function (error) {
            alert("Unable to register" + error.message);
          });
      e.preventDefault();
    }
  }
}
;
</script>
<style scoped>
.login-border {
  box-shadow: 1px 1px 10px 1px #8080807a;
  padding: 20px;
  border-radius: 12px;
}
</style>
