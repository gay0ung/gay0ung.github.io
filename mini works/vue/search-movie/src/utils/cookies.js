// search-form
function saveValue(value) {
  document.cookie = `movie-title = ${value}`;
}

function saveType(type) {
  document.cookie = `movie_type = ${type}`;
}
function deleteCookie(value) {
  document.cookie = `${value} = ''`;
}

// store
function getValueFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)movie_title\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}
function getTypeFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)movie_type\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

// MovieDetailForm 새로 고침시 해당 영화 데이터 남아있도록 하는 쿠키 생성.
// 인자값 이름은 movieID 안에는 (title,director, movieSeq)가 들어있다.
function saveDetail(movieID) {
  document.cookie = `movie_ID = ${movieID}`;
  document.cookie = `mListCheck = movieID`;
}
function getIDFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)movie_ID\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

// 첫번째 키워드 cookie에 저장용(새로고침시 첫번째 키워드 데이터가 사라지기 때문)
function saveFirstKey(key) {
  document.cookie = `firstKey = ${key}`;
}
function getFirstKey() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)firstKey\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

export {
  saveValue,
  saveType,
  deleteCookie,
  getValueFromCookie,
  getTypeFromCookie,
  saveDetail,
  getIDFromCookie,
  saveFirstKey,
  getFirstKey,
};
