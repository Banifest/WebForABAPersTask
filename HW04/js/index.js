function CRUDProvider() {
    this.read = function () {
        return JSON.stringify(this);
    };
    this.update = function (jsonString) {
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
    this.delete = function (instance) {
        let stateDeleteObject = JSON.stringify(instance);
        delete this.base;
        return stateDeleteObject;
    };
}

CRUDProvider.create = function (jsonString, internalClass) {
    /**
     * So, static method for create object of class, w/o class inheritance for function definitions :'(
     */
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

function Computer() {
    CRUDProvider.call(this);

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

    return this;
}

Computer.create = function (jsonString) {
    return CRUDProvider.create(jsonString, Computer)
};

function ComputingServer() {
    Computer.call(this);

    Object.defineProperties(this, {
        quantityClients: {
            enumerable: true,
            writable: true,
            value: 0,
        },
    });
}

ComputingServer.create = function (jsonString) {
    return CRUDProvider.create(jsonString, ComputingServer)
};

function Ultrabook() {
    Computer.call(this);

    Object.defineProperties(this, {
        batteryCapacity: {
            enumerable: true,
            writable: true,
            value: 0,
        },
    });
}

Ultrabook.create = function (jsonString) {
    return CRUDProvider.create(jsonString, Ultrabook)
};