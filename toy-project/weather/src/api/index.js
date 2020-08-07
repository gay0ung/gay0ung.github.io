import axios from "axios";

const config = {
  baseURL: "https://api.openweathermap.org/data/2.5/weather?q=",
  weekURL: "  https://api.openweathermap.org/data/2.5/onecall?q=",
  API_KEY: "f62408b4a87ada957cac20e4c23107ad",
};
//api.openweathermap.org/data/2.5/forecast/daily?id={city ID}&cnt={cnt}&appid={your api key}

// 나라 입력
function weatherAPI(cityName) {
  return axios.get(
    `${config.baseURL}${cityName}&appid=${config.API_KEY}&units=metric`
  );
}

// 나라와 도시 입력
function weatherStateAPI(cityName, state) {
  return axios.get(
    `${config.baseURL}${cityName}${state}&appid=${config.API_KEY}&units=metric`
  );
}

// 일주일 날씨
function weatherWeekAPI(cityName, state) {
  return axios.get(
    `${config.weekURL}${cityName}${state}&appid=${config.API_KEY}&units=metric`
  );
}

export { weatherAPI, weatherStateAPI, weatherWeekAPI };
