class CardList extends BaseComponent {
    constructor(cards) {
        super();
        this.cards = cards;
    }

    addCard(name, url) {
        // forming Card component
        const cardComponent = new Card(name, url);

        // add the formed card to grid cards container
        $('.places-list').appendChild(cardComponent.render());
    }

    get template() {
        return this.cards.forEach(card => this.addCard(card.name, card.link))
    }

}
