class InnerPopup extends BaseComponent {
    constructor(content, title) {
        super();
        this.content = content;
        this.title = title;
    }

    get template() {
        return `<div class="popup__content">
                    <img src="./assets/images/close.svg" 
                         alt="close icon" 
                         class="popup__close">
                    <h3 class="popup__title">${this.title}</h3>
                    ${this.content}
                </div>`;
    }

}
