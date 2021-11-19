<template>
  <div class="dashboard container-fluid">
    <div class="row">
      <div class="dash">
        <MenuComponent />
        <div
          class="
            sensor-array
            row
            col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11
          "
        >
          <div
            v-for="sensor in allSensors"
            class="
              sensor
              d-flex
              justify-content-center
              col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3
            "
            :key="sensor"
          >
            <SensorComponent
              v-bind:name="sensor.name"
              v-bind:building="sensor.building"
              v-bind:location="sensor.location"
              v-bind:status="sensor.status"
              v-bind:reading="sensor.reading"
            />
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Reading</th>
              <th>Status</th>
              <th>Building</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sensor in allSensors" :key="sensor">
              <th v-if="sensor.status == 'Online'" scope="row">
                {{ sensor.name }}
              </th>
              <td v-if="sensor.status == 'Online'">{{ sensor.reading }} KeV</td>
              <td v-if="sensor.status == 'Online'">{{ sensor.status }}</td>
              <td v-if="sensor.status == 'Online'">{{ sensor.building }}</td>
              <td v-if="sensor.status == 'Online'">{{ sensor.location }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import TestComponent from "@/components/TestComponent.vue";
import { mapGetters } from "vuex";
import MenuComponent from "@/components/MenuComponent.vue";
import SensorComponent from "@/components/SensorComponent.vue";
export default {
  name: "Dashboard",
  components: {
    SensorComponent,
    MenuComponent,
  },
  computed: {
    ...mapGetters(["allSensors"]),
  },
  mounted() {
    this.$store.dispatch("sensors").catch((err) => {
      console.log(err);
    });
    this.$store.dispatch("timedsensors").catch((err) => {
      console.log(err);
    });
  },
};
</script>
<style scoped>
.dash {
  min-height: 100vh;
  padding: 0px;
  background-color: rgb(26, 29, 48);
}

.sensor {
  margin-top: 30px;
}

.table {
  color: white;
}
</style>
