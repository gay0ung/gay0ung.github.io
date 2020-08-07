<template>
  <div>
    <UserProfile :info="fetchedItem">
      <router-link :to="`/user/${fetchedItem.user}`" slot="username">
        {{ fetchedItem.user }}
      </router-link>
      <template slot="time">{{ 'Posted_ ' + fetchedItem.time_ago }}</template>
    </UserProfile>
    <section>
      <!-- 사용자 정보 -->
      <!-- <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">{{
            fetchedItem.user
          }}</router-link>
          <div class="time">{{ fetchedItem.time_ago }}</div>
        </div>
      </div> -->
    </section>
    <section>
      <div class="contents">
        <h2>{{ fetchedItem.title }}</h2>
        <div v-html="fetchedItem.content"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '@/components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', userId);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
.contents {
  padding: 0.6rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>
