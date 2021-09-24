<template>
  <div class="login-box d-flex align-items-center">
    <div class="login-content container">
      <div class="logo-image row align-self-center justify-content-center">
        <img src="../assets/logoNuclear.png" class="logo" />
      </div>
      <h1 class="login-title text-center">Register</h1>
      <form @submit.prevent="handleSubmit">
        <div class="login-user">
          <label class="input-title">Email</label>
          <input class="login-input" type="email" placeholder="Enter Email" />
          <label class="input-title">Username</label>
          <input class="login-input" type="text" placeholder="Enter Username" />
        </div>
        <div class="login-password">
          <label class="input-title">Password</label>
          <input
            class="login-input"
            type="password"
            placeholder="Enter Password"
          />
          <label class="input-title">AuthKey</label>
          <input class="login-input" type="text" placeholder="Enter AuthKey" />
        </div>
        <div class="login-submit">
          <input class="submit-button" type="submit" value="Register" />
        </div>
        <div class="login-misc">
          <router-link class="link" to="/">
            <a href="#">Have an account? Login here</a>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent",
  data() {
    return {};
  },
  methods: {
    handleSubmit() {
      console.log("submited");
    },
  },
};
</script>

<style scoped>
.login-box {
  border-radius: 20px;
  width: 375px;
  height: 625px;
  background-color: #0e1225e3;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}

.login-content {
  color: white;
  padding: 30px;
  padding-top: 20px;
}

.login-title {
  font-size: 22px;
  font-weight: bold;
  margin: 0px;
  justify-self: center;
  padding-bottom: 20px;
}
.input-title {
  font-weight: bold;
  margin: 0px;
}
.login-input {
  border: none;
  background: transparent;
  border-bottom: 1px solid;
  border-color: white;
  width: 100%;
  margin-bottom: 20px;
  outline: none;
  height: 40px;
  font-size: 16px;
  color: white;
}

.submit-button {
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  background: #4955ff9c;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  transition: 0.7s;
  margin-bottom: 20px;
}

.submit-button:hover {
  background: #4eacaf;
  color: white;
}

.login-misc a {
  text-decoration: none;
  font-size: 12px;
  line-height: 20px;
  color: darkgray;
  transition: 0.4s;
}

.login-misc a:hover {
  color: #ffc107;
}

.logo {
  width: 290px;
  height: 116px;
  padding: 0px;
}
</style>
