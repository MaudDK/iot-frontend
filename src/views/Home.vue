<template>
  <div class="home">
    <div class="loginbox">
      <div class="logintitle">
        <h1>Log In to Your Account</h1>
      </div>
      <div class="loginform">
        <form action="action_page.php" method="post">
          <div class="imgcontainer">
            <img src="img_avatar2.png" alt="Avatar" class="avatar" />
          </div>

          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <label for="psw"><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" />
              Remember me
            </label>
          </div>

          <div class="container" style="background-color: #f1f1f1">
            <button type="button" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import navbar from "@/components/navbar.vue";

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  display: flex;
  min-height: 100vh;
  background-color: rgb(34, 34, 34);
  justify-content: center;
  align-items: center;
}
.logintitle {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginbox {
  background-color: white;
  height: 600px;
  width: 500px;
  border-radius: 10px;
}
</style>
