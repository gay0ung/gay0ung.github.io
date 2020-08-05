<template>
  <div class="main-page">
    <SearchForm></SearchForm>
    <SearchGenreForm></SearchGenreForm>
  </div>
</template>

<script>
import SearchForm from '@/components/search/SearchForm.vue';
import SearchGenreForm from '@/components/search/SearchGenreForm.vue';

export default {
  components: {
    SearchForm,
    SearchGenreForm,
  },
};
</script>

<style></style>
