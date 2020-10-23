

function headerNavBtn(){
  let buttons = document.querySelectorAll('.h-nav > button')
  let sections = document.querySelectorAll('.main-inner > section');

  for(let i = 0; i < buttons.length; i++){

    buttons[i].onclick = ((clickNum)=>{
      return (e)=>{
        e.preventDefault();

        buttons.forEach((el, idx) => {
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
headerNavBtn()


function checkedUl(id){
  const ul = document.querySelectorAll("ul.sec"),
        li = document.querySelectorAll('.list > li');

  const scrollIcon = document.querySelector('.scroll');


  
  ul.forEach((el,idx) => {
    if(el.classList.contains("list")){
      let liLen = el.children.length;
      let lis = el.children;

      if (liLen === 1) {
        el.children[0].style.height = "344px";
        scrollIcon.style.opacity = '0';
        console.log(idx);
      }

      listClickHandler(lis)
    }
  })  

}



function listClickHandler(list){
  const pageWrap = document.querySelector('.page-wrap');

  const CLICK = "click",
        ACTIVE = "active",
        HIDE = "hide"

  for(let i = 0; i < list.length; i++){
    list[i].onclick = ((targetNum)=>{
      return (e)=>{
        if (!e.target.classList.contains('sec-img')) return;

        if (e.target.classList.contains('sec-img')){
          let secContainer = e.target.parentElement;
          let closeBtn = secContainer.previousElementSibling;

          list[i].className = CLICK;
          if (list[i].className === CLICK){
            pageWrap.classList.add(CLICK)
          }
        }

      }
    
    })(i)
  }
  // let secContainer = document.querySelector('.sec-container')
  // console.log(secContainer);
  // for(let i = 0; i < list.length; i++){

  //   list[i].addEventListener('click',(e)=>{


  //     if (e.target.classList.contains('sec-img')){
  //       console.log('click');
  //     }
  //   })
  // }
}