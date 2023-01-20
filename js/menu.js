const burger = document.querySelector('.burger');
burger.addEventListener('click', evt => {
    burger.classList.toggle('burger_active');
    document.querySelector('.header__menu').classList.toggle('header__menu_active');
    burger.querySelector('.burger__line').classList.toggle('burger__line_active');
    document.querySelector('.header__container').classList.toggle('header__container_active');
    document.querySelector('.header__phone').classList.toggle('header__phone_active');
    document.querySelector('.header').classList.toggle('header_active');
    document.querySelector('.header__logo').classList.toggle('header__logo_active');
})
