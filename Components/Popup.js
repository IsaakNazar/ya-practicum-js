class Popup extends BaseComponent {
    constructor() {
        super();
        this.addCard = $("#add-card");
    }

    // get template() {
    //     return `<div class="popup" id="add-card"></div>`;
    // }

    open(modal) {
        this.addCard.classList.toggle("popup_is-opened");
        this.addCard.appendChild(modal);
    }

    close(event) {
        console.log(event);
    }

    setEventListener() {
        $event($("#add-card")).on('click', this.close);
    }

}
