<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  background-color: #fff;
}
</style>
