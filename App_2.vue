<template>
  <div id="app">
    <UserView />
  </div>
</template>

<script>
//import LoginForm from './components/LoginForm.vue'
import UserView from './views/UserView.vue'

export default {
  name: 'App',
  components: {
    UserView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
