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

    create(cb) {
        return super.create({
            quantityCores: $("#quantityCores")[0].value,
            processorType: $("#processorType")[0].value,
            frequency: $("#frequency")[0].value,
            availabilityHyperThreading: $("#availabilityHyperThreading")[0].checked,
            architectureBitDepth: $("#architectureBitDepth")[0].value,
            manufacturer: $("#manufacturer")[0].value,
            sizeBiteRAM: $("#sizeBiteRAM")[0].value,
        }, cb);
    }

    update(id) {
        return super.update(id, {
            quantityCores: $(`#${id}quantityCores`)[0].value,
            processorType: $(`#${id}processorType`)[0].value,
            frequency: $(`#${id}frequency`)[0].value,
            availabilityHyperThreading: $(`#${id}availabilityHyperThreading`)[0].checked,
            architectureBitDepth: $(`#${id}architectureBitDepth`)[0].value,
            manufacturer: $(`#${id}manufacturer`)[0].value,
            sizeBiteRAM: $(`#${id}sizeBiteRAM`)[0].value,
        });
    }

    delete(id, data) {
        return super.delete(id);
    }
}

export default ComputerAPI;