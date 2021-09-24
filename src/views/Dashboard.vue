<template>
  <div class="dashboard">
    <p class="hello">
      Hello, <strong>{{ getName.username }}</strong>
    </p>
    <div class="login-submit">
      <button
        class="submit-button"
        v-if="isLogged"
        @click="logout()"
        type="button"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import TestComponent from "@/components/TestComponent.vue";
import { mapGetters } from "vuex";
export default {
  components: {},
  name: "Dashboard",
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    ...mapGetters(["getName", "isLogged"]),
  },
};
</script>
<style scoped>
.hello {
  color: white;
}

.submit-button {
  border: none;
  outline: none;
  width: 30%;
  height: 40px;
  background: #4955ff9c;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  transition: 0.7s;
  margin-bottom: 20px;
}

.submit-button:hover {
  background: #4eacaf;
  color: white;
}

.logoutBtn {
  color: white;
}
</style>
