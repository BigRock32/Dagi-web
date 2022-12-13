'use strict'

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


//Модальное окно
const btns = document.querySelectorAll('.services__item')
const modal = document.querySelector('.modal')
const cross = document.querySelector('.modal__close-icon')
const closeBg = document.querySelector('.modal__close-bg')
const formTitle = document.querySelector('.form__change-title')

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
    const title = parent.querySelector('.services__hidden-title');
    const titleText = title.innerText;
    formTitle.innerText = titleText;
}
//Конец кода модального окна


//Форма обратной связи
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form')
    form.addEventListener('submit', formSend)

    async function formSend(e){
        e.preventDefault()

        let error = formValidate(form)

        let formData = new FormData(form)

        if(error === 0){
            form.classList.add('_sending')
            // let response = await fetch('sendmail.php',{
            //     method: 'POST',
            //     body: formData
            // })
            // if(response.ok){
            //     let result = await response.json()
            //     alert(result.message)
            //     formPreview.innerHtml = ''
            //     form.reset()
            //     form.classList.remove('_sending')
            // }else{
            //     alert('Ошибка')
            //     form.classList.remove('_sending')
            // }
        }else{
            alert('Заполните обязательные поля')
        }
    }

    function formValidate(e){
        let error = 0
        let formReq = document.querySelectorAll('._req')

        for(let index = 0; index < formReq.length; index++){
            const input = formReq[index]
            formRemoveError(input)

            if(input.classList.contains('_email')){
                if(emailTest(input)){
                    formAddError(input)
                    error++
                }
            }else{
                if(input.value === ''){
                    formAddError(input)
                    error++
                }
            }
        }
        return error
    }

    function formAddError(input){
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }

    function formRemoveError(input){
        input.parentElement.classList.remove('_error')
        input.classList.remove('_error')
    }

    function emailTest(input){
        return !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(input.value);
    }
})