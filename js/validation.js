export const enableValidation = {
    inactiveButtonClass: 'form__button_error',
    submitButtonSelector: '.form__button',
    inputSelector: '.form__input',
    inputErrorClass: 'form__input_error',
    inputMarkError: 'form__input-mark_color_red',
    inputMarkFine: 'form__input-mark_color_green',
    errorClass: 'form__error_active'
};

export class FormValidator {
    constructor (enableValidation, templateForm) {
        this._validateOptions = enableValidation;
        this._form = templateForm;
    }

    _setEventListeners(profileForm) {
        const inputList = profileForm.querySelectorAll(this._validateOptions.inputSelector);
        
        this._handleFormInput(profileForm, this._validateOptions);
        profileForm.addEventListener('input', evt => {
                this._handleFormInput(profileForm, this._validateOptions);
        })
        
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', event => {
               this._isvalid(profileForm, inputElement, inputElement.validationMessage);
            })
        })
    }

    _isvalid(profileForm, inputElement) {
        const errorInput = profileForm.querySelector(`.form__error_${inputElement.id}`);
        const errorMark = profileForm.querySelector(`.form__input-mark_${inputElement.id}`);
        if (!inputElement.validity.valid || inputElement.value.length < inputElement.getAttribute("minlength")) {
            this._showInputError(errorInput, inputElement, errorMark, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement, errorMark, errorInput);
        }
    }

    _showInputError(errorInput, inputElement, errorMark, errorMessage) {
        errorInput.classList.add(this._validateOptions.errorClass);
        errorInput.textContent = errorMessage;
        errorMark.classList.add(this._validateOptions.inputMarkError);
        errorMark.classList.remove(this._validateOptions.inputMarkFine);
        inputElement.classList.add(this._validateOptions.inputErrorClass);
    }

    _hideInputError(inputElement, errorMark, errorInput) {
        errorInput.classList.remove(this._validateOptions.errorClass);
        errorMark.classList.remove(this._validateOptions.inputMarkError);
        errorMark.classList.add(this._validateOptions.inputMarkFine);
        inputElement.classList.remove(this._validateOptions.inputErrorClass);
    }

    _handleFormInput(profileForm, validateOptions) {
        const hasErrors = !profileForm.checkValidity();
        const buttonForm = profileForm.querySelector(validateOptions.submitButtonSelector);
        buttonForm.disabled = hasErrors;
        buttonForm.classList.toggle(validateOptions.inactiveButtonClass, hasErrors);
    }

    enableValidation() {
        const profileForm = document.querySelector('.form__container');
        profileForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners(profileForm);
    }
}