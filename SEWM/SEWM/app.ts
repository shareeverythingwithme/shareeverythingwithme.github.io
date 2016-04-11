class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
        var myNumber = this.timerToken;
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

class BSTNode {
    value: number;
    bstLeft: BSTNode;
    bstRight: BSTNode;
    constructor(input: number) {
        this.value = input;
        this.bstLeft = null;
        this.bstRight = null;
    }
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};