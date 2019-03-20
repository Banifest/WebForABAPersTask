export default function Computer() {
    this.quantityCores = 0;
    this.processorType = "";
    this.frequency = 0.0;
    this.availabilityHyperThreading = false;
    this.architectureBitDepth = "AMD64";
    this.manufacturer = "";
    this.sizeBiteRAM = 0;

    this.setQuantityCores = function (value) {
        this.quantityCores = value;
    };
    this.setProcessorType = function (value) {
        this.processorType = value;
    };
    this.setFrequency = function (value) {
        this.frequency = value;
    };
    this.setAvailabilityHyperThreading = function (value) {
        this.availabilityHyperThreading = value;
    };
    this.setArchitectureBitDepth = function (value) {
        this.architectureBitDepth = value;
    };
    this.setManufacturer = function (value) {
        this.manufacturer = value;
    };
    this.setSizeBiteRAM = function (value) {
        this.sizeBiteRAM = value;
    };

    this.getQuantityCores = function () {
        return this.quantityCores;
    };
    this.getProcessorType = function () {
        return this.processorType;
    };
    this.getFrequency = function () {
        return this.frequency;
    };
    this.getAvailabilityHyperThreading = function () {
        return this.availabilityHyperThreading;
    };
    this.getArchitectureBitDepth = function () {
        return this.architectureBitDepth;
    };
    this.getManufacturer = function () {
        return this.manufacturer;
    };
    this.getSizeBiteRAM = function () {
        return this.sizeBiteRAM;
    };

    return this;
}