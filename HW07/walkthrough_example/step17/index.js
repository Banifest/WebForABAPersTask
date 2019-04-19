sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
    "use strict";

    new ComponentContainer({
        name: "sap.ui.demo.walkthrough_example",
        settings : {
            id : "walkthrough_example"
        },
        async: true
    }).placeAt("content");
});