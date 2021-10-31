<template>
  <div class="project-card d-flex justify-content-center m-1">
    <div class="sensor-background-layer">
      <div class="content">
        <h3 class="project-title">{{ name }}</h3>
        <p class="sensor-info">
          Building: {{ building }}
          <br />
          Location:{{ location }}
          <br />
          Status: {{ status }}
        </p>
        <div class="reading-layout">
          <div class="sensor-reading">{{ reading }}</div>
          <div class="sensor-unit">KeV</div>
        </div>
        <p class="reading-info">Gamma Ray Energy</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SensorComponent",
  props: {
    name: String,
    building: String,
    location: String,
    status: String,
    reading: Number,
  },
};
</script>

<style scoped>
.project-card {
  /* border: 5px solid rgb(100, 151, 96); */
  border: 2px solid rgb(152, 235, 146);
  border-radius: 100%;
  width: 250px;
  height: 250px;
  overflow: hidden;
  align-items: center;
  /* background-color: rgb(75, 81, 119); */
  background-image: url("../assets/back.png");
  background-size: 160%;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 0 1000px rgba(140, 108, 182, 0.315);
}

.sensor-info {
  font-size: 90%;
  z-index: 2;
  opacity: 1;
  letter-spacing: 1px;
  transition: 0.5s;
  margin: 0;
}

.project-title {
  font-size: 1.3em;
  font-weight: 600;
  color: white;
  z-index: 2;
  opacity: 1;
  letter-spacing: 1px;
  transition: 0.5s;
}

.project-number {
  position: relative;
  right: -180px;
  font-size: 2em;
  font-weight: 800;
  z-index: 1;
  opacity: 0.1;
  transition: 0.5s;
}

.reading-layout {
  position: relative;
  top: 20px;
  right: 9px;
}
.sensor-unit {
  font-size: 1em;
  margin: 0;
  position: relative;
  left: 35px;
  top: -28px;
}

.sensor-reading {
  font-size: 1.7em;
  font-weight: bold;
}

.reading-info {
  font-size: 0.8em;
  padding: 0px;
}

.content {
  text-align: center;
  color: white;
  position: relative;
  top: 16px;
}
</style>
