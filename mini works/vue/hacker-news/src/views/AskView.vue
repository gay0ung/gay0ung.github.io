<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import ListItem from '@/components/ListItem.vue';
// import bus from '@/utils/bus.js';
import ListMixin from '@/mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  created() {
    // bus.$emit('start:spinner');
    // setTimeout(() => {
    //   const itemId = this.$route.params.id;
    //   this.$store
    //     .dispatch('FETCH_ASK', itemId)
    //     .then(() => {
    //       console.log('fetched');
    //       bus.$emit('end:spinner');
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }, 2000);
  },
  computed: {
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk',
    // }),
    // 배열로 하면 함수명을 그대로 사용할수 있다.
    // ...mapGetters([
    //  'fetchedAks'
    //])
    // #2
    // ...mapState({
    //   ask: state => state.ask,  }),
    // #1
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
};
</script>
