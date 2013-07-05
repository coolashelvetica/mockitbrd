/**
 * login.js
 * ---------------------------------------------
 *
 * This file is the first part sends all the login logic to the server and redirects to user landing page
 * then begins a new session
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */
/*jshint camelcase: false*/
/*global Mockit*/
function MckitBrdUser(userId, userName, role, displayName, email, profile_image, lastSignIn, signUpDate) {
    this.id = userId;
    this.userName = userName;
    this.role = role;
    this.displayName = displayName;
    this.email = email;
    this.profile_image = profile_image;
    this.lastSignIn = lastSignIn;
    this.signUpDate = signUpDate;
}

require(["jquery"], function   ($) {
    //jQuery loaded

    $(".loginButton").click(function () {
            $(".black-overlay").show();
            $(".login-box").animate({top: "30%"});
        });

    $(".black-overlay, .popUp-box-x-close").click(function () {
        $(".login-box, .settings-box").animate({top: "-60%"});
        $(".black-overlay").hide();
    });

    $(".login-go").click(function (evt) {
        evt.preventDefault();
        var $form = $(".login-form");
        // let's select and cache all the fields
        var $inputs = $form.find("input, button");
        // serialize the data in the form
        var serializedData = $form.serialize();

        // let's disable the inputs for the duration of the ajax request
        $inputs.prop("disabled", true);

        // fire off the request to /login.php
        var request = $.ajax({
            url: "../../../account/login.php",
            type: "post",
            dataType: "json",
            data: serializedData
        });

        // callback handler that will be called on success
        request.done(function (response) {
            // log a message to the console
            IQ.out.log("diod");
            Mockit.out.log("status: ", response.status);
            if (response.status === "success") {
                Mockit.brd.currentUser = new MckitBrdUser(
                    response.user.id,
                    response.user.user_name,
                    response.user.role,
                    response.user.display_name,
                    response.user.email,
                    response.user.profile_image,
                    response.user.last_sign_in_stamp,
                    response.user.sign_up_stamp
                    );
                sessionStorage.setItem("MckitBrdUser", JSON.stringify(Mockit.brd.currentUser));

                switch (response.user.role) {
                case "Candidate":
                    window.location.replace("/user/landing");
                    break;
                case "Interviewer":
                    window.location.replace("/user/landing");
                    break;
                case "Admin":
                    window.location.replace("/admin/landing");
                    break;
                default:
                    Mockit.out.log("No such role!");
                    break;
                }
            }
            else {
                Mockit.out.err(response.status);
            }
        });
        request.always(function () {
        // reenable the inputs
            $inputs.prop("disabled", false);
        });
    });
});