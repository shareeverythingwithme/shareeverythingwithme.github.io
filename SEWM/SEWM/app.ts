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
    stop_with_input(input_string: string) {
        alert(input_string);
    }
}

class Map<T> {
    private items: { [key: string]: T };

    constructor() {
        this.items = {};
    }

    add(key: string, value: T): void {
        this.items[key] = value;
    }

    has(key: string): boolean {
        return key in this.items;
    }

    get(key: string): T {
        return this.items[key];
    }
}

class ListItem<T> {
    private list: List<T>;
    private index: number;

    public value: T;

    constructor(list: List<T>, value: T, index: number) {
        this.list = list;
        this.index = index;
        this.value = value;
    }

    prev(): ListItem<T> {
        return this.list.get(this.index - 1);
    }

    next(): ListItem<T> {
        return this.list.get(this.index + 1);
    }
}

class List<T> {
    private items: Array<ListItem<T>>;

    constructor() {
        this.items = [];
    }

    size(): number {
        return this.items.length;
    }

    add(value: T): void {
        this.items.push(new ListItem<T>(this, value, this.size()));
    }

    get(index: number): ListItem<T> {
        return this.items[index];
    }
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    var txtName = document.getElementById("txtboxFullLegalName")
};