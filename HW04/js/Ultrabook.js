import {Computer} from "./Computer";

function ComputingServer() {
    Computer.call(this);

    this.batteryCapacity = 0;

    this.getBatteryCapacity = function () {
        return this.batteryCapacity;
    };
    this.setBatteryCapacity = function (value) {
        this.batteryCapacity = value;
    }
}