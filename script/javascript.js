let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__desription');
let popupClose = document.querySelector('.popup__close-icon');
let popupSubmit = document.querySelector('.popup__submit-button');
let popupInputName = document.querySelector('.popup__input-name');
let popupInputDescription = document.querySelector('.popup__input-description');
let popup = document.querySelector('.popup');

editButton.onclick = function () {
    popup.classList.add('popup_opened');
    popupInputName.setAttribute('value', profileName.textContent);
    popupInputDescription.setAttribute('value', profileDescription.textContent);
}

popupClose.onclick = function () {
    popup.classList.remove('popup_opened');
}

popupSubmit.onclick = function () {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = popupInputName.getAttribute('value');
    profileDescription.textContent = popupInputDescription.getAttribute('value');
}

popupSubmit.addEventListener('submit', formSubmitHandler); 