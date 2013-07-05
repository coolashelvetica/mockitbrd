<?php
/*
Mockit Brd Version: 1.0
http://mockitbrd.com
*/

require_once("../lib/models/config.php");

    if(!empty($_POST))
    {
        $uid = $loggedInUser->user_id;
        $ip = $_SERVER['REMOTE_ADDR'];
        $profile_id = $uid;
        $update=$_POST["post"];
        $response = postToWall($uid, $update, $ip, $profile_id);
        echo $response;
    }
    else
    {
             return false;
    }

?>