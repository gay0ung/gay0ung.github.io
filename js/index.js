const pageWrap = document.querySelector('.page-wrap');
const buttons = document.querySelectorAll('.h-nav > button')
const sections = document.querySelectorAll('.main-inner > section');
const scrollIcon = document.querySelector('.scroll');
// const section = document.querySelector('section');
const closeBtn = document.querySelectorAll('.close-btn');
console.log(closeBtn);
headerNavBtn()
function headerNavBtn(){
  for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = ((clickNum)=>{
      return (e)=>{
        e.preventDefault();

        Array.from(buttons).map((el, idx) => {
          el.classList.remove("on");
          sections[idx].classList.remove("on")
        })

        buttons[i].classList.add("on")
        sections[i].classList.add("on")
      }

    })(i)
  }
  checkedUl()
};



function checkedUl(id){
  const ul = document.querySelectorAll("ul.sec"),
        li = document.querySelectorAll('.list > li');
  
  Array.from(ul).map((el,idx) => {
    if(el.classList.contains("list")){
      let liLen = el.children.length;
      let lis = el.children;

      // 길이가 1이고 li에 클릭이 없어야 한다.
 if (!pageWrap.classList.contains('click') && liLen === 1) {
        // el.children[0].style.height = "400px";
        // scrollIcon.style.opacity = '0';
      } 

      listClickHandler(lis)
    }
  })  
}

// 리스트 클릭했을때 상세내용 보이게 하기
function listClickHandler(list){
  const CLICK = "click",
        ACTIVE = "active",
        HIDE = "hide"

  for(let i = 0; i < list.length; i++){
    list[i].onclick = ((targetNum)=>{
      return (e)=>{
        let target = e.target.classList;
        console.log(e.target);
        if (!target.contains('sec-img')) return

          Array.from(list).forEach(el => {
              el.className = HIDE
          });

          list[targetNum].className = CLICK;
          pageWrap.classList.add(CLICK);
          // scrollIcon.style.opacity = "0";
          closeBtn[targetNum].classList.add(ACTIVE)
          console.log(closeBtn[targetNum]);
        
      }
    })(i)
  }
}

function clsoeBtn(){

}