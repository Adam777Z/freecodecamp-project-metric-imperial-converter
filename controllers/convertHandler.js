/*
*
*
*       Complete the handler logic below
*       
*       
*/

const math = require('mathjs');

const units = {
  gal: ['gallons', 'l', 3.785411784],
  l: ['liters', 'gal', 0.26417205235815],
  lbs: ['pounds', 'kg', 0.45359237],
  kg: ['kilograms', 'lbs', 2.2046226218],
  mi: ['miles', 'km', 1.609344],
  km: ['kilometers', 'mi', 0.6213711922]
};

function ConvertHandler() {
  
  this.getNum = function(input) {
    return (input.search(/[a-zA-Z]/) === 0 ? 1 : Number.parseFloat(math.eval(input.substring(0, input.search(/[a-zA-Z]/)))));
  };
  
  this.getUnit = function(input) {
    var unit = input.substring(input.search(/[a-zA-Z]/)).toLowerCase();
    return (units[unit] !== undefined ? unit : undefined);
  };
  
  this.getReturnUnit = function(initUnit) {
    initUnit = initUnit.toLowerCase();
    return units[initUnit][1];
  };

  this.spellOutUnit = function(unit) {
    unit = unit.toLowerCase();
    return units[unit][0];
  };
  
  this.convert = function(initNum, initUnit) {
    // const galToL = 3.78541;
    // const lbsToKg = 0.453592;
    // const miToKm = 1.60934;
    initUnit = initUnit.toLowerCase();
    return initNum * units[initUnit][2];
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + Number.parseFloat(returnNum).toFixed(5) + ' ' + this.spellOutUnit(returnUnit);
  };
  
}

module.exports = ConvertHandler;
