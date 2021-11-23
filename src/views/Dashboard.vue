<template>
  <div class="dashboard container-fluid">
    <div class="row">
      <div class="dash">
        <div class="bar container-fluid">
          <div class="menu row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="menu-part brand col-1">RUM</div>
            <div class="menu-part brand col-1">
              <button
                class="nav-item view-button"
                type="button"
                @click="changeView()"
              >
                HUD
              </button>
            </div>
            <div class="menu-part hello col-9">
              Hello {{ getName.username }}
            </div>
            <div class="menu-part col-1">
              <button
                class="nav-item logout-button"
                v-if="isLogged"
                type="button"
                @click="logout()"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <SensorGuage v-if="!toggleView" />
        <SensorTable v-if="toggleView" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SensorGuage from "../components/SensorGuage.vue";
import SensorTable from "../components/SensorTable.vue";
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  components: {
    SensorGuage,
    SensorTable,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Home" });
    },
    changeView() {
      if (this.toggleView) {
        this.toggleView = false;
      } else {
        this.toggleView = true;
      }
    },
  },
  computed: {
    ...mapGetters(["getName", "isLogged"]),
  },
  data() {
    return {
      toggleView: false,
    };
  },
};
</script>
<style scoped>
.dash {
  min-height: 100vh;
  padding: 0px;
  background-color: rgb(26, 29, 48);
}

.bar {
  background-color: rgb(35, 39, 65);
  position: fixed;
  top: 0px;
  padding: 0px;
  z-index: 1;
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
  background-color: #4e65af;
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
  font-weight: bolder;
  /* border-right: 2px solid #9e49ff9c; */
}
.hello {
  color: white;
  line-height: 40px;
  text-align: center;
  background-color: rgb(52, 56, 82);
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
  font-weight: bolder;
  /* border-right: 2px solid #9e49ff9c; */
}

.logout-button {
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  background: #af4e4e;
  color: #fff;
  font-size: 18px;
  transition: 0.7s;
  padding: 0px;
}

.logout-button:hover {
  background: #ff3333;
  color: white;
}

.view-button {
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  background: #4e9caf;
  color: #fff;
  font-size: 18px;
  transition: 0.7s;
  padding: 0px;
}

.view-button:hover {
  background: #33adff;
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
  /* border-right: 2px solid #9e49ff9c; */
}
</style>
