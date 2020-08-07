import {
  // 하이오더 컴포넌트가 적용되어 하위 로직들은 필요없다.
  // fetchNewsList,
  // fetchAskList,
  // fetchJobsList,
  fetchUserInfo,
  fetchItem,
  fetchList,
} from '@/api/index.js';

export default {
  // 하이오더 컴포넌트가 적용되어 하위 로직들은 필요없다.
  // FETCH_NEWS({ commit }) {
  //   return fetchNewsList().then(res => commit('SET_NEWS', res.data));
  // },
  // FETCH_ASK({ commit }) {
  //   return fetchAskList().then(res => commit('SET_ASK', res.data));
  // },
  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList().then(res => commit('SET_JOBS', res.data));
  // },
  FETCH_USER({ commit }, id) {
    // id -> userView에서 받은 인자
    return fetchUserInfo(id).then(res => commit('SET_USER', res.data));
  },
  FETCH_ITEM({ commit }, id) {
    return fetchItem(id).then(res => commit('SET_ITEM', res.data));
  },
  //promise 기반
  async FETCH_LIST({ commit }, pageName) {
    try {
      const res = await fetchList(pageName);
      commit('SET_LIST', res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};
