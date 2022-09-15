const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset;

    if (scrollTop >= 10) {
        header.classList.add('_fixed');
    }else{
        header.classList.remove('_fixed');
    }
    });



const anim = lottie

anim.loadAnimation({
   container: document.querySelector('#lottie'),
   rerender: 'svg',
   loop: true,
   autoplay: true,
   path: './first-screen-anim.json'
})