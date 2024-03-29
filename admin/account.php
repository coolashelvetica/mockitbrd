<?php
/*
Mockit Brd Version: 1.0
http://mockitbrd.com
*/

require_once("../lib/models/config.php");
if (!securePage($_SERVER['PHP_SELF'])){die();}
require_once("../lib/models/header.php");

echo "
<body>
<div id='wrapper'>
<div id='top'><div id='logo'></div></div>
<div id='content'>
<h1>UserCake</h1>
<h2>Account</h2>
<div id='left-nav'>";

include("../left-nav.php");

echo "
</div>
<div id='main'>
Hey, $loggedInUser->displayname. This is an example secure page designed to demonstrate some of the basic features of UserCake. Just so you know, your title at the moment is $loggedInUser->title, and that can be changed in the admin panel. You registered this account on " . date("M d, Y", $loggedInUser->signupTimeStamp()) . ".
</div>
<div id='bottom'></div>
</div>
</body>
</html>";

?>
