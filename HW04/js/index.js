const PROPERTY_PREFIX = "_";

function CRUDProvider() {
    this.read = function () {
        return JSON.stringify(this);
    };
    this.update = function (jsonString) {

    };
    this.delete = function (jsonString) {

    };
}

/**
 * So, static method for create object of class, w/o inheritance :'(
 */
CRUDProvider.create = function (jsonString, internalClass) {
    let dictComputer = JSON.parse(jsonString);
    let instance = new internalClass();
    for (let iterator in instance) {
        console.log(iterator);
        // noinspection JSUnfilteredForInLoop
        let attributeName = `${PROPERTY_PREFIX}${iterator}`;
        if (instance.hasOwnProperty(attributeName)
            && typeof instance[iterator] !== "function") {
            // noinspection JSUnfilteredForInLoop
            instance[attributeName] = dictComputer[iterator];
        }
    }
    return instance;
};

function Computer() {
    CRUDProvider.call(this);
    this._quantityCores = 1;
    this._processorType = "";
    this._frequency = 0.0;
    this._availabilityHyperThreading = false;
    this._architectureBitDepth = "AMD64";
    this._manufacturer = "";
    this._sizeBiteRAM = 0;

    Object.defineProperties(this, {
            quantityCores: {
                value: 1,
                writable: true,
            },
            processorType: {
                get: function () {
                    return this._processorType;
                },
                set: function (value) {
                    this._processorType = value;
                }
            },
            frequency: {
                get: function () {
                    return this._frequency;
                },
                set: function (value) {
                    this._frequency = value;
                }
            },
            availabilityHyperThreading: {
                get: function () {
                    return this._availabilityHyperThreading;
                },
                set: function (value) {
                    this._availabilityHyperThreading = value;
                }
            },
            architectureBitDepth: {
                get: function () {
                    return this._architectureBitDepth;
                },
                set: function (value) {
                    this._architectureBitDepth = value;
                }
            },
            manufacturer: {
                get: function () {
                    return this._manufacturer;
                },
                set: function (value) {
                    this._manufacturer = value;
                }
            },
            sizeBiteRAM: {
                get: function () {
                    return this._sizeBiteRAM;
                },
                set: function (value) {
                    this._sizeBiteRAM = value;
                }
            },
        }
    );

    return this;
}

Computer.create = function (jsonString) {
    return CRUDProvider.create(jsonString, Computer)
};

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

ComputingServer.create = function (jsonString) {
    return CRUDProvider.create(jsonString, ComputingServer)
};

function Ultrabook() {
    Computer.call(this);

    this.batteryCapacity = 0;

    this.getBatteryCapacity = function () {
        return this.batteryCapacity;
    };
    this.setBatteryCapacity = function (value) {
        this.batteryCapacity = value;
    }
}

Ultrabook.create = function (jsonString) {
    return CRUDProvider.create(jsonString, Ultrabook)
};