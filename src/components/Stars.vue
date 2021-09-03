<template>
  <vue-particles
    class="attempt"
    color="#dedede"
    :particleOpacity="0.7"
    :particlesNumber="160"
    shapeType="circle"
    :particleSize="3"
    linesColor="#dedede"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0"
    :linesDistance="100"
    :moveSpeed="1.25"
    :hoverEffect="false"
    hoverMode="grab"
    :clickEffect="false"
    clickMode="repulse"
  >
  </vue-particles>
</template>

<script>
export default {
  name: "Stars",
};
</script>

<style scoped>
.attempt {
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
