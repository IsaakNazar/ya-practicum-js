
window.onload = () => {

    const cards = $('.places-list'),
        userInfoName = $('.user-info__name'),
        userInfoJob = $('.user-info__job'),
        formPopupAddCard = $("#add-card"),
        formPopupProfile = $("#profile"),
        bigSizeImage = $("#big-size-image");

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


    function addOneCard(name, url) {
        // forming Card component
        const cardComponent = new Card(name, url);

        // add the formed card to the page
        cards.appendChild(cardComponent.render());
    }


    function loadCards() {
        initialCards.forEach(function (item) {
            addOneCard(item.name, item.link);
        });
    }

    function toggleFormAdd() {//коллбэк для открытия и закрытия формы добавления карточки
        validateAddCardForm();
        formPopupAddCard.classList.toggle("popup_is-opened");
    }

    function openFormProfile() {//коллбэк для открытия формы профиля
        document.forms.profile.elements.name.value = userInfoName.textContent;
        document.forms.profile.elements.job.value = userInfoJob.textContent;
        formPopupProfile.classList.toggle("popup_is-opened");
        validateProfileForm();
    }

    function closeFormProfile() {//коллбэк для закрытия формы профиля
        formPopupProfile.classList.toggle("popup_is-opened");
    }

    function submitFormProfile(event) {//коллбэк для сабмита формы профиля
        event.preventDefault();
        if (!$("#profile .popup__button").classList.contains("popup__button_enable")) {//кнопка "выключена", т.е. данные в форме невалидные
            return;
        }

        userInfoName.textContent = document.forms.profile.elements.name.value;
        userInfoJob.textContent = document.forms.profile.elements.job.value;
        formPopupProfile.classList.toggle("popup_is-opened");
    }


    function submitFormAdd(event) {
        const form = event.currentTarget;
        event.preventDefault();

        if (!$("#add-card .popup__button").classList.contains("popup__button_enable")) {//кнопка "выключена", т.е. данные в форме невалидные
            return;
        }
        addOneCard(form.elements.name.value, form.elements.link.value);
        toggleFormAdd();
        form.reset();
    }

    function toggleBigSizeImage() {//показать/спрятать попап с большой картинкой
        bigSizeImage.classList.toggle("popup_is-opened");
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

        // нажатие на кнопку +
        const button = $(".user-info__button");
        // button.addEventListener("click", toggleFormAdd);
        $event(button).on('click', toggleFormAdd);

        // закрытие формы добавления нового элемента
        const crossButton = $("#add-card .popup__close");
        crossButton.addEventListener("click", toggleFormAdd);

        // сабмит формы добавления карточки.
        document.forms.new.addEventListener("submit", submitFormAdd);


        // нажатие на кнопку Edit
        const buttonEdit = $(".button.user-info__edit");
        buttonEdit.addEventListener("click", openFormProfile);

        // закрытие формы редактирования профиля
        const crossButtonEdit = $("#profile .popup__close");
        crossButtonEdit.addEventListener("click", closeFormProfile);

        // сабмит формы редактирования профиля
        document.forms.profile.addEventListener("submit", submitFormProfile);

        // закрытие закрытия попапа с большой картинкой
        const crossButtonBigImage = $("#big-size-image .popup__close");
        crossButtonBigImage.addEventListener("click", toggleBigSizeImage);

        //валидация редактирования профиля
        document.forms.profile.elements.name.addEventListener("input", validateProfileForm);
        document.forms.profile.elements.job.addEventListener("input", validateProfileForm);

        //валидация добавления новой карточки
        document.forms.new.elements.name.addEventListener("input", validateAddCardForm);
        document.forms.new.elements.link.addEventListener("input", validateAddCardForm);
    }

// 0 - пустая строка
// 1 - ок
// 2 - слишком длинная или короткая

    function validateLenghtStr(str, min, max) {
        if (str.length === 0)
            return 0;
        if (str.length >= min && str.length <= max)
            return 1;
        return 2;
    }

    function validateProfileForm() {
        let isOk = true;

        const formProfileName = document.forms.profile.elements.name;
        const formErrorProfileName = $("#error-profile-name");
        switch (validateLenghtStr(formProfileName.value, 2, 30)) {
            case 0:
                formErrorProfileName.textContent = "Это обязательное поле";
                isOk = false;
                break;
            case 1:
                formErrorProfileName.textContent = "";
                break;
            case 2:
                formErrorProfileName.textContent = "Должно быть от 2 до 30 символов";
                isOk = false;
                break;
        }

        const formProfileJob = document.forms.profile.elements.job;
        const formErrorProfileJob = $("#error-profile-job");
        switch (validateLenghtStr(formProfileJob.value, 2, 30)) {
            case 0:
                formErrorProfileJob.textContent = "Это обязательное поле";
                isOk = false;
                break;
            case 1:
                formErrorProfileJob.textContent = "";
                break;
            case 2:
                formErrorProfileJob.textContent = "Должно быть от 2 до 30 символов";
                isOk = false;
                break;
        }

        if (isOk) {
            $("#profile .popup__button").classList.add("popup__button_enable");
        } else {
            $("#profile .popup__button").classList.remove("popup__button_enable");
        }
    }

    function validateAddCardForm() {
        let isOk = true;

        const formNewName = document.forms.new.elements.name;
        const formErrorCardName = $("#error-card-name");
        switch (validateLenghtStr(formNewName.value, 2, 30)) {
            case 0:
                formErrorCardName.textContent = "Это обязательное поле";
                isOk = false;
                break;
            case 1:
                formErrorCardName.textContent = "";
                break;
            case 2:
                formErrorCardName.textContent = "Должно быть от 2 до 30 символов";
                isOk = false;
                break;
        }

        const formNewLink = document.forms.new.elements.link;
        const formErrorCardLink = $("#error-card-link");
        if (validURL(formNewLink.value)) {
            formErrorCardLink.textContent = "";
        } else {
            formErrorCardLink.textContent = "Здесь должна быть ссылка";
            isOk = false;
        }

        if (isOk) {
            $("#add-card .popup__button").classList.add("popup__button_enable");
        } else {
            $("#add-card .popup__button").classList.remove("popup__button_enable");
        }
    }


    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }


    loadCards();
    initCallback();
};
