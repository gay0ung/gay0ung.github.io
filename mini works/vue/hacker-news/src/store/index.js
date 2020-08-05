// 상태 관리 도구 (여러 컴포넌트 간에 공유되는 곳)
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutaions.js';
import actions from './action.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // 하이오더 컴포넌트로 정리를 했기 때문에 하위 데이터들은 필요없다.
    // news: [],
    // ask: [],
    // jobs: [],
    user: {},
    item: {},
    list: [],
  },
  getters: {
    //computed와 동일한 속성
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    },
  },
  mutations,
  actions,
});
