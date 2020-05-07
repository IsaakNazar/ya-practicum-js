class InputText extends HTMLElement {
    get nameValue() {
        return this.getAttribute('nameValue');
    }

    set nameValue(value) {
        this.setAttribute('nameValue', value);
    }

    get className() {
        return this.getAttribute('className');
    }

    set className(value) {
        this.setAttribute('className', value);
    }

    get placeHolder() {
        return this.getAttribute('placeHolder');
    }

    set placeHolder(value) {
        this.setAttribute('placeHolder', value);
    }

    get uid() {
        return this.getAttribute('uid');
    }

    set uid(value) {
        this.setAttribute('uid', value);
    }

    get errorMessage() {
        return this.getAttribute('errorMessage');
    }

    set errorMessage(value) {
        this.setAttribute('errorMessage', value);
    }

    constructor() {
        super();
        let input = document.createElement('input');
        input.type = 'text';
        input.className = `popup__input ${this.className}`;
        input.name = this.nameValue;
        input.placeholder = this.placeHolder;
        this.appendChild(input);

        let errorMsg = document.createElement('div');
        errorMsg.className = 'popup__input-error';
        errorMsg.id = this.uid;
        errorMsg.setAttribute('aria-live', 'polite');
        errorMsg.textContent = this.errorMessage;
        this.appendChild(errorMsg);
    }
}

window.customElements.define('input-text', InputText);
