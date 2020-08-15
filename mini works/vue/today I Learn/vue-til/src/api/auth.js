// 로그인, 회원가입, ex회원 탈퇴 (사용자의 계정에 관련된 js)

import { instance } from './index.js';

// 회원가입하는 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 하는 API
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
