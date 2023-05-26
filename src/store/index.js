import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import loader from "./modules/loader";

Vue.use(Vuex);

const store = new Vuex.Store({
	plugins: [createPersistedState()],
	modules: {
		auth,
		loader
	},
});

export default store;
