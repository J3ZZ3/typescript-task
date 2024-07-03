var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "Red";
    TrafficLight["Yellow"] = "Yellow";
    TrafficLight["Green"] = "Green";
})(TrafficLight || (TrafficLight = {}));
var TrafficLightRobot = /** @class */ (function () {
    function TrafficLightRobot() {
        this.currentLight = TrafficLight.Red;
        this.updateUI();
    }
    TrafficLightRobot.prototype.start = function () {
        var _this = this;
        setInterval(function () { return _this.changeLight(); }, 10000);
    };
    TrafficLightRobot.prototype.changeLight = function () {
        switch (this.currentLight) {
            case TrafficLight.Red:
                this.currentLight = TrafficLight.Green;
                break;
            case TrafficLight.Yellow:
                this.currentLight = TrafficLight.Red;
                break;
            case TrafficLight.Green:
                this.currentLight = TrafficLight.Yellow;
                break;
        }
        this.updateUI();
    };
    TrafficLightRobot.prototype.updateUI = function () {
        var redLight = document.getElementById("red");
        var yellowLight = document.getElementById("yellow");
        var greenLight = document.getElementById("green");
        if (redLight && yellowLight && greenLight) {
            redLight.style.opacity = this.currentLight === TrafficLight.Red ? '1' : '0.3';
            yellowLight.style.opacity = this.currentLight === TrafficLight.Yellow ? '1' : '0.3';
            greenLight.style.opacity = this.currentLight === TrafficLight.Green ? '1' : '0.3';
        }
    };
    return TrafficLightRobot;
}());
var robot = new TrafficLightRobot();
robot.start();
