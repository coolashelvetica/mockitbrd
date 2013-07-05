/**
 * ImageUploader.js
 * ---------------------------------------------
 *
 * Dynamically changes users profile image without refresh
 *
 * Mockit Brd Version: 1.0
 * http://mockitbrd.com
 */
$(".user-profile-pic").html('');
$(".user-profile-pic").html('<img class="uploadergif" src="/lib/img/profile-pic/ajax-loader.gif" alt="Uploading...."/>');
var data = new FormData();
jQuery.each($('.user-upload-button')[0].files, function(i, file) {
    data.append('file-'+i, file);
});
// let's disable the inputs for the duration of the ajax request
// fire off the request to /uploadimage.php
request = $.ajax({
    url: "/account/uploadImage.php",
    data: data,
    cache: false,
    contentType: false,
    processData: false,
    type: 'POST'
});

// callback handler that will be called on success
request.done(function (response){
    $(".user-profile-pic").html(response);
    var pathTest =  /[^/\\]+(?:jpg|gif|png|jpeg|bmp)/gi;
    Mockit.brd.currentUser.profile_image = response.match(pathTest)[0];
    sessionStorage.setItem('MckitBrdUser', JSON.stringify(Mockit.brd.currentUser));
});

