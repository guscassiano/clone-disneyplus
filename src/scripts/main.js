document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-questions]')

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY < alturaHero) {
            ocultaElementosDoHeader()
        }
        else {
            exibeElementosDoHeader()
        }

    })

    // Seção de atraçoes, programaçção das abas
    for(let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            abaAlvo = botao.target.getAttribute('data-tab-button')
            const aba = document.querySelector(`[data-tab-id = ${abaAlvo}]`)

            hideAll()
            aba.classList.add('shows__list--is-active')

            removeButtonBorder()
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }
    // Seção FAQ, accordion
    for(let i=0; i < questions.length; i++) {
        questions[i].addEventListener('click',OpenOrCloseAnswer)
    }
})

function OpenOrCloseAnswer(element) {
    const classe = 'faq__questions__item--is-open'
    const fatherElement = element.target.parentNode

    fatherElement.classList.toggle(classe)
}


function hideAll() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for(let i=0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function removeButtonBorder() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i=0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }

}

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}