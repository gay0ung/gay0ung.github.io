<template>
  <div class="search-form">
    <form @submit.prevent="submitForm">
      <select v-model="selected">
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <input type="text" :placeholder="placeholder" />
      <button type="submit"><i class="fas fa-search"></i></button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      selected: 'title',
      options: [
        {
          text: 'title',
          value: 'title',
        },
        {
          text: 'director',
          value: 'director',
        },
        {
          text: 'keyword',
          value: 'keyword',
        },
      ],
    };
  },
  methods: {
    submitForm() {
      //input값을 입력할 경우에만 처리, 빈값을 받을 경우에는 이동하지 않는다.
      if (this.inputValue) {
        this.$store.commit('INPUT_VALUE', this.inputValue);
        this.$store.commit('SET_OPTION', this.selected);

        this.inputValue = '';

        this.$router.push('/mList');
      }
    },
  },
  computed: {
    placeholder() {
      return `Please enter the ${this.selected}`;
    },
  },
};
</script>

<style></style>
