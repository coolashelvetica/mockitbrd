/**
 * register.js
 * ---------------------------------------------
 *
 * This file sends all registration info to server and creates a new user account
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */
/*jshint camelcase: false*/
/*global Mockit*/
require(["jquery"], function   ($) {
/* Algorithim for image radio buttons */
	$(".register-role input:radio").addClass("input_hidden");
	$(".register-role label").click(function () {
	    $(this).addClass("selected").siblings().removeClass("selected");
	});
	$(".step1tostep2, #fifty").click(function () {
		$(".register-role").fadeOut();
		$(".step2Box").fadeIn();
	});
});