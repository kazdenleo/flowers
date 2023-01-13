import { productList } from "/js/components.js";
import { Card } from "../js/сard.js";
import { enableValidation, FormValidator } from "../js/validation.js";

const form = document.querySelector('.form');
const templateForm = document.querySelector('.form__container');

productList.forEach((item) => {
	const newCard = new Card(item)
	const cardElement = newCard.generate();
	document.querySelector('.product').append(cardElement);
    }
);

// Присвоение слушателей всем кнопкам вызова формы и окрытие формы по нажанию на кнопку
const arrbut = document.querySelectorAll('.order-button');
arrbut.forEach(function(item, arrbut) {
	item.addEventListener('click', event => {
		form.classList.add('form_active');
		const newValidation = new FormValidator(enableValidation, templateForm);
		const validation = newValidation.enableValidation();
	})
});

//Функция закрытия формы
function closeForm() {
	form.classList.remove('form_active');
};

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
				breakpoint: 768,
				settings: {

				}
			}
		],
	})
})