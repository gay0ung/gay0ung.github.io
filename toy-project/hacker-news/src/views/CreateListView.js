//하이오더 컴포넌트 구현해보기
import ListView from './ListView.vue';
import bus from '@/utils/bus.js';

export default function createListView(name) {
  return {
    // 재 사용할 인스턴스(컴포넌트)의 옵션들이 들어갈 자리
    name,
    created() {
      bus.$emit('start:spinner');
      // spinner가 제대로 동작하는지 확인하기 위해 사용
      this.$store
        .dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch(error => {
          console.log(error);
        });
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
