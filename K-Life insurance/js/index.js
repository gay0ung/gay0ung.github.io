init();

function sizeChecking() {
  // let resizeWork;

  window.addEventListener("resize", function () {
    const innerWidth = window.innerWidth;
    // clearTimeout(resizeWork);
    // resizeWork = setTimeout(function () {
    //   let inWidth = window.innerWidth;
    //   if (inWidth > 1280) {
    //     scrollEvent();
    //   }
    // }, 100);
    sec2TabMenu();
    removeTxt(innerWidth);

  });
  // if (window.innerWidth > 1280) {
  //   scrollEvent();
  // }
}
/* header ------------------------------------------------------------ */
function headerNav(){
  const hNav = document.querySelector('header');
  const navLis = document.querySelectorAll('.header-nav .nav-group1 > li');
  const nlist = document.querySelectorAll('.header-nav .nav-group2');

  for (let i = 0; i < nlist.length; i++){
    navLis[i].addEventListener('mouseenter', (e) => {
      e.target.className = "on";
      hNav.classList.add('on');

      hNav.style.height = nlist[i].clientHeight + 120 + 'px';
      hNav.style.transition = '.3s';
    })

    navLis[i].addEventListener('mouseleave',(e) =>{
      hNav.classList.remove('on');

      hNav.style.height = `80px`;
      e.target.className = "";
    })
  }
}
function headerMenu(){
  const siteMap = document.querySelector('.header-sitemap');
  const mapHero = document.querySelector('.hero-sitemap')
  const closeBtn = document.querySelector('.close-btn');
  const navLis = document.querySelectorAll('.nav-group1 > li');

  siteMap.addEventListener('click', (e)=>{
    e.preventDefault();
    // for (list of navLis){
    //   navLis.removeEventListener('mouseenter',(e))
    // }
    siteMap.classList.add('on');

    if (e.target === closeBtn){
        siteMap.classList.remove('on');
    };
  })
}

/* main -------------------------------------------------------------- */
// section scrollEvent
// function scrollEvent() {
//   let sections = document.querySelectorAll("section"),
//     boxHeigth,
//     HeigthCheck;

//   resizeHeight();
//   window.addEventListener("resize", () => {
//     clearTimeout(HeigthCheck);
//     HeigthCheck = setTimeout(() => {
//       resizeHeight();
//     }, 10);
//   });

//   function resizeHeight() {
//     boxHeigth = window.innerHeight;
//   }

//   for (let i = 0; i < sections.length; i++) {
//     sections[i].addEventListener("mousewheel", (e) => {
//       if (e.wheelDelta < 0) {
//         window.scrollTo({
//           top: boxHeigth * (i + 1),
//           behavior: "smooth"
//         });
//       }
//       if (e.wheelDelta > 0) {
//         window.scrollTo({
//           top: boxHeigth * (i - 1),
//           behavior: "smooth"
//         });
//       }
//     });
//   }

//   let pageNavBtn = document.querySelectorAll(".pageBtn-wrap > li span");

//   for (let i = 0; i < pageNavBtn.length; i++) {
//     pageNavBtn[i].addEventListener("click", () => {
//       window.scrollTo({
//         top: boxHeigth * i,
//         behavior: "smooth"
//       });
//     });
//   }

//   window.addEventListener("scroll", function () {
//     for (let i = 0; i < pageNavBtn.length; i++) {
//       if (window.scrollY === boxHeigth * i) {
//         for (let i = 0; i < pageNavBtn.length; i++) {
//           pageNavBtn[i].classList.remove("on");
//         }

//         pageNavBtn[i].classList.add("on");

//       } else if (window.scrollY > 3748) {
//         pageNavBtn[i].classList.remove("on");
//       }
//     }
//   });
// }

// #section02
function sec2TabMenu(){
  const tabMenu = document.querySelector('.tab');
  const tabBtn = document.querySelectorAll('.tab > button');
  const tabContent = document.querySelectorAll('.tab-contents > ul');

  if (window.innerWidth > 1198) {
    tabMenu.addEventListener('click', tabClickHandler);
  } else {
    for(let i = 0; i < tabBtn.length; i++){
      tabBtn[i].classList.remove('hide');
      tabBtn[i].classList.remove('on');
      tabContent[i].classList.remove('hide')
      tabContent[i].classList.remove('on')
    }

    tabBtn[0].classList.add('on');
    tabContent[0].classList.add('on');

    tabMenu.addEventListener('click', tabClickHandler);
  }

  function tabClickHandler(e){
    const tagName = e.target.tagName

    if (tagName !== 'BUTTON') return;

    if (window.innerWidth > 1198) {
      let wTabBtn = filter(tabBtn);
      let wTabContent = filter(tabContent);

      activeTab(wTabBtn, wTabContent);
    } else {
      activeTab(tabBtn, tabContent)
    }

    function filter(check) {
      return Array.from(check).filter(el => !el.classList.contains('hide'));
    }

    function activeTab(tab, content) {
      for (let i = 0; i < tab.length; i++) {
        tab[i].num = i;
        tab[i].classList.remove('on');
        content[i].classList.remove('on')
      }

      const targetNum = e.target.num;

      e.target.classList.add('on');
      content[targetNum].classList.add('on')
    }
  }
}

function removeTxt(innerWidth){
  const moreBtn = document.querySelector('.more-btn');

  return innerWidth < 767 ? moreBtn.lastChild.textContent = '' : moreBtn.lastChild.textContent = 'MORE'
}

function sec2Slide(){
  const slideBtns = document.querySelector('.slide-page-set');

  slideBtns.addEventListener('click', (e)=>{
    console.log(e.target);
  })
}


/* footer ------------------------------------------------------------ */


function init(){
  headerNav()
  headerMenu()
  sizeChecking()
  sec2TabMenu()
  sec2TabMenu()
}