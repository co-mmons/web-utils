"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loaded = [];
function loadScript(url) {
    return new Promise(function (resolve, reject) {
        if (loaded.indexOf(url) < 0) {
            var script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", url);
            script.onload = function () {
                loaded.push(url);
                resolve();
            };
            script.onerror = function () {
                reject();
            };
            document.head.appendChild(script);
        }
        else {
            resolve();
        }
    });
}
exports.loadScript = loadScript;
//# sourceMappingURL=load-script.js.map