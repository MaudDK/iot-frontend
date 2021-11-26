import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Register from "../views/Register.vue";
import Notifications from "../views/Notifications.vue"
// import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title:"Login",
      preAuth: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta:{
      title:"Register",
      preAuth: true,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta:{
      title:"Dashboard",
      auth: true,
    },
  },
  {
    path: "/notifications",
    name: "notifications",
    component: Notifications,
    meta:{
      title:"Notifications",
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some((record) => record.meta.auth) && !loggedIn) {
    next("/");
    return;
  }
  if (to.matched.some((record) => record.meta.preAuth) && loggedIn) {
    next("/dashboard");
    return;
  }
  next();
});


export default router;
