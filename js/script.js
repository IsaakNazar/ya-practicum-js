window.onload = () => {


    const initialCards = [
        {
            name: 'Архыз',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
        },
        {
            name: 'Челябинская область',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
        },
        {
            name: 'Иваново',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
        },
        {
            name: 'Камчатка',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
        },
        {
            name: 'Холмогорский район',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
        },
        {
            name: 'Байкал',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
        },
        {
            name: 'Нургуш',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
        },
        {
            name: 'Тулиновка',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
        },
        {
            name: 'Остров Желтухина',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
        },
        {
            name: 'Владивосток',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
        }
    ];
    const bigSizeImage = $("#big-size-image");
    const cardList = new CardList(initialCards);
    const addCardPopup = new AddCardPopup();
    const profilePopup = new ProfilePopup();

    function toggleBigSizeImage() {//показать/спрятать попап с большой картинкой
        bigSizeImage.classList.toggle("popup_is-opened");
    }

    function openFullSizeImage(event) {
        const imagePopup = new ImageHelper();
        if (event.target.classList.contains("place-card__image")) {
            imagePopup.open();
            $('.popup__image').src = event.target.style.backgroundImage.slice(5, -2);
        }
    }


    function initCallback() {
        // коллбэк для щелчка по карточке (лайк, удаление, открытие);
        // cards.addEventListener("click", function (event) {
        //     if (event.target.classList.contains("place-card__like-icon")) {// щёлкнули по лайку
        //         // event.target.classList.toggle("place-card__like-icon_liked");
        //     } else {
        //         if (event.target.classList.contains("place-card__delete-icon")) { // щёлкнули по иконке удаления
        //             cards.removeChild(event.path[2]); //удаляем
        //         } else {//вся карточка за исключением иконок лайк и удаления
        //             if (event.target.classList.contains("place-card__image")) {//картинка, а не подписи внизу
        //                 const popupImage = $('.popup__image');
        //                 popupImage.src = event.target.style.backgroundImage.slice(5, -2);
        //                 toggleBigSizeImage();
        //             }
        //         }
        //     }
        // });

        // click  +  to open AddCardPopup
        $event($(".user-info__button")).on("click", addCardPopup.open.bind(addCardPopup));

        // press Edit to open Profile Popup
        $event($(".user-info__edit")).on("click", profilePopup.open.bind(profilePopup));

        // click image to open full size
        $event($(".places-list")).on("click", openFullSizeImage)

        // закрытие закрытия попапа с большой картинкой
        // const crossButtonBigImage = $("#big-size-image .popup__close");
        // crossButtonBigImage.addEventListener("click", toggleBigSizeImage);


    }

    cardList.render();
    initCallback();
};
