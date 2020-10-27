// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const dDAY = document.querySelector("#d-day");

console.log(dDAY);
function getTime() {
  // Don't delete this.
  const today = new Date().getTime()
  const xmasDay = new Date("2020-12-24:00:00:00+0900").getTime();

  let meryy = xmasDay - today;

  let day = Math.floor(meryy/(1000*60*60*24))
  let hour = Math.floor(meryy%(1000*60*60*24)/(1000*60*60))
  let min = Math.floor(meryy % (1000 * 60 * 60) / (1000 * 60)) 
  let sec = Math.floor(meryy%(1000*60)/1000)

  dDAY.innerHTML = `${day}d ${hour < 10 ? `0${hour}` : `${hour}`}h ${min < 10 ? `0${min}` : `${min}`}m ${sec < 10 ? `0${sec}` : `${sec}`}s`
}

function init() {
  setInterval(getTime,1000)
}
init();
