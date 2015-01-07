'use strict';
var fs = require("fs"),
    npmchecker = require("npm-check-updates"),
    checkUpdate = require('./lib/mainengine');

describe('hkm-simple-vercheck', function () {
    it('should check for update and display', function () {
        var f = checkUpdate("0.0.1", "0.2.1"),
            message = f.getMessage();
        console.log(message);
    });
});