import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "main",
		component: () => import('@/views/main/index.vue'),
	},
	{
		path: "/about",
		name: "about",
		component: () => import('@/views/about/index.vue')
	},
	{
		path: "/contacts",
		name: "contacts",
		component: () => import('@/views/contacts/index.vue')
	}
];

const router = new VueRouter({
	routes,
});

export default router;
