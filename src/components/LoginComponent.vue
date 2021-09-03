<template>
  <div class="login-box d-flex align-items-center">
    <div class="login-content container">
      <img
        src="../assets/logoNuclear.png"
        width="290"
        height="116"
        class="logo-image align-self-center"
      />
      <h1 class="login-title text-center">Login</h1>
      <form>
        <div class="login-user">
          <p class="input-title">Username</p>
          <input
            class="login-input"
            type="text"
            name=""
            placeholder="Enter Username"
          />
        </div>
        <div class="login-password">
          <p class="input-title">Password</p>
          <input
            class="login-input"
            type="password"
            name=""
            placeholder="Enter Password"
          />
        </div>
        <div class="login-submit">
          <input class="submit-button" type="submit" name="" value="Login" />
        </div>
        <div class="login-misc">
          <a href="#">Lost your password?</a><br />
          <a href="#">Don't have an account? Sign up</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
};
</script>

<style scoped>
.login-box {
  border-radius: 20px;
  width: 350px;
  height: 450px;
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
</style>
