class ImageHandler extends BaseComponent {
    constructor() {
        super();
        this.popup = new Popup();
    }

    get template() {
        return new ImagePopup().render();
    }

    open() {
        this.popup.open(this.template)
    }
}
