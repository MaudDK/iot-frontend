<template>
  <div class="searchbar container-fluid">
    <div class="row filters col-12">
      <div class="d-flex table-item col-3">
        <input
          type="text"
          class="search-box responsive-text"
          v-model="searchValue"
          placeholder="Search Name"
        />
      </div>
      <div class="d-flex table-item col-2">
        <input
          type="number"
          class="reading-range-min"
          v-model="greaterThan"
          placeholder="Min"
        />
        <input
          type="number"
          class="reading-range-max"
          v-model="lessThan"
          placeholder="Max"
        />
      </div>
      <div class="d-flex table-item col-1">
        <select class="status-box" v-model="statusValue">
          <option value="" disabled selected>Status</option>
          <option>All</option>
          <option>Online</option>
          <option>Offline</option>
        </select>
      </div>
      <div class="table-item col-6">
        <input
          type="text"
          class="search-box"
          v-model="buildingValue"
          placeholder="Search Building"
        />
      </div>
    </div>
  </div>
  <div class="sensor-array row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <div
      v-for="sensor in filteredSensors"
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
        v-bind:alert="sensor.alert"
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
    filteredSensors() {
      let filteredSensors = this.allSensors;

      // Process search input
      if (this.searchValue != "" && this.searchValue) {
        filteredSensors = filteredSensors.filter((sensor) => {
          return sensor.name
            .toUpperCase()
            .includes(this.searchValue.toUpperCase());
        });
      }

      if (this.lessThan)
        filteredSensors = filteredSensors.filter((sensor) => {
          return sensor.reading <= this.lessThan;
        });

      if (this.greaterThan)
        filteredSensors = filteredSensors.filter((sensor) => {
          return sensor.reading >= this.greaterThan;
        });

      if (this.buildingValue != "" && this.buildingValue) {
        filteredSensors = filteredSensors.filter((sensor) => {
          return sensor.building
            .toUpperCase()
            .includes(this.buildingValue.toUpperCase());
        });
      }

      if (this.statusValue && this.statusValue != "All")
        filteredSensors = filteredSensors.filter((sensor) => {
          return sensor.status == this.statusValue;
        });

      return filteredSensors;
    },
  },
  mounted() {
    this.$store.dispatch("sensors").catch((err) => {
      console.log(err);
    });
    this.$store.dispatch("timedsensors").catch((err) => {
      console.log(err);
    });
  },
  data() {
    return {
      searchValue: "",
      buildingValue: "",
      statusValue: "",
      lessThan: null,
      greaterThan: null,
    };
  },
};
</script>

<style scoped>
.sensor-array {
  margin-top: 0px;
}
.sensor {
  margin-top: 30px;
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
.reading-range-min {
  background: rgb(37, 37, 51);
  border-radius: 5px 0px 0px 5px;
  border: none;
  outline: none;
  color: rgb(179, 179, 179);
  text-align: center;
  vertical-align: middle;
  max-width: 50px;
  height: 35px;
}
.reading-range-max {
  background: rgb(37, 37, 51);
  border-radius: 0px 5px 5px 0px;
  border: none;
  outline: none;
  color: rgb(179, 179, 179);
  text-align: center;
  vertical-align: middle;
  height: 35px;
  max-width: 60px;
}

.table-item {
  padding: 0px;
}

.status-box {
  background: rgb(37, 37, 51);
  border-radius: 5px;
  border: none;
  outline: none;
  color: rgb(179, 179, 179);
  height: 100%;
  max-width: 100px;
}
@media screen and (max-width: 659px) {
  input::-webkit-input-placeholder {
    font-size: 10px !important;
  }
  .status-box {
    font-size: 10px !important;
  }
  .search-box {
    width: 60px;
  }
}
</style>
