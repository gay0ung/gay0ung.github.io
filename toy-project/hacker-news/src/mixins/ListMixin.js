// mixin
import bus from '@/utils/bus.js';
export default {
  // 재사용할 컴포넌트 옵션  & 로직
  mounted() {
    // 인스턴스가 화면에 표현됬을때
    bus.$emit('end:spinner');
  },
  created() {
    bus.$emit('start:spinner');
    this.$store
      .dispatch('FETCH_LIST', this.$route.name)
      .then(() => {
        //console.log('fetched mixins');
        bus.$emit('end:spinner');
      })
      .catch(error => {
        console.log(error);
      });
  },
};

// HOC
// export default function create(){
//     // 재사용할 컴포넌트 옵션
// }
