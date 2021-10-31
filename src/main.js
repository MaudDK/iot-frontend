import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueParticles from 'vue-particles';
import axios from "axios";

createApp({
    created() {
        const userInfo = localStorage.getItem("user");
        if (userInfo) {
            const userData = JSON.parse(userInfo);
            this.$store.commit("setUserData", userData);
        }
        axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response.status === 401) {
                    this.$store.dispatch("reset").then(() => {
                        this.$router.push({ name: "Home" });
                      })
                }
                return Promise.reject(error);
            }
        );
    },
    render: () => h(App),
}).use(store).use(router).use(VueParticles).mount("#app");
