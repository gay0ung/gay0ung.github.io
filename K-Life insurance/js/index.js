window.addEventListener("load", function() {
  //size checking!
  let resizeWork;
  let reHeightWork;

  window.addEventListener("resize", function() {
    clearTimeout(resizeWork);
    resizeWork = setTimeout(function() {
      console.log(window.innerWidth);
      sizeCheck();
    }, 150);
  });

  window.addEventListener("scroll", function() {
    clearTimeout(reHeightWork);
    reHeightWork = setTimeout(function() {
      console.log(window.innerHeight);
      sizeCheck();
    }, 150);
  });

  function sizeCheck() {}
  function sizeCheck() {}
  /* header ------------------------------------------------------------------- */
  /* main --------------------------------------------------------------------- */
  /* footer ------------------------------------------------------------------- */
});
