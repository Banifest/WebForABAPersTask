sap.ui.define([
    "sap/ui/core/ComponentContainer",
    "sap/ui/model/json/JSONModel"
], function (ComponentContainer, JSONModel) {
    "use strict";
    sap.ui.getCore().attachInit(function () {
        let oModel = new JSONModel({
            greetingText: "Hi, my name is Harry Hawk"
        });
        // Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);

    });
    new ComponentContainer({
        name: "sap.ui.hw07",
        settings : {
            id : "hw07"
        },
        async: true
    }).placeAt("content");
});