<template>
  <ul class="nav flex-column col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
    <li class="nav-item product-brand">R U M</li>
    <button
      class="nav-item filter-button"
      v-if="isLogged"
      @click="logout()"
      type="button"
    >
      Filter
    </button>
    <button class="nav-item submit-button" v-if="isLogged" type="button">
      Logout
    </button>
  </ul>
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
    ...mapGetters(["getName", "isLogged", "allSensors"]),
  },
};
</script>

<style scoped>
.nav {
  justify-content: center;
  padding: 0;
  margin: 0;
}

.product-brand {
  padding: 5px;
  color: white;
  background-color: #7b4eaf;
  width: 100%;
  min-height: 40px;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
  font-weight: bolder;
}

.filter-button {
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

.submit-button {
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
</style>
