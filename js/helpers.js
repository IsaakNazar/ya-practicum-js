const $ = selectors => document.querySelector(selectors);
const createElement = element => document.createElement(element);


function $event(selector){
    let z = Object.create($event.prototype);
    z.e = selector;
    return z;
}
// custom addEventListener
$event.prototype.on = function(event, callback, capture){
    return this.e.addEventListener(event, callback, capture);
};

