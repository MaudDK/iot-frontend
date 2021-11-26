<template>
  <div class="notification container-fluid">
    <MenuComponent v-bind:notifPage="isNotifPage" />
    <div class="searchbar container-fluid">
      <div class="row filters col-12">
        <div class="table-item col-1">
          <select class="status-box" v-model="alertLevel">
            <option value="" disabled selected>Alert</option>
            <option>All</option>
            <option class="informative">Informative</option>
            <option class="warning">Warning</option>
            <option class="error">Error</option>
            <option class="critical">Critical</option>
          </select>
        </div>
        <div class="table-item col-5">
          <input
            type="date"
            class="date-range-min"
            v-model="greaterThan"
            placeholder="Min"
          />
          <h4 class="date-to">To</h4>
          <input
            type="date"
            class="date-range-max"
            v-model="lessThan"
            placeholder="Max"
          />
        </div>
      </div>
    </div>
    <table class="table notifications-table">
      <thead>
        <tr>
          <th>Alert</th>
          <th>Message</th>
          <th>Date</th>
          <th>Time</th>
          <th class="clear-notif">
            <button
              class="notifications-button"
              type="button"
              @click="clearAllNotifications()"
            >
              Clear Notifications
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="notification in filteredNotifications" :key="notification">
          <th
            v-if="notification.alert == 'Warning'"
            class="warning"
            scope="row"
          >
            {{ notification.alert }}
          </th>
          <th
            v-if="notification.alert == 'Critical'"
            class="critical"
            scope="row"
          >
            {{ notification.alert }}
          </th>
          <th v-if="notification.alert == 'Error'" class="error" scope="row">
            {{ notification.alert }}
          </th>
          <th
            v-if="notification.alert == 'Informative'"
            class="informative"
            scope="row"
          >
            {{ notification.alert }}
          </th>
          <td>{{ notification.message }}</td>
          <td>{{ notification.updated_at.split("T")[0] }}</td>
          <td>{{ notification.updated_at.split("T")[1].split(".")[0] }}</td>
          <td class="clear-notif">
            <button
              class="notifications-button notif-one"
              type="button"
              @click="clearNotification(notification.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuComponent from "../components/MenuComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  components: {
    MenuComponent,
  },
  methods: {
    clearNotification(value) {
      this.$store.dispatch("clearNotifs", {
        id: value,
      });
      alert("Deleting notification please wait");
    },
    clearAllNotifications() {
      this.$store.dispatch("clearAllNotifs");
      alert("Deleting all notifications please wait");
    },
  },
  computed: {
    ...mapGetters(["allNotifications"]),
    filteredNotifications() {
      let filteredNotis = this.allNotifications;
      if (this.alertLevel && this.alertLevel != "All")
        filteredNotis = filteredNotis.filter((notification) => {
          return notification.alert == this.alertLevel;
        });

      if (this.lessThan)
        filteredNotis = filteredNotis.filter((notification) => {
          return notification.created_at <= this.lessThan;
        });

      if (this.greaterThan)
        filteredNotis = filteredNotis.filter((notification) => {
          return notification.created_at >= this.greaterThan + 1;
        });
      return filteredNotis;
    },
  },
  mounted() {
    this.$store.dispatch("notifications").catch((err) => {
      console.log(err);
    });
    this.$store.dispatch("timednotifications").catch((err) => {
      console.log(err);
    });
  },
  data() {
    return {
      isNotifPage: true,
      alertLevel: null,
      greaterThan: null,
      lessThan: null,
    };
  },
};
</script>
<style scoped>
.notification {
  min-height: 100vh;
  padding: 0px;
  background-color: rgb(26, 29, 48);
  overflow: hidden;
}

.notifications-table {
  color: white;
  background-color: rgb(63, 63, 94);
}

.searchbar {
  background-color: rgb(37, 37, 51);
  margin: 0px;
  margin-top: 40px;
  padding: 0px;
  border-top: 2px solid rgb(37, 37, 51);
  border-bottom: 2px solid rgb(37, 37, 51);
  min-height: 30px;
}
.search-box {
  background: rgb(37, 37, 51);
  border-radius: 5px;
  border: none;
  outline: none;
  color: rgb(179, 179, 179);
  text-align: center;
  vertical-align: middle;
  height: 35px;
}
.date-range-min {
  background: rgb(47, 47, 65);
  border-radius: 5px;
  border: none;
  outline: none;
  color: rgb(179, 179, 179);
  text-align: center;
  vertical-align: middle;
  max-width: 150px;
  height: 35px;
}
.date-range-max {
  background: rgb(47, 47, 65);
  border-radius: 5px;
  border: none;
  outline: none;
  color: rgb(179, 179, 179);
  text-align: center;
  vertical-align: middle;
  height: 35px;
  max-width: 150px;
}

.table-item {
  color: white;
  display: flex;
  margin-left: 25px;
  justify-content: center;
  text-align: center;
}
.date-to {
  font-size: 20px;
  margin: 5px;
  margin-bottom: 0px;
}
.status-box {
  background: rgb(37, 37, 51);
  border-radius: 5px;
  border: none;
  outline: none;
  color: rgb(223, 223, 223);
  height: 100%;
  max-width: 100px;
}

.notifications-button {
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  background: #5d4eaf;
  color: #fff;
  font-size: 14px;
  transition: 0.7s;
  padding: 0px;
}

.clear-notif {
  padding: 0px;
}

.notif-one {
  background-color: #a81f1f !important;
}
.warning {
  background-color: rgb(207, 181, 32);
}
.informative {
  background-color: #0f6d7e;
}
.critical {
  background-color: #a81f1f;
}
.error {
  background-color: #b15a20;
}
</style>
