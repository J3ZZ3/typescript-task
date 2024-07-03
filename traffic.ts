enum TrafficLight {
    Red = "Red",
    Yellow = "Yellow",
    Green = "Green"
}

class TrafficLightRobot {
    private currentLight: TrafficLight;

    constructor() {
        this.currentLight = TrafficLight.Red;
        this.updateUI();
    }

    public start() {
        setInterval(() => this.changeLight(), 10000);
    }

    private changeLight() {
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
    }

    private updateUI() {
        const redLight = document.getElementById("red");
        const yellowLight = document.getElementById("yellow");
        const greenLight = document.getElementById("green");

        if (redLight && yellowLight && greenLight) {
            redLight.style.opacity = this.currentLight === TrafficLight.Red ? '1' : '0.3';
            yellowLight.style.opacity = this.currentLight === TrafficLight.Yellow ? '1' : '0.3';
            greenLight.style.opacity = this.currentLight === TrafficLight.Green ? '1' : '0.3';
        }
    }
}

const robot = new TrafficLightRobot();
robot.start();
