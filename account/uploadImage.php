<?php
/*
Mockit Brd Version: 1.0
http://mockitbrd.com
*/

require_once("../lib/models/config.php");

$path = "../user/profile/uploads/";
$session_id =$loggedInUser->user_id;

$valid_formats = array("jpg", "png", "gif", "bmp","jpeg");
if (isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST") {
        $name = $_FILES['file-0']['name'];
        $size = $_FILES['file-0']['size'];
if (strlen($name)) {
        list($txt, $ext) = explode(".", $name);
        if(in_array($ext,$valid_formats)) {
        if($size<(1024*1024)) { // Image size max 1 MB

        $actual_image_name = time().$session_id.".".$ext;
        $tmp = $_FILES['file-0']['tmp_name'];
if (move_uploaded_file($tmp, $path.$actual_image_name)) {
        updateProfileImage($session_id, $actual_image_name);
        echo "<img src='../profile/uploads/".$actual_image_name."' class='preview'>";
    }
else
        echo "failed";
    }
else
        echo "Image file size max 1 MB";
    }
else
        echo "Invalid file format..";
    }
else
        echo "Please select image..!";
        exit;
    }

?>