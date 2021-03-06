
// Custom input element, default type='text'
class InputText extends HTMLElement {

    constructor() {
        super();
        const input = document.createElement('input');
        input.type = this.inputType || 'text';
        input.className = `popup__input ${this.className || ''}`;
        input.name = this.nameValue;
        input.placeholder = this.placeHolder;
        this.appendChild(input);

        const errorMsg = document.createElement('div');
        errorMsg.className = 'popup__input-error';
        errorMsg.id = this.uid;
        errorMsg.setAttribute('aria-live', 'polite');
        errorMsg.textContent = this.errorMessage || '';
        this.appendChild(errorMsg);
    }

    // name attribute of input
    get nameValue() {
        return this.getAttribute('nameValue');
    }

    set nameValue(value) {
        this.setAttribute('nameValue', value);
    }

    // input has default class='popup__input', you can pass additional classes
    // via this attribute
    get className() {
        return this.getAttribute('className');
    }

    set className(value) {
        this.setAttribute('className', value);
    }

    // input placeholder
    get placeHolder() {
        return this.getAttribute('placeHolder');
    }

    set placeHolder(value) {
        this.setAttribute('placeHolder', value);
    }

    // id of error message
    // if uid is not provided, it throw an error
    get uid() {
        const id = this.getAttribute('uid');
        if (id) {
            return id;
        }
        throw Error("\'uid\' attribute is not provided");
    }

    set uid(value) {
        this.setAttribute('uid', value);
    }


    // error message of the input
    get errorMessage() {
        return this.getAttribute('errorMessage');
    }

    set errorMessage(value) {
        this.setAttribute('errorMessage', value);
    }

    // type of the input element
    get inputType() {
        return this.getAttribute('inputType');
    }

    set inputType(value) {
        this.setAttribute('inputType', value);
    }

}

// The element is called input-text, its class object is InputText
window.customElements.define('input-text', InputText);

// some attributes have default values, but others, do not, like
// uid or nameValue. In case of uid, it throws an error if there's no value provided.
// An error should be thrown on nameValue attribute too, but I
// decided to implement it only on uid attribute, just for demonstration purposes.
// ideally an error should be thrown on every attributes, which weren't provided
