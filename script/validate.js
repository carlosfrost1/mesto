const settingUpValidation = {
   formSelector: '.popup__form',
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__submit-button',
   inactiveButtonClass: 'popup__submit-button_disabled',
   inputErrorClass: 'popup__input_type_error',
};

const showInputError = (form, input, message) => {
   const errorElement = form.querySelector(`.${input.id}-error`);
   errorElement.textContent = message;
   input.classList.add(settingUpValidation.inputErrorClass);
};
 
const hideInputError = (form, input) => {
   const errorElement = form.querySelector(`.${input.id}-error`);
   errorElement.textContent = '';
   input.classList.remove(settingUpValidation.inputErrorClass);
}
 
const checkInputValidity = (form, input) => {
   if (input.validity.valid) {
      hideInputError(form, input)
   } else {
      showInputError(form, input, input.validationMessage)
   };
};
 
const setEventListeners = (form) => {
   const inputList = Array.from(form.querySelectorAll(settingUpValidation.inputSelector));
   const buttonInForm = form.querySelector(settingUpValidation.submitButtonSelector);
   toggleButtonState (inputList, buttonInForm);
   
   inputList.forEach(input => input.addEventListener('input', function() {
      checkInputValidity(form, input);
      toggleButtonState (inputList, buttonInForm);
   }));
};
  
const enbaleValidation = (settingUpValidation) => {
   const forms = document.querySelectorAll(settingUpValidation.formSelector);
   forms.forEach(form => form.addEventListener('submit', function(evt){
      evt.preventDefault();      
   }));
   forms.forEach(form => setEventListeners(form))
};
 
function searchNoValidInput(inputList) {
   return inputList.some(inputList => !inputList.validity.valid);
}
 
function toggleButtonState (inputList, buttonInForm) {
   if (inputList === [] || buttonInForm === null) {
      return
   };
   if (searchNoValidInput(inputList)) {
      buttonInForm.setAttribute('disabled', true)
      buttonInForm.classList.add(settingUpValidation.inactiveButtonClass)
   } else {
      buttonInForm.removeAttribute('disabled', true)
      buttonInForm.classList.remove(settingUpValidation.inactiveButtonClass)
   };
};
enbaleValidation(settingUpValidation);