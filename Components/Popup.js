class Popup {

    open(modal) {
        const popup = $(".popup");
        popup.classList.toggle("popup_is-opened");
        popup.appendChild(modal);
        $event(popup).on('click', this.close);
    }

    close(event) {
        const popup = $(".popup");
        // check if cross icon is pressed
        if (event.target.classList.contains("popup__close")) {
            popup.removeChild(event.path[1]);
            popup.classList.toggle("popup_is-opened");
        }
    }

}
