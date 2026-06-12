sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("zvgt.hppmkpimonitor.controller.Main", {
        
        onInit: function () {
            this.oModelHPPM = this.getOwnerComponent().getModel("globalHPPM");
            this.oModelHPPM.setProperty("/goodsMovementFilter", true);
        },

        onIconTabBarSelect: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedKey");
            this.oModelHPPM.setProperty("/goodsMovementFilter", sSelectedKey === "GoodsMovement");
            this.oModelHPPM.setProperty("/headerDetailsFilter", sSelectedKey === "HeaderDetails");
            this.oModelHPPM.setProperty("/itemDetailsFilter", sSelectedKey === "ItemDetails");
            this.oModelHPPM.setProperty("/palletDetailsFilter", sSelectedKey === "PalletDetails");
        },

        onInitaliseSmartTable: function (oEvent) {
            var oSmartTable = oEvent.getSource();
            oSmartTable.getTable().setSelectionMode("None");
        }

    });
});
