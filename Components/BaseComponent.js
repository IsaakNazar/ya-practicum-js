class BaseComponent {
    get template() {
        throw new Error('You should declare your template!');
    }

    static createElement(template) {
        const element = createElement('div');
        element.innerHTML = template;
        return element.firstChild;
    }

    render() {
        this._element = BaseComponent.createElement(this.template);
        this.setEventListener();
        return this._element;
    }

    setEventListener() {}
}
