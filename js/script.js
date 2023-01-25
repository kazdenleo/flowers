import { productList } from "/js/components.js";
import { Card } from "../js/сard.js";

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