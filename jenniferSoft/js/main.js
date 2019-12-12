window.addEventListener('load', function () {

/* header --------------------------------------------------------------*/
//scroll
    var jenniferSF = document.querySelector('html');
    var header = document.querySelector('header');
    var mailIcon = document.querySelector('.contact_box')
    var links = document.querySelector('.link')
    var hamBtn = document.querySelector('.ham_btn')
    var oldScroll = 0;
    
    window.addEventListener('scroll', work);

    function work() {

        var scrollTop = jenniferSF.scrollTop;
        console.log(scrollTop);

        // if (oldScroll < scrollTop) {
        //     console.log('내려감');
        // } else if (scrollTop < oldScroll) {
        //     console.log('올라감');
        // }
        //---------------------
        if (scrollTop > 0) {
            header.className='queue';
            hamBtn.className = 'ham_btn on'
        }
        if (scrollTop < 2) {
            header.className='';
            hamBtn.className = 'ham_btn'
        }
        if (scrollTop > 402) {
            header.className='on';
            hamBtn.className = 'ham_btn on'
        }
        if (scrollTop < 3100) {
            mailIcon.className = 'contact_box'
            links.className = 'link'
            
        }
        if (scrollTop > 3300 ) {
            mailIcon.className ='contact_box queue'
            links.className = 'link queue'
           
        }
    }
// mouseenter & mouseleave
    jsHeaderNav();
    function jsHeaderNav() {

        var headerNav = document.querySelector('.head_nav');
        var navLis = document.querySelectorAll('.head_nav > ul > li');

        // console.log(headerNav);

        for (var i = 0; i < navLis.length; i++) {
            navLis[i].addEventListener('mouseenter', enterWork);
            navLis[i].addEventListener('mouseleave', leaveWork);
        };
        function enterWork(ev) {
            // console.log(ev.target.tagName);
            
            var headUls = ev.target.querySelector('ul');
            var headAs = ev.target.querySelector('a');

            // console.log(headUls);
            // console.log(headAs);

            if (headUls) {
                headUls.className='on';
                headAs.className = 'on';
            }
            if (navLis === null) {
                headUls.className = '';
            }
            
        }
        function leaveWork(ev) {
            var headUls = ev.target.querySelector('ul');
            var headAs = ev.target.querySelector('a');
            if (headUls) {
                headUls.className ='';
                headAs.className = '';
            }
        }
        
    }
/* main --------------------------------------------------------------------  */
    
    $(document).ready(function () {
        var options = {
            pager:false,
            auto:true,
            pause:5000,
            speed:800,
            nextSelector: $('.txt_btn.next'),
            prevSelector: $('.txt_btn.prev'),
            onSlideBefore: function () {
                // console.log(this.getCurrentSlide());
                // onSlidWork()
                lineAni(this.getCurrentSlide())
            }
        }

        let lis = document.querySelectorAll('.visual_photo_inner > li')

        function lineAni(num){
            lis[0].classList.remove('on');
            lis[1].classList.remove('on');
            lis[num].classList.add('on')
        }

        $('.visual_photo_inner').bxSlider(options);
    });

/* footer --------------------------------------------------------------------*/ 
//click
    ClickWork();

    function ClickWork() {
        var headerBtn = document.querySelector('.ham_btn');
        var etcLangBtn = document.querySelector('.etc_lang');
        var contactBox = document.querySelector('.contact_box');

        headerBtn.addEventListener('click', headerClick )
        etcLangBtn.addEventListener('click', LangClick);
        contactBox.addEventListener('click', boxClick);
        //console.log(headerBtn.parentNode);

        //console.log(contactBox);
    //headerClick
        function headerClick(ev) {
            
            var NavTarget = document.querySelector('.head_nav');

            console.log(NavTarget);
            console.log(ev.target.tagName);
            
            if (NavTarget.classList.contains('on')) {
                NavTarget.classList.remove('on');

            } else {
                NavTarget.classList.add('on');

            }

        }
    //etcLangBtn
        function LangClick(ev) {
            ev.preventDefault();
            var footerTarget = ev.target.parentNode.querySelector('ul');
            
            
            console.log(ev.target.tagName);
            
            if (ev.target.tagName !== 'A') return;

            if (footerTarget.classList.contains('on')) {
                footerTarget.classList.remove('on');

            } else {
                footerTarget.classList.add('on');
       
            }

        }
    // contactBox
        function boxClick(ev) {
            ev.preventDefault();

            var mailBox = document.querySelector('.box_wrap');
            var mailIcon = document.querySelector('.box_mail_icon');

            if (mailBox.classList.contains('on')) {
                mailBox.classList.remove('on');
            } else {
                mailBox.classList.add('on');
            } 
            if (mailIcon.classList.contains('on')) {
                mailIcon.classList.remove('on');
            }else {
                mailIcon.classList.add('on');
            }
        }
    }
})