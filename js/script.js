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
    const cardList = new CardList(initialCards);
    const addCardPopup = new AddCardPopup();
    const profilePopup = new ProfilePopup();

    function openFullSizeImage(event) {
        const imagePopup = new ImageHelper();
        if (event.target.classList.contains("place-card__image")) {
            imagePopup.open();
            $('.popup__image').src = event.target.style.backgroundImage.slice(5, -2);
        }
    }


    function initCallback() {

        // press  +  to open AddCardPopup
        $event($(".user-info__button")).on("click", addCardPopup.open.bind(addCardPopup));

        // press Edit to open Profile Popup
        $event($(".user-info__edit")).on("click", profilePopup.open.bind(profilePopup));

        // click image to open 8k version of the image
        $event($(".places-list")).on("click", openFullSizeImage)

    }

    cardList.render();
    initCallback();
};
