class PopupContent extends BaseComponent {

    constructor() {
        super();
        this.content = `<form class="popup__form" name="new">
                            <input type="text" 
                                   name="name" 
                                   class="popup__input popup__input_type_name" 
                                   placeholder="Название">
                            <div class="popup__input-error" 
                                 aria-live="polite" 
                                 id="error-card-name">Это обязательное поле
                            </div>
                            <input type="text" 
                                   name="link" 
                                   class="popup__input popup__input_type_link-url" 
                                   placeholder="Ссылка на картинку">
                            <div class="popup__input-error" 
                                 aria-live="polite" 
                                 id="error-card-link">Здесь должна быть ссылка
                            </div>
                            <button class="button popup__button">+</button>
                        </form>`;
        this.popup = new Popup();
    }

    get template() {
        return new InnerPopup(this.content, "Новое место").render();
    }

    open() {
        this.popup.open(this.template);
        // document.forms.new.addEventListener("submit", this.submitFormAdd);
        // document.forms.new.elements.name.addEventListener("input", this.validateAddCardForm);
        // document.forms.new.elements.link.addEventListener("input", this.validateAddCardForm);

    }


    submitFormAdd(event) {
        const form = event.currentTarget;
        event.preventDefault();

        if (!$("#add-card .popup__button").classList.contains("popup__button_enable")) {//кнопка "выключена", т.е. данные в форме невалидные
            return;
        }
        new CardList().addCard(form.elements.name.value, form.elements.link.value);
        // toggleFormAdd();
        console.log(this.popup);
        this.popup.close()
        // this.popup.close(event)
        // form.reset();
    }

    validateAddCardForm() {
        let isOk = true;
        const formNewName = document.forms.new.elements.name;
        const formErrorCardName = $("#error-card-name");
        validateForm(formErrorCardName, formNewName, isOk);

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

}
