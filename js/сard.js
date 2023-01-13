import { productList } from "/js/components.js";

export class Card {
    constructor(item) {
        this._name = item.nameProduct;
        this._img = item.imgProduct;
    }

    _getElement() {
        const cardElement = document
        .querySelector('#template')
        .content
        .querySelector('.product__card')
        .cloneNode(true);
        return cardElement;
    }

    /*_setAddListener() {
        this._element.querySelector('.order-button').addEventListener('click', event => {
            this._openForm();
        });  
    }

    _openForm() {
        document.querySelector('.form').classList.add('form_active')
    }*/

    generate() {
        this._element = this._getElement();
        //this._setAddListener();
        this._element.querySelector('.product__img').src = this._img;
        this._element.querySelector('.product__name').textContent = this._name;
        return this._element;
    }
}