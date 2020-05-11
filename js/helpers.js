const $ = selectors => document.querySelector(selectors);
const createElement = element => document.createElement(element);


function $event(selector) {
    const z = Object.create($event.prototype);
    z.e = selector;
    return z;
}

// custom addEventListener
$event.prototype.on = function (event, callback, capture) {
    return this.e.addEventListener(event, callback, capture);
};

// Firefox and Safari(probably) dont have 'path' property on MouseEvent
// not sure if it works for other browsers or older versions of mentioned browsers
// additional details https://stackoverflow.com/questions/39245488/event-path-is-undefined-running-in-firefox
function getEventPath(event) {
    return event.path || (event.composedPath && event.composedPath());
}


// close popup when the submit button is triggered
function closePopup(event, popup, toggleMe) {
    const path = getEventPath(event);
    if (event.type === "submit") {
        popup.removeChild(path[1]);
        popup.classList.toggle(toggleMe);
    }
}
