System.register(["./app"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mojModul, p;
    return {
        setters: [
            function (mojModul_1) {
                mojModul = mojModul_1;
            }
        ],
        execute: function () {
            console.log("minimain.js");
            p = new mojModul.DerivedProba();
            p.getProbaText();
        }
    };
});
