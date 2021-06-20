const editButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__desription');
const popupClose = document.querySelector('.popup__close-button');
const popupInputName = document.querySelector('.popup__input_js_name');
const popupInputDescription = document.querySelector('.popup__input_js_description');
const popup = document.querySelector('.popup');
const formEditProfile = document.querySelector('.popup__form');

const openPopupAddButton = document.querySelector('.profile__add-button');
const popupAddPlace = document.querySelector('.popup_add-place');
const formAddPlace = document.querySelector('.popup__form_add-place');
const popupAddPlaceName = document.querySelector('.popup__input_js_place-name');
const popupAddPlaceImgLink = document.querySelector('.popup__input_js_place-img');
const addNewCards = document.querySelector('.template__add-places').content;
const placesContent = document.querySelector('.elements');
const popupPlacePhoto = document.querySelector('.popup_place-image');
const popupPlacePhotoImage = document.querySelector('.popup__image');
const popupPlacePhotoText = document.querySelector('.popup__text');
const closeEditPopup = document.querySelector('.popup__close-button_edit-profile');
const closeAddPlace = document.querySelector('.popup__close-button_add-place');
const closePlacePhoto = document.querySelector('.popup__close-button_place-image');

const initialCards = [
   {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   },
   
   {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
   },

   {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
   },

   {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
   },

   {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
   },
   
   {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
   },
   
 ];

 function addCardInElements () {
   initialCards.forEach(item => {
     fillCard(createCard(item.name, item.link));
  })
}; 

 function createCard (name, link) {
   const card = addNewCards.querySelector('.element').cloneNode(true);
   const title = card.querySelector('.element__name');
   const cardImg = card.querySelector('.element__image');
   title.textContent = name;
   cardImg.src = link;
   cardImg.alt = name;
 
   cardImg.addEventListener('click', function(){
      openPopup(popupPlacePhoto);
      popupPlacePhotoImage.src = link;
      popupPlacePhotoImage.alt = name;
      popupPlacePhotoText.textContent = name;
   });
 
   const likeButton = card.querySelector('.element__like');
   likeButton.addEventListener('click', () => likeButton.classList.toggle('element__like_active'));
 
   const deleteButton = card.querySelector('.element__delete-button');
   deleteButton.addEventListener('click', () => deleteButton.closest('.element').remove() );
   return card
 };

 function fillCard(card) {
   placesContent.prepend(card);
 };

 addCardInElements();

 function writePopup () {
    popupInputName.value = profileName.textContent;
    popupInputDescription.value = profileDescription.textContent;
 };

 function openEditPopup () {
   openPopup(popupEditProfile);
   checkFormValidate(popup);
   writePopup();
 };

 function saveFromProfileInfo (evt) {
    evt.preventDefault();
    profileName.textContent = popupInputName.value;
    profileDescription.textContent = popupInputDescription.value;
    closePopup (popupEditProfile);
 };

 function closePopupAddPlace (evt) {
   evt.preventDefault();
   fillCard(createCard(popupAddPlaceName.value, popupAddPlaceImgLink.value));
   popupAddPlaceName.value = '';
   popupAddPlaceImgLink.value = '';
   closePopup(popupAddPlace);
 };

 function openPopup (popup) {
   popup.classList.add('popup_opened');
   popup.addEventListener('click', closePopupClickOverlay);
   document.addEventListener('keydown', closePopupEscapeButton);
};
 
 function closePopup (popup) {
   popup.removeEventListener('click', closePopupClickOverlay);
   document.removeEventListener('keydown', closePopupEscapeButton);
   popup.classList.remove('popup_opened');
};

 function openPopupAddCard (popup) {
   checkFormValidate(popup);
   openPopup(popup);
 };

 function checkFormValidate (popup) {
   const inputList = Array.from(popup.querySelectorAll(settingUpValidation.inputSelector));
   const buttonInForm = popup.querySelector(settingUpValidation.submitButtonSelector);
   toggleButtonState (inputList, buttonInForm);
 };

 const closePopupEscapeButton = (evt) => {
   const openedPopup = document.querySelector('.popup_opened')
   if (evt.key === 'Escape') {
      closePopup(openedPopup);
   }
 };

 const closePopupClickOverlay = (evt) => {
   const openedPopup = document.querySelector('.popup_opened')
   if (evt.target === openedPopup) {
      closePopup(openedPopup);
   }
 };

 openPopupAddButton.addEventListener('click', () => openPopupAddCard(popupAddPlace));
 closeAddPlace.addEventListener('click', () => closePopup(popupAddPlace));
 formAddPlace.addEventListener('submit', closePopupAddPlace);

 editButton.addEventListener('click', openEditPopup); 
 closeEditPopup.addEventListener('click', () => closePopup(popupEditProfile));
 formEditProfile.addEventListener('submit', saveFromProfileInfo);

 closePlacePhoto.addEventListener('click', () => closePopup(popupPlacePhoto));
