
// custom button element
class Button extends HTMLElement {

    constructor() {
        super();
        const button = document.createElement("button");
        button.className = `button popup__button ${this.className || ""}`;
        button.textContent = this.text || "";
        this.appendChild(button);
    }

    // additional class names can be passed via this attribute
    get className() {
        return this.getAttribute("className");
    }

    set className(value) {
        this.setAttribute("className", value);
    }

    // textContent of the button
    get text() {
        return this.getAttribute("text");
    }

    set text(value) {
        this.setAttribute("text", value);
    }

}

// The element is called 'button-submit', its class object is 'Button'
window.customElements.define("button-submit", Button);
