import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import loader from "./modules/loader";
Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		auth,
		loader
	},
});

export default store;
