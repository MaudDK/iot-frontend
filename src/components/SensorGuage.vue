<template>
  <div class="sensor-array row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
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
</template>

<script>
import { mapGetters } from "vuex";
import SensorComponent from "../components/SensorComponent.vue";
export default {
  name: "SensorGuages",
  components: {
    SensorComponent,
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
.sensor-array {
  margin-top: 30px;
}
.sensor {
  margin-top: 30px;
}
</style>
