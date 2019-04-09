import CRUDProvider from './crudProvider';

class Computer extends CRUDProvider {
    constructor(data) {

        super();
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
    }

    static create(jsonString) {
        return CRUDProvider.create(jsonString, Computer)
    }
}

export default Computer;
