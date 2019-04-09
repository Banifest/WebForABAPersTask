import Computer from '../models/computer';
import PrototypeAPI from './prototypeAPI';

class ComputerAPI extends PrototypeAPI {
    constructor() {
        super(Computer, ComputerAPI);

        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.read = this.read.bind(this);
    }

    create(data) {
        return super.create({
            quantityCores: $("#quantityCores")[0].value,
            processorType: $("#processorType")[0].value,
            frequency: $("#frequency")[0].value,
            availabilityHyperThreading: $("#availabilityHyperThreading")[0].value,
            architectureBitDepth: $("#architectureBitDepth")[0].value,
            manufacturer: $("#manufacturer")[0].value,
            sizeBiteRAM: $("#sizeBiteRAM")[0].value,
        });
    }

    update(id, data) {
        return super.update(id, {
            quantityCores: $("#quantityCores")[0].value,
            processorType: $("#processorType")[0].value,
            frequency: $("#frequency")[0].value,
            availabilityHyperThreading: $("#availabilityHyperThreading")[0].value,
            architectureBitDepth: $("#architectureBitDepth")[0].value,
            manufacturer: $("#manufacturer")[0].value,
            sizeBiteRAM: $("#sizeBiteRAM")[0].value,
        });
    }

    delete(id, data) {
        return super.delete(id);
    }
}

export default ComputerAPI;