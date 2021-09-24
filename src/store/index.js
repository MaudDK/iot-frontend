import { createStore } from "vuex";
import axios from "axios";

axios.defaults.baseURL = "http://0.0.0.0:80/";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common.Authorization = `Bearer ${state.user.token}`;
    },

    clearUserData() {
      localStorage.removeItem("user");
      location.reload();
    },
  },
  actions: {
    register({ commit }, credentials) {
      return axios.post("/api/register", credentials).then(({ data }) => {
        commit("setUserData", data);
      });
    },

    login({ commit }, credentials) {
        return axios.post("/api/login", credentials).then(({ data }) => {
          commit("setUserData", data);
        });
    },

    logout({ commit }, credentials) {
      return axios.post("/api/logout", credentials).then(({ data }) => {
        console.log(data);
        commit("clearUserData");
      });
    },
  },
  getters: {
    getName: (state) => state.user.user,
    isLogged: (state) => !!state.user,
  },
  modules: {},
});
