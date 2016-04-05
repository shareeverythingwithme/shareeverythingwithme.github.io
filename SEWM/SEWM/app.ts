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
        this.stop();
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

class Car {
    engine: string;
    constructor(engine: string) {
        this.engine = engine;
    }
    start() {
        alert("engine started: " + this.engine);
    }
    stop() {
        alert("engine stopped: " + this.engine);
    }
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};