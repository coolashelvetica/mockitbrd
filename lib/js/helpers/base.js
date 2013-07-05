/**
 * base.js
 * ---------------------------------------------
 *
 * This file is the first part of the MockitBrd initialization process. It's responsible for making
 * sure Google Analytics is set up, Modernizr has finished making its checks, and ensuring that
 * the Mockit.* datastructure (see main.js) is in place for the rest of the initialization process.
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */

/*global devicePixelRatio: true*/

(function () {
    "use strict";

    // var MOCKIT_GOOGLE_ANALYTICS_TRACKER = "UA-39654345-1",
    //     CUSTOMER_GOOGLE_ANALYTICS_TRACKER = "UA-39619138-1";


            /* Put the module defined in iq/main.js on the window namespace. It will be put
             * in the global namespace in base.xhtml immediately after this file is imported
             */
            window.Mockit = {};
            window.ATL_JQ_PAGE_PROPS =  {
                "triggerFunction": function (showCollectorDialog) {
                    window.Mockit.showIssueCollector = function () {
                        showCollectorDialog();
                    };
                }
            };
            //TODO - add GA stuff
            // window.Mockit.ga.trackers.setDefault(window.Mockit.ga.trackers.create(null, VANDO_GOOGLE_ANALYTICS_TRACKER));
            // window.Mockit.ga.trackers.create("photographer", CUSTOMER_GOOGLE_ANALYTICS_TRACKER);
    /**
     * Use another require statement so that the one above doesn't wait until domReady to run.
     * We need the window.IQ thing to be available before the dom is ready.
     */
    require(["dj/dojo/ready",
            "helper/try-catch"],
        function (ready, tryCatch) {
            ready(function () {
                window.Mockit.tryy = tryCatch;
            });
        }
    );
}());


