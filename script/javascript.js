let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__desription');
let popupClose = document.querySelector('.popup__close-button');
let popupInputName = document.querySelector('.popup__input_name');
let popupInputDescription = document.querySelector('.popup__input_description');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__form');

function writePopup () {
    popupInputName.value = profileName.textContent;
    popupInputDescription.value = profileDescription.textContent;
 };
 
 function openPopup () {
    popup.classList.add('popup_opened');
    writePopup();
 };
 
 function closePopup () {
    popup.classList.remove('popup_opened');
 };
 
 function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupInputName.value;
    profileDescription.textContent = popupInputDescription.value;
    closePopup ();
 };
 
 form.addEventListener('submit', formSubmitHandler);
 
 popupClose.addEventListener('click', closePopup);
 
 editButton.addEventListener('click', openPopup);
