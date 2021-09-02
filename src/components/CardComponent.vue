<template>
  <div class="card">
    <div class="img-background">
      <img src="https://placekitten.com/400/300" />
    </div>
    <div class="img-logo">
      <img src="https://thecatapi.com/api/images/get?format=src&type=gif" />
    </div>
    <div class="card-text">
      <h3>Title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit
        hendrerit efficitur. Nunc vel ex sed elit pulvinar placerat. Nullam
        velit neque, consequat eget mi vitae, sodales scelerisque elit.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
};
</script>

<style scoped>
.card {
  border-radius: 0px;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  border: none;
}

.img-background img {
  height: 200px;
  width: 100%;
}

.img-logo img {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  width: 140px;
  height: 140px;
  border-radius: 100%;
  border: 7px solid #ba4bbc;
  margin-top: -80px;
}
</style>
