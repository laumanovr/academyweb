import Vue from "vue";
import VueRouter from "vue-router";
import Registration from "../views/registration/index.vue";
import Login from "../views/login/index.vue";
import Forgot from "../views/forgot/index.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "main",
		component: () => import("@/views/main/index.vue"),
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
	{
		path: "/about",
		name: "about",
		component: () => import("@/views/about/index.vue"),
	},
	{
		path: "/contacts",
		name: "contacts",
		component: () => import("@/views/contacts/index.vue"),
	},
	{
		path: "/shop",
		name: "shop",
		component: () => import("@/views/shop/index.vue"),
	},
	{
		path: "/cabinet",
		name: "cabinet",
		component: () => import('@/views/cabinet/index.vue')
	}
];

const router = new VueRouter({
	routes,
});

export default router;
