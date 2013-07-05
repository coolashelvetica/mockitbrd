/**
 * wallControls.js
 * ---------------------------------------------
 *
 * Adds wall post functionality
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */
require(['helper/domReady!', 'jquery', 'dj/dojo/dom-construct'], function   (doc, $, domContruct) {

    $(".submitUserPostButton").click(function (evt) {
        var post = $(".user-wall-box textarea")[0].value;
        if(!post) {
            evt.preventDefault();
        }
        else {
            request = $.ajax({
            url: "/user/postWallPost.php",
            data: {post:post},
            cache: false,
            type: 'POST'
        });

        // callback handler that will be called on success
        request.done(function (response){
            if (response === "1") {
                Mockit.out.log("Wall post posted!");
            }
        });
        }
    });

});