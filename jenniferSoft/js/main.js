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
        if (scrollTop > 0) {
            header.className='queue';
            hamBtn.className = 'ham_btn queue'
        }
        if (scrollTop < 2) {
            header.className='';
            hamBtn.className = 'ham_btn'
        }
        if (scrollTop > 402) {
            header.className='on';
            hamBtn.className = 'ham_btn queue'
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
        var headerBtn = document.querySelector('.ham_btn');

        headerBtn.addEventListener('click', headerClick);


        for (var i = 0; i < navLis.length; i++) {
            navLis[i].addEventListener('mouseenter', enterWork);
            navLis[i].addEventListener('mouseleave', leaveWork);
        };

        function enterWork(ev) {
            
            var headUls = ev.target.querySelector('ul');
            var headAs = ev.target.querySelector('a');

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
        //headerClick
        function headerClick(ev) {
            console.log()
            var headerTarget = headerNav.parentNode.querySelector('.ham_btn');

            if (headerNav.classList.contains('on')) {
                headerNav.classList.remove('on');
                headerTarget.classList.remove('on');
                
                
            } else {
                headerNav.classList.add('on');
                headerTarget.classList.add('on')
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
            var footerTarget = encodeURI.target.parentNode.querySelector('ul');
            
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
            var licenseOp = document.querySelector('.license_option')
            if (licenseBtn.classList.contains('active')){
                licenseBtn.classList.remove('active')
            } else { 
                licenseBtn.classList.add('active')
            }
        }
    }
})