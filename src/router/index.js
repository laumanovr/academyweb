import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/main/index.vue";
import Registration from "../views/registration/index.vue";

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
];

const router = new VueRouter({
  routes,
});

export default router;
