<template>
  <div class="bg">
    <div class="inner login">
      <RouterLink to="/signin">
        Sign In
      </RouterLink>
    </div>
    <div class="inner">
      <RouterLink to="/store">
        Store
      </RouterLink> 
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../imgs/bg_imgs/main.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 100%;
  width: 100vw;
  height: 100vh;
}
.inner {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 35vh;
  width: 30vw;
  height: 40vh; 
  background-color: #fff;
  opacity: .9;
}
.login {
  margin-right: 50px;
}
</style>
