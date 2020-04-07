window.addEventListener("load", function () {
  //size checking!
  let resizeWork;
  sizeCheck(); // 로드시 사이즈 체크
  window.addEventListener("resize", function () {
    clearTimeout(resizeWork);
    resizeWork = setTimeout(function () {
      console.log(window.innerWidth);
      sizeCheck();
    }, 100);
  });
  function sizeCheck() {}
  /* header -------------------------------------------------------------------------- */
  /* main ---------------------------------------------------------------------------- */

  /* footer -------------------------------------------------------------------------- */
});
