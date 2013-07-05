/**
 * helpers/mckitcore.js
 * ---------------------------------------------
 *
 * Description: Dojo build system profile for mckit package
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */

/*jshint unused:false */
var profile = (function () {

    "use strict";

    return {
        resourceTags: {
            amd: function (filename, mid) {
                return (/\.js$/).test(filename);
            }
        }
    };
})();