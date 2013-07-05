/**
 * controller/AppController.js
 * ---------------------------------------------
 *
 * This file is responsible for managing the Vando initialization process,
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */


(function () {

    "use strict";

    define("control/AppController",
        [],
        function () {


            var MockitAppController = {

                getCurrentVisitor: function () {
                    if (sessionStorage.getItem('MckitBrdUser')) {
                        Mockit.brd.currentUser = JSON.parse(sessionStorage.getItem('MckitBrdUser'));
                        require(['control/AppBuilder'], function (AppBuilder) { //create Mockit.brd dom helper
                            Mockit.out.log("App Built");
                        });
                            return Mockit.brd.currentUser;
                    }
                }
            };

            return MockitAppController;
        });
}());