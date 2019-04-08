// class CRUDProvider {
//     constructor() {}
//
//     read() {
//         return JSON.stringify(this);
//     }
//
//     update(jsonString) {
//         let dictParameters = JSON.parse(jsonString);
//         for (let iterator in this) {
//             // noinspection JSUnfilteredForInLoop
//             if (this.hasOwnProperty(iterator)
//                 && dictParameters.hasOwnProperty(iterator)
//                 && typeof this[iterator] !== "function") {
//                 // noinspection JSUnfilteredForInLoop
//                 this[iterator] = dictParameters[iterator];
//             }
//         }
//         return JSON.stringify(this);
//     }
//
//     delete(instance) {
//         let stateDeleteObject = JSON.stringify(instance);
//         delete this;
//         return stateDeleteObject;
//     }
//
//     static create(jsonString, internalClass) {
//         let dictParameters = JSON.parse(jsonString);
//         let instance = new internalClass();
//         for (let iterator in instance) {
//             // noinspection JSUnfilteredForInLoop
//             if (instance.hasOwnProperty(iterator)
//                 && dictParameters.hasOwnProperty(iterator)
//                 && typeof instance[iterator] !== "function") {
//                 // noinspection JSUnfilteredForInLoop
//                 instance[iterator] = dictParameters[iterator];
//             }
//         }
//         return instance;
//     }
// }
//
// module.exports = CRUDProvider;