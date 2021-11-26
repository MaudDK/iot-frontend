<template>
  <div class="bar container-fluid">
    <div class="menu row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div class="menu-part menu-button col-1">
        <button class="nav-item rum-button responsive-text-brand" type="button">
          RUM
        </button>
      </div>
      <div class="menu-part menu-button col-1" v-if="!notifPage">
        <button
          class="nav-item view-button responsive-text-hud"
          type="button"
          @click="changeView()"
        >
          HUD
        </button>
      </div>
      <div class="menu-part menu-button col-1" v-if="!notifPage">
        <button
          class="nav-item notifications-button responsive-text-notifications"
          type="button"
          @click="toNotis()"
        >
          Alerts
        </button>
      </div>
      <div class="menu-part menu-button col-2" v-if="notifPage">
        <button
          class="nav-item dashboard-button responsive-text-notifications"
          type="button"
          @click="toDash()"
        >
          Dashboard
        </button>
      </div>
      <div class="menu-part hello responsive-text-hello col-8">
        Hello {{ getName.username }}
      </div>
      <div class="menu-part col-1">
        <button
          class="nav-item logout-button responsive-text-logout"
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
  name: "MenuComponent",
  props: {
    notifPage: Boolean,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    changeView() {
      this.$emit("changeView");
    },
    toNotis() {
      this.$router.push("/notifications");
    },
    toDash() {
      this.$router.push("/dashboard");
    },
  },
  computed: {
    ...mapGetters(["getName", "isLogged"]),
  },
};
</script>

<style scoped>
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

.rum-button {
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  background: #4e65af;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
  transition: 0.7s;
  padding: 0px;
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

.notifications-button {
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  background: #be652a;
  color: #fff;
  font-size: 18px;
  transition: 0.7s;
  padding: 0px;
}

.notifications-button:hover {
  background: #33adff;
  color: white;
}

.dashboard-button {
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

.dashboard-button:hover {
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

@media screen and (max-width: 600px) {
  .responsive-text-notifications {
    font-size: 10px;
  }
  .responsive-text-logout {
    font-size: 9px;
  }
  .responsive-text-hud {
    font-size: 10px;
  }
  .responsive-text-hello {
    font-size: 12px;
  }
  .responsive-text-brand {
    font-size: 10px;
  }
}
</style>
