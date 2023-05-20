import AccountApi from '@/api/account.api';
import router from '@/router';

const state = {
	user: {}
};

const mutations = {
	SET_USER(state, value) {
		state.user = value;
	},
  REMOVE_USER(state) {
	  state.user = {}
  }
};

const actions = {
	async signUp({dispatch}, payload) {
		try {
			dispatch('loader/setLoader', true, {root: true});
			const resp = await AccountApi.signUp(payload);
			window.localStorage.setItem('token', resp?.access_token);
			dispatch('getCurrentUser');
			dispatch('loader/setLoader', false, {root: true});
			await router.push('/cabinet');
		} catch (e) {
			console.error(e);
			dispatch('loader/setLoader', false, {root: true});
		}
	},
  async login({dispatch}, payload) {
	  try {
      dispatch('loader/setLoader', true, {root: true});
      const resp = await AccountApi.login(payload);
      window.localStorage.setItem('token', resp?.access_token);
      dispatch('getCurrentUser');
      dispatch('loader/setLoader', false, {root: true});
      await router.push('/cabinet');
    } catch (e) {
      console.error(e);
      dispatch('loader/setLoader', false, {root: true});
    }
  },
	async getCurrentUser({dispatch, commit}) {
	  try {
			dispatch('loader/setLoader', true, {root: true});
	    const user = await AccountApi.fetchCurrentUser();
			commit('SET_USER', user);
			dispatch('loader/setLoader', false, {root: true});
		} catch (e) {
	    console.error(e);
			dispatch('loader/setLoader', false, {root: true});
		}
	},
  async logout({commit}) {
	  window.localStorage.removeItem('token')
    commit('REMOVE_USER')
    await router.push('/login')
  }
};


export default {
	namespaced: true,
	state,
	actions,
	mutations
};
