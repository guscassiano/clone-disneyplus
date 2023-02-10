document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')

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
})

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