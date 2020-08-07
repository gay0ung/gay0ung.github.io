<template>
  <form @submit.prevent="submitCity">
    <!-- 나라 입력 -->
    <input type="text" v-model="country" placeholder="나라명을 입력해 주세요" />
  </form>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      city: "",
      country: "",
      value: {}
    };
  },
  methods: {
    submitCity() {
      eventBus.inputCity(this.country);
      this.country = "";
    }
  }
};
</script>

<style></style>
