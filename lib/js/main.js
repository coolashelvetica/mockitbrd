/**
 * main.js
 * ---------------------------------------------
 *
 * Main JS file. only loads required files using requireJS to keep load down
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */


requirejs.config({
    //By default load any module IDs from js/vendor
    baseUrl: '/lib/js/vendor',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        helper: '../helpers',
        auth: '../auth',
        control: '../controllers',
        dj: 'dojo'
    }
});
// Start the main app logic.

require(['helper/domReady!',  'helper/base', 'auth/login', 'modernizr', 'control/AppController', 'helper/errors', 'helper/try-catch', 'jquery'], function (doc, base, login, Modernizr, AppController, errors, tryCatch, $) { //create Mockit.brd dom helper
    /* Put modules in namespace
     */

    if (Mockit.brd === undefined) {
        Mockit.brd = {};
    }

    try {
        Mockit.brd.appController = AppController;
    } catch(e) {
        throw new errors.MckitError("Problem initializing application", e);
    }
    Mockit.brd.appController.getCurrentVisitor();
    function mckitConsole(consoleCtxt, consoleFn, consoleArgs) {
        consoleFn.apply(consoleCtxt, consoleArgs);
    }
    Mockit.out = {
                        warn : function () {
                            var copy = [].slice.call(arguments),
                                title = copy[0];
                            copy[0] = "[WARNING]: " + copy[0];
                            mckitConsole(console, console.warn, copy);
                        },
                        err : function () {
                            var copy = [].slice.call(arguments),
                                title = copy[0];
                            copy[0] = "[ERROR]: " + copy[0];
                            mckitConsole(console, console.log, copy);
                        },
                        log : function () {
                            var copy = [].slice.call(arguments);
                            copy[0] = "[INFO]: " + copy[0];
                            mckitConsole(console, console.log, copy);
                        },
                        logIf : function (condition) {
                            var argsCopy = [].slice.call(arguments);
                            if (condition) {
                                this.log.apply(this, argsCopy.slice(1));
                            }
                        }
            };
    setTimeout(function () {
        $("body").fadeIn("slow");
    },20);
});
