class AddCardPopup extends BaseComponent {

    constructor() {
        super();
        this.content = `<form class="popup__form" name="new">
                            <input-text placeHolder="Name" 
                                        className="popup__input_type_name" 
                                        nameValue="name" 
                                        uid="error-card-name"
                                        errorMessage="Required field">
                            </input-text>
                            <input-text placeHolder="Image link" 
                                        className="popup__input_type_link-url" 
                                        nameValue="link" 
                                        uid="error-card-link"
                                        errorMessage="Here should be a link">
                            </input-text>
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
        closePopup(event, $("#modal-window"), "popup_is-opened");


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
