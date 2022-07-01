<template>
  <header>
    <RouterLink to="/">
      Home
    </RouterLink>
    <RouterLink to="/mypage">
      My Page
    </RouterLink>
  </header>
  <RouterView />
  <footer><h1>Footer</h1></footer>
</template>

<style lang="scss" scoped>
  footer {
    display: flex;

  }
</style>




