import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/main/index.vue";
import Registration from "../views/registration/index.vue";
import Login from "../views/login/index.vue";
import Forgot from "../views/forgot/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/registration",
    name: "registration",
    component: Registration,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/forgot",
    name: "forgot",
    component: Forgot,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
