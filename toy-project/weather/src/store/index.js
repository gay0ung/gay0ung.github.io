import Vue from 'vue';
import Vuex from 'vuex';
import { weatherCity, weatherWeek } from '../api/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todayDATA: [],
    weekDATA: [],
  },
  mutations: {
    // 데이터가 변경될때마다 반영된다.
    SET_TODAY(state, today) {
      state.todayDATA = today;
    },
    SET_WEEK(state, week) {
      state.weekDATA = week;
    },
  },
  actions: {
    // 비동기 처리 해준다. Backend API를 통신한다.
    async FETCH_TODAYW({ commit }, city) {
      const { data } = await weatherCity(city);

      console.log(data);

      commit('SET_TODAY', data);

      return data;
    },

    async FETCH_WEEK({ commit }, city) {
      const { data } = await weatherWeek(city);

      console.log(data);

      commit('SET_WEEK', data);

      return data;
    },
  },
});
