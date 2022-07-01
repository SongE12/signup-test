<template>
  <div class="bg">
    <div class="inner">
      <div>
        <h1>회원가입 페이지 입니다.</h1>
        <div>
          <input
            v-model="email"
            type="text" />
        </div>
        <div>
          <input
            v-model="password"
            type="text" />
        </div>
        <div>
          <input
            v-model="displayName"
            type="text" />
        </div>
        <button @click="signUp">
          확인
        </button>
        <RouterLink to="/signin">
          <button>
            로그인
          </button>
        </RouterLink>
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
      password: '',
      displayName: ''
    }
  },
  computed: {
    ...mapStores(useUserStore)
  },  
  methods: {
    async signUp() {
      const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'KDT2_team6'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          displayName: this.displayName
        })
      })
      const { user, accessToken } = await res.json()
      window.localStorage.setItem('token', accessToken)
      this.userStore.user = user
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
  
  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 35vh;
    width: 40vw;
    height: 40vh; 
    background-color: #fff;
    opacity: .9;
  }
}
</style>
