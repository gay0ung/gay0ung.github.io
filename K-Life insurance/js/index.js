window.addEventListener("load", function() {
  //size checking!
  let resizeWork;

  window.addEventListener("resize", function() {
    clearTimeout(resizeWork);
    resizeWork = setTimeout(function() {
      let inWidth = window.innerWidth;
      if (inWidth || inWidth > 1280) {
        scrollEvent();
      }
      sizeCheck();
    }, 150);
  });
  if (window.innerWidth > 1280) {
    scrollEvent();
  }

  function sizeCheck() {}
  /* header ------------------------------------------------------------------- */
  /* main --------------------------------------------------------------------- */

  function scrollEvent() {
    let sections = document.querySelectorAll("section"),
      boxHeigth,
      HeigthCheck;
    console.log(sections);

    resizeHeight();
    window.addEventListener("resize", function() {
      clearTimeout(HeigthCheck);
      HeigthCheck = setTimeout(function() {
        resizeHeight();
      }, 100);
    });

    function resizeHeight() {
      boxHeigth = window.innerHeight;
    }

    for (let i = 0; i < sections.length; i++) {
      sections[i].addEventListener("mousewheel", function(e) {
        if (e.wheelDelta < 0) {
          window.scrollTo({
            top: boxHeigth * (i + 1),
            behavior: "smooth"
          });
        }
        if (e.wheelDelta > 0) {
          window.scrollTo({
            top: boxHeigth * (i - 1),
            behavior: "smooth"
          });
        }
      });
    }

    let pageNavBtn = document.querySelectorAll(".pageBtn-wrap > li span");

    for (let i = 0; i < pageNavBtn.length; i++) {
      pageNavBtn[i].addEventListener("click", function() {
        window.scrollTo({
          top: boxHeigth * i,
          behavior: "smooth"
        });
      });
    }

    window.addEventListener("scroll", function() {
      for (let i = 0; i < pageNavBtn.length; i++) {
        if (window.scrollY === boxHeigth * i) {
          console.log(window.scrollY);

          for (let i = 0; i < pageNavBtn.length; i++) {
            pageNavBtn[i].classList.remove("on");
          }
          pageNavBtn[i].classList.add("on");
        } else if (window.scrollY > 3748) {
          pageNavBtn[i].classList.remove("on");
        }
      }
    });
  }

  /* footer ------------------------------------------------------------------- */
});
