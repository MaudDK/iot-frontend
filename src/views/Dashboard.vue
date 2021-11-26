<template>
  <div class="dashboard container-fluid">
    <div class="dash">
      <MenuComponent
        v-bind:notifPage="isNotifPage"
        v-on:changeView="onHudClick"
      />
      <SensorGuage v-if="!toggleView" />
      <SensorTable v-if="toggleView" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SensorGuage from "../components/SensorGuage.vue";
import SensorTable from "../components/SensorTable.vue";
import MenuComponent from "../components/MenuComponent.vue";
export default {
  name: "Dashboard",
  components: {
    SensorGuage,
    SensorTable,
    MenuComponent,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Home" });
    },
    onHudClick() {
      if (this.toggleView) {
        this.toggleView = false;
      } else {
        this.toggleView = true;
      }
    },
  },
  computed: {},
  data() {
    return {
      toggleView: false,
      isNotifPage: false,
    };
  },
};
</script>
<style scoped>
.dash {
  min-height: 100vh;
  padding: 0px;
  background-color: rgb(26, 29, 48);
  overflow: hidden;
}
.dashboard {
  padding: 0px;
  overflow: hidden;
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
}
.hello {
  color: white;
  line-height: 40px;
  text-align: center;
  background-color: rgb(52, 56, 82);
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
  font-weight: bolder;
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

.notification-button {
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  background: #ffa600;
  color: #fff;
  font-size: 18px;
  transition: 0.7s;
  padding: 0px;
}

.notification-button:hover {
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
}
</style>
