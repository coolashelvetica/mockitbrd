<?php
/*
Mockit Brd Version: 1.0
http://mockitbrd.com
*/

if (!securePage($_SERVER['PHP_SELF'])){die();}

//Links for logged in user
if(isUserLoggedIn()) {
	echo "
	<ul>
	<li><a href='account.php'>Account Home</a></li>
	<li><a href='../candidate/user_settings.php'>User Settings</a></li>
	<li><a href='../account/logout.php'>Logout</a></li>
	</ul>";

	//Links for permission level 2 (default admin)
	if ($loggedInUser->checkPermission(array(2))){
	echo "
	<ul>
	<li><a href='admin/admin_configuration.php'>Admin Configuration</a></li>
	<li><a href='admin/admin_users.php'>Admin Users</a></li>
	<li><a href='admin/.php'>Admin Permissions</a></li>
	<li><a href='admin/admin_pages.php'>Admin Pages</a></li>
	</ul>";
	}
}
//Links for users not logged in
else {
	echo "
	<ul>
	<li><a href='index.php'>Home</a></li>
	<li><a href='account/login.php'>Login</a></li>
	<li><a href='account/register.php'>Register</a></li>
	<li><a href='account/forgot-password.php'>Forgot Password</a></li>";
	if ($emailActivation)
	{
	echo "<li><a href='account/resend-activation.php'>Resend Activation Email</a></li>";
	}
	echo "</ul>";
}

?>
