import { signUp } from "@/api/auth";

const state = {
  list: [],
  loading: false,
};

const mutations = {
  SET_LOADING(state, value) {
    state.loading = value;
  },
};

const actions = {
  async signUp({ commit }, payload) {
    try {
      commit("SET_LOADING", true);
      const { data } = await signUp(payload);
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

const getters = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
