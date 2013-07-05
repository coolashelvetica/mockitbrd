/**
 * AppBuild.js
 * ---------------------------------------------
 *
 * Adds all necessary components into the application
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */
require(['helper/domReady!', 'jquery', 'dj/dojo/dom-construct'],
function   (doc, $, domContruct) {
    //jQuery loaded
    setTimeout(function () {
        $("body").fadeIn("slow");
    },20);
    //Set Values .. TODO: change this to PHP
    require(['helper/setProps'], function (setProps) {
        Mockit.out.log("Properties Set!");
    });
    //user-nav controller
    require(['control/navControls'], function (navControls) {
        Mockit.out.log("Nav Controls Set!");
    });
    //image uploader controls
    $('#user-upload-form').on('change', '.user-upload-button', function()
    {
        require(['control/imageUploader'], function (imageUploader) { //create Mockit.brd dom helper
            Mockit.out.log("Image Changed!");
        });
    });
    require(['control/wallControls'], function (wallControls) { //create Mockit.brd dom helper
        Mockit.out.log("Wall Post Added!");
    });

});