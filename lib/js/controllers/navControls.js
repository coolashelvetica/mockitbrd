/**
 * navControls.js
 * ---------------------------------------------
 *
 * Controls landing page navigation
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */
require(['jquery'], function   ($) {
    $(".user-nav .right").click(function() {
        $(".user-nav-dropdown").slideToggle(100); return false;
        });

    $("body").click(function() {
        $(".user-nav-dropdown").slideUp(100);
    });

    $(".user-nav-setting-button").click(function() {
        $(".black-overlay").show();
        $(".settings-box").animate({top:"10%"});

    });

});