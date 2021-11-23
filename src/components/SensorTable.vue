<template>
  <div class="searchbar container-fluid">
    <div class="row filters col-12">
      <div class="table-item col-3">
        <input
          type="text"
          class="search-box"
          v-model="searchValue"
          placeholder="Search Name"
        />
      </div>
      <div class="table-item col-2">
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
      <div class="table-item col-1">
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
  <table class="table sensor-table">
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
      <tr v-for="sensor in filteredSensors" :key="sensor">
        <th scope="row">
          {{ sensor.name }}
        </th>
        <td>{{ sensor.reading }} KeV</td>
        <td>{{ sensor.status }}</td>
        <td>{{ sensor.building }}</td>
        <td>{{ sensor.location }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SensorTable",
  methods: {},
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

.sensor-table {
  color: white;
  background-color: rgb(63, 63, 94);
}
</style>
