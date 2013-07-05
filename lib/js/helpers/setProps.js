/**
 * setProps.js
 * ---------------------------------------------
 *
 * Adds all necessary components into the application e.g. profile pics, names, etc.
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */
require(['helper/domReady!', 'jquery', 'dj/dojo/dom-construct'], function   (doc, $, domContruct) {
    $('.user-profile-pic').each(function (index, userProfilePic) {
            if (Mockit.brd.currentUser.profile_image) {
                domContruct.create("img", {src: "/user/profile/uploads/" + Mockit.brd.currentUser.profile_image}, userProfilePic);
            }
            else {
                domContruct.create("img", {src: "/lib/img/no-profile-image.jpg"}, userProfilePic);
            }

            $("#user-upload-form").mouseover(
              function () {
                $(".hover-overlay-icon").fadeIn();
                $(".user-pic-hover-overlay").fadeIn();
              });
              $("#user-upload-form").mouseleave(
              function () {
                $(".hover-overlay-icon").fadeOut();
                 $(".user-pic-hover-overlay").fadeOut();
             });
        });
        $('.user-display-name').each(function (index, userDisplayName) {
            domContruct.create("p", {innerHTML: Mockit.brd.currentUser.displayName}, userDisplayName);
        });
        $('.user-role').each(function (index, userRole) {
            userRole.innerHTML = Mockit.brd.currentUser.role;
        });
        if (Mockit.brd.currentUser.role === "Candidate") {
            $('.user-role-icon').each(function (index, userRoleIcon) {
                domContruct.create("i", {"class": "icon-user"},userRoleIcon);
            });
        }
        else {
            $('.user-role-icon').each(function (index, userRoleIcon) {
                domContruct.create("i", {"class": "icon-user-md"},userRoleIcon);
            });
        }
});