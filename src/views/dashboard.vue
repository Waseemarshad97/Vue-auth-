<template>
  <div class="text-center">
    <h1>This is a dashboard</h1>
    <br>
    <h4>Welcome User</h4>
    <h4>These are the list of E-mail Id's of Registered users</h4>
    <div>
      <ul class="collection-item">
        <li v-for="item in ar" v-bind:key="item.id">
          <div class="chip"> {{ item.name }}</div>
          <div class="chip"> {{ item.email }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import db from "../main.js"

export default {
  name: "dashboard",
  props: {
    msg: String
  },
  data() {
    return {
      ar: []
    }
  },
  created() {
    db.collection("users").onSnapshot(snapshot => {
          snapshot.forEach(item => {
                console.log('data', item.data());
                const data = {
                  'id': item.id,
                  'name': item.data().name,
                  'email': item.data().email,
                }
                this.ar.push(data);
              }
          )
          console.log(this.ar)
        }
    )
  }
}
</script>