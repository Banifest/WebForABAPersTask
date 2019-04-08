// class Ultrabook extends Computer{
//     constructor(data) {
//         super(data);
//
//         const BATTERY_CAPACITY = "batteryCapacity";
//         Object.defineProperties(this, {
//             batteryCapacity: {
//                 enumerable: true,
//                 writable: true,
//                 value: 0,
//             },
//         });
//         if (data.hasOwnProperty(BATTERY_CAPACITY)) {
//             this[BATTERY_CAPACITY] = data[BATTERY_CAPACITY];
//         }
//     }
//
//     static create(jsonString) {
//         return CRUDProvider.create(jsonString, Ultrabook)
//     }
// }
//
// module.exports = Ultrabook;