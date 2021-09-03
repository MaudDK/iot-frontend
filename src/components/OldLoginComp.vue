<template>
  <div class="loginbox">
    <h1>Login Here</h1>
    <form>
      <p>Username</p>
      <input type="text" name="" placeholder="Enter Username" />
      <p>Password</p>
      <input type="password" name="" placeholder="Enter Password" />
      <input type="submit" name="" value="Login" />
      <br />
      <a href="#">Lost your password?</a><br />
      <a href="#">Don't have an account? Sign up</a>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
};
</script>

<style scoped>
.loginbox {
  width: 320px;
  height: 420px;
  background: #000;
  color: #fff;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 70px 30px;
  border-radius: 20px;
}

h1 {
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}

.loginbox p {
  margin: 0;
  padding: 0;
  font-weight: bold;
}

.loginbox input {
  width: 100%;
  margin-bottom: 20px;
}

.loginbox input[type="text"],
input[type="password"] {
  border: none;
  border-bottom: 1px solid;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-size: 16px;
}

.loginbox input[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  background: #5ccb8c9c;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
}

.loginbox input[type="submit"]:hover {
  cursor: pointer;
  background: #ffc107;
  color: #000;
}

.loginbox a {
  text-decoration: none;
  font-size: 12px;
  line-height: 20px;
  color: darkgray;
}

.loginbox a:hover {
  cursor: pointer;
  color: #ffc107;
}
</style>
