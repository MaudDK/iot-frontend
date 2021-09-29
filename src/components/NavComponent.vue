<template>
  <div class="nav col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
    <p class="hellouser">
      <strong>{{ getName.username }}</strong>
    </p>
    <button
      class="submit-button"
      v-if="isLogged"
      @click="logout()"
      type="button"
    >
      Logout
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavComponent",
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
.nav {
  justify-content: center;
  padding: 0;
  margin: 0;
}

.hellouser {
  padding-top: 5px;
  align-self: flex-start;
  color: white;
  display: flex;
}

.submit-button {
  align-self: flex-end;
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  background: #4955ff9c;
  color: #fff;
  font-size: 18px;
  transition: 0.7s;
  padding: 0px;
}

.submit-button:hover {
  background: #4eacaf;
  color: white;
}

.logoutBtn {
  color: white;
}
</style>
