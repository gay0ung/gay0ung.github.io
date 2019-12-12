
window.addEventListener('load', function () {
/* header ------------------------------------------------------------- */
    // scroll
    var htmlEl = document.querySelector('html');
    var kakaoHeader = document.querySelector('header');
    var linkTop = document.querySelector('.link_top');
    window.addEventListener('scroll', scrollWork);


    function scrollWork() {
        var htmlElTop = htmlEl.scrollTop;
        console.log(htmlElTop);

        if (htmlElTop > 0) {
            kakaoHeader.className = 'on';
            linkTop.className = 'link_top on'
        }
        if (htmlElTop < 2){
            kakaoHeader.className = '';
            linkTop.className = 'link_top'
        }
        if (htmlElTop > 600){
            linkTop.className = 'link_top on queue';
        }
    }
    // mouseenter & mouseleave
    headerNav();
    function headerNav() {
        
        var headerNav = document.querySelector('.head_nav');
        var navLis = document.querySelectorAll('.head_nav > ul > li');

        //console.log(navLis);

        for (var i = 0; i < navLis.length; i++) {
            navLis[i].addEventListener('mouseenter', enterWork);
            navLis[i].addEventListener('mouseleave', leaveWork);
        };

        function enterWork(ev) {
            console.log(ev.target.tagName)
            var headDivs = ev.target.querySelector('div');
            if (headDivs) {
                headDivs.classList.add('on');
            }
        }

        function leaveWork(ev) {
            var headDivs = ev.target.querySelector('div');
            if (headDivs) {
                headDivs.classList.remove('on');
            }
        }
    }

/* main ------------------------------------------------------------------------*/
//visual_slide
    $(document).ready(function () {
        var slideLis = document.querySelectorAll('.visual_inner_slides > li');
        console.log(slideLis);
        
        slideSet();

        function slideSet() {
            var kakaoSlider = $('.visual_inner_slides').bxSlider();

            kakaoSlider.reloadSlider({
                mode: 'fade',
                auto:true,
                pause:5000, 
                pagerType: 'short',
                onSlideBefore: function () {
                    onSlidWork(this.getCurrentSlide())
                } 
            })
        }
        function onSlidWork(num) {
            var fontColor = slideLis[num].dataset.color;
            var headerInner = document.querySelector('.header_inner');
            

            
            if (fontColor === 'black') {
                headerInner.classList.add('bk');

            }else{
                headerInner.classList.remove('bk');
            }
        }    

    });

/* footer---------------------------------------------------------------------- */
    // click
    footerClick();

    function footerClick() {
        
        var coppyInfo = document.querySelector('.coppy_info');
        var relationUl = document.querySelector('.relation');

        coppyInfo.addEventListener('click', clickWork);
        relationUl.addEventListener('click', clickWork_re );
        //console.log(relationUl.tagName);
        
        function clickWork(e){
            e.preventDefault();
            var footerTarget = e.target.parentNode.querySelector('.cop');
            var copArrow = e.target.parentNode.querySelector('a > span')

            console.log(copArrow.parentNode);
            
            if (e.target.tagName !== 'A') return;

            if (footerTarget.classList.contains('on')) {
                footerTarget.classList.remove('on');
                copArrow.style.backgroundPosition = ' -275px -25px';
                copArrow.parentNode.style.fontWeight = '300'
            } else {
                footerTarget.classList.add('on');
                copArrow.style.backgroundPosition = '-285px -25px';
                copArrow.parentNode.style.fontWeight = '700'
            }
            
        }

        function clickWork_re(e) {
            e.preventDefault();

            
            var footerTarget = e.target.parentNode.querySelector('ul');
            var relationArr = e.target.parentNode.querySelector('a')

            console.log(footerTarget);
            
            if(e.target.tagName !== 'A') return;

            if (footerTarget.classList.contains('on')) {
                relationArr.classList.remove('on')
                footerTarget.classList.remove('on');
            } else {
                relationArr.classList.add('on');
                footerTarget.classList.add('on');
            }
        }
        
    }
    //{background-position: -285px -25px}
});



