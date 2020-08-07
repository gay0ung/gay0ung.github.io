import Vue from "vue";
import Vuex from "vuex";
import { weatherAPI } from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: [],
  },
  mutations: {
    SET_WEATHER(state, city) {
      state.city = city;
    },
  },

  actions: {
    FETCH_WEATHER(context, cityName) {
      return weatherAPI(cityName)
        .then((res) => {
          context.commit("SET_WEATHER", res.data);

          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
