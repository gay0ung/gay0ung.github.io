import axios from 'axios';

const config = {
  BASE_URL: 'https://api.openweathermap.org/data/2.5/',
  KEY: 'f62408b4a87ada957cac20e4c23107ad',
};

// function getUserWeather(lat, lon) {
//   return axios.get(`${config.BASE_URL}weather?lat=${lat}&lon=${lon}`);
// }

function weatherCity(city) {
  return axios.get(`${config.BASE_URL}weather?q=${city}&appid=${config.KEY}`);
}

function weatherWeek(city) {
  return axios.get(
    `${config.BASE_URL}forecast/daily?q=${city}&appid=${config.KEY}`,
  );
}

export { weatherCity, weatherWeek };
// getUserWeather
