import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/index";
import VModal from "vue-js-modal";
import VueToast from "vue-toast-notification";
import "./assets/styles/main.scss";

Vue.config.productionTip = false;
Vue.use(VModal);
Vue.use(VueToast, {position: 'top-right', duration: 2000});

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
