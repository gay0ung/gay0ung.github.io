window.addEventListener('load',function(){
/* header -------------------------------------------------------------------------- */
/* main ---------------------------------------------------------------------------- */
//slider
const slideList = document.querySelector('.slide_list'); // Slide Parent
const listSubs = document.querySelectorAll('.list_sub'); // each slide.
const slideBtnPrev = document.querySelector('.slide_btn.prev'); // prev btn
const slideBtnNext = document.querySelector('.slide_btn.next'); // next btn
const slidePagination = document.querySelector('.slide_pagination')

const slideLen = listSubs.length;

const slideWidth = 1600;
const slideSpeed = 300;
const startNum = 0; // initial slide index(0~1)

slideList.style.width = slideWidth * (slideLen+2) + "px";

// Copy first and last slide
let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true)

// Add copied Slides
slideList.appendChild(clonedFirst)
slideList.insertBefore(clonedLast, slideList.firstElementChild)

slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px 0px)"

let curIndex = startNum; // current slide index (except copied slide)
let curSlide = listSubs[curIndex];
curSlide.classList.add('active');

/** next_Btn **/
slideBtnNext.addEventListener('click', function(e){
    e.preventDefault()
    console.log('clicked');
    
    if (curIndex <= slideLen - 1) {
        slideList.style.transition = "ms";
        slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px 0px)"
    }
    if (curIndex === slideLen - 1) {
        setTimeout(function() {
            slideList.style.transition = "0ms";
            slideList.style.transform = "trnaslate3d(-" + (slideWidth + "px, 0px, 0px");
        }, slideSpeed);
        curIndex = -1;
    }
    curSlide.classList.remove('active')
    curSlide = listSubs[++curIndex]
    curSlide.classList.add('active')
})

/** prev_Btn **/
slideBtnNext.addEventListener('click', function(e){
    e.preventDefault()
    console.log('clicked');
    
    if (curIndex > 0) {
        slideList.style.transition = slideSpeed + "ms";
        slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px 0px)"
    }
    if (curIndex === 0) {
        setTimeout(function() {
            slideList.style.transition = "0ms";
            slideList.style.transform = "trnaslate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
        }, slideSpeed);
        curIndex = slideLen;
    }
    curSlide.classList.remove('active')
    curSlide = listSubs[--curIndex]
    curSlide.classList.add('active')
})
/* footer -------------------------------------------------------------------------- */
})