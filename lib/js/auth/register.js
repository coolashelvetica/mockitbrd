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
require(["jquery"], function   ($) {
/* Algorithim for image radio buttons */
	var all_checkboxes = $(":checkbox");
	$(".register-role input:radio").addClass("input_hidden");
	$(".register-role label").click(function () {
	    $(this).addClass("selected").siblings().removeClass("selected");
	});
	$(".goToStep1, #twentyfive").click(function () {
		$(".step2Box, .step3Box, .step4Box").hide();
		$(".step1Box").fadeIn();
		all_checkboxes.prop("checked", false);
		$("#twentyfive").attr("checked", true);
		$("#nextStep").removeClass("hide goToStep1 goToStep3 goToStep4").addClass("goToStep2");
		$("#prevStep").removeClass("hide goToStep1 goToStep2 goToStep3 goToStep4").addClass("hide");
	});
	$(".goToStep2, #fifty").click(function () {
		$(".step1Box, .step3Box, .step4Box").hide();
		$(".step2Box").fadeIn();
		all_checkboxes.prop("checked", false);
		$("#fifty").attr("checked", true);
		$("#nextStep").removeClass("hide goToStep1 goToStep2 goToStep4").addClass("goToStep3");
		$("#prevStep").removeClass("hide goToStep2 goToStep3 goToStep4").addClass("goToStep1");
	});
	$(".goToStep3, #seventyfive").click(function () {
		$(".step1Box, .step4Box, .step2Box").hide();
		$(".step3Box").fadeIn();
		all_checkboxes.prop("checked", false);
		$("#seventyfive").attr("checked", true);
		$("#nextStep").addClass("goToStep4").removeClass("hide goToStep1 goToStep4 goToStep2");
		$("#prevStep").addClass("goToStep2").removeClass("hide  goToStep2 goToStep1 goToStep4");
	});
	$(".goToStep4, #onehundred").click(function () {
		$(".step1Box, .step3Box, .step2Box").hide();
		$(".step4Box").fadeIn();
		all_checkboxes.prop("checked", false);
		$("#onehundred").attr("checked", true);
		$("#nextStep").addClass("hide").removeClass("hide goToStep1 goToStep3 goToStep2 goToStep4");
		$("#prevStep").addClass("goToStep3").removeClass("hide  goToStep2 goToStep3 goToStep4");
	});
});