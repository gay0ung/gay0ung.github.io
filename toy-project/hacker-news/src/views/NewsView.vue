<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
//import bus from '@/utils/bus.js';
import ListMixin from '@/mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {
  //   bus.$emit('start:spinner');
  //   // spinner가 제대로 동작하는지 확인하기 위해 사용
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch('FETCH_NEWS')
  //       .then(() => {
  //         console.log('fetched');
  //         bus.$emit('end:spinner');
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, 2000);
  // },
};
</script>
