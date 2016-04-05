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
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    var txtName = document.getElementById("txtboxFullLegalName");
    alert('hello');
};
//# sourceMappingURL=app.js.map