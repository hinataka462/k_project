<template>
  <div id="app">
    <ItemView />
  </div>
</template>

<script>
//import LoginForm from './components/LoginForm.vue'
import ItemView from './views/ItemView.vue'

export default {
  name: 'App',
  components: {
    ItemView
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
