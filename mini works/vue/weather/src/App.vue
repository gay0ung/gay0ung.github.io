<template>
  <div id="app">
    <searchCity />
    <router-view />
  </div>
</template>

<script>
import searchCity from "./components/searchCity";
export default {
  components: { searchCity },
};
</script>
<style></style>
