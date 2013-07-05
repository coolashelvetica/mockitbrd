/**
 * helper/uiHelper.js
 * ---------------------------------------------
 *
 * The UI Helper is a collection of factory methods for some common user-interface components.
 * It allows some basic UI related functions to be carried out with no knowledge of whether
 * the user is on a mobile device or in a desktop browser.
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */


(function () {
	"use strict";

	define("helper/uiHelper",
           ["dj/dojo/_base/declare",
            "dj/dojo/_base/lang",
            "dj/dijit/_WidgetBase"],
        function (declare,
                lang,
                WidgetBase) {
            var UIHelper = declare("helper.uiHelper", [WidgetBase], {

                buildOkDialog: function (title, content, onOkCallback) {
                    var dlg = null;
                    dlg = this.buildDialog(title, content, {
                        right: [{
                            label: "Ok",
                            "class": "primary-button",
                            handler: onOkCallback || lang.hitch(dlg, function () {
                                dlg.hide();
                            })
                        }]
                    });
                    return dlg;
                },

                buildDialog: function () {
                    Mockit.out.err("buildDialog not yet implemented", arguments);
                },

                /* Attempt to use the HTML5 fullscreen API
                 * A call to this function MUST result from a direct user interaction
                 * (i.e., a button press)
                 */
                goFullScreen: function () {
                    var docElm = document.documentElement;

                    if (docElm.requestFullscreen) {
                        docElm.requestFullscreen();
                    }
                    else if (docElm.mozRequestFullScreen) {
                        docElm.mozRequestFullScreen();
                    }
                    else if (docElm.webkitRequestFullScreen) {
                        docElm.webkitRequestFullScreen();
                    }
                },

                showCustomerListPage: function (customer) {
                    throw new Error("Not yet implemented", customer);
                },

                hideCustomerListPage: function (customer) {
                    throw new Error("Not yet implemented", customer);
                },

                showFrontPage: function () {
                    throw new Error("Not yet implemented");
                },

                hideFrontPage: function () {
                    throw new Error("Not yet implemented");
                }
            });
            return uiHelper;
        });
}());