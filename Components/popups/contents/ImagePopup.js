class ImagePopup extends BaseComponent {
    constructor() {
        super();
    }

    get template() {
        return `<div class="popup__content-image">
                    <img src="./images/close.svg" 
                         alt="x icon" 
                         class="popup__close">
                    <img src="https://images.unsplash.com/photo-1560098332-0455d6f13087" 
                         alt="beautiful image" 
                         class="popup__image">
                </div>`;
    }
}
