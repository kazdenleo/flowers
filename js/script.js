import { productList } from "./components.js";
import { Card } from "./сard.js";
import { enableValidation, FormValidator } from "./validation.js";

productList.forEach((item) => {
	const newCard = new Card(item)
	const cardElement = newCard.generate();
	document.querySelector('.product').append(cardElement);
    }
);

$(document).ready(function() {
	$('.slider').slick({
		arrow:true,
		dots:true,
		inginite:true,
		slidesToShow:3,
		speed:2000,
		autoplay:false,
		autoplaySpeed:3000,
		pauseOfHover:true,
		pauseOfFocus:true,
		pauseOfDotsHover:true,
		draggable:true,
		swipe:true,
		centerMode:true,
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow:1
				}
			}
		],
	})
})
//form.js
const form = document.querySelector('.form');
const templateForm = form.querySelector('.form__container');

form.querySelector('.form__exit').addEventListener('click', event => {
    form.classList.remove('form_active');
})

// Присвоение слушателей всем кнопкам вызова формы и окрытие формы по нажанию на кнопку
const arrbut = document.querySelectorAll('.order-button');
arrbut.forEach(function(item, arrbut) {
	item.addEventListener('click', event => {
		form.classList.add('form_active');
		const newValidation = new FormValidator(enableValidation, templateForm);
		const validation = newValidation.enableValidation();
	})
});

//Присвоение слушателей кнопке закрытия формы и вызов функции закрытия по нажатию на кнопку закрытия
form.querySelector('.form__exit').addEventListener('click', event => {
    closeForm();
});

//Закрытие формы по нажатию вне формы
form.addEventListener('mousedown', (e) => {
	var container = document.querySelector('.form__container');
    if (!container.contains(e.target) & form.classList.contains('form_active')) {
        closeForm();
    }
});

//Функция закрытия формы
function closeForm() {
	form.classList.remove('form_active');
};

//отправка формы
templateForm.addEventListener('submit', formSend)
function formSend(e) {
	e.preventDefault();
	form.classList.add('form_sending');
	let formData = new FormData(templateForm);
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		if (xhr.status === 200) {
		form.classList.remove('form_sending');
		thankYou();
		setTimeout(thankYou, 3000);
		}
	}
	}
	xhr.open('POST', '../vendor/sendmail.php', true);
	xhr.send(formData);
	templateForm.reset();
}

//отображения благодарности за оставленную заявку
function thankYou() {
	const thanks = form.querySelector('.form__thanks');
	thanks.classList.toggle('form__thanks_active');
	if (!thanks.classList.contains('form__thanks_active')) {
		closeForm();
	}
}
//scroll.js
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 150;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
//menu.js
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
//mask.js
document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});