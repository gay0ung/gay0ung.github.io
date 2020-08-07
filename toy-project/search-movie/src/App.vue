<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/views/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
@import url('./assets/css/reset.css');
</style>
