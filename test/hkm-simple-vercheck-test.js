#!/usr/bin/env node

var assert = require('assert'),
    hkmverchecker = require('../lib/main').hkmverchecker;

describe('hkm-simple-vercheck', function () {

    it('should tell you that you have a newer version', function () {
        var ch = new hkmverchecker("0.0.1", "0.2.1");
        var message = ch.getMessage();
        console.log(message + ch.getVersionFinal());
    });

    it('should tell you that your version is needing a newer update', function () {
        var ch = new hkmverchecker("8.4.1", "0.1.1");
        var message = ch.getMessage();
        console.log(message + ch.getVersionFinal());
    });
});