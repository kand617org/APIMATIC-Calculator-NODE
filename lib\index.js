/**
  * @module test
  *
  * Simple calculator API hosted on APIMATIC
  */

'use strict';

const Configuration = require('./configuration');
const SimpleCalculatorController = require('./Controllers/SimpleCalculatorController');
const OperationTypeEnum = require('./Models/OperationTypeEnum');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of test
    Configuration,
    // controllers of test
    SimpleCalculatorController,
    // models of test
    OperationTypeEnum,
    // exceptions of test
    APIException,
};

module.exports = initializer;
