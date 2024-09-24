<template>
  <div class="home-page">
    <h1>Home Page</h1>
    <p>Welcome to the Home Page</p>
    <router-link to="/about">
      Go to About Page
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="less" scoped>
.home-page {
  h1 {
    color: #3498db;
  }
}
</style>
