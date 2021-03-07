import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics

// Add the Firebase products that you want to use
import "firebase/auth";

Vue.config.productionTip = false;

const firebaseConfig = {
    apiKey: "AIzaSyDVYIwcQusUumQ2NzFzJeDMNzC1UDYCCRs",
    authDomain: "doctune-task.firebaseapp.com",
    projectId: "doctune-task",
    storageBucket: "doctune-task.appspot.com",
    messagingSenderId: "42115649715",
    appId: "1:42115649715:web:6722ead975b8a1b9e520c6"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
