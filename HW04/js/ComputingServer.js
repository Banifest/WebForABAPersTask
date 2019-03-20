import {Computer} from "./Computer";

function ComputingServer() {
    Computer.call(this);

    this.quantityClients = 0;

    this.getQuantityClients = function () {
        return this.quantityClients;
    };
    this.setQuantityClients = function (value) {
        this.quantityClients = value;
    }
}