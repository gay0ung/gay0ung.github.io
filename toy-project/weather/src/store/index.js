import Vue from 'vue';
import Vuex from 'vuex';
import { weatherCity, weatherWeek, weatherIcon } from '../api/index.js';
// getUserWeather
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: [],
    todayDATA: [],
    weekDATA: [],
    wIcon: '',
  },
  mutations: {
    // 데이터가 변경될때마다 반영된다.
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TODAY(state, today) {
      state.todayDATA = today;
    },
    SET_WEEK(state, week) {
      state.weekDATA = week;
    },
    SET_ICON(state, icon) {
      state.wIcon = icon;
    },
  },
  actions: {
    // // 비동기 처리 해준다. Backend API를 통신한다.
    // async GET_USER_LOCATION({ commit }, lat, log) {
    //   commit('SET_USER', data);
    // },
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

    async FETCH_ICON({ commit }, icon) {
      const { data } = await weatherIcon(icon);
      console.log(data);
      commit('SET_ICON', data);
      return data;
    },
  },
});
