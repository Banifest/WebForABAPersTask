const CRUDProvider = function () {
};

CRUDProvider.prototype.read = function () {
    return JSON.stringify(this);
};
CRUDProvider.prototype.update = function (jsonString) {
    let dictParameters = JSON.parse(jsonString);
    for (let iterator in this) {
        // noinspection JSUnfilteredForInLoop
        if (this.hasOwnProperty(iterator)
            && dictParameters.hasOwnProperty(iterator)
            && typeof this[iterator] !== "function") {
            // noinspection JSUnfilteredForInLoop
            this[iterator] = dictParameters[iterator];
        }
    }
    return JSON.stringify(this);
};
CRUDProvider.prototype.delete = function (instance) {
    let stateDeleteObject = JSON.stringify(instance);
    delete this;
    return stateDeleteObject;
};

CRUDProvider.create = function (jsonString, internalClass) {
    let dictParameters = JSON.parse(jsonString);
    let instance = new internalClass();
    for (let iterator in instance) {
        // noinspection JSUnfilteredForInLoop
        if (instance.hasOwnProperty(iterator)
            && dictParameters.hasOwnProperty(iterator)
            && typeof instance[iterator] !== "function") {
            // noinspection JSUnfilteredForInLoop
            instance[iterator] = dictParameters[iterator];
        }
    }
    return instance;
};

let Computer = function (data) {
    CRUDProvider.apply(this, arguments);
    Object.defineProperties(this, {
            quantityCores: {
                enumerable: true,
                writable: true,
                value: 1,
            },
            processorType: {
                enumerable: true,
                writable: true,
                value: "",
            },
            frequency: {
                enumerable: true,
                writable: true,
                value: 0.0,
            },
            availabilityHyperThreading: {
                enumerable: true,
                writable: true,
                value: false,
            },
            architectureBitDepth: {
                enumerable: true,
                writable: true,
                value: "AMD64",
            },
            manufacturer: {
                enumerable: true,
                writable: true,
                value: "",
            },
            sizeBiteRAM: {
                enumerable: true,
                writable: true,
                value: 0,
            },
        }
    );
    for (let iterator in this) {
        // noinspection JSUnfilteredForInLoop
        if (this.hasOwnProperty(iterator)
            && data.hasOwnProperty(iterator)
            && typeof this[iterator] !== "function") {
            // noinspection JSUnfilteredForInLoop
            this[iterator] = data[iterator];
        }
    }
};
Computer.prototype = Object.create(CRUDProvider.prototype);
Computer.prototype.constructor = CRUDProvider;

Computer.create = function (jsonString) {
    return CRUDProvider.create(jsonString, Computer)
};

function ComputingServer() {
    Computer.apply(this, arguments);

    const QUANTITY_CLIENTS = "quantityClients";
    Object.defineProperties(this, {
        quantityClients: {
            enumerable: true,
            writable: true,
            value: 0,
        },
    });

    if (data.hasOwnProperty(QUANTITY_CLIENTS)) {
        this[QUANTITY_CLIENTS] = data[QUANTITY_CLIENTS];
    }
}

ComputingServer.prototype = Object.create(Computer.prototype);
ComputingServer.prototype.constructor = Computer;
ComputingServer.create = function (jsonString) {
    return CRUDProvider.create(jsonString, ComputingServer)
};


function Ultrabook() {
    Computer.apply(this, arguments);

    const BATTERY_CAPACITY = "batteryCapacity";
    Object.defineProperties(this, {
        batteryCapacity: {
            enumerable: true,
            writable: true,
            value: 0,
        },
    });
    if (data.hasOwnProperty(BATTERY_CAPACITY)) {
        this[BATTERY_CAPACITY] = data[BATTERY_CAPACITY];
    }
}

Ultrabook.prototype = Object.create(Computer.prototype);
Ultrabook.prototype.constructor = Computer;
Ultrabook.create = function (jsonString) {
    return CRUDProvider.create(jsonString, Ultrabook)
};