<template>
  <div
    v-if="city && tempInfo && weather"
    class="city_area"
    v-bind="inputCity()"
  >
    <ul>
      <li>
        <h2>{{ city.name }} / {{ city.sys.country }}</h2>
        <i class="wi" :class="`wi-owm-${weather[0].id}`"></i>
        <!-- <p>{{ weather[0].description }}</p> -->
        <p>{{ weather[0].main }}</p>
        <strong>{{ tempInfo.temp }}°C</strong>
        <p>최저: {{ tempInfo.temp_min }} / 최고: {{ tempInfo.temp_max }}</p>
        <p>체감온도 : {{ tempInfo.feels_like }}</p>

        <p>습도:{{ tempInfo.humidity }}%</p>
        <p>바람:{{ city.wind.speed }}m/s</p>
        <p>기압:{{ tempInfo.pressure }}hpa</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      onCity: "Korea",
      onSignal: false,
      country: "",
      temp: "",
      src: "http://openweathermap.org/img/w/",
      weatherData: [],
    };
  },

  computed: {
    city() {
      return this.$store.state.city;
    },
    tempInfo() {
      return this.$store.state.city.main;
    },
    weather() {
      return this.$store.state.city.weather;
    },
  },

  // 1.input이 입력되면 eventBus로 보낸 city명을 받아온뒤
  // 2. city명을 데이터에 저장한다.
  // 3. 이 과정을 거친 후에 store로 시티명을 보내줘야한다.

  created() {
    //SearchCitys.vue에서 입력된 city명을 이벤트 버스로 받아옴
    this.$store.dispatch("FETCH_WEATHER", this.onCity);
    this.currentWeatherInfo = this.city;
  },

  // 1. 온도, 기온 표시
  // 2. 나라의 도시 구하는 api추가
  // 3. 온도와 기온 아이콘으로 변경

  methods: {
    inputCity() {
      eventBus.$on("inputCity", (cityName) => {
        this.onCity = cityName;
        this.$store.dispatch("FETCH_WEATHER", this.onCity);
      });
    },
    getIcon() {},
  },
};
</script>
<style>
@import "../weather-icons-master/css/weather-icons.css";
</style>
