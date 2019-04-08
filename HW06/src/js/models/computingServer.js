// class ComputingServer extends Computer{
//     constructor(data) {
//         super(data);
//
//         const QUANTITY_CLIENTS = "quantityClients";
//         Object.defineProperties(this, {
//             quantityClients: {
//                 enumerable: true,
//                 writable: true,
//                 value: 0,
//             },
//         });
//
//         if (data.hasOwnProperty(QUANTITY_CLIENTS)) {
//             this[QUANTITY_CLIENTS] = data[QUANTITY_CLIENTS];
//         }
//     }
//
//     static create(jsonString) {
//         return CRUDProvider.create(jsonString, ComputingServer)
//     }
// }
//
// module.exports = ComputingServer;