<template>
  <div
    class="sensor-card-online d-flex justify-content-center m-1"
    v-if="alert == 'Normal'"
  >
    <div class="sensor-background-layer">
      <div class="content">
        <h3 class="sensor-title">{{ name }}</h3>
        <p class="sensor-info">
          Building: {{ building }}
          <br />
          Location:{{ location }}
          <br />
          Status: {{ status }}
          <br />
          Alert: {{ alert }}
          <br />
        </p>
        <div class="reading-layout">
          <div class="sensor-reading">{{ reading }}</div>
          <div class="sensor-unit">KeV</div>
        </div>
        <p class="reading-info">Gamma Ray Energy</p>
      </div>
    </div>
  </div>
  <div
    class="sensor-card-offline d-flex justify-content-center m-1"
    v-if="alert == 'Error'"
  >
    <div class="sensor-background-layer">
      <div class="content">
        <h3 class="sensor-title">{{ name }}</h3>
        <p class="sensor-info">
          Building: {{ building }}
          <br />
          Location:{{ location }}
          <br />
          Status: {{ status }}
          <br />
          Alert: {{ alert }}
          <br />
        </p>
        <div class="reading-layout">
          <div class="sensor-reading">{{ reading }}</div>
          <div class="sensor-unit">KeV</div>
        </div>
        <p class="reading-info">Gamma Ray Energy</p>
      </div>
    </div>
  </div>
  <div
    class="sensor-card-warning d-flex justify-content-center m-1"
    v-if="alert == 'Warning'"
  >
    <div class="sensor-background-layer">
      <div class="content">
        <h3 class="sensor-title">{{ name }}</h3>
        <p class="sensor-info">
          Building: {{ building }}
          <br />
          Location:{{ location }}
          <br />
          Status: {{ status }}
          <br />
          Alert: {{ alert }}
          <br />
        </p>
        <div class="reading-layout">
          <div class="sensor-reading">{{ reading }}</div>
          <div class="sensor-unit">KeV</div>
        </div>
        <p class="reading-info">Gamma Ray Energy</p>
      </div>
    </div>
  </div>
  <div
    class="sensor-card-critical d-flex justify-content-center m-1"
    v-if="alert == 'Critical'"
  >
    <div class="sensor-background-layer">
      <div class="content">
        <h3 class="sensor-title">{{ name }}</h3>
        <p class="sensor-info">
          Building: {{ building }}
          <br />
          Location:{{ location }}
          <br />
          Status: {{ status }}
          <br />
          Alert: {{ alert }}
          <br />
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
    alert: String,
  },
};
</script>

<style scoped>
.sensor-card-online {
  border: 4px solid #28a745;
  border-radius: 100%;
  width: 250px;
  height: 250px;
  overflow: hidden;
  align-items: center;
  background-image: url("../assets/back.png");
  background-size: 160%;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 0 1000px rgba(135, 182, 108, 0.315);
}

.sensor-card-offline {
  border: 4px solid #dc7235;
  border-radius: 100%;
  width: 250px;
  height: 250px;
  overflow: hidden;
  align-items: center;
  background-image: url("../assets/back.png");
  background-size: 160%;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 0 1000px #dc723575;
}

.sensor-card-critical {
  border: 4px solid #dc3545;
  border-radius: 100%;
  width: 250px;
  height: 250px;
  overflow: hidden;
  align-items: center;
  background-image: url("../assets/back.png");
  background-size: 160%;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 0 1000px rgba(184, 77, 77, 0.514);
}

.sensor-card-warning {
  border: 4px solid #dcb535;
  border-radius: 100%;
  width: 250px;
  height: 250px;
  overflow: hidden;
  align-items: center;
  background-image: url("../assets/back.png");
  background-size: 160%;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 0 1000px rgba(182, 152, 108, 0.514);
}

.sensor-info {
  font-size: 90%;
  z-index: 2;
  opacity: 1;
  letter-spacing: 1px;
  transition: 0.5s;
  margin: 0;
}

.sensor-title {
  font-size: 1.3em;
  font-weight: 600;
  color: white;
  z-index: 2;
  opacity: 1;
  letter-spacing: 1px;
  transition: 0.5s;
}

.sensor-number {
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
  top: 10px;
  right: 9px;
}
.sensor-unit {
  font-size: 1em;
  margin: 0;
  position: relative;
  left: 50px;
  top: -28px;
}

.sensor-reading {
  font-size: 1.7em;
  font-weight: bold;
}

.reading-info {
  font-size: 0.8em;
  padding: 0px;
  margin-bottom: 35px;
}

.content {
  text-align: center;
  color: white;
  position: relative;
  top: 16px;
}
</style>
