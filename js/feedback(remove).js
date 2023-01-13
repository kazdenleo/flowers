import { feedbackList } from "/js/feedbackList.js";

export class Feedback {
    constructor(item) {
        this._name = item.name;
        this._town = item.town;
        this._feedback = item.feedback;
    }

    _getElement() {
        const feedbackElement = document
        .querySelector('#template-feedback')
        .content
        .querySelector('.feedback-item')
        .cloneNode(true);
        return feedbackElement;
    }

    generate() {
        this._element = this._getElement();
        this._element.querySelector('#name').textContent = this._name;
        this._element.querySelector('#town').textContent = this._town;
        this._element.querySelector('#feedback').textContent = '«' + this._feedback + '»';
        return this._element;
    }
}