class ProfilePopup extends BaseComponent {
    constructor() {
        super();
        this.content = `<form class="popup__form" name="profile">
                            <input-text placeHolder="Name" 
                                        nameValue="name" 
                                        uid="error-profile-name"
                                        errorMessage="">
                            </input-text>
                            <input-text placeHolder="About yourself" 
                                        nameValue="job" 
                                        uid="error-profile-job"
                                        errorMessage="">
                            </input-text>
                            <button class="button popup__button popup__button_text18">Save</button>
                        </form>`;
        this.popup = new Popup();
    }

    get template() {
        return new InnerPopup(this.content, "Edit profile").render();
    }

    open() {
        this.popup.open(this.template);
        this.populateForm();
        this.attachEvents();
    }

    attachEvents() {
        // submitting Profile form editing
        document.forms.profile.addEventListener("submit", this.submitFormProfile);

        // validation of Profile editing
        document.forms.profile.elements.name.addEventListener("input", this.validateProfileForm);
        document.forms.profile.elements.job.addEventListener("input", this.validateProfileForm);
    }

    // populate Profile form
    populateForm() {
        document.forms.profile.elements.name.value = $('.user-info__name').textContent;
        document.forms.profile.elements.job.value = $('.user-info__job').textContent;
        this.validateProfileForm();
    }

    // callback for submitting PROFILE form
    submitFormProfile(event) {
        event.preventDefault();
        if (!$(".popup .popup__button").classList.contains("popup__button_enable")) {//кнопка "выключена", т.е. данные в форме невалидные
            return;
        }

        $('.user-info__name').textContent = document.forms.profile.elements.name.value;
        $('.user-info__job').textContent = document.forms.profile.elements.job.value;

        closePopup(event, $("#modal-window"), "popup_is-opened")
    }

    validateProfileForm() {
        let isValid = true;

        const formProfileName = document.forms.profile.elements.name;
        const formErrorProfileName = $("#error-profile-name");
        isValid = validateForm(formErrorProfileName, formProfileName, isValid);


        const formProfileJob = document.forms.profile.elements.job;
        const formErrorProfileJob = $("#error-profile-job");
        isValid = validateForm(formErrorProfileJob, formProfileJob, isValid);

        enableButton(isValid, $(".popup .popup__button"), "popup__button_enable");
    }
}
