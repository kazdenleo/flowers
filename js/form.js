import { enableValidation, FormValidator } from "../js/validation.js";

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
  