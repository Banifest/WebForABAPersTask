sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.hw07.PhonePanel", {
        onInit: async function () {
            let data = await $.ajax(`https://services.odata.org/V4/(S(i2qsmldwlbxcrupw01rxfa3l))/TripPinServiceRW/Photos/`, {
                method: "GET",
                contentType: "application/json",
            });
            console.log(data.value);
            let oViewmodel = new JSONModel({photos: data.value});
            this.getView().setModel(oViewmodel);

        },
    });
});