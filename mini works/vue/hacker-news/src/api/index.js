import axios from 'axios';

// 1.HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들을 정리
async function fetchNewsList() {
  //   return axios.get(config.baseUrl + 'news/1.json');
  try {
    const res = await axios.get(`${config.baseUrl}news/1.json`);
    return res;
  } catch (error) {
    console.log(error);
  }
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

// createList에 사용할 api (사용자 이름에따라 다르게 적용)
function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(userid) {
  return axios.get(`${config.baseUrl}user/${userid}.json`);
}

function fetchItem(userid) {
  return axios.get(`${config.baseUrl}item/${userid}.json`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItem,
  fetchList,
};
