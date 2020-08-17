import axios from 'axios';

const config = {
  BASE_URL: 'http://api.openweathermap.org/data/2.5/',
  ICON_URL: ' http://openweathermap.org/img/wn/',
  KEY: 'f62408b4a87ada957cac20e4c23107ad',
};

function getUserWeather(lat, lon) {
  return axios.get(`${config.BASE_URL}weather?lat=${lat}&lon=${lon}`);
}

function weatherCity(city) {
  return axios.get(
    `${config.BASE_URL}weather?q=${city}&units=metric&appid=${config.KEY}`,
  );
}

function weatherWeek(city) {
  return axios.get(
    `${config.BASE_URL}forecast/daily?q=${city}&units=metric&appid=${config.KEY}`,
  );
}

function weatherIcon(icon) {
  return axios.get(`${config.ICON_URL}${icon}@2x.png`);
}

export { getUserWeather, weatherCity, weatherWeek, weatherIcon };
