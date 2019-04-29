sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/core/Locale",
    "sap/ui/core/LocaleData",
    "sap/ui/model/type/Currency",
    "sap/m/ObjectAttribute"
], function (Controller, mobileLibrary, Locale, LocaleData, Currency, ObjectAttribute) {
    "use strict";

    return Controller.extend("sap.ui.demo.db.controller.App", {
        formatStockValue : function(fUnitPrice, iStockLevel, sCurrCode) {
            var sBrowserLocale = sap.ui.getCore().getConfiguration().getLanguage();
            var oLocale = new Locale(sBrowserLocale);
            var oLocaleData = new LocaleData(oLocale);
            var oCurrency = new Currency(oLocaleData.mData.currencyFormat);
            return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
        },

        onItemSelected : function(oEvent) {
            let oSelectedItem = oEvent.getSource();
            let oContext = oSelectedItem.getBindingContext("peoples");
            let sPath = oContext.getPath();
            let oProductDetailPanel = this.byId("productDetailsPanel");
            oProductDetailPanel.bindElement({ path: sPath, model: "peoples" });
        },

        productListFactory : function(sId, oContext) {
            let oUIControl;

            // Decide based on the data which dependant to clone
            if (oContext.getProperty("UnitsInStock") === 0 && oContext.getProperty("Discontinued")) {
                // The item is discontinued, so use a StandardListItem
                oUIControl = this.byId("productSimple").clone(sId);
            } else {
                // The item is available, so we will create an ObjectListItem
                oUIControl = this.byId("productExtended").clone(sId);

                // The item is temporarily out of stock, so we will add a status
                if (oContext.getProperty("UnitsInStock") < 1) {
                    oUIControl.addAttribute(new ObjectAttribute({
                        text : {
                            path: "i18n>outOfStock"
                        }
                    }));
                }
            }

            return oUIControl;
        }

    });
});