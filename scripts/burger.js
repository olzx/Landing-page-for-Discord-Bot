window.addEventListener('load', () => {
    const burger = document.querySelector('.navbar__burger')
    const menu = document.querySelector('.navbar__menu')

    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.toggle('active')
        document.body.classList.toggle('lock')
    })
})