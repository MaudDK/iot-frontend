<template>
  <div class="searchbar container-fluid">
    <div class="row">
      <div class="table-item col-6">Sensor Table</div>
      <div class="table-item col-6">
        <input
          type="text"
          v-model="searchValue"
          placeholder="Search Sensor Name"
        />
      </div>
    </div>
  </div>
  <table class="table sensor-table">
    <thead>
      <tr>
        <th>Name</th>
        <!-- <th>Reading</th>
        <th>Status</th>
        <th>Building</th>
        <th>Location</th> -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="sensor in filteredSensors" :key="sensor">
        <th>
          {{ sensor.name }}
        </th>
      </tr>
      <!-- <tr v-for="sensor in allSensors" :key="sensor">
        <th v-if="sensor.status == 'Online'" scope="row">
          {{ sensor.name }}
        </th>
        <td v-if="sensor.status == 'Online'">{{ sensor.reading }} KeV</td>
        <td v-if="sensor.status == 'Online'">{{ sensor.status }}</td>
        <td v-if="sensor.status == 'Online'">{{ sensor.building }}</td>
        <td v-if="sensor.status == 'Online'">{{ sensor.location }}</td>
      </tr> -->
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
      let tempRecipes = this.allSensors;

      // Process search input
      if (this.searchValue != "" && this.searchValue) {
        tempRecipes = tempRecipes.filter((item) => {
          return item.name
            .toUpperCase()
            .includes(this.searchValue.toUpperCase());
        });
      }
      return tempRecipes;
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
      items: this.allSensors,
      searchValue: "",
      recipes: [
        {
          title: "Pizza",
          description: "Yummy pizza for those lazy days",
          ingredients: [
            "Dough",
            "Tomato Paste",
            "Cheese",
            "Bell Pepper",
            "Onion",
          ],
          cookingTime: 60,
          img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          title: "Burritos",
          description: "Healthy yet very tasty burritos",
          ingredients: [
            "Burritos",
            "Kidney beans",
            "Onion",
            "Tomato",
            "Bell Pepper",
          ],
          cookingTime: 30,
          img: "https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          title: "Tomato Soup",
          description: "A tasty tomato soup for the cold winter",
          ingredients: ["Tomatoes", "Onion", "Oregano"],
          cookingTime: 45,
          img: "https://images.unsplash.com/photo-1553881781-4c55163dc5fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          title: "Ice Cream",
          description: "Just because... Ice Cream",
          ingredients: ["Whole milk", "Cream", "Eggs", "Sugar"],
          cookingTime: 120,
          img: "https://images.unsplash.com/photo-1515037028865-0a2a82603f7c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1321&q=80",
        },
      ],
    };
  },
};
</script>

<style scoped>
.searchbar {
  background-color: rgb(63, 63, 94);
  margin: 0px;
  margin-top: 40px;
}
.table-menu {
  padding: 0px;
}
.sensor-table {
  color: white;
  background-color: rgb(63, 63, 94);
}
</style>
