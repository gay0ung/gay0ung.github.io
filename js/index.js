const pageWrap = document.querySelector('.page-wrap');

const hNav = document.querySelector('.h-nav'),
      buttons = hNav.querySelectorAll('li > button');
  
const mainInn = document.querySelector('.main-inner')
  sections = mainInn.querySelectorAll('.main-inner > section'),
  section = mainInn.querySelector('section'),
  secLis = mainInn.querySelectorAll('.list > li');


const scrollIcon = document.querySelector('.scroll');

const closeBtn = document.querySelectorAll('.close-btn');


init();

/* header ------------------------------------------------------------------- */
function headerNavBtn() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].num = i
  }

  hNav.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    const btnNum = e.target.num;

    Array.from(buttons).map((btn, idx) => {
      btn.classList.remove('on');
      sections[idx].classList.remove('on')
      resetClass()
    })

    buttons[btnNum].classList.add('on');
    sections[btnNum].classList.add('on');
  });
};


/* main --------------------------------------------------------------------- */

// 리스트 클릭했을때 상세내용 보이게 하기
function listClickHandler() {
  const secUls = document.querySelectorAll('.list');

  const CLICK = "click",
    ACTIVE = "active",
    HIDE = "hide";

  return Array.from(secUls).map((ul, idx) => {
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
            for (let i = 0; i < lis.length; i++) {lis[i].className = ""; }
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
  const h3 = document.querySelectorAll('h3')
  const mainColor = [
    '#e7e7e7', 
    '#cfcfcf', 
    '#98b3b881', 
    '#b8b1987e', 
    '#98b8a27c'
  ];

  Array.from(h3).map((h,idx) => {
    h.style.backgroundColor = mainColor[idx]
  })


}

// nav메뉴를 클릭 할때 리셋.
function resetClass(){
  Array.from(secLis).forEach(el => {el.className = ""});
  Array.from(closeBtn).forEach(el => {el.classList.remove("active")})

  pageWrap.classList.remove("click");
}

function init(){
  headerNavBtn();
  paintHeadColor()
  listClickHandler()
}