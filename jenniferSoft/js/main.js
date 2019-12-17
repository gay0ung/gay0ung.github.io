window.addEventListener('load', function () {

/* header --------------------------------------------------------------*/
//scroll
    var jenniferSF = document.querySelector('html');
    var header = document.querySelector('header');
    var mailIcon = document.querySelector('.contact_box');
    var links = document.querySelector('.link');
    var hamBtn = document.querySelector('.ham_btn');

    
    window.addEventListener('scroll', scrollWork);
    var oldScroll = 0; //--> 전역변수로 호명해준다(지역으로 하면 계속 호출되기 때문)
    function scrollWork() {
        var scrollTop = jenniferSF.scrollTop;

        if(oldScroll < scrollTop){
            //console.log('down');
            downScroll();
        }else {
            //console.log('up');
            upScroll();
        }
        oldScroll = scrollTop;

        if (oldScroll === 0){
            header.className = '';
            hamBtn.className = 'ham_btn'
        }
        if(oldScroll > 0 && oldScroll < 402){
            upScroll();
        }

        function downScroll() {
            header.className = 'on';
            hamBtn.className = 'ham_btn queue'
        }
        function upScroll() {
            header.className = 'queue';
            hamBtn.className = 'ham_btn queue'
        }

    //contact_box :scroll
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
        var headerBtn = document.querySelector('.ham_btn');

        headerBtn.addEventListener('click', headerClick);


        for (var i = 0; i < navLis.length; i++) {
            navLis[i].addEventListener('mouseenter', enterWork);
            navLis[i].addEventListener('mouseleave', leaveWork);
        };

        function enterWork(e) {
            
            var headUls = e.target.querySelector('ul');
            var headAs = e.target.querySelector('a');

            if (headUls) {
                headUls.className='on';
                headAs.className = 'on';
            }
            if (navLis === null) {
                headUls.className = '';
            }
            
        }
        function leaveWork(e) {
            var headUls = e.target.querySelector('ul');
            var headAs = e.target.querySelector('a');
            if (headUls) {
                headUls.className ='';
                headAs.className = '';
            }
        }
        //headerClick
        function headerClick(e) {
            console.log()
            var headerTarget = headerNav.parentNode.querySelector('.ham_btn');
            var jsHtml = document.querySelector('html');

            if (headerNav.classList.contains('on')) {
                headerNav.classList.remove('on');
                headerTarget.classList.remove('on');
                header.classList.remove('queue');
                jsHtml.style.overflow = '';
            } else {
                headerNav.classList.add('on');
                headerTarget.classList.add('on');
                jsHtml.style.overflow = 'hidden';
                header.classList.add('queue')
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
                console.log(this.getCurrentSlide());
                // onSlidWork()
                lineAni(this.getCurrentSlide())
            }
        }

        let lis = document.querySelectorAll('.visual_photo_inner > li')

        function lineAni(num){
            lis[num].classList.add('on')
        }

        $('.visual_photo_inner').bxSlider(options);
    });

/* footer --------------------------------------------------------------------*/ 
//click
    footerClick();

    function footerClick() {
        var etcLangBtn = document.querySelector('.etc_lang');
        var icoMail = document.querySelector('.ico_mail');
        var licenseBtn = document.querySelector('.license')

        
        etcLangBtn.addEventListener('click', LangClick);
        icoMail.addEventListener('click', boxClick);
        licenseBtn.addEventListener('click', licenseClick)
        //console.log(headerBtn.parentNode);

        //console.log(icoMail);
    
    //etcLangBtn
        function LangClick(e) {
            e.preventDefault();

            var footerTarget = e.target.parentNode.querySelector('ul');
            
            if (e.target.tagName !== 'A') return;

            if (footerTarget.classList.contains('on')) {
                footerTarget.classList.remove('on');
            } else {
                footerTarget.classList.add('on');
            }

        }
    // icoMail
        function boxClick(e) {
            e.preventDefault();

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

        function licenseClick(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log(e.target);
            if (e.target.tagName === 'BUTTON') {
                if (licenseBtn.classList.contains('active')) {
                    licenseBtn.classList.remove('active');
                } else {
                    licenseBtn.classList.add('active')
                }

            } else if (e.target.tagName === 'A') {
                console.log(licenseBtn.childNodes[0]);
                licenseBtn.childNodes[0].nodeValue = e.target.textContent;
                licenseBtn.classList.remove('active');
                return;
            }

//라이센스 텍스트에서 글자를 찾는다
//찾은 글자를 라이센스 옵션에 글자로 박는다.
// slideroption참고 해보기

            
            
        }
    }
})