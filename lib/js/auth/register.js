/**
 * register.js
 * ---------------------------------------------
 *
 * This file sends all registration info to server and creates a new user account
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */
require(["jquery"], function   ($) {
/* Algorithim for image radio buttons */
	$(".register-role input:radio").addClass("input_hidden");
	$(".register-role label").click(function () {
	    $(this).addClass("selected").siblings().removeClass("selected");
	    $(".switch").addCLass("unswitch").removeClass("switch");
	    $(".unswitch").addCLass("switch").removeClass("unswitch");
	});
});