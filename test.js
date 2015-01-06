'use strict';
var fs = require("fs"),
    npmchecker = require("npm-check-updates"),
    checkUpdate = require('./');
describe('hkm-simple-vercheck', function () {
    it('should check for update and display', function () {



        checkUpdate({
            packageName: 'hkm-simple-vercheck',
            packageVersion: '0.0.1',
            isCLI: false
        }, function (err, lastestVersion, defaultMessage) {
            if (!err) {
                console.log(defaultMessage);
            }
        });



    });
});