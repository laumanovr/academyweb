import Account from '@/api/account';
import router from '@/router';
import Vue from 'vue';

const state = {
	user: {},
	token: '',
	redirectRoute: ''
};

const mutations = {
	SET_USER(state, value) {
		state.user = value;
	},
	SET_TOKEN(state, value) {
	  state.token = value;
	},
	REMOVE_USER(state) {
	  state.user = {};
	  state.token = '';
	},
	SET_REDIRECT_ROUTE(state, value) {
	 state.redirectRoute = value;
	}
};

const actions = {
	async signUp({dispatch, commit}, payload) {
		try {
			dispatch('loader/setLoader', true, {root: true});
			const resp = await Account.signUp(payload.field);
			commit('SET_TOKEN', resp?.access_token);
			dispatch('getCurrentUser');
			dispatch('loader/setLoader', false, {root: true});
			await router.push(payload.route);
			dispatch('setRedirectRoute', '');
		} catch (err) {
			Vue.$toast.error(err);
			dispatch('loader/setLoader', false, {root: true});
		}
	},
	async login({dispatch, commit}, payload) {
	  try {
			dispatch('loader/setLoader', true, {root: true});
			const resp = await Account.login(payload.field);
			commit('SET_TOKEN', resp?.access_token);
			dispatch('getCurrentUser');
			dispatch('loader/setLoader', false, {root: true});
			await router.push(payload.route);
			dispatch('setRedirectRoute', '');
		} catch (err) {
			Vue.$toast.error(err);
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
	async logout({commit, dispatch}) {
		commit('REMOVE_USER');
		await router.push('/login');
		dispatch('loader/setLoader', false, {root: true});
		window.localStorage.removeItem('vuex');
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
