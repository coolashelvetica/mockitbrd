/**
 * vando/ui/UserProfileNav.js
 * ---------------------------------------------
 *
 * A panel that allows users to select or "mark" images or favorites
 *
 * (c) 2013 ImageQuix, All Rights Reserved
 */

//TODO: MN - <review_me> marker vs selection mode

(function () {
    "use strict";

    define("lib/widgets/UserProfileNav",
            ["dj/dojo/_base/declare",
             "dj/dojo/_base/lang",

             "dj/dojo/dom-construct",
             "dj/dojo/dom-style",

             "dj/dojo/Evented",

             "dj/dijit/form/Form",
             "dj/dijit/form/TextBox",
             "dj/dijit/form/Button",

             "dj/dijit/_TemplatedMixin",
             "dj/dijit/_WidgetsInTemplateMixin",

             "dj/dojo/text!/lib/widgets/templates/UserProfileNav.html"],
        function (declare,
                lang,

                domConstruct,
                domStyle,

                Evented,

                Form,
                TextBox,
                Button,

                TemplatedMixin,
                WidgetsInTemplateMixin,

                template) {

            var UserProfileNav = declare("lib.widgets.UserProfileNav", [TemplatedMixin, WidgetsInTemplateMixin, Evented], {

                templateString: template,


                postCreate: function () {
                    var profilePic = $("div").data("user-profile-pic");

                    console.log("profilePic: ", profilePic);
                }

            });
            return UserProfileNav;
        });

}());