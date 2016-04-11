var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
        var myNumber = this.timerToken;
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        alert("engine started: " + this.engine);
    };
    Car.prototype.stop = function () {
        alert("engine stopped: " + this.engine);
    };
    Car.prototype.stop_with_input = function (input_string) {
        alert(input_string);
    };
    return Car;
}());
var Cars = (function () {
    function Cars() {
    }
    return Cars;
}());
var Map = (function () {
    function Map() {
        this.items = {};
    }
    Map.prototype.add = function (key, value) {
        this.items[key] = value;
    };
    Map.prototype.has = function (key) {
        return key in this.items;
    };
    Map.prototype.get = function (key) {
        return this.items[key];
    };
    return Map;
}());
var List = (function () {
    function List() {
        this.items = [];
    }
    List.prototype.size = function () {
        return this.items.length;
    };
    List.prototype.add = function (value) {
        this.items.push(value);
    };
    List.prototype.get = function (index) {
        return this.items[index];
    };
    return List;
}());
var ListItem = (function () {
    function ListItem(list, value, index) {
        this.list = list;
        this.index = index;
        this.value = value;
    }
    ListItem.prototype.prev = function () {
        return this.list.get(this.index - 1);
    };
    ListItem.prototype.next = function () {
        return this.list.get(this.index + 1);
    };
    return ListItem;
}());
var List = (function () {
    function List() {
        this.items = [];
    }
    List.prototype.size = function () {
        return this.items.length;
    };
    List.prototype.add = function (value) {
        this.items.push(new ListItem(this, value, this.size()));
    };
    List.prototype.get = function (index) {
        return this.items[index];
    };
    return List;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    var txtName = document.getElementById("txtboxFullLegalName");
};
//# sourceMappingURL=app.js.map