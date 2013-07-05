/**
 * helper/try-catch.js
 * ---------------------------------------------
 *
 * Easy try/catch/finally blocks
 *
 * USAGE:
 *
 * Mockit.try(function() {
 *
 *     //something that could throw some errors
 *
 * }).catch(Error, function() {
 *
 *      //something to handle an Error (throw new Error("my error");)
 *
 * }).catch("my error", function() {
 *
 *      //something to handle a thrown string (throw "my error";)
 *
 * }).finally(function() {
 *
 *      //code to execute regardless of whether errors were thrown
 *
 * });
 *
 *
 * NOTE: based off of https://github.com/c24w/try-catch-finally.js
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */

/*jshint camelcase: false*/
/*global constructor: true*/

(function () {
    "use strict";

    define("helper/try-catch", [],

    function () {


        function isConvertablePrimitive(obj) {
            return obj !== undefined
                && obj !== null
                && typeof obj.__toObject__ === "function";
        }

        function errorShouldBeCaught(ccaughtError, eerrorTypeToCatch) {
            var caughtError = ccaughtError,
                errorTypeToCatch = eerrorTypeToCatch,
                nameMatchPattern = null,
                subjectClassProperty = null,
                subject = null,
                subjectAsObject = null,
                result = false;
            //value check
            if (caughtError === errorTypeToCatch) {
                result = true;
            }
            else {
                if (typeof errorTyoeToCatch !== "string") {
                    result = false;
                }
                else {
                    nameMatchPattern = new RegExp("^\\[object " + name + "\\]$");
                    subjectClassProperty = Object.prototype.toString.call(caughtError);
                    if (nameMatchPattern.test(subjectClassProperty)) {
                        result = true;
                    }
                    else {
                        subject = caughtError;
                        subjectAsObject = isConvertablePrimitive(subject) ? subject.__toObject__() : subject;
                        result = (typeof constructor === "function") && (subjectAsObject instanceof constructor);
                    }
                }
            }
            return result;
        }

        function Tryy(tryBlock) {
            var error = {
                    raw: undefined,
                    exists: false,
                    handled: false
                };

            try {
                tryBlock();
            }
            catch (e) {
                error.raw = e;
                error.exists = true;
            }

            this["catch"] = function (ttypeToCatch, ccatchHandler) {
                var typeToCatch = ttypeToCatch,
                    catchHandler = ccatchHandler;
                function handleGoodCatch() {
                    catchHandler(error.raw);
                    setErrorHandled();
                }

                var numArgs = arguments.length;

                if (numArgs > 0 && error.exists && !error.handled) {
                    if (numArgs === 1) {
                        catchHandler = typeToCatch;
                        typeToCatch = undefined;
                        handleGoodCatch();
                    }
                    else if (errorShouldBeCaught(error.raw, typeToCatch)) {
                        handleGoodCatch();
                    }
                }

                return this;
            };

            this.ccatch = this["catch"];

            this["finally"] = function (finallyHandler) {
                if (finallyHandler) {
                    finallyHandler();
                }
                if (error.exists && !error.handled) {
                    throw error.raw;
                }
            };
            this.ffinally = this["finally"];

            function setErrorHandled() {
                error.handled = true;
            }
        }
        return function _try(tryBlock) {
            return new Tryy(tryBlock);
        };
    });
}());