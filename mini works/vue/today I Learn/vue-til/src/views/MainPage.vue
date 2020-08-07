<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <PostListItem
          v-for="(postItem, i) in postsItems"
          :key="i"
          :postItem="postsItems"
        ></PostListItem>
        <!-- :key="postItem._id" -->
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <ion-icon name="add-outline"></ion-icon
    ></router-link>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import { fetchPosts } from '@/api/index';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postsItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      console.log(data.posts);

      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
