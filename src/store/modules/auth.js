import Account from '@/api/account';
import router from '@/router';

const state = {
	user: {},
	redirectRoute: ''
};

const mutations = {
	SET_USER(state, value) {
		state.user = value;
	},
	REMOVE_USER(state) {
	  state.user = {};
	},
	SET_REDIRECT_ROUTE(state, value) {
	 state.redirectRoute = value;
	}
};

const actions = {
	async signUp({dispatch}, payload) {
		try {
			dispatch('loader/setLoader', true, {root: true});
			const resp = await Account.signUp(payload.field);
			window.localStorage.setItem('token', resp?.access_token);
			dispatch('getCurrentUser');
			dispatch('loader/setLoader', false, {root: true});
			await router.push(payload.route);
			dispatch('setRedirectRoute', '');
		} catch (e) {
			console.error(e);
			dispatch('loader/setLoader', false, {root: true});
		}
	},
	async login({dispatch}, payload) {
	  try {
			dispatch('loader/setLoader', true, {root: true});
			const resp = await Account.login(payload.field);
			window.localStorage.setItem('token', resp?.access_token);
			dispatch('getCurrentUser');
			dispatch('loader/setLoader', false, {root: true});
			await router.push(payload.route);
			dispatch('setRedirectRoute', '');
		} catch (e) {
			console.error(e);
			dispatch('loader/setLoader', false, {root: true});
		}
	},
	async getCurrentUser({dispatch, commit}) {
	  try {
			dispatch('loader/setLoader', true, {root: true});
	    const user = await Account.fetchCurrentUser();
			commit('SET_USER', user);
			dispatch('loader/setLoader', false, {root: true});
		} catch (e) {
	    console.error(e);
			dispatch('loader/setLoader', false, {root: true});
		}
	},
	async logout({commit}) {
	  window.localStorage.removeItem('token');
		commit('REMOVE_USER');
		await router.push('/login');
	},
	async setRedirectRoute({commit}, payload) {
	  commit('SET_REDIRECT_ROUTE', payload);
	}
};


export default {
	namespaced: true,
	state,
	actions,
	mutations
};
