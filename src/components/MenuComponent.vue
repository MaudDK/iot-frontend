<template>
  <div class="bar container-fluid">
    <div class="menu row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div class="menu-part brand col-1">RUM</div>
      <div class="menu-part hello col-5">Hello, {{ getName.username }}</div>
      <div class="menu-part col-2">
        <button
          class="nav-item filter-button"
          v-if="isLogged"
          @click="logout()"
          type="button"
        >
          Search
        </button>
      </div>
      <div class="menu-part col-2">
        <button
          class="nav-item filter-button"
          v-if="isLogged"
          @click="logout()"
          type="button"
        >
          Filter
        </button>
      </div>
      <div class="menu-part col-2">
        <button
          class="nav-item submit-button"
          v-if="isLogged"
          type="button"
          @click="logout()"
        >
          Logout
        </button>
      </div>
    </div>
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
    ...mapGetters(["getName", "isLogged", "allSensors"]),
  },
};
</script>

<style scoped>
.bar {
  background-color: rgb(35, 39, 65);
  padding: 0px;
}

.menu {
  margin: 0px;
}
.menu-part {
  color: white;
  padding: 0px;
}

.brand {
  color: white;
  line-height: 40px;
  text-align: center;
  background-color: #4eacaf;
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
  font-weight: bolder;
  border-right: 2px solid #9e49ff9c;
}
.hello {
  color: white;
  line-height: 40px;
  text-align: center;
  background-color: #9e49ff9c;
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
  font-weight: bolder;
  border-right: 2px solid #9e49ff9c;
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
  background: #af4e4e;
  color: white;
}

.filter-button {
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  background: #9e49ff9c;
  color: #fff;
  font-size: 18px;
  transition: 0.7s;
  padding: 0px;
  border-right: 2px solid #9e49ff9c;
}
</style>
