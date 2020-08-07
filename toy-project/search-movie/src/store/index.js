import Vue from 'vue';
import Vuex from 'vuex';
import { movieData } from '@/api/index.js';
import { getValueFromCookie, getTypeFromCooke } from '@/utils/cookies.js';
import { getIDFromCookie } from '../utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieData: [],
    mResult: [],
    searchTxtBox: {
      serachInput: getValueFromCookie() || '',
      option: getTypeFromCooke() || '',
    },
    // keywordFirstBox: {
    //   searchTxt: getFirstKey() || '',
    //   check: '',
    // },
    // similarMovieData: [],
    // movieID: {
    //   serachTxt: getIDFromCookie() || '',
    // },
  },
  mutations: {
    SET_DATA(state, data) {
      console.log(data);

      // 영화 전체 데이터
      state.movieData = data;
      // 영화 세부정보 데이터
      state.mResult = data.Data[0].Result;
    },
    INPUT_VALUE(state, searchTxtBox) {
      console.log(searchTxtBox);
      state.searchTxtBox = searchTxtBox;
    },
    SET_OPTION(state, seleted) {
      state.seleted = seleted;
    },
    MOVIE_ID(state, id) {
      state.movieID = id;
    },
    SIMILAR_MOVIE_API(state, keywordFirstBox) {
      state.keywordFirstBox = keywordFirstBox;
    },
    SIMILAR_MOVIES(state, data) {
      state.similarMoviedata = data;
    },
  },
  actions: {
    FETCH_DATA(context, data) {
      console.log(data);
      return movieData(data.searchTxt)
        .then(res => {
          context.commit('SET_DATA', res.data);
          console.log(res);

          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
});
