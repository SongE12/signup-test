<template>
  <div class="bg">
    <div class="inner">
      <div>
        <div class="id">
          <span class="font">ID</span>
          <span>
            <input
              v-model="email"
              type="text" />
          </span>
        </div>
        <div class="pw">
          <span class="font">PW</span>
          <span>
            <input
              v-model="password"
              type="text" />
          </span>
        </div>
        <div class="btn">
          <button
            class="login"
            @click="signIn">
            로그인
          </button>
          <RouterLink to="/signup">
            <button class="join">
              회원가입
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useUserStore } from '~/store/user'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapStores(useUserStore)
  },  
  methods: {
    async signIn() {
      const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'KDT2_team6'
        },
        body: JSON.stringify({
          email: this.email.trim(),
          password: this.password.trim()
        })
      })
      const { user, accessToken } = await res.json()
      window.localStorage.setItem('token', accessToken)
      this.userStore.user = user
      console.log(this.userStore.user)
      if(!this.userStore.user) {
        alert('아이디 또는 비밀번호가 일치하지않습니다.')
      }
    }
  }
}
</script>

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
  margin-bottom: 35vh;
  width: 800px;
  height: 400px; 
  background-color: #fff;
  opacity: .9;
}
.font {
  display: inline-block;
  width: 100px;
  font-size: 46px;
  line-height: 55px;
}
.id {
  margin-top: 55px;
  margin-bottom: 10px;
}
.pw {
  margin-bottom: 50px;
}
input {
  font-size: 36px;
  border: none;
  background-color: #f5f5f5;
  width: 500px;
  height: 70px;
}
.btn {
  padding-left: 100px;
}
button {
  width: 240px;
  height: 70px;
  font-size: 28px;
}
.login {
  border: none;
  background-color: #F8CCE0;
  &:hover {
    opacity: .9;
  }
}
.join {
  margin-left: 22px;
  border: none;
  background-color: #845FA7;
  &:hover {
    opacity: .9;
  }
}
</style>
