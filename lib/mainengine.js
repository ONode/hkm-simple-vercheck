'use strict';
var fs = require("fs"),
    npmchecker = require("npm-check-updates");
// Read and eval library
var versionmanager = fs.readFileSync('../node_modules/npm-check-updates/lib/versionmanager.js', 'utf8');
eval(versionmanager);
/**
 * Upgrade an existing dependency declaration to satisfy the latest version
 * @param declaration Current version declaration (e.g. "1.2.x")
 * @param latestVersion Latest version (e.g "1.3.2")
 * @returns {string} The upgraded dependency declaration (e.g. "1.3.x")
 * @source https://github.com/tjunnone/npm-check-updates/blob/master/lib/versionmanager.js
 */
var version_checker = function (declaration, latestVersion) {
    var determine = versionmanager.upgradeDependencyDeclaration(declaration, latestVersion);
    this.message = "";
    if (latestVersion == declaration) {
        this.message = "up-to-date!";
    } else if (determine == latestVersion) {
        this.message = "your version is newer!";
    } else if (determine == declaration) {
        this.message = "You have a newer version, please update your product!";
    }
}
version_checker.prototype = {
    getMessage: function () {
        return this.message;
    }
}
exports.hkmvercheck = version_checker;