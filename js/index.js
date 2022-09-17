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