<template>
  <div class="dashboard container-fluid">
    <div class="row">
      <div class="dash">
        <MenuComponent />
        <SensorGuage v-if="!toggleView" />
        <SensorTable v-if="!toggleView" />
        <!-- <testcomp /> -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import TestComponent from "@/components/TestComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";
import SensorGuage from "../components/SensorGuage.vue";
import SensorTable from "../components/SensorTable.vue";
// import testcomp from "../components/testcomp.vue";
export default {
  name: "Dashboard",
  components: {
    MenuComponent,
    SensorGuage,
    SensorTable,
    // testcomp,
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
</style>
