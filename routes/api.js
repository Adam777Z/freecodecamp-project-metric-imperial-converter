/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert').get(function (req, res) {
    if (req.query.input === undefined) {
      return res.json({ error: 'input is required' });
    }
    
    var input = req.query.input;
    
    let errorText = '';
    
    var initNum = convertHandler.getNum(input);
    
    if (initNum <= 0) {
      errorText = 'invalid number';
    }
    
    var initUnit = convertHandler.getUnit(input);
    
    if (initUnit === undefined) {
      if (errorText !== '') {
        errorText = 'invalid number and unit';
      } else {
        errorText = 'invalid unit';
      }
    }
    
    if (errorText !== '') {
      return res.json({ error: errorText });
    }
    
    var returnNum = convertHandler.convert(initNum, initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    
    var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    
    return res.json({ initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString });
  });
    
};
