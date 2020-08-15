<template>
  <div class="today-wrap">
    <h2>Today weather</h2>
    {{ todayData }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      todayData: [],
    };
  },

  create() {
    this.todayData = this.$store.state.todayDATA;
  },
};
</script>

<style></style>
