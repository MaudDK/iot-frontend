<template>
  <div class="dashboard container-fluid">
    <div class="row">
      <NavComponent />
      <div class="dash col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
        <div class="sensor-array row">
          <div
            v-for="sensor in allSensors"
            class="
              sensor
              d-flex
              justify-content-center
              col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3
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
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import TestComponent from "@/components/TestComponent.vue";
import { mapGetters } from "vuex";
import NavComponent from "@/components/NavComponent.vue";
import SensorComponent from "@/components/SensorComponent.vue";
export default {
  name: "Dashboard",
  components: {
    NavComponent,
    SensorComponent,
  },
  computed: {
    ...mapGetters(["getName", "allSensors", "isLogged"]),
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
  background-color: rgb(26, 29, 48);
}

.sensor {
  margin-top: 30px;
}
</style>
