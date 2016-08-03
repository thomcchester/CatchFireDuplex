var express = require('express');
var router = express.Router();
var Default = require("../models/default.js");

/* initValues are for the initial startup of a server so they
can populate the calculator on the client-side. */

var initValues = new Default({

    // home_value_increase_def:  ,
    // home_value_increase_min:  ,
    // home_value_increase_max:  ,
    //
    // rental_increase_def:  ,
    // rental_increase_min:  ,
    // rental_increase_max:  ,
    //
    // auto_calc_depreciation_def:  ,
    // auto_calc_depreciation_min:  ,
    // auto_calc_depreciation_max:
});



module.exports = router;
