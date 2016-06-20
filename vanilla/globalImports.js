"use strict";
var wartime = true;

var ARMORY = (function(war){
  var weaponList: [];
  var armorList: [];
  var removeWeapon: function(){};
  var replaceWeapon: function(){};
  var removeArmor: function(){};
  var replaceArmor: function(){};

  return {
    makeWeaponRequest: function(){
      if(war) {
        // let civilians have weaponry
      }
    },
    makeArmorRequest: function(){}
  };

})(wartime);

ARMORY.makeWeaponRequest("Excalibur");
