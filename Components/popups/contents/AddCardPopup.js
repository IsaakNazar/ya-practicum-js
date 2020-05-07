class AddCardPopup extends BaseComponent {

    constructor() {
        super();
        this.content = `<form class="popup__form" name="new">
                            <input type="text" 
                                   name="name" 
                                   class="popup__input popup__input_type_name" 
                                   placeholder="Name">
                            <div class="popup__input-error" 
                                 aria-live="polite" 
                                 id="error-card-name">Required field
                            </div>
                            <input type="text" 
                                   name="link" 
                                   class="popup__input popup__input_type_link-url" 
                                   placeholder="Image link">
                            <div class="popup__input-error" 
                                 aria-live="polite" 
                                 id="error-card-link">Here should be a link
                            </div>
                            <button class="button popup__button">+</button>
                        </form>`;
        this.popup = new Popup();
    }

    get template() {
        return new InnerPopup(this.content, "New place").render();
    }

    open() {
        this.popup.open(this.template);
        this.attachEvents()
    }

    attachEvents() {
        $event(document.forms.new).on("submit", this.submitFormAdd);
        $event(document.forms.new.elements.name).on("input", this.validateAddCardForm);
        $event(document.forms.new.elements.link).on("input", this.validateAddCardForm);
    }

    submitFormAdd(event) {
        const form = event.currentTarget;
        event.preventDefault();

        if (!$("#modal-window .popup__button").classList.contains("popup__button_enable")) {//кнопка "выключена", т.е. данные в форме невалидные
            return;
        }
        new CardList().addCard(form.elements.name.value, form.elements.link.value);

        // close popup when the submit button is triggered
        closePopup(event, $("#modal-window"), "popup_is-opened")


        form.reset();
    }

    validateAddCardForm() {
        let isValid = true;

        const formNewName = document.forms.new.elements.name;
        const formErrorCardName = $("#error-card-name");
        isValid = validateForm(formErrorCardName, formNewName, isValid);

        const formNewLink = document.forms.new.elements.link;
        const formErrorCardLink = $("#error-card-link");
        if (validURL(formNewLink.value)) {
            formErrorCardLink.textContent = "";
        } else {
            formErrorCardLink.textContent = "Здесь должна быть ссылка";
            isValid = false;
        }

        enableButton(isValid, $(".popup .popup__button"), "popup__button_enable");
    }

}
