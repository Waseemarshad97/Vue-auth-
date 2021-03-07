import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";
import register from "../views/register.vue";
import dashboard from "../views/dashboard.vue";
import home from "../views/Home.vue";
import firebase from "firebase";

Vue.use(VueRouter);
let router = new VueRouter({

    routes: [
        {
            path: "/Home",
            name: "home",
            component: home,
        },
        {
            path: "/login",
            name: "login",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: login,
            meta: {
                requiresGuest: true
            }
        },
        {
            path: "/register",
            name: "register",
            component: register,
            meta: {
                requiresGuest: true
            }

        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: dashboard,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

//nav guards

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!firebase.auth().currentUser) {
            next({path: '/login', query: {redirect: to.fullPath}});
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (firebase.auth().currentUser) {
            next({path: '/dashboard', query: {redirect: to.fullPath}});
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;