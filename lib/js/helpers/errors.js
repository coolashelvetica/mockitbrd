/**
 * helpers/errors.js
 * ---------------------------------------------
 *
 * Utility class for various kinds of errors
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */



(function () {

    "use strict";

    define(["dj/dojo/_base/lang"],

    function (lang) {

        /**
         * An error
         *
         * A. MckitError()
         * B. MckitError("Something bad happened")
         * C. MckitError("Uh oh", {clue: "this is a clue"})
         * D. MckitError(cause{Error})
         * E. MckitError("Whoops", cause {Error})
         * F. MckitError("Whoops", cause {Error}, {clue: "this is a clue"})
         *
         */
        function MckitError() {
            this.name = "MckitError";
            this.processArgs(arguments);
        }
        MckitError.prototype = new Error();
        MckitError.prototype.processArgs = function (args) {

            this.message = "";
            this.cause = null;
            this.data = {};

            for (var i = 0; i < args.length; i += 1) {
                switch (typeof args[i]) {
                case "string":
                    this.message = args[i];
                    break;
                case "object":
                    if (Error.prototype.isPrototypeOf(args[i])) {
                        this.cause = args[i];
                    }
                    else {
                        lang.mixin(this.data, args[i]);
                    }
                }
            }
        };

        function RequestError(statusCode) {
            this.name = "RequestError";
            var copy = [].slice.call(arguments, 1);
            this.processArgs(copy);
            this.setStatusCode(statusCode);
        }
        RequestError.prototype = new MckitError();
        RequestError.prototype.setStatusCode = function (statusCode) {
            lang.mixin(this, {statusCode: statusCode});
        };

        // 500
        function ServerError () {
            this.name = "ServerError";
            this.processArgs(arguments);
            this.setStatusCode(500);
        }
        ServerError.prototype = new RequestError();

        // 404
        function ResourceNotFoundError () {
            this.name = "ResourceNotFoundError";
            this.processArgs(arguments);
            this.setStatusCode(404);
        }
        ResourceNotFoundError.prototype = new RequestError();

        // 400
        function BadRequestError () {
            this.name = "BadRequestError";
            this.processArgs(arguments);
            this.setStatusCode(400);
        }
        BadRequestError.prototype = new RequestError();

        // 401
        function NotAuthorizedError () {
            this.name = "NotAuthorizedError";
            this.processArgs(arguments);
            this.setStatusCode(401);
        }
        NotAuthorizedError.prototype = new RequestError();

        var errors = {
            MckitError: MckitError,

            RequestError: RequestError,

            ServerError: ServerError,

            ResourceNotFoundError: ResourceNotFoundError,

            BadRequestError: BadRequestError,

            NotAuthorizedError: NotAuthorizedError
        };

        return errors;
    });
}());
