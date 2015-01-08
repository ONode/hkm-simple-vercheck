#!/usr/bin/env node

var fs = require("fs"),
    npmchecker = require("npm-check-updates"),
    checkUpdate = require('../lib/mainengine.js')
    ;

describe('hkm-simple-vercheck', function () {

    it('should check for update and display', function () {
        var ch = checkUpdate("0.0.1", "0.2.1");
        var message = ch.getMessage();
        console.log(message);
    });

});