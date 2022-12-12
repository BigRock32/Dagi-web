//Анимация шапки
const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset;

    if (scrollTop >= 10) {
        header.classList.add('_fixed');
    }else{
        header.classList.remove('_fixed');
    }
    });

// const mediaQuery = window.matchMedia('(min-width: 768px)')

// function handleTabletChange(e) {
//     if (e.matches) {
        
//         document.addEventListener('DOMContentLoaded', function(){
//             console.log('Ready');
//         })
//     }
// }

// mediaQuery.addListener(handleTabletChange)
// handleTabletChange(mediaQuery)


// function checkMediaQuery() {
//     if (window.innerWidth < 769) {
//         window.addEventListener('scroll', () => {
//             let scrollTop = window.pageYOffset;
        
//             if (scrollTop >= 10) {
//                 header.classList.remove('_fixed');
//             }else{
//                 header.classList.add('_fixed');
//             }
//         });
//     }
// }
// window.addEventListener('resize', checkMediaQuery);
//Конец анимации шапки


//Графика на первом экране
const anim = lottie

anim.loadAnimation({
    container: document.querySelector('#lottie'),
    rerender: 'svg',
    loop: true,
    autoplay: true,
    path: './first-screen-anim.json'
})
//Конец графики на первом экране


//Анимация аккордиона

let questBody = document.querySelector('.questions__question .questions__question-body')
let arrow = document.querySelector('.questions__question')

let questBodys = document.querySelectorAll('.questions__question-head')
let quest = document.querySelectorAll('.questions__question')

function initQuestion(){
    let firstQuestionBodyHeight = document.querySelector('.questions__question .questions__question-body > *').clientHeight
    questBody.style.maxHeight = firstQuestionBodyHeight + 'px'
}
initQuestion()

function questOpen(){

let questionHeaderClickHandler = function(e){
    quest.forEach(function(question){
        question.querySelector('.questions__question-body').style.maxHeight = '0px'
        question.classList.remove('rotate')
    })

    let questionSection = e.target.closest('.questions__question')

    let insideElHeight = questionSection.querySelector('.questions__question-body > *').clientHeight

    questionSection.querySelector('.questions__question-body').style.maxHeight = insideElHeight + 'px'
    questionSection.classList.add('rotate')
}
    arrow.classList.add('rotate')

    questBodys.forEach(function(question){
        question.addEventListener('click', questionHeaderClickHandler)
    })
}
questOpen()
//Конец анимации аккордиона


//Прокрутка страницы
const menuLinks = document.querySelectorAll('header__link,footer__link,[data-goto]')
if(menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

            if(burger.classList.contains('_active')){
                document.body.classList.remove('_lock')
                burger.classList.remove('_active')
                burgerMenu.classList.remove('_active')
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}
//Конец кода прокрутки страницы


//Анимация бургера
const burger = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger-menu')
if(burger){
    burger.addEventListener('click', function(e){
        document.body.classList.toggle('_lock')
        burger.classList.toggle('_active')
        burgerMenu.classList.toggle('_active')
    })
}
//Конец анимации бургера


//Модальное окно и форма обратной сзязи
const btns = document.querySelectorAll('.services__item')
const modal = document.querySelector('.modal')
const cross = document.querySelector('.modal__close-icon')
const closeBg = document.querySelector('.modal__close-bg')
const formTitle = document.querySelector('.form__title')
const btnTitle = document.querySelectorAll('.services__title')

if(btns.length > 0){
    btns.forEach(btn => {
        btn.addEventListener('click', function(e){
            modal.classList.add('_open')
            document.body.classList.add('_lock')
            e.preventDefault();
        })
    })
}

btns.forEach((btn) => btn.addEventListener('click', btnHandler));

cross.addEventListener('click', closeModal);

closeBg.addEventListener('click', (e)=>{
    if(e.target == closeBg){
        closeModal()
    }
})

function closeModal(){
    modal.classList.remove('_open')
    document.body.classList.remove('_lock')
}

function btnHandler(e){
    const parent = e.target.closest('.services__item');
    const title = parent.querySelector('.services__title');
    const titleText = title.innerText;
    formTitle.innerText = titleText;
}