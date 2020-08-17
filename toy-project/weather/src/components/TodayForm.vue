<template>
  <div class="today-wrap">
    <template v-if="weatherList">
      <form action="" id="search-city" @submit="submitForm">
        <input
          type="text"
          v-model="cityName"
          placeholder="Please write the city name in English."
        />
      </form>
    </template>

    <template v-elseif="weatherList">
      <div class="today-main">
        <h1 class="city-name">{{ weatherList.name }}</h1>
        <div class="temp-minmax">
          <span class="hight">H {{ weatherList.main.temp_max }}℃</span>
          <span class="low">L {{ weatherList.main.temp_min }}℃</span>
        </div>
        <div class="temp-now">
          <p>{{ weatherList.main.temp }}℃</p>
          <p>{{ weatherList.weather.main }}</p>
        </div>
        <div class="weathe-img">
          <i>{{ weatherList.weather[0].icon }}</i>
        </div>
      </div>
    </template>

    <h2>{{ errMessage }}</h2>
    {{ weatherList }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityName: '',
      errMessage: '',
      bgi: '',
    };
  },
  computed: {
    weatherList() {
      return this.$store.state.todayDATA;
    },
  },
  create() {},
  methods: {
    submitForm() {
      try {
        let cityName = this.cityName;
        let icon = this.bgi;

        if (cityName == '') {
          alert('please wirte the city name');
        } else {
          this.$store.dispatch('FETCH_TODAYW', cityName);
          this.$store.dispatch('FETCH_ICON', icon);
        }
      } catch (err) {
        this.errMessage = err.response.message;
        console.log(err.Response.message);
      } finally {
        this.cityName = '';
      }
    },
  },
};
</script>

<style scoped>
.today-wrap {
  background-color: beige;
}
i {
  outline: 1px solid green;
  display: block;
  width: 100px;
  height: 100px;
}
</style>
