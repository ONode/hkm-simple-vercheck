'use strict';
var fs = require("fs"),
    npmchecker = require("npm-check-updates");

// Read and eval library
var versionmanager = fs.readFileSync('./node_modules/npm-check-updates/lib/versionmanager', 'utf8');
eval(versionmanager);
var version_checker = false;
/**
 * Upgrade an existing dependency declaration to satisfy the latest version
 * @param declaration Current version declaration (e.g. "1.2.x")
 * @param latestVersion Latest version (e.g "1.3.2")
 * @returns {string} The upgraded dependency declaration (e.g. "1.3.x")
 */
version_checker = function (declaration, latestVersion) {
    versionmanager.upgradeDependencyDeclaration(declaration, latestVersion);

}
exports.hkmvercheck = version_checker;