const form = document.querySelector('.form');


form.querySelector('.form__exit').addEventListener('click', event => {
    classList.remove('form_active');

//Закрытие формы по нажатию вне формы
document.addEventListener('click', (e) => {
	const Popup = document.getElementById(`${e.target.id}`);
    console.log(Popup);
	const whereClick = e.composedPath().includes(Popup);
	if (whereClick) {
		document.getElementById(`${e.target.id}`).classList.remove('form_active');	
	} 
})