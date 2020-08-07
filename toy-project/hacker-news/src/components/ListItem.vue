<template>
  <div>
    <ul class="list-wrap">
      <li v-for="item in listItems" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link :to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by
            <template v-if="item.user">
              <router-link :to="`/user/${item.user}`" class="link-text">
                {{ item.user }}
              </router-link>
            </template>
            <template v-else>
              <a :href="item.url">{{ item.domain }}</a>
            </template>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    //eslint-disable-next-line vue/return-in-computed-property
    listItems() {
      return this.$store.state.list;
      // const name = this.$route.name;

      // if (name === 'news') {
      //   return this.$store.state.news;
      // } else if (name === 'ask') {
      //   return this.$store.state.ask;
      // } else if (name === 'jobs') {
      //   return this.$store.state.jobs;
      // }
    },
  },
  created() {
    //console.log(this.$route.path === '/news');
    // const name = this.$route.name;
    // if (name === 'news') {
    //   this.$store.dispatch('FETCH_NEWS');
    // } else if (name === 'ask') {
    //   const itemId = this.$route.params.id;
    //   this.$store.dispatch('FETCH_ASK', itemId);
    // } else if (name === 'jobs') {
    //   this.$store.dispatch('FETCH_JOBS');
    // }
  },
};
</script>

<style scoped>
.list-wrap {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b882;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828281c9;
}
</style>
