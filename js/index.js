const pageWrap = document.querySelector('.page-wrap');

const hNav = document.querySelector('.h-nav'),
  nav = document.querySelector('nav')
  hNavBtn = document.querySelector('#hNavBtn'),
  buttons = hNav.querySelectorAll('li > button');

const mainInn = document.querySelector('.main-inner')
  sections = mainInn.querySelectorAll('.main-inner > section'),
  section = mainInn.querySelector('section'),
  secLis = mainInn.querySelectorAll('.list > li');

const sProject = document.querySelector('.s-project'),
  secTab = document.querySelectorAll('.s-tab > button'),
  secContent = document.querySelectorAll('.s-contents > div');

const scrollIcon = document.querySelectorAll('.scroll');

const closeBtn = document.querySelectorAll('.close-btn');


// class name
const CLICK = "click",
  ACTIVE = "active",
  HIDE = "hide",
  SHOW = "show",
  ON = 'on';


init();


/* header ---------------------------------------------------------------- */
function headerNavBtn() {
  clickHandler(buttons, hNav, sections, 'BUTTON', ON);
};

function sizeCheck(){
  let loadedSize = window.innerWidth;
  
  // nav메뉴 모바일&테블릿 사이즈 일때(햄버거 메뉴)
  if (loadedSize < 768) {
    nav.style.visibility = "hidden";

    hNavBtn.addEventListener('click', (ev) => {
      if (ev.target.classList.contains(ACTIVE)) {
        hNavBtn.classList.remove(ACTIVE);
        nav.style.visibility = "hidden";
      } else {
        hNavBtn.classList.add(ACTIVE);
        nav.style.visibility = "visible"
      }
    })
  } else {
    nav.style.visibility = "visible"
  }

  if(loadedSize < 479){
    let conTxt = document.querySelectorAll('.contact > a');
    let tequTxt = document.querySelectorAll('.technique .t-content');
    
    let editNode = [conTxt, tequTxt]

    editNode.map( el => {
      return el.forEach(txt => {
        txt.nodeName === "DIV" ? txt.style.display = "none" : txt.lastChild.textContent = "";
      })
    })
  }
}

// nav메뉴를 클릭 할때 리셋.
function resetClass() {
  Array.from(secLis).forEach(el => { el.className = "" });
  Array.from(closeBtn).forEach(el => { el.classList.remove(ACTIVE) })

  pageWrap.classList.remove(CLICK);

  if (window.innerWidth < 768) {
    hNavBtn.classList.remove(ACTIVE);
    nav.style.visibility = "hidden";
  }
}

/* main ------------------------------------------------------------------ */

// 리스트 클릭했을때 상세내용 보이게 하기
function listClickHandler() {
  const secUls = document.querySelectorAll('.list');

  return Array.from(secUls).map((ul, idx) => {
    if (ul.children.length > 1){
      scrollIcon[idx].classList.add(SHOW)
    }

     Array.from(ul.children).map((li, num) => {
      li.num = num;
      const clickNum = li.num;
      const lis = ul.children;

      li.addEventListener('click', (e) => {
        const targetCL = e.target.classList;
  
        if (targetCL.contains('sec-img')){
          for(let i = 0 ; i < lis.length; i++){
            lis[i].className = HIDE;
          }

          lis[clickNum].className = CLICK;
          pageWrap.classList.add(CLICK);
          closeBtn[idx].classList.add(ACTIVE);
          
          closeBtn[idx].addEventListener('click', (e)=> {
              for (let i = 0; i < lis.length; i++) { lis[i].className = "" }

              closeBtn[idx].classList.remove(ACTIVE);
              pageWrap.classList.remove(CLICK);
            }
          )
        } 
      })
    })
  })
}

function paintHeadColor(){
  const h3 = document.querySelectorAll('h3');

  const mainColor = [
    '#e7e7e7', 
    '#cfcfcf', 
    '#98b3b881', 
    '#b8b1987e', 
    '#98b8a27c'
  ];

  Array.from(h3).map((h,idx) => { h.style.backgroundColor = mainColor[idx] })
}

// sub project탭메뉴 클릭
function sectionTab(){
  clickHandler(secTab, sProject, secContent, 'BUTTON', SHOW)
}


// 클릭 이벤트
function clickHandler(child, parent, friend, tagName, className) {
  for (let i = 0; i < child.length; i++) {
    child[i].num = i
  }

  parent.addEventListener('click', (e) => {
    if (e.target.tagName !== tagName) return;

    const btnNum = e.target.num;

    Array.from(child).map((btn, idx) => {
      btn.classList.remove(className);
      friend[idx].classList.remove(className);
      resetClass()
    })

    child[btnNum].classList.add(className);
    friend[btnNum].classList.add(className);
  });
};

function init(){
  headerNavBtn();
  paintHeadColor();
  listClickHandler();
  sectionTab();
  sizeCheck();
}