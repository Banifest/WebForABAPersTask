// const API_LINK = "http://195.50.2.67:2403/";
// const OBJECT_LINK = "alexmartyniuk/";
//
// class PrototypeAPI {
//     constructor(objectPrototype, apiPrototype, apiLink=API_LINK, objectLink=OBJECT_LINK) {
//         this.link = apiLink + objectLink;
//         this.apiPrototype = apiPrototype;
//         this.objectPrototype = objectPrototype;
//         this.obejcts = {};
//     }
//
//     create(data) {
//         $.ajax(this.link, {
//                 method: "POST",
//                 contentType: "application/json",
//                 data: (new this.apiPrototype(data)).read(),
//                 success: function (resultData, textStatus, jqXHR) {
//                     this.objects[resultData.id] = (new this.objectPrototype(data));
//                     return ({data: resultData, textStatus: textStatus, jqXHR: jqXHR});
//                 }
//             }
//         );
//     }
//
//     update(id, data) {
//         $.ajax(`${this.link}/${id}`, {
//                 method: "PUT",
//                 contentType: "application/json",
//                 data: (new this.apiPrototype(data)).read(),
//                 success: function (resultData, textStatus, jqXHR) {
//                     this.objects[resultData.id] = (new this.objectPrototype(data));
//                     return ({data: resultData, textStatus: textStatus, jqXHR: jqXHR});
//                 }
//             }
//         );
//     }
//
//     readAll() {
//         $.ajax(this.link, {
//                 method: "GET",
//                 contentType: "application/json",
//                 success: function (resultData, textStatus, jqXHR) {
//                     return ({data: resultData, textStatus: textStatus, jqXHR: jqXHR});
//                 }
//             }
//         );
//     }
//
//     read(id) {
//         $.ajax(`${this.link}/${id}`, {
//                 method: "GET",
//                 contentType: "application/json",
//                 success: function (resultData, textStatus, jqXHR) {
//                     return ({data: resultData, textStatus: textStatus, jqXHR: jqXHR});
//                 }
//             }
//         );
//     }
//
//     delete(id) {
//         $.ajax(`${this.link}/${id}`, {
//                 method: "DELETE",
//                 contentType: "application/json",
//                 success: function (resultData, textStatus, jqXHR) {
//                     this.objects[resultData.id] = undefined;
//                     return ({data: resultData, textStatus: textStatus, jqXHR: jqXHR});
//                 }
//             }
//         );
//     }
// }