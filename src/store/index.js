import { createStore } from "vuex";
import axios from "axios";

axios.defaults.baseURL = "http://192.168.100.2:80/";

export default createStore({
  state: {
    user: null,
    sensors: null,
    notifications: null,
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

    setUserSensors(state,data){
      state.sensors = data;
    },

    setUserNotifications(state,data){
      state.notifications = data;
    }
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

    reset({ commit }) {
      commit("clearUserData");
    },

    logout({ commit }, credentials) {
      return axios.post("/api/logout", credentials).then(({ data }) => {
        console.log(data);
        commit("clearUserData");
      });
    },
    sensors({ commit }, credentials) {
      return axios.get("/api/sensors", credentials).then(({ data }) => {
        commit("setUserSensors", data);
      });
    },
    timedsensors({ commit }, credentials) {
      setInterval(() => {
        axios.get("/api/sensors", credentials).then(({ data }) => {
        commit("setUserSensors", data);
        });
      }, 5000);
    },
    notifications({ commit }, credentials) {
      return axios.get("/api/notifications", credentials).then(({ data }) => {
        commit("setUserNotifications", data);
      });
    },
    timednotifications({ commit }, credentials) {
      setInterval(() => {
        axios.get("/api/notifications", credentials).then(({ data }) => {
        commit("setUserNotifications", data);
        });
      }, 2000);
    },
    clearNotifs(credentials,id) {
      let url = "/api/notifications/"
      url += id.id;
      console.log(url);
      return axios.delete(url, credentials);
    },
    clearAllNotifs(credentials) {
      return axios.delete("/api/notifications/", credentials);
    },
  },
  getters: {
    getName: (state) => state.user.user,
    isLogged: (state) => !!state.user,
    allSensors: (state) => state.sensors,
    allNotifications: (state) => state.notifications,
  },
  modules: {},
});
