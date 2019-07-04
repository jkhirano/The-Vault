"use strict";
module.exports = function() {
  var myVault = {};

  function setValue(key, value) {
    myVault[key] = value;
    console.log(">>>>>>", myVault);
    // console.log(value)

    return myVault[key];
  }

  function getValue(key) {
    if (myVault.hasOwnProperty(key)) {
      return myVault[key];
    } else {
      return null;
    }
  }

  return {
    setValue,
    getValue
  };
};
