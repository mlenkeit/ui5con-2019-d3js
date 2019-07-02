sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("com.sap.ui5con2019.d3js.controller.Main", {
    
    onInit: function() {
      const oControl = this.getView().getContent()[0].getContent()[1];
      window.oControl = oControl; // DON'T DO THIS, only for demo purposes
      console.clear(); // DON'T DO THIS, only for demo purposes
    },
    
    handleCelebratePress: function(oEvent) {
      console.log('Let\'s celebrate!');
      console.log('🎉 🎉 🎊 🎊 🎉 🎉');
      
      const oModel = oEvent.getSource().getModel();
      const sPath = ""
      // const vCurrentValue = oModel.getProperty(sPath)
      // const vNewValue = vCurrentValue
      // oModel.setProperty(sPath, vNewValue);
      // oModel.refresh(true);
    }
    
  });
});
